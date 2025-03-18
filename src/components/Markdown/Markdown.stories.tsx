import type { Meta, StoryObj } from "@storybook/react";
import Markdown from "components/Markdown";

const content = `# Markdown Example

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |

Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.

Link to [somwhere](http://example.com).

Here is some JavaScript code:

~~~js
console.log('It works!')
~~~

<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>`;

const meta: Meta<typeof Markdown> = {
  title: "Display/Markdown",
  component: Markdown,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "Content to render as markdown.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    children: content,
  },
};
