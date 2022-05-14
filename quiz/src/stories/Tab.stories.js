import Tab from '../components/Tab.vue';

export default {
    title: 'Example/Tab',
    component: Tab,
};

const Template = () => ({
    components: { Tab },

    template: '<tab v-bind="args" />',
});

export const TabAllComponents = Template.bind({});