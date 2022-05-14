<div class="tabPane">
    <TabOptions 
        { options }
        selection = {currentTab}
        on:selection={e => OnSelection(e.detail)}> 
    </TabOptions>

    <TabContent 
        { contents }
        { currentTab }
    >
    </TabContent>
</div>

<script lang="ts">
import TabOptions from './tabOptions.svelte'
import TabContent from './tabContent.svelte'

const options = ['tab 1', 'tab 2', 'tab 3', 'tab 4']
const contents = [
    'Texto do primeiro tab',
    'Texto do segundo tab',
    'Texto do terceiro tab',
    'Texto do quarto tab'
]

let currentTab;

function OnSelection(selectedTab){
    currentTab = selectedTab;
}

</script>

<style>
    .tabPane{
        padding: 50px;
    }

</style>