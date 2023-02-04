import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";


export default {
    title: 'Rating stories',
    component:  Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const EmptyStars: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars = () => <Rating />
