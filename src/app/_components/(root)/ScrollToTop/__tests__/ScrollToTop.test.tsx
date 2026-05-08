import { render, screen, fireEvent } from "@testing-library/react";
import ScrollToTop from "../ScrollToTop";

// jsdom does not implement scrollTo — stub it.
const mockScrollTo = jest.fn();
Object.defineProperty(window, "scrollTo", { value: mockScrollTo, writable: true });

describe("ScrollToTop", () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
    // Reset scroll position before each test.
    Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });
  });

  it("renders without errors", () => {
    render(<ScrollToTop />);
    expect(screen.getByRole("button", { name: /scroll to top/i })).toBeInTheDocument();
  });

  it("is hidden on mount (below scroll threshold)", () => {
    render(<ScrollToTop />);
    const btn = screen.getByRole("button", { name: /scroll to top/i });
    expect(btn).not.toHaveClass("visible");
  });

  it("becomes visible after scrolling past threshold", () => {
    render(<ScrollToTop />);
    Object.defineProperty(window, "scrollY", { value: 401, configurable: true });
    fireEvent.scroll(window);
    const btn = screen.getByRole("button", { name: /scroll to top/i });
    expect(btn).toHaveClass("visible");
  });

  it("calls window.scrollTo({ top: 0 }) on click", () => {
    Object.defineProperty(window, "scrollY", { value: 401, configurable: true });
    render(<ScrollToTop />);
    fireEvent.scroll(window);
    const btn = screen.getByRole("button", { name: /scroll to top/i });
    fireEvent.click(btn);
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("button is keyboard reachable", () => {
    render(<ScrollToTop />);
    const btn = screen.getByRole("button", { name: /scroll to top/i });
    expect(btn).not.toHaveAttribute("tabindex", "-1");
  });
});
