import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOffButton} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOffButton stories',
    component:  OnOffButton,
} as ComponentMeta<typeof OnOffButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const EmptyStars: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;



export const OnMode = () => <OnOffButton OnOff={true} setOnOff={action('Click')}/>
export const OffMode = () => <OnOffButton OnOff={false} setOnOff={action('Click')}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <OnOffButton OnOff={value} setOnOff={setValue}></OnOffButton>
}