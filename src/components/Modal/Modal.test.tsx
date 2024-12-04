import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Modal, { ModalType } from "components/Modal";

describe("Modal component", () => {
  let close: () => void;

  afterEach(() => {
    vi.resetAllMocks();
  });

  beforeEach(() => {
    close = vi.fn();
  });

  it("Modal should render correctly when visible", () => {
    render(
      <Modal close={close} visible={true}>
        <>
          <p>Modal message</p>
        </>
      </Modal>,
    );
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(modal?.classList[0]).toBe("show");
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    expect(screen.getByRole("paragraph").innerHTML).toEqual("Modal message");
  });

  it("Modal should render correctly when not visible", () => {
    render(
      <Modal close={close} visible={false}>
        <>
          <p>Modal message</p>
        </>
      </Modal>,
    );
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(modal?.classList[0]).toBe("hidden");
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    expect(screen.getByRole("paragraph").innerHTML).toContain("Modal message");
  });

  describe("can be a loader", () => {
    it("Modal should not render closure", () => {
      render(
        <Modal type={ModalType.LOADER} visible={true}>
          <>
            <p>Modal message</p>
          </>
        </Modal>,
      );
      const modal = screen.queryByTestId("modal");
      expect(modal).toBeInTheDocument();
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
  });
});
