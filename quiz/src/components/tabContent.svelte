<div class="contentPane">
    {#if  currentTab === undefined}
        <p> Tab não selecionado!</p>
    {:else}
        <p>{ contents[currentTab] }</p>
    {/if}
</div>

<script lang='ts'>
export let contents;
export let currentTab;

</script>

<style>
	.contentPane {
		padding: 20px;
        margin: 10px 0;
        border-radius: 10px;
        border: 0px solid #aaa;
        /*background-color: #f0f0f0;*/
        background-color: white;
        overflow: auto;
	}
    p{
        color: black;
    }
</style>