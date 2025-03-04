import { fireEvent, render, screen } from "@testing-library/react";

import Input, { InputType } from "components/Input";

describe("Input component", () => {
  it("Input should render correctly by default", () => {
    render(<Input id="testing" onChange={() => null} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.id).toBe("testing");
    expect(input.getAttribute("type")).toBe("text");
  });

  it("Rendes with a label", () => {
    render(<Input label="Testing" id="testing" onChange={() => null} />);
    const label = screen.getByTestId("input-label");
    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toBe("Testing:<input class=\" \" id=\"testing\" type=\"text\" value=\"\" name=\"testing\">");
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

  describe("Validates input correctly", () => {
    const validationTests: {
      requirement: boolean;
      rule: "required";
      type: InputType;
      value: string;
    }[] = [
      {
        requirement: true,
        rule: "required",
        type: InputType.TEXT,
        value: "",
      },
    ];

    validationTests.forEach((tc) => {
      it(`for a ${tc.rule} ${tc.type} input`, () => {
        const rules: {[key: string]: boolean} = {};
        rules[tc.rule] = tc.requirement;
        render(
          <Input
            id="testing"
            onChange={() => null}
            type={tc.type}
            {...rules}
          />,
        );
        const input = screen.getByRole("textbox");
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(screen.getByTestId("input-error").innerHTML).toBe("Please provider a value as this field is required...");
      });
    });
  });
});
