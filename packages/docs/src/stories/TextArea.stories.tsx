import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@torquimetro/react'

export default {
    title: 'Form/Text Area',
    component: TextArea,
    args: {},
    decorators: [
        (story) => {
            return (
                <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text size={'sm'}>Observations</Text>
                    {story()}
                </Box>
            )
        }
    ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Type your observations'
    }
}
export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}