import { render, screen } from "@testing-library/react";
import Header, { type HeaderProps } from "./index";

describe("Header Component", () => {
  const defaultProps: HeaderProps = {
    title: "Test Title",
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
});
