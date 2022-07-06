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

export let options;
export let selection;

const dispatcher = createEventDispatcher();

function clicked(idx){
    console.log('Clicou no botão ', idx);
    dispatcher('selection', idx);
}

</script>

<style>
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