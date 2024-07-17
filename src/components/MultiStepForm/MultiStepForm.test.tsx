import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import MultiStepForm from "components/MultiStepForm";

describe("MultiStepForm component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("MultiStepForm should render message if there are no steps", () => {
    render(<MultiStepForm done={vi.fn()} steps={[]} />);

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 0...",
    );

    expect(screen.queryByRole("paragraph")?.innerHTML).toBe(
      "Steps appear to be missing...",
    );
  });

  it("MultiStepForm should render initial step if there are 1 or more steps", () => {
    render(<MultiStepForm done={vi.fn()} steps={[() => <p>Step 1</p>]} />);

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 1...",
    );

    expect(screen.queryByRole("paragraph")?.innerHTML).toBe("Step 1");
  });

  it("MultiStepForm should render initial step and next button if there are 2 or more steps", () => {
    render(
      <MultiStepForm
        done={vi.fn()}
        steps={[() => <p>Step 1</p>, () => <p>Step 2</p>]}
      />,
    );

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 2...",
    );

    expect(screen.queryByRole("paragraph")?.innerHTML).toBe("Step 1");

    const button = screen.queryByTestId("next");
    expect(button).toBeInTheDocument();
    expect(button?.innerHTML).toBe("Next &gt;");
  });

  it("MultiStepForm should render completion button on the final step", () => {
    render(<MultiStepForm done={vi.fn()} steps={[() => <p>Step 1</p>]} />);

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 1...",
    );

    const button = screen.queryByTestId("done");
    expect(button).toBeInTheDocument();
    expect(button?.innerHTML).toBe("Complete!");
  });

  it("MultiStepForm should render completion button after navigating to the final step", () => {
    render(
      <MultiStepForm
        done={vi.fn()}
        steps={[() => <p>Step 1</p>, () => <p>Step 2</p>]}
      />,
    );

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 2...",
    );
    fireEvent.click(screen.getByTestId("next"));

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 2 of 2...",
    );
    const button = screen.queryByTestId("done");
    expect(button).toBeInTheDocument();
    expect(button?.innerHTML).toBe("Complete!");
    expect(screen.queryByTestId("next")).not.toBeInTheDocument();
  });

  it("MultiStepForm should render next step after next button is clicked", () => {
    render(
      <MultiStepForm
        done={vi.fn()}
        steps={[() => <p>Step 1</p>, () => <p>Step 2</p>]}
      />,
    );

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 2...",
    );
    fireEvent.click(screen.getByTestId("next"));

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 2 of 2...",
    );
  });

  it("MultiStepForm should render back button after navigating from the first step", () => {
    render(
      <MultiStepForm
        done={vi.fn()}
        steps={[() => <p>Step 1</p>, () => <p>Step 2</p>]}
      />,
    );

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 2...",
    );
    fireEvent.click(screen.getByTestId("next"));

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 2 of 2...",
    );
    const button = screen.queryByTestId("back");
    expect(button).toBeInTheDocument();
    expect(button?.innerHTML).toBe("Back &lt;");
    expect(screen.queryByTestId("next")).not.toBeInTheDocument();
  });

  it("MultiStepForm should render previous step after back button is clicked", () => {
    render(
      <MultiStepForm
        done={vi.fn()}
        steps={[() => <p>Step 1</p>, () => <p>Step 2</p>]}
      />,
    );

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 2...",
    );
    fireEvent.click(screen.getByTestId("next"));

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 2 of 2...",
    );
    fireEvent.click(screen.getByTestId("back"));

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 2...",
    );
  });

  it("MultiStepForm should render forward and back buttons when in the middle of the form", () => {
    render(
      <MultiStepForm
        done={vi.fn()}
        steps={[() => <p>Step 1</p>, () => <p>Step 2</p>, () => <p>Step 3</p>]}
      />,
    );

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 3...",
    );
    fireEvent.click(screen.getByTestId("next"));

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 2 of 3...",
    );

    const next = screen.queryByTestId("next");
    expect(next).toBeInTheDocument();
    expect(next?.innerHTML).toBe("Next &gt;");

    const back = screen.queryByTestId("back");
    expect(back).toBeInTheDocument();
    expect(back?.innerHTML).toBe("Back &lt;");
  });

  it("MultiStepForm executes completion function when complete is clicked", () => {
    const cb = vi.fn();
    render(<MultiStepForm done={cb} steps={[() => <p>Step 1</p>]} />);

    expect(screen.queryByRole("heading", { level: 3 })?.innerHTML).toBe(
      "Step 1 of 1...",
    );
    fireEvent.click(screen.getByTestId("done"));
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
