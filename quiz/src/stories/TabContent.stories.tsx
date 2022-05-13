import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabContent } from '../components/TabContent';

export default{
    title: 'Example/TabContent',
    component: TabContent,
    argsTypes:{
        contents: {controsl: 'object'},
        currentTab: { control: { type: 'number', min:1, max:4, step:1 } },
    },
} as ComponentMeta<typeof TabContent>;

const tabText = ["Texto do primeiro tab",
        "Texto do segundo tab",
        "Texto do terceiro tab",
        "Texto do quarto tab"];


const Template: ComponentStory<typeof TabContent> = (args) => <TabContent {...args}/>;

export const ContentComponent = Template.bind({});

ContentComponent.args = {
    contents: tabText,
    currentTab: undefined,
};