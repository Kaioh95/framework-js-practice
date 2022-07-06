
export function required(value: string) {
    if( value === undefined || value.trim().length === 0){
        return 'Este campo é obrigatório'
    }
    return null
}

export function isInt(value: string){
    if(value && isNaN(parseInt(value, 10))){
        return 'Este compo requer um número inteiro'
    }
    return null
}

export function inRange(min: number, max: number){
    return (value: string) => {
        const num = parseInt(value, 10)
        const [vmin, vmax] = min > max? [max, min]: [min, max]
        if(value && (isNaN(num) || num < vmin || num > vmax)){
            return `Este campo requer um número inteiro entre ${vmin} e ${vmax}`
        }
        return null
    }
}
