import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Layout from './Layout'

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}
