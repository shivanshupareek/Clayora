import { render, screen } from "@testing-library/react";
import PrivacyPage from "../page";

describe("PrivacyPage", () => {
  it("renders without errors", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(<PrivacyPage />);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("renders a single h1 with 'Privacy Policy'", () => {
    render(<PrivacyPage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Privacy Policy");
  });

  it("renders the main element with id='main-content' for skip-link", () => {
    const { container } = render(<PrivacyPage />);
    const main = container.querySelector("main");
    expect(main).toHaveAttribute("id", "main-content");
  });

  it("renders the article with an accessible name", () => {
    render(<PrivacyPage />);
    expect(
      screen.getByRole("article", { name: /privacy policy/i })
    ).toBeInTheDocument();
  });

  it("renders the ABN line", () => {
    render(<PrivacyPage />);
    expect(screen.getByText(/86 698 285 497/)).toBeInTheDocument();
  });

  it("renders all required section headings", () => {
    render(<PrivacyPage />);
    const headings = [
      /we respect your privacy/i,
      /collection of personal information/i,
      /how we collect your personal information/i,
      /use of your personal information/i,
      /disclosure of your personal information/i,
      /security of your personal information/i,
      /access to your personal information/i,
      /complaints about privacy/i,
      /changes to privacy policy/i,
      /^website$/i,
    ];
    headings.forEach((pattern) => {
      expect(screen.getByRole("heading", { name: pattern })).toBeInTheDocument();
    });
  });

  it("renders the email links with correct href", () => {
    render(<PrivacyPage />);
    const emailLinks = screen.getAllByRole("link", {
      name: /hello@clayora\.com\.au/i,
    });
    expect(emailLinks.length).toBeGreaterThanOrEqual(2);
    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "mailto:hello@clayora.com.au");
    });
  });

  it("renders the website URL link", () => {
    render(<PrivacyPage />);
    const siteLink = screen.getByRole("link", { name: /www\.clayora\.com\.au/i });
    expect(siteLink).toHaveAttribute("href", "https://www.clayora.com.au");
    expect(siteLink).toHaveAttribute("target", "_blank");
    expect(siteLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
