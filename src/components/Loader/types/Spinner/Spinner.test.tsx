import Spinner from "components/Loader/types/Spinner";
import { render } from "@testing-library/react";

describe("loading spinner", () => {
  it("displays relevant elements", () => {
    const { container } = render(<Spinner />);

    const loader = container.querySelector(".spinner");
    expect(loader).toBeInTheDocument();
    expect(loader?.getElementsByTagName("div").length).toBe(1);
    expect(loader?.getElementsByTagName("p").length).toBe(1);
  });

  it("displays default loading message", () => {
    const { getByText } = render(<Spinner />);
    expect(getByText("Loading")).toBeInTheDocument();
  });

  it("displays custom loading message", () => {
    const { getByText } = render(<Spinner message="Testing" />);
    expect(getByText("Testing")).toBeInTheDocument();
  });
});
