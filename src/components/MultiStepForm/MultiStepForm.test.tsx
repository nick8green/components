import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import MultiStepForm from "./index";

describe("MultiStepForm", () => {
  const doneMock = vi.fn();

  const renderComponent = (props = {}) =>
    render(
      <MultiStepForm done={doneMock} {...props}>
        <div>Step 1</div>
        <div>Step 2</div>
        <div>Step 3</div>
      </MultiStepForm>,
    );

  it("errors without steps provided", () => {
    expect(() =>
      render(<MultiStepForm done={doneMock}></MultiStepForm>),
    ).toThrow("Children are required for MultiStepForm");
  });

  it("renders the first step initially", () => {
    const { getByText } = renderComponent();
    expect(getByText("Step 1")).toBeInTheDocument();
  });

  it("navigates to the next step when 'Next' button is clicked", () => {
    const { getByText } = renderComponent();
    fireEvent.click(getByText("Next >"));
    expect(getByText("Step 2")).toBeInTheDocument();
  });

  it("navigates to the previous step when 'Back' button is clicked", () => {
    const { getByText } = renderComponent();
    fireEvent.click(getByText("Next >"));
    fireEvent.click(getByText("< Back"));
    expect(getByText("Step 1")).toBeInTheDocument();
  });

  it("calls done function with data when 'Complete!' button is clicked", () => {
    const { getByText, getByTestId } = renderComponent();
    fireEvent.click(getByText("Next >"));
    fireEvent.click(getByText("Next >"));
    fireEvent.click(getByTestId("done"));
    expect(doneMock).toHaveBeenCalledWith({});
  });

  it("updates data state on input change", () => {
    const { getByText, getByLabelText } = render(
      <MultiStepForm done={doneMock}>
        <div>
          <input
            name="testInput"
            aria-label="testInput"
            data-testid="testInput"
          />
        </div>
        <div>Step 2</div>
      </MultiStepForm>,
    );
    const input = getByLabelText("testInput");
    fireEvent.change(input, { target: { value: "testValue" } });
    fireEvent.click(getByText("Next >"));
    fireEvent.click(getByText("< Back"));
    expect(input).toHaveValue("testValue");
  });
});
