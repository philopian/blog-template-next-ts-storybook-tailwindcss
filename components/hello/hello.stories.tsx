import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Hello from './hello'

export default {
  title: 'Components/Hello',
  component: Hello,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Hello>

const Template: ComponentStory<typeof Hello> = (args) => (
  <Hello {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  message: 'hello hello hello',
}
