import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Icon from "components/Icon";

vi.mock("lib/icons", () => {
  const mockIcon = {
    prefix: "fas",
    iconName: "coffee",
    icon: [512, 512, [], "f0f4", []],
  };

  return {
    iconRegistry: {
      solid: { coffee: mockIcon },
      brands: {},
    },
    IconName: {} as any,
    IconPack: {} as any,
  };
});

describe("Icon", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders FontAwesomeIcon with correct props when icon exists", () => {
    render(
      <Icon
        pack="solid"
        name="coffee"
        size="2x"
        className="test-class"
        title="Test Icon"
      />,
    );
    const faIcon = screen.getByTestId("fa-icon");
    expect(faIcon).toBeInTheDocument();
    expect(faIcon).toHaveClass("test-class");
    expect(faIcon).toHaveClass("fa-2x");
    console.log(screen.debug());
    expect(faIcon).toHaveAttribute("title", "Test Icon");
  });

  it("renders null and warns when icon does not exist", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { container } = render(<Icon pack="solid" name="nonexistent" />);
    expect(container.firstChild).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith(
      'Icon "nonexistent" not found in pack "solid"',
    );
    warnSpy.mockRestore();
  });

  it("uses default size when size prop is not provided", () => {
    render(<Icon pack="solid" name="coffee" />);
    const faIcon = screen.getByTestId("fa-icon");
    expect(faIcon).toHaveClass("fa-1x");
  });
});
