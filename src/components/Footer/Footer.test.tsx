import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer Component", () => {
  test("renders the Footer component", () => {
    render(<Footer copyright={{ owner: "My Company", year: 2023 }} />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });

  test("displays the correct text", () => {
    render(<Footer copyright={{ owner: "My Company", year: 2023 }} />);
    const copyright = screen.getByTestId("copyright");
    expect(copyright.innerHTML).toBe(
      "© My Company 2023. All rights reserved.",
    );
  });

  test("contains a link to the privacy policy when passed", () => {
    render(
      <Footer
        copyright={{ owner: "My Company", year: 2023 }}
        links={[{ title: "privacy policy", url: "/privacy-policy" }]}
      />,
    );
    const privacyLink = screen.getByRole("link", { name: /privacy policy/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy-policy");
  });

  test("contains a link to the privacy policy when passed", () => {
    render(
      <Footer copyright={{ owner: "My Company", year: 2023 }}>
        <p>Some additional content</p>
      </Footer>,
    );
    const additionalContent = screen.getByText(/some additional content/i);
    expect(additionalContent).toBeInTheDocument();
  });
});
