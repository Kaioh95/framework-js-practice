<template>
  <TabForm on:submit={e => tabs.change(0, e.detail)}></TabForm>
  {#each $tabs as tab, i (tab)}
    <div class="tabPane">
      <Tab options={tab.tabOptions} contents={tab.tabText}>
      </Tab>
    </div>
  {/each}
</template>

<script lang="ts">
import Tab from './tab.svelte'
import TabForm from './tab-form.svelte'
import { tabs, type TabType } from '../store/tabs.store'
</script>

<style>
.tabPane {
    padding: 20px;
    box-shadow: 5px 4px 10px #ccc;
    border-radius: 5px;
    margin: 10px;
    width: 450px;
    float: right;
}
.erase {
  float: right;
  z-index: 2;
}
</style>
