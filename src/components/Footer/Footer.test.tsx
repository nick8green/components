import { render, screen } from "@testing-library/react";
import Footer, { type ContactInfoProps } from "./index";

type ContactInfoTests = ContactInfoProps & { [key: string]: string };

describe("Footer Component", () => {
  test("renders the Footer component", () => {
    render(<Footer copyright={{ owner: "My Company", year: 2023 }} />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });

  test("displays the correct text for the copyright", () => {
    render(<Footer copyright={{ owner: "My Company", year: 2023 }} />);
    const copyright = screen.getByTestId("copyright");
    expect(copyright.innerHTML).toBe(
      "© My Company 2023. All rights reserved.",
    );
  });

  test("contains a links passed", () => {
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

  test("contains child elements when passed", () => {
    render(
      <Footer copyright={{ owner: "My Company", year: 2023 }}>
        <p>Some additional content</p>
      </Footer>,
    );
    const additionalContent = screen.getByText(/some additional content/i);
    expect(additionalContent).toBeInTheDocument();
  });

  describe("when contact information is passed", () => {
    const testCases: ContactInfoTests[] = [
      {
        key: "address",
        address: "123 Main St, Springfield, IL 62701",
      },
      {
        key: "email",
        email: "info@testing.com",
      },
      {
        key: "fax",
        fax: "555-555-5555",
      },
      {
        key: "phone",
        phone: "555-555-5555",
      },
    ];

    testCases.forEach((tc: ContactInfoTests) => {
      test(`contains the ${tc.key} when passed`, () => {
        render(
          <Footer
            copyright={{ owner: "My Company", year: 2023 }}
            contactInfo={tc}
          />,
        );
        const contactInfo = screen.getByTestId(tc.key);
        expect(contactInfo).toBeInTheDocument();
        expect(contactInfo).toHaveTextContent(tc[tc.key].replace(/,\s*/g, ""));
      });
    });
  });
});
