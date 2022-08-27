import React, {PropsWithChildren, useEffect} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength30, required} from '../../utills/validators';
import {Redirect} from 'react-router-dom';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../redux/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {loginThunk} from '../../redux/authReducer';


type formData = {
    login: string,
    password: string,
    rememberMe: boolean
}


export function Login() {

    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)

    const onSubmit = (values: formData) => {

        console.log(values)
        dispatch(loginThunk(values.login, values.password, values.rememberMe))
    }

    return (
        <div>
            {!auth.isAuth ?
                <div>
                    <h1>Login</h1>
                    <LoginForm onSubmit={onSubmit}/>
                </div> : <Redirect to={'profile'}/>
            }
        </div>
    )
}


const LoginForm = reduxForm<formData>({
    form: 'LoginForm'
})((props: PropsWithChildren<InjectedFormProps<formData>>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} name={'login'} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field validate={[required]} name={'password'} placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>
                {props.error}
            </div>
        </form>
    )
})



