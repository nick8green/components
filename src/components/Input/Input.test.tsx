import { render, screen } from "@testing-library/react";

import Input, { InputType } from "components/Input";

describe("Input component", () => {
  it("Input should render correctly by default", () => {
    render(<Input id="testing" onChange={() => null} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.id).toBe("testing");
    expect(input.getAttribute("type")).toBe("text");
  });

  describe("Renders as a different type correctly", () => {
    const typeTests: {
      role: string;
      type: InputType;
    }[] = [
      {
        role: "textbox",
        type: InputType.EMAIL,
      },
      {
        role: "spinbutton",
        type: InputType.NUMBER,
      },
      {
        role: "textbox",
        type: InputType.TELEPHONE,
      },
      {
        role: "textbox",
        type: InputType.TEXT,
      },
    ];
    typeTests.forEach((tc) => {
      it(`for a ${tc.type} input`, () => {
        render(<Input id="testing" onChange={() => null} type={tc.type} />);
        const input = screen.getByRole(tc.role);
        expect(input.getAttribute("type")).toBe(tc.type);
      });
    });

    it("for a dropdown input", () => {
      const options = [{ label: "foo", value: "bar" }];
      render(
        <Input
          id="testing"
          onChange={() => null}
          options={options}
          type={InputType.DROPDOWN}
        />,
      );
      const input = screen.getByRole("combobox");
      expect(input).toBeInTheDocument();
    });
  });
});
