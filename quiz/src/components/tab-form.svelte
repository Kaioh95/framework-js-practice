<div class="tab-container">
    <h1 class="tab-comp">Tabs</h1>
    <form class="tab-form" on:submit|preventDefault={submit}>
        <div class="numTabs">
            <label for="numtabs" >Núm.tabs</label>
            <input name="numtabs" type="number" 
                min="1" max="5"
                value={titleOptions.length} 
                on:change={e => changeNumOptions(e.target['value'])}
            />
            {#if errors.numOptions }
                <div class="error">{ errors.numOptions }</div>
            {/if}
        </div>

        {#each titleOptions as opt, i (`option_${i}`)}
            <div>
                <div>
                    <label for={`title_option_${i}`}>Título</label>
                    <input name={`title_option_${i}`} class="titulo" type="text" 
                        bind:value={titleOptions[i]}
                        on:change={e => titleChangeOption(i, e.target['value'])}
                        on:blur={e => check(e.target['value'], required, `title_option_${i}`)}
                    />
                    {#if errors[`title_option_${i}`] }
                        <div class="error">{ errors[`title_option_${i}`] }</div>
                    {/if}
                </div>
    
                <div>
                    <label for={`content_option_${i}`}>Conteúdo</label>
                    <textarea name={`content_option_${i}`} class="conteudo" 
                        bind:value={contentOptions[i]}
                        on:change={e => contentChangeOption(i, e.target['value'])}
                        on:blur={e => check(e.target['value'], required, `content_option_${i}`)}
                    />
                    {#if errors[`content_option_${i}`] }
                        <div class="error">{ errors[`content_option_${i}`] }</div>
                    {/if}
                </div>
            </div>
        {/each}

        <div class="buttons">
            <input type="submit" value="Enviar" />
        </div>
    </form>
</div>

<script lang="ts">
import { createEventDispatcher } from 'svelte';
import type { TabType } from '../store/tabs.store';
import { inRange, isInt, required } from '../utils/validation'

const dispatcher = createEventDispatcher<{
    submit: TabType
}>()

let titleOptions = ['', '']
let contentOptions = ['', '']
let errors: {[name: string]: string} = {}
let touched: {[name: string]: boolean} = {}

function touch(name: string, value: boolean = true) {
    touched[name] = value
}

function setError(name: string, error: string) {
    errors[name] = error
}

function titleChangeOption(index: number, value: string){
    titleOptions[index] = value
    touch(`$title_option_${index}`)
    check(value, required, `$title_option_${index}`)
}

function contentChangeOption(index: number, value: string){
    contentOptions[index] = value
    touch(`$content_option_${index}`)
    check(value, required, `$content_option_${index}`)
}

function changeNumOptions(value: string){
    const range = inRange(1, 5)

    const validateFunc = (value: string) => required(value) || isInt(value) || range(value)

    if( check(value, validateFunc, 'numOptions')){
        const num = parseInt(value, 10)
        if(num <= titleOptions.length){
            for(let i = num; i < titleOptions.length; i++){
                touch(`title_option_${i}`, false)
                touch(`content_option_${i}`, false)
                setError(`title_option_${i}`, '')
                setError(`content_option_${i}`, '')
            }
            titleOptions.splice(num, titleOptions.length - num)
            contentOptions.splice(num, contentOptions.length - num)
        }
        else{
            const titleTail = Array(num-titleOptions.length).fill('')
            const contentTail = Array(num-contentOptions.length).fill('')
            titleTail.forEach(o => titleOptions.push(o))
            contentTail.forEach(o => contentOptions.push(o))
        }
    }
}

function check(value: string, validateFunc: Function, name: string) {
    const error = validateFunc(value)
    setError(name, error)
    return error === null
}

function submit() {
    const titleOptionsOk = titleOptions
        .map((opt, i) => check(opt, required, `title_option_${i}`))
        .every(o => o)

    const contentOptionsOk = contentOptions
        .map((opt, i) => check(opt, required, `content_option_${i}`))
        .every(o => o)

    if(titleOptionsOk && contentOptionsOk){
        console.log(titleOptions)
        dispatcher('submit', {
            tabOptions: titleOptions,tabText: contentOptions
        })
    }
}
</script>
  
<style>
.tab-container{
    width: 600px;
    box-shadow: 5px 4px 10px #ccc;
    border-radius: 5px;
    margin: 20px;
    display: inline-block;
}

.tab-comp{
    margin: 20px;
}
.tab-form {
    --label-size: 150px;
    --label-margin: 10px;
    --label-width: calc(var(--label-size) + var(--label-margin));
    --border-size: 1px;
    --border-color: #ccc;
    --border-radius: 4px;
    --input-padding: 5px;
    --input-number-size: 30pt;
    --primary-color: #2062ed;
    padding: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.tab-form label {
    width: var(--label-size);
    display: inline-block;
    text-align: right;
    font-weight: bold;
    margin-right: var(--label-margin);
    vertical-align: top;
  }

.tab-form .error {
    font-style: italic;
    font-size: 10pt;
    color: red;
    margin-left: var(--label-width);
    height: 20pt;
}

.tab-form .buttons {
    margin-top: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: flex-end;
}

.tab-form .buttons input{
    color: white;
    background-color: var(--primary-color);
    padding: 10px;
    width: fit-content;
    border: 0;
}

.tab-form .numTabs {
    border-bottom: var(--border-size) solid var(--border-color);
    margin-bottom: 20px;
}

.tab-form input {
    border: var(--border-size) solid var(--border-color);
    border-radius: var(--border-radius);
    width: calc(90% - var(--label-size));
}

.tab-form .conteudo {
    height: 60px;
    margin-bottom: 5pt;
    border: var(--border-size) solid var(--border-color);
    border-radius: var(--border-radius);
    width: calc(90% - var(--label-size));
}
</style>