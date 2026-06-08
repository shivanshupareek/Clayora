import { render, screen } from "@testing-library/react";
import TermsPage from "../page";

describe("TermsPage", () => {
  it("renders without errors", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<TermsPage />);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("renders a single h1 with 'Terms & Conditions'", () => {
    render(<TermsPage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Terms & Conditions");
  });

  it("renders the main element with id='main-content' for skip-link", () => {
    const { container } = render(<TermsPage />);
    const main = container.querySelector("main");
    expect(main).toHaveAttribute("id", "main-content");
  });

  it("renders the article with an accessible name", () => {
    render(<TermsPage />);
    expect(
      screen.getByRole("article", { name: /terms & conditions/i })
    ).toBeInTheDocument();
  });

  it("renders all required section headings", () => {
    render(<TermsPage />);
    const headings = [
      /classes & workshops/i,
      /courses & workshops/i,
      /privates & events/i,
      /gift vouchers/i,
      /refund policy/i,
      /broken pieces/i,
      /no shows, collections and makeup sessions/i,
      /storage & personal belongings/i,
      /bullying & harassment policy/i,
    ];
    headings.forEach((pattern) => {
      expect(screen.getByRole("heading", { name: pattern })).toBeInTheDocument();
    });
  });

  it("renders the contact email links with correct href", () => {
    render(<TermsPage />);
    const emailLinks = screen.getAllByRole("link", {
      name: /clayora\.studios@gmail\.com/i,
    });
    expect(emailLinks.length).toBeGreaterThanOrEqual(3);
    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "mailto:clayora.studios@gmail.com");
    });
  });
});
