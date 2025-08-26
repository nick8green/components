import type { Meta, StoryObj } from "@storybook/react-vite";
import Timeline, { DisplayMode } from "components/Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Interaction/Timeline",
  component: Timeline,
  argTypes: {
    display: {
      options: Object.keys(DisplayMode),
      mapping: DisplayMode,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    display: DisplayMode.HORIZONTAL,
    items: [
      {
        date: new Date("2025-01-01"),
        title: "Event 1",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia leo sed cursus pretium. Nullam interdum erat a augue fringilla, quis faucibus lacus aliquet. Integer ut lorem sed erat convallis auctor. Duis eget porta mi, ac semper lectus. In viverra fringilla felis vitae imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet a risus sit amet tincidunt. Vivamus vel enim eleifend, feugiat risus eget, convallis urna. Nam vel auctor sapien. Praesent molestie lorem metus, at rutrum dui lacinia hendrerit. Vestibulum consequat tincidunt erat vel scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi elementum ac nunc id cursus.",
      },
      {
        date: new Date("2025-02-01"),
        title: "Event 2",
        details:
          "Donec tempus augue vitae elementum accumsan. Maecenas massa nibh, tempor id nibh sed, commodo luctus sapien. Donec commodo varius nulla. Maecenas aliquam eget velit hendrerit fringilla. Quisque egestas libero lorem, hendrerit luctus risus tristique ut. Nullam eu mi consectetur, pellentesque augue quis, tincidunt erat. Integer suscipit suscipit molestie. Nullam ullamcorper lorem id leo sagittis gravida. Nullam dictum, diam eu posuere facilisis, ipsum lacus elementum sapien, eu cursus leo elit ut purus. Praesent nisi metus, accumsan vel imperdiet aliquet, euismod vel felis. Nunc rutrum ac nulla eget venenatis. Ut rhoncus leo sed risus luctus volutpat.",
      },
      {
        date: new Date("2025-03-01"),
        title: "Event 3",
        details:
          "Integer eu lorem mauris. Etiam sem libero, dapibus in erat sit amet, sagittis aliquam neque. Nulla sed enim at eros consequat ullamcorper. Aliquam sit amet tellus rutrum, efficitur massa id, euismod ligula. Mauris quis est orci. Sed dignissim turpis sed nisi vulputate vulputate ut non mauris. Quisque et sapien maximus, imperdiet nisl ut, eleifend enim.",
      },
      {
        date: new Date("2025-04-01"),
        title: "Event 4",
        details:
          "Proin fringilla faucibus elementum. Quisque vel tellus sit amet nulla accumsan malesuada id ut elit. Phasellus nisi massa, viverra fringilla lorem sed, mollis placerat dolor. Phasellus ultrices, ante a congue finibus, sem nulla ultrices diam, lobortis consectetur augue erat eget augue. Quisque sit amet lacinia orci. Ut eget tristique libero, ac finibus enim. Aliquam efficitur libero sit amet iaculis ullamcorper. Donec condimentum, felis sed vestibulum bibendum, lorem purus porta arcu, in vulputate mauris turpis et massa. Proin eros elit, pharetra vel varius sit amet, sollicitudin nec mi. Curabitur ut leo efficitur, feugiat erat et, laoreet metus. Phasellus pulvinar bibendum sapien, id dapibus metus vestibulum elementum. Vivamus eu laoreet tortor. Vivamus ultricies neque magna, non aliquet diam faucibus eu. Sed commodo luctus sapien at sodales. Duis fringilla eget tortor nec tempor. Aenean pharetra a ex mattis ullamcorper.",
      },
      {
        date: new Date("2025-05-01"),
        title: "Event 5",
        details:
          "Pellentesque nec dictum purus. Curabitur rhoncus elit mattis, lobortis erat id, lacinia ante. Vivamus massa tellus, elementum non egestas sit amet, vestibulum nec quam. Nam convallis ante nibh, tristique pharetra turpis porta eu. Sed nec orci erat. Ut ut tristique purus. Vivamus non auctor lacus. Vestibulum consequat orci vitae turpis posuere elementum. Suspendisse potenti. Proin sagittis quis nisl et placerat.",
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
  },
};
