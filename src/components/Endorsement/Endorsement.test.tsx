import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Endorsement from "components/Endorsement";

describe("Endorsement component", () => {
  it("renders comment lines, trims them, swaps out quotes, ignores empty lines and wraps them in quotes", () => {
    render(
      <Endorsement comment={'  Hello  \n\n "World\nSomething "in" quotes'} />,
    );

    const root = screen.getByTestId("endorsement");
    const comments = root.querySelectorAll(".comment");
    expect(comments.length).toBe(3);

    // Text content includes literal quote characters as rendered by the component
    expect(comments[0].textContent).toBe('"Hello"');
    expect(comments[1].textContent).toBe('"World"');
    expect(comments[2].textContent).toBe('"Something `in` quotes"');
  });

  it("renders attribution correctly when name and location are provided", () => {
    render(<Endorsement comment={"x"} name="Alice" location="London" />);

    const attribution = screen.getByText((_, node) => {
      return node?.classList?.contains("attribution") ?? false;
    });
    expect(attribution).toBeTruthy();
    expect(attribution.textContent).toBe("Alice - London");
  });

  it("renders only name when location is missing", () => {
    render(<Endorsement comment={"x"} name="Bob" />);

    const root = screen.getByTestId("endorsement");
    const attr = root.querySelector(".attribution");
    expect(attr).toBeTruthy();
    // location span exists but empty; overall text should be just the name
    expect(attr?.textContent).toBe("Bob");
  });

  it("renders only location when name is missing", () => {
    render(<Endorsement comment={"x"} location="Remote" />);

    const root = screen.getByTestId("endorsement");
    const attr = root.querySelector(".attribution");
    expect(attr).toBeTruthy();
    expect(attr?.textContent).toBe("Remote");
  });

  it("does not render attribution when neither name nor location provided", () => {
    render(<Endorsement comment={"x"} />);

    const root = screen.getByTestId("endorsement");
    expect(root.querySelector(".attribution")).toBeNull();
  });

  it("formats and displays the date using moment (MMM YYYY) wrapped in parentheses", () => {
    // January 1, 2021 => "Jan 2021"
    const date = new Date(2021, 0, 1);
    render(<Endorsement comment={"x"} date={date} />);

    const dateEl = screen.getByText("(Jan 2021)");
    expect(dateEl).toBeTruthy();
    expect(dateEl.classList.contains("date")).toBe(true);
  });
});
