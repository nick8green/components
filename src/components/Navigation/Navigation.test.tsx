import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import Navigation, { type Link } from "components/Navigation";
import { faHome } from "@fortawesome/free-solid-svg-icons";

vi.mock("@fortawesome/react-fontawesome", () => {
  return {
    FontAwesomeIcon: ({
      "data-testid": testId,
    }: {
      "data-testid"?: string;
    }) => <svg data-testid={testId ?? "fa-icon"} className="link-icon" />,
  };
});

const mockLinks: Link[] = [
  {
    label: "Home",
    url: "/",
    isActive: true,
    icon: faHome,
    children: [
      {
        label: "Sub Home 1",
        url: "/sub-home-1",
      },
      {
        label: "Sub Home 2",
        url: "/sub-home-2",
      },
    ],
  },
  {
    label: "About",
    url: "/about",
  },
];

describe("Navigation Component", () => {
  it("renders without crashing when links are provided", () => {
    render(<Navigation links={mockLinks} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders nothing when no links are provided", () => {
    const { container } = render(<Navigation links={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("applies the correct classes based on props", () => {
    const { container } = render(<Navigation links={mockLinks} type="main" />);
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("main-navigation");
  });

  it("renders nested links correctly", () => {
    render(<Navigation links={mockLinks} levels={2} />);
    expect(screen.getByText("Sub Home 1")).toBeInTheDocument();
    expect(screen.getByText("Sub Home 2")).toBeInTheDocument();
  });

  it("does not render links beyond the specified levels", () => {
    render(<Navigation links={mockLinks} levels={1} />);
    expect(screen.queryByText("Sub Home 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Sub Home 2")).not.toBeInTheDocument();
  });
});
