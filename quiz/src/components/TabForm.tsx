import { FormEvent, useState } from "react";
import { required, isInt, inRange }  from "../utils/validation"
import { TabProps } from "./tab"
import './TabForm.css'

interface TabFormProps {
    onSubmit: (tabTitlesContents: TabProps) => void
}

export function TabForm({ onSubmit }: TabFormProps) {
    const [ titleOptions, setTitleOptions ] = useState<string[]>([''])
    const [ contentOptions, setContentOptions ] = useState<string[]>([''])
    const [ erros, setErros ] = useState<{[name: string]: string}>({})
    const [ touched, setTouched ] = useState<{[name: string]: boolean}>({})

    function touch(name: string, value: boolean = true){
        setTouched(prevTouched => ({ ...prevTouched, [name]: value }))
    }

    function setError(name: string, error: string){
        setErros(prevErros => ({ ...prevErros, [name]: error }))
    }

    function titleChangeOption(index: number, value: string){
        const newOptions = [...titleOptions]
        newOptions[index] = value
        setTitleOptions(newOptions)
        touch(`$title_option_${index}`)
    }

    function contentChangeOption(index: number, value: string){
        const newOptions = [...contentOptions]
        newOptions[index] = value
        setContentOptions(newOptions)
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
                setTitleOptions(titleOptions.slice(0, num))
                setContentOptions(contentOptions.slice(0, num))
            }
            else{
                const titleTail = Array(num-titleOptions.length).fill('')
                const contentTail = Array(num-contentOptions.length).fill('')
                setTitleOptions([...titleOptions, ...titleTail])
                setContentOptions([...contentOptions, ...contentTail])
            }
        }
    }

    function check(value: string, validateFunc: Function, name: string){
        const error = validateFunc(value)
        setError(name, error)
        return error === null
    }

    function submit(e: FormEvent){
        e.preventDefault()

        const titleOptionsOk = titleOptions
            .map((opt, i) => check(opt, required, `title_options_${i}`))
            .every(o => o)

        const contentOptionsOk = titleOptions
            .map((opt, i) => check(opt, required, `content_options_${i}`))
            .every(o => o)

        if(titleOptionsOk && contentOptionsOk){
            onSubmit({ tabButtons: titleOptions, tabText: contentOptions })
        }
    }

    const numOptionsElm = (
        <div className="numTabs">
            <label>Núm.tabs</label>
            <input type="number" value={titleOptions.length} onChange={e => changeNumOptions(e.target.value)}/>
            <div className="error">{ erros.numOptions }</div>
        </div>
    )

    const optionsList = titleOptions.map((opt, i) => (
        <div key={`option_${i}`}>
            <div>
                <label>Título</label>
                <input className="titulo" type="text" value={titleOptions[i]}
                    onChange={e => titleChangeOption(i, e.target.value)}
                    onBlur={e => touched[`title_option_${i}`] && check(e.target.value, required, `title_options_${i}`)}
                />
                <div className="error">{ erros[`title_option_${i}`] }</div>
            </div>

            <div>
                <label>Conteúdo</label>
                <input className="conteudo" type="textarea" value={contentOptions[i]}
                    onChange={e => contentChangeOption(i, e.target.value)}
                    onBlur={e => touched[`content_option_${i}`] && check(e.target.value, required, `content_options_${i}`)}
                />
                <div className="error">{ erros[`content_option_${i}`] }</div>
            </div>
        </div>
    ))

    const optionsElm = (
        <div>
            {numOptionsElm}
            {optionsList}
        </div>
    )

    const sendButton = <div>
        <div className="buttons">
            <input type="submit" value="Enviar" />
        </div>
    </div>

    return (
        <div className="tab-form">
            <h1 className="qst-comp">Tabs</h1>
            <form className="qst-form" onSubmit={submit}>
                { optionsElm }
                { sendButton }
            </form>
        </div>
    )

}