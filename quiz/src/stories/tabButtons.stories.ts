import { Story, Meta } from '@storybook/angular/types-6-0';

import { TabButtonsComponent } from '../app/components/tabButtons.component'

export default {
    title: 'Example/TabButtons',
    component: TabButtonsComponent,
    argTypes: {
        tabOptions: { control: 'object'},
        selection: { control: { type: 'number', min:0, max:3, step:1 } },
    },
} as Meta;

const Template: Story<TabButtonsComponent> = (args: TabButtonsComponent) => ({
    props: args,
});


const tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];

let currentTab = 0;

export const TabButtonsComp = Template.bind({});
TabButtonsComp.args = {
    tabOptions: tabOptions,
    selection: undefined,
};