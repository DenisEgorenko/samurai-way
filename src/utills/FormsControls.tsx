// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {


    const hasError = meta.touched && meta.error

    return (
        <div>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

// @ts-ignore

export {}