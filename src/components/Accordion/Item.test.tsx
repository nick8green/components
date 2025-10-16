import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { vi } from "vitest";
import AccordionItem from "./Item";

describe("AccordionItem", () => {
  it("renders title, children and toggles control text; calls onToggle when clicked", () => {
    const onToggle = vi.fn();
    render(
      <ul>
        <AccordionItem title="My Title" onToggle={onToggle}>
          <div>Child content</div>
        </AccordionItem>
      </ul>,
    );

    // Title and children present
    expect(screen.getByText("My Title")).toBeTruthy();
    expect(screen.getByText("Child content")).toBeTruthy();

    // Control shows plus when inactive
    expect(screen.getByText("+")).toBeTruthy();

    // Clicking the title button calls onToggle
    fireEvent.click(screen.getByRole("button", { name: /My Title/i }));
    expect(onToggle).toHaveBeenCalled();
  });

  it("sets the content height to the element's scrollHeight when activated", async () => {
    const { container, rerender } = render(
      <ul>
        <AccordionItem title="T" active={false}>
          <div>Content</div>
        </AccordionItem>
      </ul>,
    );

    const content = container.querySelector(".item-content") as HTMLDivElement;
    expect(content).toBeTruthy();

    // Initially inactive -> height should be 0 (renderer sets 0 -> "0px")
    // style.height may be "0px"
    expect(content.style.height === "0px" || content.style.height === "0").toBe(
      true,
    );

    // Define a scrollHeight for the element before activating
    Object.defineProperty(content, "scrollHeight", {
      value: 200,
      configurable: true,
    });

    // Rerender as active
    rerender(
      <ul>
        <AccordionItem title="T" active>
          <div>Content</div>
        </AccordionItem>
      </ul>,
    );

    // Wait for the effect to run and update the inline style
    await waitFor(() => {
      expect(content.style.height).toBe("200px");
    });

    // When active, control shows "-"
    expect(screen.getByText("-")).toBeTruthy();
  });
});
