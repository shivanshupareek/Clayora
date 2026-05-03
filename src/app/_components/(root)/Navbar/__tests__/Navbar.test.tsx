import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../Navbar";

// next/link renders an <a> in tests — mock it minimally
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    className,
    "aria-label": ariaLabel,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    "aria-label"?: string;
  }) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  };
});

// jsdom does not implement matchMedia — provide a minimal stub
function setMatchMedia(prefersDark = false) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: prefersDark && query === "(prefers-color-scheme: dark)",
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

describe("Navbar", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    setMatchMedia(false);
  });

  // --- Render ---

  it("renders without errors and without console errors", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<Navbar />);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("renders a <header> landmark", () => {
    render(<Navbar />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders a named navigation landmark", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("navigation", { name: /main navigation/i })
    ).toBeInTheDocument();
  });

  // --- Logo ---

  it("renders ClayLabs logo with correct text", () => {
    render(<Navbar />);
    expect(screen.getByText("ClayLabs")).toBeInTheDocument();
  });

  it("logo links to the homepage", () => {
    render(<Navbar />);
    const logo = screen.getByRole("link", { name: /claylabs/i });
    expect(logo).toHaveAttribute("href", "/");
  });

  // --- CTA ---

  it("renders the get started CTA", () => {
    render(<Navbar />);
    const cta = screen.getByRole("link", { name: /get started/i });
    expect(cta).toBeInTheDocument();
  });

  it("get started CTA links to the booking section", () => {
    render(<Navbar />);
    const cta = screen.getByRole("link", { name: /get started/i });
    expect(cta).toHaveAttribute("href", "#book");
  });

  // --- Theme toggle: default light ---

  it("renders theme toggle button", async () => {
    render(<Navbar />);
    await act(async () => {});
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("shows 'switch to dark mode' label when light theme is active", async () => {
    render(<Navbar />);
    await act(async () => {});
    expect(
      screen.getByRole("button", { name: /switch to dark mode/i })
    ).toBeInTheDocument();
  });

  // --- Theme toggle: localStorage ---

  it("reads dark theme from localStorage on mount", async () => {
    localStorage.setItem("cl-theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    render(<Navbar />);
    await act(async () => {});
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });

  it("clicking toggle switches to dark and persists to localStorage", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await act(async () => {});

    await user.click(screen.getByRole("button", { name: /switch to dark mode/i }));

    expect(localStorage.getItem("cl-theme")).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("clicking toggle twice returns to light and persists", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await act(async () => {});

    const btn = screen.getByRole("button", { name: /switch to dark mode/i });
    await user.click(btn);
    await user.click(screen.getByRole("button", { name: /switch to light mode/i }));

    expect(localStorage.getItem("cl-theme")).toBe("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  // --- Theme toggle: system preference ---

  it("respects system dark preference when no localStorage value", async () => {
    setMatchMedia(true);
    document.documentElement.setAttribute("data-theme", "dark");
    render(<Navbar />);
    await act(async () => {});
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });

  // --- Accessibility / keyboard ---

  it("logo is the first keyboard-reachable element", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.tab();
    expect(document.activeElement).toBe(
      screen.getByRole("link", { name: /claylabs/i })
    );
  });

  it("get started CTA is reachable by keyboard after logo", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.tab();
    await user.tab();
    expect(document.activeElement).toBe(
      screen.getByRole("link", { name: /get started/i })
    );
  });

  it("theme toggle is reachable by keyboard after CTA", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.tab();
    await user.tab();
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole("button"));
  });

  it("theme toggle is operable with Enter key", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await act(async () => {});

    screen.getByRole("button").focus();
    await user.keyboard("{Enter}");

    expect(localStorage.getItem("cl-theme")).toBe("dark");
  });
});
