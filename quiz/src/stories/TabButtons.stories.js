import TabButtons from '../components/TabButtons.vue';

export default {
    title: 'Example/TabButtons',
    component: TabButtons,
    argTypes: {
        tabOptions: { control: 'object'},
        selection: { control: { type: 'number', min:0, max:3, step:1 } },
    },
};

const Template = (args) => ({
    components: { TabButtons },
    
    setup(){
        return { args }
    },

    template: '<tab-buttons v-bind="args" />',
});


const tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];

let currentTab = 0;

function select(tabIndex){
    currentTab = tabIndex;
}

export const TabButtonsComponent = Template.bind({});
TabButtonsComponent.args = {
    tabOptions: tabOptions,
    selection: undefined,
};