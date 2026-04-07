import { render, screen, fireEvent } from "@testing-library/react";
import Tabs, { type TabsProps } from "components/Tabs";

describe("Tabs Component", () => {
  const tabs: TabsProps["tabs"] = [
    { title: "Tab 1", content: <div>Content 1</div> },
    { title: "Tab 2", content: <div>Content 2</div> },
    { title: "Tab 3", content: <div>Content 3</div> },
  ];

  it("renders the correct number of tabs", () => {
    render(<Tabs tabs={tabs} />);
    const tabButtons = screen.getAllByRole("button");
    expect(tabButtons).toHaveLength(tabs.length);
  });

  it("displays the correct content for the active tab", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Content 3")).not.toBeInTheDocument();
  });

  it("changes the active tab when a tab is clicked", () => {
    render(<Tabs tabs={tabs} />);
    const tabButtons = screen.getAllByRole("button");

    fireEvent.click(tabButtons[1]);
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();

    fireEvent.click(tabButtons[2]);
    expect(screen.getByText("Content 3")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
  });

  it("applies the active class to the correct tab", () => {
    render(<Tabs tabs={tabs} />);
    const tabButtons = screen.getAllByRole("button");

    expect(tabButtons[0]).toHaveClass("active");
    expect(tabButtons[1]).not.toHaveClass("active");

    fireEvent.click(tabButtons[1]);
    expect(tabButtons[1]).toHaveClass("active");
    expect(tabButtons[0]).not.toHaveClass("active");
  });
});
