import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StudioPage from "../page";

describe("StudioPage", () => {
  it("renders without errors", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    render(<StudioPage />);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("renders the main element with id='main-content' for skip-link", () => {
    const { container } = render(<StudioPage />);
    const main = container.querySelector("main");
    expect(main).toHaveAttribute("id", "main-content");
  });

  it("renders the article with an accessible name", () => {
    render(<StudioPage />);
    expect(
      screen.getByRole("article", { name: /clayora studio/i })
    ).toBeInTheDocument();
  });

  it("renders all required section headings", () => {
    render(<StudioPage />);
    const headings = [
      /opening hours/i,
      /location/i,
      /contact/i,
      /about/i,
    ];
    headings.forEach((pattern) => {
      expect(
        screen.getByRole("heading", { name: pattern })
      ).toBeInTheDocument();
    });
  });

  it("renders the correct opening hours", () => {
    render(<StudioPage />);
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("09:00am – 05:00pm")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
    expect(screen.getByText("09:00am – 08:00pm")).toBeInTheDocument();
  });

  it("renders the location link pointing to Google Maps", () => {
    render(<StudioPage />);
    const link = screen.getByRole("link", {
      name: /open clayora studio location in google maps/i,
    });
    expect(link).toHaveAttribute(
      "href",
      "https://maps.google.com/?q=2+Crab+Apple+Lane+Rouse+Hill+NSW+2155+Australia"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the phone link with correct href", () => {
    render(<StudioPage />);
    const link = screen.getByRole("link", { name: /call clayora/i });
    expect(link).toHaveAttribute("href", "tel:0481305911");
  });

  it("renders the WhatsApp link pointing to the correct number", () => {
    render(<StudioPage />);
    const link = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(link.getAttribute("href")).toContain("wa.me/61481305911");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the email link with correct href", () => {
    render(<StudioPage />);
    const link = screen.getByRole("link", { name: /email clayora/i });
    expect(link).toHaveAttribute("href", "mailto:clayora.studios@gmail.com");
  });

  it("renders the website link with correct href", () => {
    render(<StudioPage />);
    const link = screen.getByRole("link", { name: /visit clayora website/i });
    expect(link).toHaveAttribute("href", "https://clayora.com.au");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the about blurb", () => {
    render(<StudioPage />);
    expect(
      screen.getByText(/magic in getting your hands messy/i)
    ).toBeInTheDocument();
  });

  it("renders social links with correct hrefs", () => {
    render(<StudioPage />);
    const fb = screen.getByRole("link", { name: /clayora on facebook/i });
    expect(fb).toBeInTheDocument();
    expect(fb.getAttribute("href")).toContain("facebook.com/Clayora.studios");
    expect(fb).toHaveAttribute("target", "_blank");
    expect(fb).toHaveAttribute("rel", "noopener noreferrer");

    const ig = screen.getByRole("link", { name: /clayora on instagram/i });
    expect(ig).toBeInTheDocument();
    expect(ig.getAttribute("href")).toContain("instagram.com/clayora.studios");
    expect(ig).toHaveAttribute("target", "_blank");
    expect(ig).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the breadcrumb navigation with Home link", () => {
    render(<StudioPage />);
    const nav = screen.getByRole("navigation", { name: /breadcrumb/i });
    expect(nav).toBeInTheDocument();
    const homeLink = screen.getByRole("link", { name: /^home$/i });
    expect(homeLink).toHaveAttribute("href", "/");
    expect(screen.getByText("Studio")).toBeInTheDocument();
  });

  it("all interactive links are keyboard focusable", async () => {
    const user = userEvent.setup();
    render(<StudioPage />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    await user.tab();
    expect(links).toContain(document.activeElement);
  });
});
