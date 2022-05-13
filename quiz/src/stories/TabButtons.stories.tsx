import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabButtons } from '../components/TabButtons';

export default{
    title: 'Example/TabButtons',
    component: TabButtons,
    argsTypes: {
        tabsOptions: { control: 'object'},
        selection: { control: { type: 'number', min:1, max:4, step:1 } },
    },
} as ComponentMeta<typeof TabButtons>;


const tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];

let currentTab: number = 0;

function select(tabIndex: number){
    currentTab = tabIndex;
}

const Template: ComponentStory<typeof TabButtons> = (args) => <TabButtons {...args}/>;

export const ButtonsComponent = Template.bind({});

ButtonsComponent.args = {
    tabsOptions: tabOptions,
    onSelection: select,
};