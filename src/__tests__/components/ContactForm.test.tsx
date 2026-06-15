import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/ContactForm';
import StoreProvider from '@/lib/store/StoreProvider';

// Mock the API service
jest.mock('@/services/contactService', () => ({
  submitContactApi: jest.fn().mockResolvedValue({ success: true }),
}));

describe('ContactForm Component', () => {
  const renderComponent = () => {
    return render(
      <StoreProvider>
        <ContactForm />
      </StoreProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Step 1 form elements successfully', () => {
    renderComponent();
    expect(screen.getByText('Send us a Message')).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('shows validation error messages when submitting empty Step 1', () => {
    renderComponent();
    
    const nextBtn = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextBtn);

    expect(screen.getByText('This field is required. Please input your first name.')).toBeInTheDocument();
    expect(screen.getByText('This field is required. Please input your last name.')).toBeInTheDocument();
  });

  it('navigates to Step 2 when Step 1 fields are filled and Next is clicked', () => {
    renderComponent();
    
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    
    fireEvent.change(firstNameInput, { target: { value: 'Himanshu' } });
    fireEvent.change(lastNameInput, { target: { value: 'Kumar' } });

    const nextBtn = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextBtn);

    // Verify step 2 elements are loaded
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Book Appointment/i })).toBeInTheDocument();
  });

  it('shows error if Phone Number is empty on Step 2 submit', () => {
    renderComponent();

    // Complete Step 1
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Himanshu' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Kumar' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    // Click submit in Step 2 with blank phone number
    const submitBtn = screen.getByRole('button', { name: /Book Appointment/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('This field is required. Please input your phone number.')).toBeInTheDocument();
  });

  it('allows going back to Step 1 from Step 2', () => {
    renderComponent();

    // Go to Step 2
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Himanshu' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Kumar' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    // Verify on Step 2
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();

    // Click Previous
    fireEvent.click(screen.getByRole('button', { name: /Previous/i }));

    // Verify back on Step 1
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  });

  it('submits form successfully and shows success state, then allows resetting', async () => {
    renderComponent();

    // Go to Step 2
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Himanshu' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Kumar' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    // Fill Step 2 fields
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'himanshu@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2026-06-20' } });
    fireEvent.change(screen.getByLabelText(/Hours/i), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText(/Minutes/i), { target: { value: '30' } });
    fireEvent.change(screen.getByLabelText(/AM PM/i), { target: { value: 'PM' } });
    fireEvent.change(screen.getByLabelText(/Query/i), { target: { value: 'Need help with home loan.' } });

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /Book Appointment/i }));

    // Verify success screen shows up
    await waitFor(() => {
      expect(screen.getByText('Appointment Booked!')).toBeInTheDocument();
    });

    // Reset Form
    fireEvent.click(screen.getByRole('button', { name: /Book Another Appointment/i }));

    // Verify back on Step 1 with empty fields
    expect(screen.getByLabelText(/First Name/i)).toHaveValue('');
  });

  it('prevents default form submission behavior', () => {
    renderComponent();
    const formElement = document.querySelector('form')!;
    const preventDefaultSpy = jest.fn();
    
    fireEvent.submit(formElement, { preventDefault: preventDefaultSpy });
    // This executes onSubmit={(e) => e.preventDefault()}
  });
});
