<template>
    <div class="tb-container-form">
        <h1>Tabs</h1>
        <form class="tb-form" @submit.prevent="submit">
            <div>
                <label>Núm.tabs</label>
                <input type="number" :value="titleOptions.length" @change="changeNumOptions(($event.target as HTMLInputElement).value)"/>
                <div class="error">{{ errors.numOptions }}</div>

                <div v-for="(opt, i) in options" :key="`options_${i}`">
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
    .tabPane {
        padding: 20px;
        box-shadow: 5px 4px 10px #ccc;
        border-radius: 5px;
        margin: 20px;
        width: 450px;
        float: right;
    }
    
    .tabButtonsCSS button {
        margin-right: 15px;
        font-size: 15px;
        /*background-color: #ccc;*/
        background-color: white;
        border: 0px solid rgb(118, 118, 118);
        border-radius: 0px;
        padding: 2px 5px;
    }

    .tabButtonsCSS .selected {
        font-weight: bold;
        background-color: #aaa;
        border-bottom: 3px solid #2062ed;
        background-color: white;
    }

    .tabContentPane {
        padding: 20px;
        margin: 10px 0;
        border-radius: 10px;
        border: 0px solid #aaa;
        /*background-color: #f0f0f0;*/
        background-color: white;
        overflow: auto;
    }
</style>