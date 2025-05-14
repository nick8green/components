import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import Navigation, { getExpansionIcon, renderLinks, type Link } from "./index";
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
    const { container } = render(
      <Navigation
        links={mockLinks}
        sticky={true}
        showIcons={false}
        type="main"
      />,
    );
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("main-navigation", "sticky");
    expect(nav).not.toHaveClass("with-icons");
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

describe("getExpansionIcon", () => {
  it("returns null when there are no children", () => {
    expect(getExpansionIcon(false, true)).toBeNull();
  });

  it("returns the correct icon for top-level links", () => {
    const { container } = render(<>{getExpansionIcon(true, true)}</>);
    expect(container.querySelector(".link-icon")).toBeInTheDocument();
  });

  it("returns the correct icon for non-top-level links", () => {
    const { container } = render(<>{getExpansionIcon(true, false)}</>);
    expect(container.querySelector(".link-icon")).toBeInTheDocument();
  });
});

describe("renderLinks", () => {
  it("renders links correctly", () => {
    const { container } = render(<ul>{renderLinks(mockLinks, 2)}</ul>);
    expect(container.querySelector("li")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("does not render links when levels are 0", () => {
    const { container } = render(<ul>{renderLinks(mockLinks, 0)}</ul>);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
