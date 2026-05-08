import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PrivateClassesSection from "../PrivateClassesSection";

describe("PrivateClassesSection", () => {
  it("renders without console errors", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<PrivateClassesSection />);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it("renders the section heading", () => {
    render(<PrivateClassesSection />);
    expect(screen.getByRole("heading", { name: /private classes/i })).toBeInTheDocument();
  });

  it("renders all 3 tab labels", () => {
    render(<PrivateClassesSection />);
    expect(screen.getByRole("tab", { name: /wheel throwing/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /party time/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /hand building/i })).toBeInTheDocument();
  });

  it("renders the pricing line", () => {
    render(<PrivateClassesSection />);
    expect(screen.getByText(/\$90 per person/i)).toBeInTheDocument();
  });

  it("first tab is active by default", () => {
    render(<PrivateClassesSection />);
    const firstTab = screen.getByRole("tab", { name: /wheel throwing/i });
    expect(firstTab).toHaveAttribute("aria-selected", "true");
    expect(firstTab).toHaveAttribute("aria-pressed", "true");
  });

  it("clicking a different tab makes it active", async () => {
    const user = userEvent.setup();
    render(<PrivateClassesSection />);

    const partyTab = screen.getByRole("tab", { name: /party time/i });
    await user.click(partyTab);

    expect(partyTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: /wheel throwing/i })).toHaveAttribute(
      "aria-selected",
      "false"
    );
  });

  it("active panel image is in the DOM with non-empty alt", () => {
    const { container } = render(<PrivateClassesSection />);
    const img = container.querySelector("img[alt]:not([alt=''])");
    expect(img).toBeInTheDocument();
  });

  it("tab buttons are keyboard-reachable (no positive tabIndex)", () => {
    render(<PrivateClassesSection />);
    const tabs = screen.getAllByRole("tab");
    tabs.forEach((tab) => {
      const tabIndex = tab.getAttribute("tabindex");
      expect(tabIndex === null || Number(tabIndex) <= 0).toBe(true);
    });
  });
});
