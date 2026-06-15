import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import StoreProvider from '@/lib/store/StoreProvider';

// Mock Recharts
jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: any) => <div data-testid="responsive-container">{children}</div>,
  PieChart: ({ children }: any) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ children }: any) => <div data-testid="pie">{children}</div>,
  Cell: () => <div data-testid="cell" />,
  Legend: () => <div data-testid="legend" />,
  Tooltip: () => <div data-testid="tooltip" />,
}));

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');
  const Dummy = React.forwardRef(({ children, ...props }: any, ref: any) => <div ref={ref} {...props}>{children}</div>);
  const mockMotionValue = {
    get: () => 0,
    set: () => {},
    onChange: () => () => {},
    on: () => () => {},
    clearListeners: () => {},
  };
  return {
    motion: new Proxy({}, { get: () => Dummy }),
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useScroll: () => ({ scrollX: mockMotionValue, scrollY: mockMotionValue }),
    useVelocity: () => mockMotionValue,
    useSpring: () => mockMotionValue,
    useTransform: () => mockMotionValue,
    useMotionValue: () => mockMotionValue,
  };
});

// Mock Next.js Navigation
const mockNotFound = jest.fn().mockImplementation(() => {
  throw new Error('NEXT_NOT_FOUND');
});

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  usePathname: () => '/apply',
  useSearchParams: () => new URLSearchParams(''),
  notFound: () => mockNotFound(),
}));

// Mock the apply API service
jest.mock('@/services/applyService', () => ({
  submitApplicationApi: jest.fn(),
}));

// Import Pages
import Home from '@/app/page';
import AboutUsPage, { metadata as aboutUsMeta } from '@/app/(pages)/about-us/page';
import DisclaimerPage, { metadata as disclaimerMeta } from '@/app/(pages)/disclaimer/page';
import CareerPage, { metadata as careerMeta } from '@/app/(pages)/career/page';
import FAQsPage, { metadata as faqsMeta } from '@/app/(pages)/faqs/page';
import GalleryPage, { metadata as galleryMeta } from '@/app/(pages)/gallery/page';
import PrivacyPolicyPage, { metadata as privacyMeta } from '@/app/(pages)/privacy-policy/page';
import RefundPolicyPage, { metadata as refundMeta } from '@/app/(pages)/refund-policy/page';
import KnowledgeCenterPage, { metadata as knowledgeMeta } from '@/app/(pages)/knowledge-center/page';
import AwardPage, { metadata as awardMeta } from '@/app/(pages)/award/page';
import EmiCalculatorPage, { metadata as emiMeta } from '@/app/(pages)/emi-calculator/page';
import ContactUsPage, { metadata as contactUsMeta } from '@/app/(pages)/contact-us/page';
import ApplyPage from '@/app/(pages)/apply/page';
import BlogPage, { metadata as blogMeta } from '@/app/(pages)/blog/page';
import BlogPostPage, { generateMetadata } from '@/app/(pages)/blog/[slug]/page';

