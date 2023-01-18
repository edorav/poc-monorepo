// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import CustomButton from '@poc-monorepo/ui'


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>

export const Primary: ComponentStory<typeof CustomButton> = () => <CustomButton />