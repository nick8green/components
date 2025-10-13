import type { Meta, StoryObj } from "@storybook/react-vite";
import Navigation from "components/Navigation";

const content = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio nisl,
      tincidunt vitae placerat quis, vulputate varius turpis. Sed eu volutpat
      arcu, euismod consectetur tellus. Mauris in ex elit. Phasellus magna
      augue, pharetra a ullamcorper quis, tincidunt in neque. Aenean euismod
      rutrum mattis. Duis faucibus rutrum sapien in pharetra. Curabitur in est
      non nunc varius blandit eget ac diam. Cras blandit pellentesque diam vitae
      varius. Cras malesuada leo vel mi ullamcorper pretium. Mauris feugiat
      auctor tincidunt. Nulla velit arcu, fringilla eu pretium id, pretium id
      nisi.
    </p>
    <p>
      Ut ac velit a neque pharetra aliquam congue ac lorem. Nunc faucibus justo
      nec magna gravida fermentum. Proin facilisis pellentesque quam, id
      condimentum lacus vehicula vitae. Pellentesque vitae convallis mauris, sit
      amet dapibus dui. Etiam viverra ipsum sed elit gravida, in consectetur
      purus egestas. Nullam eu pulvinar orci. Praesent nec neque tortor. Fusce
      finibus, urna ut ultricies lobortis, augue nisi facilisis mauris, at
      rutrum diam nisl et libero. Nunc venenatis est eu dictum ultrices.
    </p>
    <p>
      Praesent sed dui non magna venenatis imperdiet non ac sapien. Donec
      feugiat euismod ullamcorper. Aenean bibendum lorem orci, vel maximus odio
      vestibulum lacinia. In egestas tincidunt tellus ut efficitur. Nam sit amet
      facilisis ante. Maecenas in vehicula risus. Pellentesque in pretium est,
      vel dignissim tortor. In nec nisi felis. Donec nisl est, tempor eleifend
      vulputate eu, feugiat a urna. Donec porttitor porttitor velit, quis
      fringilla odio vehicula accumsan. Proin pulvinar eros vitae tortor
      accumsan, ultricies maximus felis luctus. Ut tempus tellus odio, non
      pretium mauris molestie sit amet. In hac habitasse platea dictumst.
    </p>
    <p>
      Fusce metus justo, vestibulum ut ultricies vitae, lacinia at enim. Aenean
      nec ligula nec ligula porta pulvinar. Pellentesque vel tempor eros. In hac
      habitasse platea dictumst. Aenean blandit ante nibh, eu eleifend magna
      ultrices quis. Nullam volutpat elit et ante vehicula maximus. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Proin egestas sem lectus, ac
      consectetur orci vestibulum nec. Nam non sapien justo. Etiam molestie
      lorem quis leo tincidunt, nec porttitor lacus volutpat. Sed sodales est
      sollicitudin neque eleifend, molestie fringilla erat faucibus. Etiam
      tincidunt nisl lobortis finibus convallis. Maecenas id lacus et dui
      vehicula euismod. Mauris at lacus et mi dictum laoreet.
    </p>
    <p>
      Integer sit amet turpis sed velit bibendum efficitur. Maecenas id metus a
      purus pretium sollicitudin. Morbi ut odio ut nulla dictum lacinia. In hac
      habitasse platea dictumst. Phasellus porta vitae massa et imperdiet.
      Aenean vitae augue quis erat auctor blandit vel id justo. Vivamus maximus
      suscipit odio, et tristique arcu vehicula quis.
    </p>
  </>
);

const meta: Meta<typeof Navigation> = {
  title: "Display/Navigation",
  component: Navigation,
  decorators: [
    (Story, { args }) => {
      if (args.type === "sidebar") {
        return (
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              width: "100vw",
              height: "100vh",
            }}
          >
            <Story />
            <div style={{ padding: "1em", overflowY: "auto" }}>{content}</div>
          </div>
        );
      }

      return (
        <div style={{ width: "100vw", height: "10em" }}>
          <Story />
          <div>{content}</div>
        </div>
      );
    },
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["breadcrumb", "categories", "icon", "main", "sidebar"],
    },
  },
  args: {
    type: "main",
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    links: [
      {
        label: "Home",
        url: "#",
        icon: "home",
        isActive: true,
      },
      {
        icon: "info",
        label: "About",
        url: "#",
      },
      {
        icon: "bell",
        label: "Services",
        url: "#",
        children: [
          {
            icon: "earth",
            label: "Web Development",
            url: "#",
            children: [
              {
                icon: "earth",
                label: "Front Ends",
                url: "#",
              },
              {
                icon: "search",
                label: "SEO Services",
                url: "#",
                children: [
                  {
                    icon: "earth",
                    label: "Generic Improvements",
                    url: "#",
                  },
                  {
                    icon: "search",
                    label: "Google Integrations",
                    url: "#",
                  },
                ],
              },
            ],
          },
          {
            icon: "search",
            label: "Find a Developer",
            url: "#",
          },
        ],
      },
      {
        icon: "envelope",
        label: "Contact",
        url: "#",
      },
    ],
  },
};
