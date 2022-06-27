<template>
    <TabForm @on-submit="addQuestion($event)"></TabForm>
    <div class="box" v-for="tab, i in tabStore.tabUp">
        <button class="erase" @click="deleteTab(i)">X</button>
        <Tab
            :tabOptions="tab.tabOptions"
            :tabDisplayText="tab.tabDisplayText"
        >
        </Tab>
    </div>
</template>

<script setup lang="ts">
    import Tab from './Tab.vue'
    import TabForm from './TabForm.vue'
    import { tabStore, type TabType } from '../store/tab.store'

    function addQuestion(tb: TabType) {
        tabStore.add(tb)
    }

    function updateTab(index: number, tb: TabType) {
        tabStore.update(index, tb)
    }

    function deleteTab(index: number) {
        tabStore.delete(index)
    }
</script>

<style>
    .box {
        padding: 10px;
        border: 1px solid #aaf;
        border-radius: 5px;
        margin: 10px;
    }
    .erase {
        float: right;
        z-index: 2;
    }
</style>