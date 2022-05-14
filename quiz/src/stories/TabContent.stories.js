import TabContent from '../components/TabContent.vue';

export default {
    title: 'Example/TabContent',
    component: TabContent,
    argTypes: {
        contents: {control: 'object'},
        currentTab: { control: { type: 'number', min:0, max:3, step:1 } },
    },
};

const Template = (args) => ({
    components: { TabContent },

    setup(){
        return { args }
    },

    template: '<tab-content v-bind="args" />',
});

const tabText = ["Texto do primeiro tab",
        "Texto do segundo tab",
        "Texto do terceiro tab",
        "Texto do quarto tab"];

export const ContentComponent = Template.bind({});
ContentComponent.args = {
    contents: tabText,
    currentTab: undefined,
};