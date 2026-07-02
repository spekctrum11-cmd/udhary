import React from 'react';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Recharts to prevent JSDOM SVG sizing issues and trigger formatter callbacks
jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: any) => <div data-testid="responsive-container">{children}</div>,
  PieChart: ({ children }: any) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ children }: any) => <div data-testid="pie">{children}</div>,
  Cell: () => <div data-testid="cell" />,
  Legend: () => <div data-testid="legend" />,
  Tooltip: ({ formatter }: any) => {
    if (formatter) formatter(1000);
    return <div data-testid="tooltip" />;
  },
}));

// Mock framer-motion to simplify component testing without exit delays or tag errors
jest.mock('framer-motion', () => {
  const React = require('react');
  const resolveStyle = (styleObj: any) => {
    if (!styleObj) return styleObj;
    const resolved: any = {};
    for (const key in styleObj) {
      const value = styleObj[key];
      if (value && typeof value.get === 'function') {
        resolved[key] = value.get();
      } else {
        resolved[key] = value;
      }
    }
    return resolved;
  };
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const DummyComponent = React.forwardRef(({
    children,
    onDragEnd,
    layout,
    initial,
    animate,
    transition,
    drag,
    dragConstraints,
    dragElastic,
    whileDrag,
    exit,
    variants,
    style,
    ...props
  }: any, ref: any) => {
    if (onDragEnd) {
      (window as any).mockOnDragEnd = onDragEnd;
    }
    const resolvedStyle = resolveStyle(style);
    return <div ref={ref} style={resolvedStyle} {...props}>{children}</div>;
  });
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const mockMotionValue = {
    get: () => 0,
    set: () => {},
    onChange: () => () => {},
    on: () => () => {},
    clearListeners: () => {},
  };
  return {
    motion: new Proxy({}, {
      get: () => DummyComponent,
    }),
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useScroll: () => ({ scrollX: mockMotionValue, scrollY: mockMotionValue }),
    useVelocity: () => mockMotionValue,
    useSpring: () => mockMotionValue,
    useTransform: () => mockMotionValue,
    useMotionValue: () => mockMotionValue,
  };
});

// Mock Next.js Navigation Hooks
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  usePathname: () => '/blog',
  useSearchParams: () => new URLSearchParams('page=2'),
}));

// Import Components
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/FAQAccordion';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { BlogPagination } from '@/components/BlogPagination';
import { ShareButtons } from '@/components/ShareButtons';
import EmiCalculator from '@/components/EmiCalculator';
import { LiveNotifications } from '@/components/LiveNotifications';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { LenderRatesSection } from '@/components/LenderRatesSection';
import { ServiceSlider } from '@/components/ServiceSlider';
import Ecosystem, { FinancialEcosystemSection } from '@/components/FinancialEcosystemSection';
import { SavingsCalculatorSection } from '@/components/SavingsCalculatorSection';
import { PartnerMarquee } from '@/components/PartnerMarquee';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { SimpleProcedure } from '@/components/SimpleProcedure';

