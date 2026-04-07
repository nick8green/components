import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs, { type TabsProps } from "components/Tabs";

const meta: Meta<TabsProps> = {
  title: "Display/Tabs",
  component: Tabs,
  argTypes: {
    date: {
      control: "date",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      {
        title: "First Tab",
        content: (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id turpis in lectus lacinia mattis. Sed porttitor sed nulla et
              elementum. Morbi efficitur pulvinar elit sed dapibus. Etiam sed
              aliquam urna. Aliquam consectetur hendrerit nisl, quis condimentum
              lacus venenatis ut. Proin id justo velit. Maecenas vehicula sem
              vel facilisis malesuada. Vivamus finibus velit a arcu blandit, id
              euismod leo malesuada. Vivamus pellentesque, augue in sodales
              viverra, arcu libero ultricies erat, sed egestas urna justo eget
              purus. Quisque id libero mollis, rutrum mauris non, ullamcorper
              dolor. Suspendisse potenti. Nam mollis dictum orci vel faucibus.
              Proin non condimentum nibh. Vestibulum quis malesuada lacus.
              Suspendisse id tempus purus. Vestibulum pellentesque odio tellus,
              et hendrerit est fringilla eu.
            </p>
            <p>
              Nunc in tortor porttitor, facilisis elit et, varius nisl.
              Vestibulum eu nibh consectetur, consectetur neque eget, interdum
              urna. Vestibulum ultrices feugiat sapien tincidunt sollicitudin.
              Fusce sit amet nibh mattis, aliquet odio sit amet, tincidunt nisi.
              Donec sit amet nisl feugiat, scelerisque orci et, laoreet dolor.
              Fusce tincidunt sit amet eros vel tristique. Curabitur commodo
              ligula at metus tempus, eget luctus diam fermentum. Etiam
              scelerisque lacus massa. Nullam tincidunt, lorem quis convallis
              interdum, erat felis dapibus purus, vitae euismod sem velit et
              purus. Donec vulputate suscipit metus, at laoreet libero venenatis
              eu. Morbi id leo vulputate purus finibus ullamcorper vitae ac
              purus. Curabitur sem dui, varius vitae congue venenatis,
              vestibulum eu metus. Pellentesque ut sapien ac ligula vestibulum
              tristique id vulputate orci. Maecenas non felis odio. Duis gravida
              viverra arcu, ac pulvinar sapien.
            </p>
            <p>
              Etiam in malesuada ante. Etiam metus est, bibendum at dolor sed,
              ultricies facilisis lacus. Morbi fringilla et neque non elementum.
              Morbi rutrum maximus diam sed tristique. Aliquam erat volutpat.
              Aenean et euismod magna. Cras bibendum, nulla id accumsan
              pulvinar, est mi rhoncus nulla, sed dictum mi felis sit amet nisl.
              Fusce ligula mauris, vestibulum vitae orci nec, maximus elementum
              lacus. Nulla tristique, libero sit amet cursus scelerisque, leo
              nunc accumsan magna, quis placerat risus ante a nibh. In a
              consectetur risus. Cras vitae consequat diam. Suspendisse commodo,
              eros sit amet scelerisque mollis, risus dolor cursus felis, sed
              gravida massa diam a purus. Pellentesque quis dolor sed quam
              faucibus egestas.
            </p>
          </div>
        ),
      },
      {
        title: "Another Tab",
        content: (
          <div>
            <p>
              Fusce suscipit faucibus ex a vulputate. Nulla sodales auctor
              ornare. Pellentesque imperdiet libero diam, eu placerat nisi
              interdum a. Nulla nec tellus eu arcu lobortis iaculis quis et
              eros. Etiam porttitor ante ligula, non sagittis mi convallis
              varius. Maecenas ut iaculis felis. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Sed commodo, elit lacinia scelerisque tristique, elit eros
              efficitur tellus, eu fermentum libero nulla congue quam. Proin et
              risus lacinia, lobortis urna quis, convallis turpis. Nunc
              consectetur convallis nibh et porttitor. Nullam bibendum quis
              nulla vel vehicula.
            </p>
            <p>
              Praesent eu viverra justo, eget suscipit tortor. Sed eget
              scelerisque lectus. Fusce vel fringilla metus. Fusce eu massa
              ante. Nullam eget pulvinar lorem. Donec auctor sagittis lacinia.
              Nunc tincidunt tempus erat. Vestibulum nec odio pellentesque,
              dignissim mauris porttitor, scelerisque augue. Aliquam euismod
              ultrices justo, commodo facilisis dui volutpat sit amet. Aliquam
              commodo, nibh ullamcorper blandit sodales, eros eros finibus
              risus, sed consectetur mi erat ac sem.
            </p>
            <p>
              Aliquam neque arcu, gravida faucibus nisl vel, laoreet aliquam
              purus. Phasellus eget sapien dolor. Quisque et maximus lacus, id
              iaculis lacus. Mauris sed nulla ornare, malesuada lorem vel,
              laoreet ante. Pellentesque varius pellentesque vulputate. Proin
              ornare enim laoreet, tincidunt neque id, vulputate metus.
              Curabitur maximus, leo porta varius malesuada, lorem libero semper
              est, quis pellentesque dui purus sed libero. Suspendisse potenti.
              Fusce lectus erat, rhoncus a laoreet ut, tempus egestas tortor.
              Pellentesque maximus justo sed suscipit dapibus. Phasellus
              ullamcorper tincidunt quam sit amet egestas. Cras ut mattis purus,
              ac ullamcorper sem. Nullam sed urna ac augue imperdiet condimentum
              vel nec sem. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
        ),
      },
          {
            title: "One Last One...",
            content: (
              <div>
                <p>
                  Something here...
                </p>
              </div>
            ),
          },
    ],
  },
};
