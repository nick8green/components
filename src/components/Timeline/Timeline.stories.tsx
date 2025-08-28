import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Timeline from "components/Timeline";

const meta: Meta<typeof Timeline> = {
  argTypes: {},
  component: Timeline,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "25em",
        }}
      >
        <Story />
      </div>
    ),
  ],
  title: "Display/Timeline",
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    dateFormat: "ddd Do MMM YYYY",
    items: [
      {
        icon: "🎉",
        title: "Event One",
        date: new Date("2025-08-21"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non erat sodales, gravida ex et, tempus sapien. Integer dignissim faucibus metus id cursus. Duis cursus erat a tellus ornare, ut molestie massa tincidunt. In viverra, diam sed fringilla tempus, justo nulla vestibulum felis, at imperdiet leo magna ac metus. Nunc facilisis rutrum diam, ut eleifend nunc efficitur semper. Nam arcu massa, fringilla at semper dapibus, volutpat at arcu. Integer est urna, consequat vel est a, consequat vulputate leo. Nulla ut risus at elit rhoncus mollis vel in magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        date: new Date("2025-08-22"),
        content:
          "Maecenas sodales volutpat leo, ac mattis arcu blandit id. Cras aliquam dapibus sem non tempus. Vivamus vitae dolor eget velit fringilla bibendum quis et sem. Curabitur accumsan bibendum elit molestie interdum. Donec pellentesque neque et pharetra tempor. Maecenas ullamcorper quis justo at fringilla. Aenean id interdum diam, a sodales nisl. Suspendisse sed diam eu leo consectetur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec venenatis urna dapibus ullamcorper ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vitae nunc feugiat, eleifend turpis vel, hendrerit turpis.",
        tag: "In Progress",
        link: "https://example.com",
      },
      {
        title: "Event Three",
        icon: <FontAwesomeIcon icon={faCode} />,
        date: new Date("2025-08-23"),
        content:
          "Cras sem sem, maximus nec sem et, congue suscipit nunc. Integer mattis luctus dui in facilisis. Morbi eget eros eget urna dictum hendrerit. Aliquam pharetra urna a posuere rutrum. Morbi ac urna sed risus eleifend scelerisque et nec turpis. Aliquam erat volutpat. Praesent vehicula dictum nulla tristique aliquam.",
        tag: "Completed",
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
    style: { background: "lightgray" },
  },
};
