import { render, screen } from "@testing-library/react";
import Header, { type HeaderProps } from "./index";
import { Platform } from "components/SocialMediaLink";

describe("Header Component", () => {
  const defaultProps: HeaderProps = {
    title: "Test Title",
    socials: [
      { handle: "X Handle", platform: Platform.X, url: "https://x.com/test" },
      {
        handle: "Facebook Handle",
        platform: Platform.Facebook,
        url: "https://facebook.com/test",
      },
    ],
  };

  it("renders the title correctly", () => {
    render(<Header {...defaultProps} />);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement.id).toBe("site-title");
  });

  it("renders children correctly", () => {
    render(
      <Header {...defaultProps}>
        <p>Child Content</p>
      </Header>,
    );
    const childElement = screen.getByText("Child Content");
    expect(childElement).toBeInTheDocument();
  });

  it("renders SocialMediaList with correct props", () => {
    render(<Header {...defaultProps} />);
    const socialMediaList = screen.getByRole("list");
    expect(socialMediaList).toBeInTheDocument();
    expect(socialMediaList.children.length).toBe(defaultProps.socials?.length);
  });

  it("renders without socials when none are provided", () => {
    render(<Header title="No Socials" />);
    const socialMediaList = screen.queryByRole("list");
    expect(socialMediaList).not.toBeInTheDocument();
  });
});
