import type { Meta, StoryObj } from "@storybook/react-vite";
import BlogPost from "components/Blog/Post";

const meta: Meta<typeof BlogPost> = {
  title: "Display/Blog/Post",
  component: BlogPost,
};

export default meta;
type Story = StoryObj<typeof BlogPost>;

export const Default: Story = {
  args: {
    action: "create",
    author: "John Doe",
    content: `# Sample Blog Post
    
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate auctor neque, a pulvinar magna viverra vitae. Curabitur volutpat pharetra iaculis. Nunc aliquam egestas lacus, eu venenatis elit ullamcorper vel. Quisque euismod aliquam pretium. Sed lacinia nibh eget augue egestas, vel aliquet augue sodales. Morbi a lobortis augue, a hendrerit nisi. Sed laoreet ex semper erat consequat tincidunt. Mauris suscipit ut quam nec pretium.
    
Cras dapibus, lorem vitae pharetra auctor, velit magna rhoncus lacus, vel lobortis massa justo eu quam. Suspendisse accumsan dolor suscipit feugiat varius. Donec gravida dapibus lacus posuere congue. Fusce metus elit, venenatis sit amet risus sed, consequat elementum dui. Morbi pulvinar posuere eros id sagittis. Aliquam in erat quis felis iaculis accumsan in in augue. Etiam pulvinar est quis ex ultrices malesuada. Sed ultricies vehicula ultrices. Ut lacinia hendrerit maximus. Pellentesque ut orci rutrum, lobortis risus at, efficitur arcu. Aliquam lobortis eleifend tortor, vitae cursus lorem dignissim at. Fusce et neque id massa pulvinar mollis sed ut dui.
    
Morbi sit amet gravida ligula. Integer sit amet elit sed mauris accumsan luctus vitae ut nibh. Phasellus dolor tellus, congue non orci commodo, facilisis commodo tortor. Sed at volutpat risus, ac porttitor neque. Praesent nisl ipsum, eleifend viverra blandit a, tincidunt et tellus. Vivamus vehicula elementum nunc vehicula dictum. Praesent id nibh neque. Curabitur suscipit dolor turpis, volutpat vulputate libero auctor lobortis. Nullam sit amet imperdiet libero. Nullam eu enim porttitor, elementum lectus et, finibus lacus. Pellentesque placerat nunc nibh, in sagittis nisi tempus et. Nunc faucibus leo sed semper lobortis.
    
Aliquam vitae ipsum quis neque mollis aliquet gravida ullamcorper neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sagittis vehicula massa et eleifend. Maecenas viverra ipsum libero, sed dictum orci sollicitudin non. Integer tempor vulputate felis, et placerat libero volutpat vitae. Vestibulum fringilla pulvinar elit eget accumsan. Aliquam erat volutpat. Nam nisl nibh, varius at molestie nec, efficitur et augue. Mauris tincidunt nisl at turpis mattis accumsan.
    
Sed at urna turpis. Nulla id mauris tempus, aliquet metus quis, tincidunt odio. Pellentesque placerat sit amet augue id faucibus. Nunc tempor semper mauris eget vehicula. Aenean fringilla ligula nec ex porta, ut gravida neque semper. Sed aliquet augue ut tristique consequat. Fusce quis felis auctor, tincidunt ante eu, consequat dolor. Maecenas interdum lorem non tristique consequat. Phasellus porta nisi tellus, eget pretium leo semper vel. Quisque tincidunt massa nec ex lacinia iaculis. Nam id mauris pharetra, volutpat diam et, mollis orci. Etiam congue nibh dolor, ac porttitor est consectetur in.`,
    date: new Date("2024-01-01"),
    title: "Sample Blog Post",
  },
};
