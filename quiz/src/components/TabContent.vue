<template>
    <div className="textPane">
        <p>{{ currentTab !== undefined ? contents[currentTab] : "Texto do tab não selecionado"}}</p>
    </div>
</template>

<script setup lang="ts">

export interface TabContentProps{
    contents: string[];
    currentTab?: number;
}

defineProps<TabContentProps>();

</script>

<style>
    .textPane {
        padding: 20px;
        margin: 10px 0;
        border-radius: 10px;
        border: 0px solid #aaa;
        /*background-color: #f0f0f0;*/
        background-color: white;
        overflow: auto;
    }
</style>