import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RenderLinks } from "./RenderLinks";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// Mock FontAwesomeIcon to avoid rendering issues
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: (props: any) => <span data-testid="fa-icon" {...props} />,
}));

type Link = {
  icon?: any;
  label: string;
  url: string;
  isActive?: boolean;
  children?: Link[];
};

const links: Link[] = [
  {
    icon: faHome,
    label: "Home",
    url: "/home",
    isActive: true,
    children: [
      {
        label: "SubHome",
        url: "/home/sub",
        isActive: false,
      },
    ],
  },
  {
    label: "About",
    url: "/about",
    isActive: false,
  },
];

describe("RenderLinks", () => {
  it("renders nothing if levels <= 0", () => {
    const { container } = render(<RenderLinks links={links} levels={0} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders top-level links", () => {
    render(<RenderLinks links={links} levels={2} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("applies active-link class to active links", () => {
    render(<RenderLinks links={links} levels={2} />);
    const activeLi = screen.getByText("Home").closest("li");
    expect(activeLi).toHaveClass("active-link");
  });

  it("renders icons when provided", () => {
    render(<RenderLinks links={links} levels={2} />);
    expect(screen.getAllByTestId("fa-icon").length).toBeGreaterThan(0);
  });

  it("renders ExpansionIcon for links with children and levels > 1", () => {
    render(<RenderLinks links={links} levels={2} />);
    // ExpansionIcon should be rendered for "Home" only
    const homeLi = screen.getByText("Home").closest("li");
    expect(
      homeLi?.querySelectorAll('[data-testid="fa-icon"]').length,
    ).toBeGreaterThan(1);
  });

  it("renders nested children when present", () => {
    render(<RenderLinks links={links} levels={2} />);
    expect(screen.getByText("SubHome")).toBeInTheDocument();
  });

  it("does not render ExpansionIcon if levels <= 1", () => {
    render(<RenderLinks links={links} levels={1} />);
    // Only icon for "Home", no expansion icon
    const icons = screen.getAllByTestId("fa-icon");
    expect(icons.length).toBe(1);
  });
});
