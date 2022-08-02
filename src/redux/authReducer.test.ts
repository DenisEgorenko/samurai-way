import {authDataType, authReducer, authType, setAuthDataAC} from './authReducer';

test('Right Auth Data Should Be Added', () => {

    let initialState: authType = {
        authData: {
            id: null,
            login: '',
            email: ''
        },
        isAuth: false
    }

    const authData: authDataType = {id: 18145, login: 'den9182', email: 'den9182@gmail.com'}
    const finalData = authReducer(initialState, setAuthDataAC(authData))

    expect(finalData.authData.id).toBe(18145)
    expect(finalData.authData.login).toBe('den9182')
    expect(finalData.authData.email).toBe('den9182@gmail.com')
    expect(finalData.isAuth).toBe(true)
})