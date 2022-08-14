import React, {PropsWithChildren, useEffect} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


type formData = {
    login: string,
    password: string,
    rememberMe: boolean
}


export function Login() {

    const onSubmit = (formData: formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<formData>> = (props: PropsWithChildren<InjectedFormProps<formData>>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<formData>({
    form: 'Login'
})(LoginForm)