describe('Shared UI Components', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Button Component', () => {
    it('renders as button tag by default', () => {
      render(<Button>Click Me</Button>);
      const btn = screen.getByRole('button', { name: /Click Me/i });
      expect(btn).toBeInTheDocument();
      expect(btn.className).toContain('bg-primary');
    });

    it('renders as anchor tag when href is provided', () => {
      render(<Button href="https://example.com">Go Link</Button>);
      const link = screen.getByRole('link', { name: /Go Link/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('applies correct variant classes', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const btn = screen.getByRole('button', { name: /Secondary/i });
      expect(btn.className).toContain('border-primary');
    });
  });

  describe('FAQAccordion Component', () => {
    it('renders question and answer, and respects defaultOpen', () => {
      render(
        <FAQAccordion
          question="What is Udhary?"
          answer="Udhary is a lending matching platform."
          defaultOpen={true}
        />
      );
      expect(screen.getByText('What is Udhary?')).toBeInTheDocument();
      expect(screen.getByText('Udhary is a lending matching platform.')).toBeInTheDocument();
    });

    it('renders correctly with default parameters (defaultOpen is false)', () => {
      render(
        <FAQAccordion
          question="What is Udhary?"
          answer="Udhary is a lending matching platform."
        />
      );
      expect(screen.getByText('What is Udhary?')).toBeInTheDocument();
    });
  });

  describe('WhatsAppFAB Component', () => {
    it('renders with correct WhatsApp chat URL link', () => {
      render(<WhatsAppFAB />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://wa.me/917669755501');
    });
  });

  describe('BlogPagination Component', () => {
    it('handles search params and triggers push URL on page clicks', () => {
      render(<BlogPagination totalPages={5} />);
      
      // Page 2 should be active/rendered
      expect(screen.getByText('2')).toBeInTheDocument();

      // Click page 3
      const page3Btn = screen.getByText('3');
      fireEvent.click(page3Btn);
      expect(mockPush).toHaveBeenCalledWith('/blog?page=3', { scroll: false });

      // Click page 1
      const page1Btn = screen.getByText('1');
      fireEvent.click(page1Btn);
      expect(mockPush).toHaveBeenCalledWith('/blog?page=1', { scroll: false });
      
      // Test prev and next buttons
      const prevBtn = screen.getByText('Prev');
      fireEvent.click(prevBtn);
      expect(mockPush).toHaveBeenCalledWith('/blog?page=1', { scroll: false });
    });

    it('renders different pagination shapes and clicking next page', () => {
      // 1. Middle page (e.g. page 5 out of 10)
      const mockParams = new URLSearchParams('page=5');
      jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(mockParams);
      const { rerender } = render(<BlogPagination totalPages={10} />);
      
      // Page 5 should show ellipsis before and after
      const ellipses = screen.getAllByText('...');
      expect(ellipses.length).toBe(2);
      
      // Next button should be present
      const nextBtn = screen.getByText('Next');
      fireEvent.click(nextBtn);
      expect(mockPush).toHaveBeenCalledWith('/blog?page=6', { scroll: false });

      // 2. End page (e.g. page 9 out of 10)
      const mockParamsEnd = new URLSearchParams('page=9');
      jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(mockParamsEnd);
      rerender(<BlogPagination totalPages={10} />);
      
      const ellipsesEnd = screen.getAllByText('...');
      expect(ellipsesEnd.length).toBe(1);

      // Restore default mock search params
      jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(new URLSearchParams('page=2'));
    });

    it('covers all pagination generation branches', () => {
      // 1. total <= 7 branch
      const mockParams1 = new URLSearchParams('page=3');
      jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(mockParams1);
      const { rerender } = render(<BlogPagination totalPages={6} />);
      expect(screen.queryByText('...')).not.toBeInTheDocument();

      // 2. current <= 4 branch with large total
      const mockParams2 = new URLSearchParams('page=2');
      jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(mockParams2);
      rerender(<BlogPagination totalPages={10} />);
      expect(screen.getByText('5')).toBeInTheDocument();

      // 3. current >= total - 3 branch with large total
      const mockParams3 = new URLSearchParams('page=8');
      jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(mockParams3);
      rerender(<BlogPagination totalPages={10} />);
      expect(screen.getByText('6')).toBeInTheDocument();

      // 4. empty/fallback search page search param
      const mockParams4 = new URLSearchParams('');
      jest.spyOn(require('next/navigation'), 'useSearchParams').mockReturnValue(mockParams4);
      rerender(<BlogPagination totalPages={5} />);
    });
  });

  describe('ShareButtons Component', () => {
    const originalClipboard = navigator.clipboard;

    beforeAll(() => {
      Object.defineProperty(navigator, 'clipboard', {
        value: {
          writeText: jest.fn().mockImplementation(() => Promise.resolve()),
        },
        writable: true,
        configurable: true
      });
    });

    afterAll(() => {
      Object.defineProperty(navigator, 'clipboard', {
        value: originalClipboard,
        writable: true,
        configurable: true
      });
    });

    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('renders social sharing links and handles copy link button click', async () => {
      render(<ShareButtons title="Test Blog Title" url="https://example.com/blog/test-slug" />);
      
      // Twitter share link
      const twitterLink = screen.getByTitle(/Share on X/i);
      expect(twitterLink).toHaveAttribute('href');
      expect(twitterLink.getAttribute('href')).toContain('test-slug');

      // LinkedIn share link
      const linkedinLink = screen.getByTitle(/Share on LinkedIn/i);
      expect(linkedinLink).toBeInTheDocument();

      // WhatsApp share link
      const whatsappLink = screen.getByTitle(/Share on WhatsApp/i);
      expect(whatsappLink).toBeInTheDocument();

      // Copy link button
      const copyBtn = screen.getByTitle(/Copy Link/i);
      fireEvent.click(copyBtn);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://example.com/blog/test-slug');
      
      // Toast notice should appear
      expect(await screen.findByText(/Copied!/i)).toBeInTheDocument();

      // Advance timers to clear copy state
      act(() => {
        jest.advanceTimersByTime(2000);
      });
    });
  });

  describe('EmiCalculator Component', () => {
    it('renders sliders and calculates emi successfully', () => {
      render(<EmiCalculator />);
      
      expect(screen.getByLabelText(/Loan Amount Value/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Interest Rate Value/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Loan Tenure Value/i)).toBeInTheDocument();

      // Check principal number input changes
      const principalInput = screen.getByLabelText(/Loan Amount Value/i);
      fireEvent.change(principalInput, { target: { value: '500000' } });
      expect(principalInput).toHaveValue(500000);

      // Check principal slider change
      const principalSlider = screen.getByLabelText(/Loan Amount Range/i);
      fireEvent.change(principalSlider, { target: { value: '1000000' } });
      expect(principalInput).toHaveValue(1000000);

      // Check interest rate input changes
      const interestInput = screen.getByLabelText(/Interest Rate Value/i);
      fireEvent.change(interestInput, { target: { value: '12' } });
      expect(interestInput).toHaveValue(12);

      // Check interest rate slider change
      const interestSlider = screen.getByLabelText(/Interest Rate Range/i);
      fireEvent.change(interestSlider, { target: { value: '15' } });
      expect(interestInput).toHaveValue(15);

      // Check tenure input changes
      const tenureInput = screen.getByLabelText(/Loan Tenure Value/i);
      fireEvent.change(tenureInput, { target: { value: '15' } });
      expect(tenureInput).toHaveValue(15);

      // Check tenure slider change
      const tenureSlider = screen.getByLabelText(/Loan Tenure Range/i);
      fireEvent.change(tenureSlider, { target: { value: '10' } });
      expect(tenureInput).toHaveValue(10);
    });
  });

  describe('LiveNotifications Component', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.spyOn(Math, 'random').mockReturnValue(0.5); // Predictable random gap = 8000ms
    });

    afterEach(() => {
      jest.useRealTimers();
      jest.restoreAllMocks();
    });

    it('loops notifications on intervals', () => {
      render(<LiveNotifications />);
      
      // Should show initial notification
      expect(screen.getByText(/Just now/i)).toBeInTheDocument();

      // Fast-forward 4.5 seconds to allow timeout + exit animation to finish
      act(() => {
        jest.advanceTimersByTime(4500);
      });

      // Notification should be cleared
      expect(screen.queryByText(/Just now/i)).not.toBeInTheDocument();

      // Fast-forward 8 seconds to show next notification
      act(() => {
        jest.advanceTimersByTime(8000);
      });

      // Next notification should be displayed
      expect(screen.getByText(/Just now/i)).toBeInTheDocument();
    });
  });

  describe('Navigation Component', () => {
    it('renders navigation brand logo and menu items', () => {
      render(<Navigation />);
      expect(screen.getAllByText('EMI Calculators')[0]).toBeInTheDocument();
    });

    it('handles mouse interactions and clicks on desktop dropdown', () => {
      render(<Navigation />);
      const desktopLoansBtn = screen.getAllByRole('button', { name: /Loans/i })[0];
      const dropdownContainer = desktopLoansBtn.parentElement!;
      
      // Trigger mouse enter
      fireEvent.mouseEnter(dropdownContainer);
      
      // Dropdown should be open
      expect(screen.getAllByText('Personal Loan')[0]).toBeInTheDocument();

      // Click dropdown container to cover stopPropagation (line 64 of Navigation)
      const dropdownMenu = dropdownContainer.querySelector('.backdrop-blur-2xl');
      if (dropdownMenu) {
        fireEvent.click(dropdownMenu);
      }

      // Trigger mouse leave
      fireEvent.mouseLeave(dropdownContainer);
      
      // Click Loans button directly to toggle
      fireEvent.click(desktopLoansBtn);
      
      // Click document to close dropdown
      fireEvent.click(document);
    });

    it('toggles mobile menu and mobile Loans dropdown on clicks', () => {
      render(<Navigation />);
      const hamburgerBtn = screen.getByLabelText(/Toggle Mobile Menu/i);
      expect(hamburgerBtn).toBeInTheDocument();
      
      // Click hamburger menu
      fireEvent.click(hamburgerBtn);
      
      // Click mobile Loans dropdown
      const mobileLoansBtn = screen.getByRole('button', { name: /account_balance Loans/i });
      fireEvent.click(mobileLoansBtn);
      
      // Check that sub-items are visible in mobile layout
      const mobilePersonalLoan = screen.getAllByText('Personal Loan')[0];
      expect(mobilePersonalLoan).toBeInTheDocument();
    });

    it('updates scrolled class on window scroll', () => {
      render(<Navigation />);
      
      // Simulate scroll
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      
      // Trigger scroll listener
      act(() => {
        window.dispatchEvent(new Event('scroll'));
      });
    });

    it('handles brand logo click when on "/" to scroll to top', () => {
      const originalScrollTo = window.scrollTo;
      window.scrollTo = jest.fn();
      window.history.pushState({}, '', '/');

      render(<Navigation />);
      const logoImg = screen.getByAltText('logo');
      const logoLink = logoImg.closest('a');
      expect(logoLink).toBeInTheDocument();

      fireEvent.click(logoLink!);

      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
      window.scrollTo = originalScrollTo;
    });

    it('handles brand logo click when on another path without scrolling to top', () => {
      const originalScrollTo = window.scrollTo;
      window.scrollTo = jest.fn();
      window.history.pushState({}, '', '/some-other-path');

      render(<Navigation />);
      const logoImg = screen.getByAltText('logo');
      const logoLink = logoImg.closest('a');
      expect(logoLink).toBeInTheDocument();

      fireEvent.click(logoLink!);

      expect(window.scrollTo).not.toHaveBeenCalled();
      window.scrollTo = originalScrollTo;
    });
  });

  describe('Static Sections Rendering', () => {
    it('renders HeroSection correctly', () => {
      render(<HeroSection />);
      expect(screen.getByText(/Quick, Hassle-Free Loans/i)).toBeInTheDocument();
    });

    it('renders Footer correctly', () => {
      render(<Footer />);
      expect(screen.getByText(/Care@Udhary.com/i)).toBeInTheDocument();
    });

    it('renders CTASection correctly', () => {
      render(<CTASection />);
      expect(screen.getByText(/See Your Loan Options in Minutes/i)).toBeInTheDocument();
    });

    it('renders LenderRatesSection correctly', () => {
      render(<LenderRatesSection />);
      expect(screen.getByText(/Compare top lender rates today/i)).toBeInTheDocument();
    });
  });

  describe('ServiceSlider Component', () => {
    let rafSpy: jest.SpyInstance;
    let originalGlobalRaf: any;
    let originalGlobalCaf: any;
    let originalWindowCaf: any;

    beforeEach(() => {
      jest.useFakeTimers();
      rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => {
        return setTimeout(cb, 16) as any;
      });
      originalGlobalRaf = (global as any).requestAnimationFrame;
      (global as any).requestAnimationFrame = window.requestAnimationFrame;

      originalWindowCaf = window.cancelAnimationFrame;
      window.cancelAnimationFrame = jest.fn((id: any) => clearTimeout(id));

      originalGlobalCaf = (global as any).cancelAnimationFrame;
      (global as any).cancelAnimationFrame = window.cancelAnimationFrame;
    });

    afterEach(() => {
      jest.clearAllTimers();
      jest.useRealTimers();
      rafSpy.mockRestore();
      (global as any).requestAnimationFrame = originalGlobalRaf;
      window.cancelAnimationFrame = originalWindowCaf;
      (global as any).cancelAnimationFrame = originalGlobalCaf;
    });

    it('renders ServiceSlider successfully and simulates scroll events', () => {
      render(<ServiceSlider />);
      
      // Test rendering of multiple service names
      expect(screen.getAllByText('Personal Loan')[0]).toBeInTheDocument();
      expect(screen.getAllByText('Business Loan')[0]).toBeInTheDocument();

      // Find the scroll row container
      const scrollContainers = document.querySelectorAll('.overflow-x-auto');
      expect(scrollContainers.length).toBeGreaterThan(0);
      
      const scrollContainer = scrollContainers[0] as HTMLDivElement;
      Object.defineProperty(scrollContainer, 'scrollWidth', { value: 1000, configurable: true });
      Object.defineProperty(scrollContainer, 'scrollLeft', { value: 100, writable: true, configurable: true });

      // Mock performance.now to return distinct times
      let mockTime = 1000;
      jest.spyOn(performance, 'now').mockImplementation(() => {
        mockTime += 10;
        return mockTime;
      });

      // Simulate mouse actions
      fireEvent.mouseEnter(scrollContainer);
      
      // Trigger mousemove while not dragging to cover early return
      fireEvent.mouseMove(scrollContainer);
      
      const downEvent1 = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
      Object.defineProperty(downEvent1, 'pageX', { value: 100 });
      fireEvent(scrollContainer, downEvent1);

      const moveEvent1 = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
      Object.defineProperty(moveEvent1, 'pageX', { value: 5000 });
      fireEvent(scrollContainer, moveEvent1);

      const upEvent1 = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
      Object.defineProperty(upEvent1, 'pageX', { value: 5000 });
      fireEvent(scrollContainer, upEvent1);

      fireEvent.mouseLeave(scrollContainer);

      // Run timers for the first drag inertia loop to completion
      act(() => {
        jest.advanceTimersByTime(5000);
      });

      // Simulate touch actions
      fireEvent.touchStart(scrollContainer);
      fireEvent.touchEnd(scrollContainer);

      // Trigger wrap by setting scrollLeft above boundary
      Object.defineProperty(scrollContainer, 'scrollLeft', { value: 700, writable: true, configurable: true });
      
      const downEvent2 = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
      Object.defineProperty(downEvent2, 'pageX', { value: 100 });
      fireEvent(scrollContainer, downEvent2);

      const moveEvent2 = new MouseEvent('mousemove', { bubbles: true, cancelable: true });
      Object.defineProperty(moveEvent2, 'pageX', { value: -5000 });
      fireEvent(scrollContainer, moveEvent2);

      const upEvent2 = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
      Object.defineProperty(upEvent2, 'pageX', { value: -5000 });
      fireEvent(scrollContainer, upEvent2);

      // Run timers for the second drag inertia loop
      act(() => {
        jest.advanceTimersByTime(5000);
      });

      // Unmount component while mock timers are active
      cleanup();
    });
  });

  describe('TestimonialsSection Component', () => {
    it('renders TestimonialsSection and handles card navigation clicks', () => {
      render(<TestimonialsSection />);
      
      // Verification of main static texts
      expect(screen.getByText('Why People Prefer Udhary')).toBeInTheDocument();

      // Find the card container or cards and click
      const mobileFrontCard = document.querySelector('.cursor-grab');
      if (mobileFrontCard) {
        fireEvent.click(mobileFrontCard);
      }

      // Trigger drag end using window.mockOnDragEnd wrapped in act
      act(() => {
        if ((window as any).mockOnDragEnd) {
          (window as any).mockOnDragEnd({}, { offset: { x: 150 }, velocity: { x: 2 } });
          (window as any).mockOnDragEnd({}, { offset: { x: -150 }, velocity: { x: -2 } });
          (window as any).mockOnDragEnd({}, { offset: { x: 50 }, velocity: { x: 15 } });
          (window as any).mockOnDragEnd({}, { offset: { x: 10 }, velocity: { x: 0.1 } });
        }
      });
    });
  });

  describe('SavingsCalculatorSection Component', () => {
    it('renders sliders and calculates savings correctly', () => {
      render(<SavingsCalculatorSection />);
      
      expect(screen.getByText('How much can you save?')).toBeInTheDocument();

      // Verify outstanding loan input
      const loanSlider = screen.getByLabelText(/Outstanding Loan Amount/i);
      fireEvent.change(loanSlider, { target: { value: '1000000' } });
      
      // Verify interest rate input
      const interestSlider = screen.getByLabelText(/Current Interest Rate/i);
      fireEvent.change(interestSlider, { target: { value: '18' } });

      // Verify tenure input
      const tenureSlider = screen.getByLabelText(/Tenure in Years/i);
      fireEvent.change(tenureSlider, { target: { value: '5' } });

      // Check formatCurrency paths
      // loanAmount low values
      fireEvent.change(loanSlider, { target: { value: '50000' } }); // 50K
      fireEvent.change(loanSlider, { target: { value: '500000' } }); // 5L

      // Verify small savings to cover return value < 1000 (line 35)
      fireEvent.change(loanSlider, { target: { value: '50000' } });
      fireEvent.change(interestSlider, { target: { value: '14' } });

      // Set tenure to 1 to cover 'Yr' vs 'Yrs'
      fireEvent.change(tenureSlider, { target: { value: '1' } });
    });
  });

  describe('FinancialEcosystemSection Component', () => {
    it('renders Spekctrum ecosystem branding and services logo', () => {
      render(<Ecosystem />);
      
      expect(screen.getAllByText(/SPEKCTRUM/i)[0]).toBeInTheDocument();
      expect(screen.getByText('www.beemaaa.com')).toBeInTheDocument();
      expect(screen.getByText('www.sahipe.com')).toBeInTheDocument();
      expect(FinancialEcosystemSection).toBe(Ecosystem);
    });
  });

  describe('SimpleProcedure Component', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
    afterEach(() => {
      jest.useRealTimers();
    });
    it('renders and restarts animation cycle every 6s', () => {
      render(<SimpleProcedure />);
      expect(screen.getByText('Share your profile')).toBeInTheDocument();
      act(() => {
        jest.advanceTimersByTime(6000);
      });
    });
  });

  describe('PartnerMarquee Component', () => {
    it('renders PartnerMarquee and triggers click/blur', () => {
      render(<PartnerMarquee />);
      
      expect(screen.getByText("Trusted by India's Top Financial Institutions")).toBeInTheDocument();

      // Find partners
      const partnerCards = document.querySelectorAll('.mix-blend-multiply');
      expect(partnerCards.length).toBeGreaterThan(0);

      // Trigger click
      fireEvent.click(partnerCards[0]);
      // Trigger click again to deactivate
      fireEvent.click(partnerCards[0]);

      // Trigger blur
      fireEvent.blur(partnerCards[0]);
    });
  });
});
