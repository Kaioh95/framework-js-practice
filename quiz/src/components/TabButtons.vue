<template>
    <button v-for="(tab, index) in tabOptions" :key="index"
        :class="{ selected: index === selection }"
        @click="$emit('onSelection', index)"
    >
        {{ tab }}
    </button>
</template>

<script setup lang="ts">

export interface TabButtonsProps{
    tabOptions: string[];
    selection?: number;
}

export interface TabEvents{
    emit(e: "onSelection", val: number ): void;
}

defineProps<TabButtonsProps>();
defineEmits<TabEvents>();
</script>

<style scoped>

    button {
        margin-right: 15px;
        font-size: 15px;
        /*background-color: #ccc;*/
        background-color: white;
        border: 0px solid rgb(118, 118, 118);
        border-radius: 0px;
        padding: 2px 5px;
    }

    .selected {
        font-weight: bold;
        background-color: #aaa;
        border-bottom: 3px solid #2062ed;
        background-color: white;
    }

</style>