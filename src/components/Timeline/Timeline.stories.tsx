import type { Meta, StoryObj } from "@storybook/react-vite";
import Icon from "components/Icon";
import Timeline from "components/Timeline";

const meta: Meta<typeof Timeline> = {
  argTypes: {
    display: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
  component: Timeline,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "100vh",
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
    dateLocation: "default",
    display: "vertical",
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
        icon: <Icon name="code" pack="solid" />,
        date: new Date("2025-08-23"),
        content:
          "Cras sem sem, maximus nec sem et, congue suscipit nunc. Integer mattis luctus dui in facilisis. Morbi eget eros eget urna dictum hendrerit. Aliquam pharetra urna a posuere rutrum. Morbi ac urna sed risus eleifend scelerisque et nec turpis. Aliquam erat volutpat. Praesent vehicula dictum nulla tristique aliquam.",
        tag: "Completed",
      },
      {
        date: new Date("2025-08-20"),
        content: "Maecenas sodales volutpat leo, ac mattis arcu blandit id.",
      },
      {
        date: new Date("2025-08-24"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet sem ac mi fringilla viverra. Ut posuere pretium lectus at sodales. Phasellus ut est sed ante lacinia condimentum. Praesent pulvinar risus velit. Nulla vitae velit nisi. Donec rhoncus commodo tellus. Aliquam malesuada, massa at luctus iaculis, eros magna efficitur ligula, eget dictum leo massa in massa. Quisque ac pulvinar lectus. Nullam rutrum in neque et accumsan.",
      },
      {
        date: new Date("2025-08-25"),
        content:
          "Pellentesque finibus consequat vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque interdum est quis odio suscipit consequat. Aenean egestas urna et mi congue convallis. Cras mollis quis magna ut eleifend. Nunc molestie gravida erat vel consectetur. Donec aliquet sollicitudin mi quis congue. Cras ac eros mattis, auctor quam ac, mattis leo. Nullam gravida magna a turpis tempor aliquet.",
      },
      {
        date: new Date("2025-08-26"),
        content:
          "Proin iaculis tortor mi, nec ornare turpis finibus sit amet. Aenean accumsan convallis urna. Fusce nec bibendum odio. Aliquam ac ultricies sem. Nulla erat mauris, interdum non pretium quis, efficitur nec ante. Donec metus mi, tincidunt in placerat ac, pellentesque eu metus. Nulla facilisi. Phasellus vehicula rhoncus metus, ut interdum sem feugiat non. Proin quis pulvinar metus.",
      },
      {
        date: new Date("2025-08-27"),
        content:
          "Integer in aliquet metus, quis vulputate diam. Nulla dictum ex ac nisl tristique bibendum. Sed turpis justo, gravida ut enim at, vehicula iaculis diam. Morbi ultrices ornare dolor non maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In finibus urna gravida sapien rhoncus consectetur in a nisl. Cras convallis elementum lacus eu aliquet. Proin nec blandit libero, quis faucibus nunc. Sed odio nunc, fermentum in massa eu, sodales tristique metus. Nullam pharetra faucibus nunc, nec fringilla metus pellentesque ut. Vestibulum dui neque, gravida sit amet sem vel, mollis maximus quam.",
      },
    ],
    order: "asc",
  },
  parameters: {
    layout: "fullscreen",
    style: { background: "lightgray" },
  },
};
