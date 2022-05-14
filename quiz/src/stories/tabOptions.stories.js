
import TabOptions from '../components/tabOptions.svelte';

export default {
    title: 'Example/TabOptions',
    component: TabOptions,
    argTypes: {
        options: { control: 'object'},
        selection: { control: { type: 'number', min:0, max:3, step:1 } },
    },
};

const Template = (args) => ({
    components: TabOptions,
    props: args,
});


const tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];

/*let currentTab = 0;

function select(tabIndex){
    currentTab = tabIndex;
}*/

export const TabOptionsComponent = Template.bind({});
TabOptionsComponent.args = {
    options: tabOptions,
    selection: undefined,
};