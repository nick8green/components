import { render, screen } from "@testing-library/react";
import Dropdown from "Input/Dropdown";

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
});
