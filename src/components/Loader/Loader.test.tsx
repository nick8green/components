import { render, screen } from "@testing-library/react";

import Loader, { LoaderType } from "components/Loader";

describe("Loader component", () => {
  it("text loader should render correctly", () => {
    const message = "Loading, please wait";
    render(<Loader args={{ message }} type={LoaderType.TEXT} />);
    const output = screen.getByRole("paragraph");
    expect(output).toBeInTheDocument();
    expect(output).toHaveTextContent(message);
  });
});
