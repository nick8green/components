import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonGroup from ".";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<ButtonGroup />);
    const buttonGrp = screen.getByTestId("btn-grp");
    expect(buttonGrp).toBeInTheDocument();

    expect(buttonGrp.classList[0]).toBe("button-group");
  });
});
