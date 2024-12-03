import Dots from "components/Loader/types/Dots";
import { render } from "@testing-library/react";

describe("loading dots", () => {
  it("displays relevant elements", () => {
    const { container } = render(<Dots />);

    expect(container.querySelector("#dot-container")).toBeInTheDocument();
    const loader = container.getElementsByClassName("dots")[0];
    expect(loader.getElementsByClassName("dot").length).toBe(6);
    expect(loader.getElementsByTagName("p").length).toBe(1);
  });

  it("displays default loading message", () => {
    const { getByText } = render(<Dots />);
    expect(getByText("Loading")).toBeInTheDocument();
  });

  it("displays custom loading message", () => {
    const { getByText } = render(<Dots message="Testing" />);
    expect(getByText("Testing")).toBeInTheDocument();
  });
});
