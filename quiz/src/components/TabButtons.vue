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
    width: 80px;
    margin-right: 10px;
    padding: 2px 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #aaa;
}

.selected {
    font-weight: bold;
    background-color: rgb(118, 118, 118);
}

</style>