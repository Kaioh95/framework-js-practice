<div>
    {#each options as option, index (option)}
        <button
            class = { index === selection? 'selected': ''}
            on:click= {e => clicked(index)}>
            { option }
        </button>
    {/each}

</div>


<script lang="ts">
import { createEventDispatcher } from "svelte";

export let options: string[] = [];
export let selection: number;

const dispatcher = createEventDispatcher();

function clicked(idx: number){
    console.log('Clicou no botão ', idx);
    dispatcher('selection', idx);
}

</script>

<style>
    button{
        margin-right: 15px;
        background-color: #ccc;
        border: 1px solid rgb(118, 188, 188);
        border-radius: 3px;
        padding: 2px 5px;
    }

    .selected {
        font-weight: bold;
        background-color: #aaa;
    }

</style>