describe('Application Page Components', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Home Page successfully', () => {
    render(<Home />);
    expect(screen.getByText(/Quick, Hassle-Free Loans/i)).toBeInTheDocument();
  });

  it('renders About Us Page successfully', () => {
    render(<AboutUsPage />);
    expect(screen.getByText('Who we are')).toBeInTheDocument();
    expect(aboutUsMeta.title).toBeDefined();
  });

  it('renders Disclaimer Page successfully', () => {
    render(<DisclaimerPage />);
    expect(screen.getByText('Disclaimer')).toBeInTheDocument();
    expect(disclaimerMeta.title).toBeDefined();
  });

  it('renders Career Page successfully', () => {
    render(<CareerPage />);
    expect(screen.getByText('Join Our Team')).toBeInTheDocument();
    expect(careerMeta.title).toBeDefined();
  });

  it('renders FAQs Page successfully', () => {
    render(<FAQsPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Frequently Asked Questions/i);
    expect(faqsMeta.title).toBeDefined();
  });

  it('renders Gallery Page successfully', () => {
    render(<GalleryPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Our Gallery/i);
    expect(galleryMeta.title).toBeDefined();
  });

  it('renders Privacy Policy Page successfully', () => {
    render(<PrivacyPolicyPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Privacy Policy/i);
    expect(privacyMeta.title).toBeDefined();
  });

  it('renders Refund Policy Page successfully', () => {
    render(<RefundPolicyPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Refund Policy/i);
    expect(refundMeta.title).toBeDefined();
  });

  it('renders Knowledge Center Page successfully', () => {
    render(<KnowledgeCenterPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Knowledge Center/i);
    expect(knowledgeMeta.title).toBeDefined();
  });

  it('renders Award Page successfully', () => {
    render(<AwardPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Awards\s+&\s+Recognition/i);
    expect(awardMeta.title).toBeDefined();
  });

  it('renders EMI Calculator Page successfully', () => {
    render(<EmiCalculatorPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/EMI\s+Calculator/i);
    expect(emiMeta.title).toBeDefined();
  });

  it('renders Contact Us Page successfully', () => {
    render(
      <StoreProvider>
        <ContactUsPage />
      </StoreProvider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Contact\s+Us/i);
    expect(screen.getByText('Send us a Message')).toBeInTheDocument();
    expect(contactUsMeta.title).toBeDefined();
  });

  describe('ApplyPage multi-step flow', () => {
    beforeEach(() => {
      const applyService = require('@/services/applyService');
      applyService.submitApplicationApi.mockReset();
    });

    it('goes through standard wizard steps, submits successfully, and handles back-to-home', async () => {
      const applyService = require('@/services/applyService');
      applyService.submitApplicationApi.mockResolvedValue({ success: true, isEligible: true });

      render(
        <StoreProvider>
          <ApplyPage />
        </StoreProvider>
      );

      // Step 1
      expect(screen.getByText('Check Eligibility')).toBeInTheDocument();
      expect(screen.getByText('Step 1 of 3')).toBeInTheDocument();

      // Change loan type
      const businessLoanBtn = screen.getByRole('button', { name: /Business/i });
      fireEvent.click(businessLoanBtn);

      // Fill Step 1 values
      fireEvent.change(screen.getByLabelText(/Write Amount/i), { target: { value: '500000' } });
      fireEvent.change(screen.getByLabelText(/Select Tenure/i), { target: { value: '3' } });

      const form = document.getElementById('apply-form')!;
      fireEvent.submit(form);

      // Step 2
      expect(screen.getByText('Step 2 of 3')).toBeInTheDocument();
      
      // Fill Step 2 values
      fireEvent.change(screen.getByLabelText(/Write Full Name/i), { target: { value: 'Rahul Sharma' } });
      fireEvent.change(screen.getByLabelText(/Write Email ID/i), { target: { value: 'rahul@example.com' } });
      fireEvent.change(screen.getByLabelText(/Write Mobile/i), { target: { value: '9876543210' } });
      
      // Click self-employed
      const selfEmployedBtn = screen.getByRole('button', { name: /Self Employed/i });
      fireEvent.click(selfEmployedBtn);

      fireEvent.submit(form);

      // Step 3
      expect(screen.getByText('Step 3 of 3')).toBeInTheDocument();

      // Fill Step 3 values
      fireEvent.change(screen.getByLabelText(/Monthly Income/i), { target: { value: '75000' } });
      fireEvent.change(screen.getByLabelText(/PAN Number/i), { target: { value: 'ABCDE1234F' } });
      fireEvent.change(screen.getByLabelText(/Pincode/i), { target: { value: '400051' } });

      fireEvent.submit(form);

      // Check loading state then success screen
      await waitFor(() => {
        expect(screen.getByText('Your profile looks great!')).toBeInTheDocument();
      });

      // Click back to home link which triggers reset
      const backHomeLink = screen.getByText('Return to Home');
      fireEvent.click(backHomeLink);
    });

    it('shows ineligible screen when application is not pre-approved', async () => {
      const applyService = require('@/services/applyService');
      applyService.submitApplicationApi.mockResolvedValue({ success: true, isEligible: false });

      render(
        <StoreProvider>
          <ApplyPage />
        </StoreProvider>
      );

      // Step 1
      fireEvent.change(screen.getByLabelText(/Write Amount/i), { target: { value: '500000' } });
      fireEvent.change(screen.getByLabelText(/Select Tenure/i), { target: { value: '3' } });
      const form = document.getElementById('apply-form')!;
      fireEvent.submit(form);

      // Step 2
      fireEvent.change(screen.getByLabelText(/Write Full Name/i), { target: { value: 'Rahul Sharma' } });
      fireEvent.change(screen.getByLabelText(/Write Email ID/i), { target: { value: 'rahul@example.com' } });
      fireEvent.change(screen.getByLabelText(/Write Mobile/i), { target: { value: '9876543210' } });
      fireEvent.submit(form);

      // Step 3
      fireEvent.change(screen.getByLabelText(/Monthly Income/i), { target: { value: '15000' } });
      fireEvent.change(screen.getByLabelText(/PAN Number/i), { target: { value: 'ABCDE1234F' } });
      fireEvent.change(screen.getByLabelText(/Pincode/i), { target: { value: '400051' } });
      fireEvent.submit(form);

      // Check ineligible screen
      await waitFor(() => {
        expect(screen.getByText('Additional Review Needed')).toBeInTheDocument();
      });
    });

    it('navigates to home when clicking back button on step 1', () => {
      render(
        <StoreProvider>
          <ApplyPage />
        </StoreProvider>
      );

      const backHomeBtn = screen.getByRole('button', { name: /Back to Home/i });
      fireEvent.click(backHomeBtn);
      expect(mockPush).toHaveBeenCalledWith('/');
    });

    it('goes back one step when clicking back button on step 2 and step 3', () => {
      render(
        <StoreProvider>
          <ApplyPage />
        </StoreProvider>
      );

      // Step 1 -> Step 2
      fireEvent.change(screen.getByLabelText(/Write Amount/i), { target: { value: '500000' } });
      fireEvent.change(screen.getByLabelText(/Select Tenure/i), { target: { value: '3' } });
      const form = document.getElementById('apply-form')!;
      fireEvent.submit(form);

      // Verify on Step 2
      expect(screen.getByLabelText(/Write Full Name/i)).toBeInTheDocument();

      // Click back button to return to Step 1
      const backBtn = screen.getByRole('button', { name: /Back/i });
      fireEvent.click(backBtn);
      expect(screen.getByLabelText(/Write Amount/i)).toBeInTheDocument();

      // Go back to Step 2
      fireEvent.submit(form);

      // Go to Step 3
      fireEvent.change(screen.getByLabelText(/Write Full Name/i), { target: { value: 'Rahul Sharma' } });
      fireEvent.change(screen.getByLabelText(/Write Email ID/i), { target: { value: 'rahul@example.com' } });
      fireEvent.change(screen.getByLabelText(/Write Mobile/i), { target: { value: '9876543210' } });
      fireEvent.submit(form);

      // Verify on Step 3
      expect(screen.getByLabelText(/Monthly Income/i)).toBeInTheDocument();

      // Click back button to return to Step 2
      fireEvent.click(screen.getByRole('button', { name: /Back/i }));
      expect(screen.getByLabelText(/Write Full Name/i)).toBeInTheDocument();
    });
  });

  describe('Async Blog Pages', () => {
    it('renders Blog list page successfully and handles fallback branch', async () => {
      // Test with page search param
      let resolvedJSX = await BlogPage({
        searchParams: Promise.resolve({ page: '1' }),
      });
      render(resolvedJSX);
      expect(screen.getByText('Insights')).toBeInTheDocument();
      expect(blogMeta.title).toBeDefined();

      // Test without page search param to cover fallback branch
      resolvedJSX = await BlogPage({
        searchParams: Promise.resolve({}),
      });
      render(resolvedJSX);
    });

    it('renders BlogPost details page successfully for valid slug', async () => {
      const resolvedJSX = await BlogPostPage({
        params: Promise.resolve({ slug: '2026-new-online-casinos-australia' }),
      });
      render(resolvedJSX);
      expect(screen.getByText('Share this article')).toBeInTheDocument();
    });

    it('calls notFound when slug is invalid', async () => {
      await expect(
        BlogPostPage({
          params: Promise.resolve({ slug: 'invalid-post-slug' }),
        })
      ).rejects.toThrow('NEXT_NOT_FOUND');
      expect(mockNotFound).toHaveBeenCalled();
    });

    it('calls generateMetadata for blog posts and handles not found branch', async () => {
      // Valid blog
      const meta = await generateMetadata({
        params: Promise.resolve({ slug: '2026-new-online-casinos-australia' }),
      });
      expect(meta.title).toContain('Udhary.com Blog');

      // Invalid blog
      const metaNotFound = await generateMetadata({
        params: Promise.resolve({ slug: 'invalid-slug' }),
      });
      expect(metaNotFound.title).toBe('Not Found');
    });
  });
});
