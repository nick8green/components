import { render, screen } from "@testing-library/react";
import Dropdown from "components/Input/Dropdown";

describe("Input component", () => {
  it("Input should render correctly by default", () => {
    render(
      <Dropdown
        id="testing"
        options={[{ label: "foo", value: "bar" }]}
        onChange={() => null}
      />,
    );
    const input = screen.getByRole("combobox");
    expect(input).toBeInTheDocument();
  });

  it("Input should render correctly with a placeholder option", () => {
    render(
      <Dropdown
        id="testing"
        options={[{ label: "foo", value: "bar" }]}
        onChange={() => null}
        placeholder="select an option"
      />,
    );
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(2);
    expect(options[0].innerHTML).toBe("&lt;select an option&gt;");
  });
});
