import { render, screen } from "@testing-library/react";
import SocialMediaList from "./index";
import { Platform } from "components/SocialMediaLink";

describe("Social Media List Component", () => {
  test("renders social media list", () => {
    render(
      <SocialMediaList
        socials={[
          { handle: "testing", platform: Platform.X, url: "#" },
          { handle: "testing", platform: Platform.Facebook, url: "#" },
          { handle: "testing", platform: Platform.Snapchat, url: "#" },
        ]}
      />,
    );
    const list = screen.getByTestId("social-media-list");

    expect(list).toBeInTheDocument();
    expect(screen.getByTestId("x-link")).toBeInTheDocument();
    expect(screen.getByTestId("facebook-link")).toBeInTheDocument();
    expect(screen.getByTestId("snapchat-link")).toBeInTheDocument();
  });

  describe("displays", () => {
    test("as a row by default", () => {
      render(<SocialMediaList />);
      const list = screen.getByTestId("social-media-list");
      expect(list).toHaveClass("row");
    });

    test("as a row", () => {
      render(<SocialMediaList display={{ direction: "row" }} />);
      const list = screen.getByTestId("social-media-list");
      expect(list).toHaveClass("row");
    });

    test("as a column", () => {
      render(<SocialMediaList display={{ direction: "column" }} />);
      const list = screen.getByTestId("social-media-list");
      expect(list).toHaveClass("column");
    });

    test("with handles hidden by default", () => {
      render(
        <SocialMediaList
          socials={[{ handle: "testing", platform: Platform.X, url: "#" }]}
        />,
      );
      const list = screen.getByTestId("x-link");
      expect(list).not.toHaveClass("with-handle");
    });

    test("with handles hidden", () => {
      render(
        <SocialMediaList
          socials={[{ handle: "testing", platform: Platform.X, url: "#" }]}
          display={{ showHandles: false }}
        />,
      );
      const list = screen.getByTestId("x-link");
      expect(list).not.toHaveClass("with-handle");
    });

    test("with handles shown", () => {
      render(
        <SocialMediaList
          socials={[{ handle: "testing", platform: Platform.X, url: "#" }]}
          display={{ showHandles: true }}
        />,
      );
      const list = screen.getByTestId("x-link");
      expect(list).toHaveClass("with-handle");
    });
  });
});
