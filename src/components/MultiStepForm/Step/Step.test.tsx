import { render, screen } from "@testing-library/react";

import Step from "components/MultiStepForm/Step";

describe("Step component", () => {
  it("Step should render correctly", () => {
    render(
      <Step step={1} total={3}>
        <p>This is a test</p>
      </Step>,
    );

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.innerHTML).toBe("Step 1 of 3...");

    expect(screen.queryByRole("paragraph")?.innerHTML).toBe("This is a test");
  });
});
