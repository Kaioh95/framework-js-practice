<template>
    <div className="tabPane">
        <TabButtons :tabOptions="tabOptions"
            :selection="currentTab"
            @on-selection="select"
        />

        <TabContent
            :contents="tabDisplayText"
            :currentTab="currentTab"
        />
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import TabButtons, { type TabButtonsProps} from "./TabButtons.vue"
    import TabContent, { type TabContentProps} from "./TabContent.vue";

    export interface TabProps{
        tabOptions: string[]
        tabDisplayText: string[]
    }

    /*const tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];
    const tabDisplayText = ["Texto do primeiro tab",
            "Texto do segundo tab",
            "Texto do terceiro tab",
            "Texto do quarto tab"];*/

    const currentTab = ref<number>();

    function select(tabIndex: number){
        currentTab.value = tabIndex;
    }

    defineProps<TabProps>()
</script>

<style>

.tabPane{
    padding: 50px;
}

</style>