import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Button, { ButtonType } from "Button";

describe("Button component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Button should render correctly", () => {
    render(<Button label="Test" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toBe("Test");
  });

  it("Button should exec callback when clicked", () => {
    const cb = vi.fn();
    render(<Button label="Test" onClick={cb} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(cb).toHaveBeenCalled();
  });

  describe("can set the button type", () => {
    [ButtonType.NORMAL, ButtonType.RESET, ButtonType.SUBMIT].forEach(
      (type: ButtonType) => {
        it(`${type} button type`, () => {
          render(<Button label="Test" type={type} />);
          const button = screen.getByRole("button");
          expect(button.getAttribute("type")).toBe(type);
        });
      },
    );
  });

  describe("can set the button to be disabled", () => {
    it("button is disabled", () => {
      render(<Button disabled={true} label="Test" />);
      const button = screen.getByRole("button");
      expect(button.getAttribute("disabled")).toBeDefined();
    });

    it("button is not disabled", () => {
      render(<Button disabled={false} label="Test" />);
      const button = screen.getByRole("button");
      expect(button.getAttribute("disabled")).toBeNull();
    });
  });
});
