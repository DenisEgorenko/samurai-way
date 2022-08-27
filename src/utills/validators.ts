export const required = (value: any) => {
    if (value) return undefined

    return 'Field is required'
}

export const maxLength30 = (value: any) => {
    if (value && value.length) return 'Max length is 30 symbols'

    return undefined
}

export {}