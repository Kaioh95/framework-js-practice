import { Story, Meta } from '@storybook/angular/types-6-0';

import { TabContentComponent } from '../app/components/tabContent.component'

export default {
    title: 'Example/TabContent',
    component: TabContentComponent,
    argTypes: {
        contents: { control: 'object' },
        currentTab: { control : { type: 'number', min:0, max:3, step:1 } },
    },
} as Meta;

const Template: Story<TabContentComponent> = (args: TabContentComponent) => ({
    props: args,
});

const tabText = ["Texto do primeiro tab",
        "Texto do segundo tab",
        "Texto do terceiro tab",
        "Texto do quarto tab"];

export const TabContentComp = Template.bind({})
TabContentComp.args = {
    contents: tabText,
    currentTab: undefined,
};