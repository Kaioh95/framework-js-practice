import { Story, Meta } from '@storybook/angular/types-6-0';

import { TabComponent } from '../app/components/tab.component'

export default {
    title: 'Example/Tab',
    component: TabComponent,
} as Meta;

const Template: Story<TabComponent> = () => ({});

export const TabAllComponents = Template.bind({});
