import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import MultiStepForm, { type StepProps } from "./index";
import type { FC } from "react";

describe("MultiStepForm", () => {
  const doneMock = vi.fn();
  const DummySingleInputForm: FC<StepProps> = ({ handleChange, testInput }) => (
    <div>
      <input
        name="testInput"
        aria-label="testInput"
        data-testid="testInput"
        onChange={handleChange}
        value={testInput as string}
      />
    </div>
  );

  const renderComponent = (props = {}) =>
    render(
      <MultiStepForm done={doneMock} {...props}>
        <div>Step 1</div>
        <div>Step 2</div>
        <div>Step 3</div>
      </MultiStepForm>,
    );

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("errors without steps provided", () => {
    expect(() =>
      render(<MultiStepForm done={doneMock}></MultiStepForm>),
    ).toThrow(
      "Children are required for MultiStepForm and there must be more than one step to be completed!",
    );
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
    fireEvent.click(getByTestId("complete"));
    expect(doneMock).toHaveBeenCalledWith({});
  });

  it("updates data state on input change", () => {
    const { getByText, getByLabelText } = render(
      <MultiStepForm done={doneMock}>
        <DummySingleInputForm />
        <div>Step 2</div>
      </MultiStepForm>,
    );
    const input = getByLabelText("testInput");
    fireEvent.change(input, { target: { value: "testValue" } });
    fireEvent.click(getByText("Next >"));
    fireEvent.click(getByText("< Back"));
    expect(input).toHaveValue("testValue");
  });

  it("updates the data when there is an input change", () => {
    const { getByText, getByLabelText } = render(
      <MultiStepForm done={doneMock}>
        <DummySingleInputForm />
        <div>Step 2</div>
      </MultiStepForm>,
    );
    const input = getByLabelText("testInput");
    fireEvent.change(input, { target: { value: "testValue" } });
    fireEvent.click(getByText("Next >"));
    fireEvent.click(getByText("Complete!"));
    expect(doneMock).toHaveBeenCalledTimes(1);
    expect(doneMock).toHaveBeenCalledWith({ testInput: "testValue" });
  });
});
