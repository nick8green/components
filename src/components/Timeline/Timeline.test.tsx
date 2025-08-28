import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Timeline from "components/Timeline";

// Mock Item component
vi.mock("components/Timeline/Item", () => ({
  Item: ({ date, title, display, format }: any) => (
    <div data-testid="timeline-item">
      <span data-testid="item-date">{date.toISOString()}</span>
      <span data-testid="item-title">{title}</span>
      <span data-testid="item-display">{display}</span>
      <span data-testid="item-format">{format}</span>
    </div>
  ),
}));

const makeItem = (date: Date, title: string, content: string) => ({
  date,
  title,
  content,
});

describe("Timeline", () => {
  it("renders no items when items is empty", () => {
    render(<Timeline items={[]} />);
    expect(screen.queryAllByTestId("timeline-item")).toHaveLength(0);
  });

  it("renders items in ascending order by default", () => {
    const items = [
      makeItem(new Date("2023-01-01"), "First", "First item content"),
      makeItem(new Date("2022-01-01"), "Second", "Second item content"),
    ];
    render(<Timeline items={items} />);
    const titles = screen
      .getAllByTestId("item-title")
      .map((el) => el.textContent);
    expect(titles).toEqual(["Second", "First"]);
  });

  it("renders items in descending order when order='desc'", () => {
    const items = [
      makeItem(new Date("2023-01-01"), "First", "First item content"),
      makeItem(new Date("2022-01-01"), "Second", "Second item content"),
    ];
    render(<Timeline items={items} order="desc" />);
    const titles = screen
      .getAllByTestId("item-title")
      .map((el) => el.textContent);
    expect(titles).toEqual(["First", "Second"]);
  });

  it("passes dateFormat and dateLocation props to Item", () => {
    const items = [makeItem(new Date("2023-01-01"), "Event", "Event content")];
    render(
      <Timeline
        items={items}
        dateFormat="YYYY-MM-DD"
        dateLocation="alternate"
      />,
    );
    expect(screen.getByTestId("item-format").textContent).toBe("YYYY-MM-DD");
    expect(screen.getByTestId("item-display").textContent).toBe("alternate");
  });

  it("applies correct className based on display prop", () => {
    const items = [makeItem(new Date(), "Event", "Event content")];
    const { container } = render(<Timeline items={items} display="vertical" />);
    expect(container.firstChild).toHaveClass("timeline vertical");
  });
});
