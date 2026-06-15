import { validateContactPayload, validateApplyPayload, checkRateLimit } from './lib/security';
import contactReducer, { resetContact } from './lib/store/features/contactSlice';
import applyReducer, { resetApplication } from './lib/store/features/applySlice';
import { POST as contactPost } from './app/api/contact/route';
import { POST as applyPost } from './app/api/apply/route';

console.log("==================================================");
console.log("🛠️  RUNNING AUTOMATED APP SECURITY & BUSINESS UNIT TESTS");
console.log("==================================================");

let failedTests = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ [PASS] ${message}`);
  } else {
    console.error(`❌ [FAIL] ${message}`);
    failedTests++;
  }
}

async function runAllTests() {
  // ----------------------------------------------------
  // 1. Contact Form Validations
  // ----------------------------------------------------
  console.log("\n--- Layer 1: Contact Form Validations ---");

  const validContact = {
    firstName: "Himanshu",
    lastName: "Kumar",
    email: "himanshu@gmail.com",
    phone: "9876543210",
    date: "2026-06-15",
    timeHours: "10",
    timeMinutes: "30",
    timeAmPm: "AM",
    query: "Hello, I need help with my loan application."
  };

  const res1 = validateContactPayload(validContact);
  assert(res1.isValid === true, "Valid contact payload passes validation");

  const sqlInjectionContact = {
    ...validContact,
    firstName: "Himanshu; DROP TABLE Users;--"
  };
  const res2 = validateContactPayload(sqlInjectionContact);
  assert(res2.isValid === false, "SQL Injection attempt in firstName is blocked");
  assert(res2.errors.some(e => e.field === 'firstName'), "SQL Injection error is mapped to firstName field");

  const invalidPhoneContact = {
    ...validContact,
    phone: "12345"
  };
  const res3 = validateContactPayload(invalidPhoneContact);
  assert(res3.isValid === false, "Invalid phone number format is blocked");

  const longNameContact = {
    ...validContact,
    firstName: "A".repeat(51)
  };
  const res4 = validateContactPayload(longNameContact);
  assert(res4.isValid === false, "First name exceeding 50 characters is blocked");

  // ----------------------------------------------------
  // 2. Loan Application Form Validations
  // ----------------------------------------------------
  console.log("\n--- Layer 2: Loan Application Validations ---");

  const validApply = {
    loanType: "personal",
    amount: "500000",
    tenure: "3",
    fullName: "Rahul Sharma",
    email: "rahul@example.com",
    mobile: "9876543210",
    employmentType: "salaried",
    income: "75000",
    pan: "ABCDE1234F",
    pincode: "400051"
  };

  const applyRes1 = validateApplyPayload(validApply);
  assert(applyRes1.isValid === true, "Valid loan application passes validation");

  const invalidPanApply = {
    ...validApply,
    pan: "INVALIDPAN"
  };
  const applyRes2 = validateApplyPayload(invalidPanApply);
  assert(applyRes2.isValid === false, "Invalid Indian PAN card format is blocked");

  const invalidPincodeApply = {
    ...validApply,
    pincode: "400"
  };
  const applyRes3 = validateApplyPayload(invalidPincodeApply);
  assert(applyRes3.isValid === false, "Invalid Indian pincode format is blocked");

  const invalidAmountApply = {
    ...validApply,
    amount: "500" // less than 1000 minimum limit
  };
  const applyRes4 = validateApplyPayload(invalidAmountApply);
  assert(applyRes4.isValid === false, "Loan amount under minimum limit is blocked");

  // ----------------------------------------------------
  // 3. Parameter Whitelist / Mass Assignment Protection
  // ----------------------------------------------------
  console.log("\n--- Layer 3: Whitelist Parameter Checks (Mass Assignment) ---");

  const contactWithInjection = {
    ...validContact,
    isAdmin: true, // injection param
    extraFields: "hackingPayload"
  };

  const res5 = validateContactPayload(contactWithInjection);
  assert(res5.isValid === false, "Payload containing unrecognized keys (isAdmin, extraFields) is blocked");
  assert(res5.errors.some(e => e.field === 'payload' && e.message.includes('Unrecognized request parameter')), "Mass assignment attempt flagged in error output");

  // ----------------------------------------------------
  // 4. Control Characters Validation
  // ----------------------------------------------------
  console.log("\n--- Layer 4: Control Characters Checks (Null Byte / Smuggling) ---");

  const contactWithNullByte = {
    ...validContact,
    firstName: "Himanshu\x00Kumar", // Null Byte injection
  };

  const res6 = validateContactPayload(contactWithNullByte);
  assert(res6.isValid === false, "Payload containing hidden null-byte is blocked");
  assert(res6.errors.some(e => e.field === 'firstName' && e.message.includes('Invalid characters')), "Null byte flagged inside first name");

  const contactWithControlChars = {
    ...validContact,
    lastName: "Kumar\x7F", // DEL control character
  };

  const res7 = validateContactPayload(contactWithControlChars);
  assert(res7.isValid === false, "Payload containing ASCII 127 control character is blocked");

  // ----------------------------------------------------
  // 5. Rate Limiting Tests
  // ----------------------------------------------------
  console.log("\n--- Layer 5: IP-Based Rate Limiting ---");

  const testIp = "192.168.1.100";
  let rateLimitPasses = true;

  // Trigger 10 requests (limit)
  for (let i = 0; i < 10; i++) {
    const check = checkRateLimit(testIp, 10, 60000);
    if (!check.isAllowed) {
      rateLimitPasses = false;
    }
  }
  assert(rateLimitPasses === true, "First 10 requests from the same IP are allowed");

  // Trigger 11th request (should block)
  const checkBlocked = checkRateLimit(testIp, 10, 60000);
  assert(checkBlocked.isAllowed === false, "11th request from the same IP is blocked (Rate Limit hit)");

  // ----------------------------------------------------
  // 6. Redux State Slice Reducers Tests
  // ----------------------------------------------------
  console.log("\n--- Layer 6: Redux Store Reducers ---");

  // contactSlice tests
  const initialContactState = contactReducer(undefined, { type: 'unknown' });
  assert(initialContactState.status === 'idle' && initialContactState.error === null, "contactSlice initial state is correct");

  const resetContactState = contactReducer({ status: 'success', error: 'failed' }, resetContact());
  assert(resetContactState.status === 'idle' && resetContactState.error === null, "contactSlice resetContact works correctly");

  // applySlice tests
  const initialApplyState = applyReducer(undefined, { type: 'unknown' });
  assert(initialApplyState.status === 'idle' && initialApplyState.isEligible === true && initialApplyState.error === null, "applySlice initial state is correct");

  const resetApplyState = applyReducer({ status: 'success', isEligible: false, error: 'failed' }, resetApplication());
  assert(resetApplyState.status === 'idle' && resetApplyState.isEligible === true && resetApplyState.error === null, "applySlice resetApplication works correctly");

  // ----------------------------------------------------
  // 7. API Endpoints Handler Tests
  // ----------------------------------------------------
  console.log("\n--- Layer 7: Serverless API Route Handlers ---");

  // Test POST /api/contact handler
  const contactReq = new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validContact)
  });
  const contactRes = await contactPost(contactReq);
  assert(contactRes.status === 200, "POST /api/contact responds with status 200 (Success)");

  const contactErrReq = new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validContact, injectedParam: 'mass-assignment' })
  });
  const contactErrRes = await contactPost(contactErrReq);
  assert(contactErrRes.status === 400, "POST /api/contact blocks injected parameters with status 400");

  // Test POST /api/apply handler
  const applyReq = new Request('http://localhost/api/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validApply)
  });
  const applyRes = await applyPost(applyReq);
  assert(applyRes.status === 200, "POST /api/apply responds with status 200 (Success)");

  const applyErrReq = new Request('http://localhost/api/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validApply, invalidParam: 'mass-assignment' })
  });
  const applyErrRes = await applyPost(applyErrReq);
  assert(applyErrRes.status === 400, "POST /api/apply blocks injected parameters with status 400");

  console.log("\n==================================================");
  if (failedTests === 0) {
    console.log("🎉 ALL AUTOMATED UNIT AND SECURITY TESTS PASSED!");
  } else {
    console.error(`🚨 ${failedTests} TESTS FAILED.`);
    process.exit(1);
  }
  console.log("==================================================");
}

runAllTests();
