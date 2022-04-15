<template>
    <div className="tabPane">
        <TabButtons :tabOptions="tabOptions"
            :selection="currentTab"
            @on-selection="select"
        />

        <div className="textPane">
            <p>Texto do {{currentTab === undefined? "tab nao selecionado" : `${tabDisplayText[currentTab]} tab` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import TabButtons, { type TabButtonsProps} from "./TabButtons.vue"

    const tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];
    const tabDisplayText = ["primeiro", "segundo", "terceiro", "quarto"];

    const currentTab = ref<number>();

    function select(tabIndex: number){
        currentTab.value = tabIndex;
    }

</script>

<style>

.tabPane{
    padding: 50px;
}

.textPane{
    width: 350px;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
}

</style>