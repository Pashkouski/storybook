import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropType} from "./Accordion";



export default {
    title: 'Accordion stories',
    component:  Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const EmptyStars: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

const Template: Story<AccordionPropType> = ( args ) => <Accordion {...args}/>

const callback = action('Click')

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    items: [
        {title: "dsaas3d", id: 1},
        {title: "ds321sd", id: 2},
        {title: "dsa321d", id: 3},
        {title: "ds213sd", id: 4},
        {title: "dsa12sd", id: 5},
    ],
    setCollapsed: callback,
    color: 'red'
}

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    titleValue: "User",
    collapsed: false,
    items: [
        {title: "dsaas3d", id: 1},
        {title: "ds321sd", id: 2},
        {title: "dsa321d", id: 3},
        {title: "ds213sd", id: 4},
        {title: "dsa12sd", id: 5},
    ],
    setCollapsed: callback,
    color: 'blue'
}
// export const CollapsedMode = () => <Accordion collapsed={true} setCollapsed={callback} titleValue={'Menu'}/>
// export const UnCollapsedMode = () => <Accordion collapsed={false} setCollapsed={callback} titleValue={'User'}/>

export const ModeChanging: Story<AccordionPropType> = (args) => {
    const [value, setValue] = useState(true)
    return <Accordion
        items={[
        {title: "dsaas3d", id: 1},
        {title: "ds321sd", id: 2},
        {title: "dsa321d", id: 3},
        {title: "ds213sd", id: 4},
        {title: "dsa12sd", id: 5},
    ]}
        collapsed={value}
        setCollapsed={()=>setValue(!value)}
        titleValue={value ? 'Menu' : 'User'}
        color={args.color}
    />
}

ModeChanging.args = {

}

