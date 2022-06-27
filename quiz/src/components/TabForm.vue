<template>
    <div class="tb-container-form">
        <h1>Tabs</h1>
        <form class="tb-form" @submit.prevent="submit">
            <div>
                <label>Núm.tabs</label>
                <input type="number" :value="titleOptions.length" @change="changeNumOptions(($event.target as HTMLInputElement).value)"/>
                <div class="error">{{ errors.numOptions }}</div>

                <div v-for="(opt, i) in titleOptions" :key="`options_${i}`">
                    <div>
                        <label>Título</label>
                        <input class="titulo" type="text" :value="titleOptions[i]"
                            @change="titleChangeOption(i, ($event.target as HTMLInputElement).value)"
                            @blur="touched[`title_option_${i}`] && check(($event.target as HTMLInputElement).value, required, `title_option_${i}`)"
                        />
                        <div className="error">{{ errors[`title_option_${i}`] }}</div>
                    </div>

                    <div>
                        <label>Conteúdo</label>
                        <textarea class="conteudo" :value="contentOptions[i]"
                            @change="contentChangeOption(i, ($event.target as HTMLInputElement).value)"
                            @blur="touched[`content_option_${i}`] && check(($event.target as HTMLInputElement).value, required, `content_option_${i}`)"
                        />
                        <div className="error">{{ errors[`content_option_${i}`] }}</div>
                    </div>

                </div>

                <div className="buttons">
                    <input type="submit" value="Enviar" />
                </div>

            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { type TabType } from '../store/tab.store'
    import { ref, reactive } from 'vue'
    import { inRange, required, isInt } from '../utils/validation'

    export interface TabEvents {
        (e: 'onSubmit', question: TabType): void
    }

    const titleOptions = reactive<string[]>([''])
    const contentOptions = reactive<string[]>([''])
    const errors = reactive<{[name: string]: string}>({})
    const touched = reactive<{[name: string]: boolean}>({})

    const emit = defineEmits<TabEvents>()

    function touch(name: string, value: boolean = true){
        touched[name] = value
    }

    function setError(name: string, error: string){
        errors[name] = error
    }

    function titleChangeOption(index: number, value: string){
        titleOptions[index] = value
        touch(`$title_option_${index}`)
    }

    function contentChangeOption(index: number, value: string){
        contentOptions[index] = value
        touch(`$content_option_${index}`)
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

    function check(value: string, validateFunc: Function, name: string){
        const error = validateFunc(value)
        setError(name, error)
        return error === null
    }

    function submit(){
        //e.preventDefault()

        const titleOptionsOk = titleOptions
            .map((opt, i) => check(opt, required, `title_option_${i}`))
            .every(o => o)

        const contentOptionsOk = contentOptions
            .map((opt, i) => check(opt, required, `content_option_${i}`))
            .every(o => o)

        if(titleOptionsOk && contentOptionsOk){
            //onSubmit({ tabButtons: titleOptions, tabText: contentOptions })
            emit('onSubmit', {
                tabOptions: titleOptions,
                tabDisplayText: contentOptions,
            })
        }
    }

</script>

<style scoped>
    .tb-container-form{
        width: 600px;
        box-shadow: 5px 4px 10px #ccc;
        border-radius: 5px;
        margin: 20px;
        display: inline-block;
    }

    .tb-form {
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

    .tb-form label {
        width: var(--label-size);
        display: inline-block;
        text-align: right;
        font-weight: bold;
        margin-right: var(--label-margin);
        vertical-align: top;
    }

    .tb-form .error {
        font-style: italic;
        font-size: 10pt;
        color: red;
        margin-left: var(--label-width);
        height: 20pt;
    }

    .tb-form .buttons {
        margin-top: 10px;
        padding-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

    .tb-form .buttons input{
        color: white;
        background-color: var(--primary-color);
        padding: 10px;
        width: fit-content;
        border: 0;
    }

    .tb-form .numTabs {
        border-bottom: var(--border-size) solid var(--border-color);
        margin-bottom: 20px;
    }

    .tb-form input {
        border: var(--border-size) solid var(--border-color);
        border-radius: var(--border-radius);
        width: calc(90% - var(--label-size));
    }

    .tb-form .conteudo {
        height: 60px;
        margin-bottom: 5pt;
        border: var(--border-size) solid var(--border-color);
        border-radius: var(--border-radius);
        width: calc(90% - var(--label-size));
    }
</style>