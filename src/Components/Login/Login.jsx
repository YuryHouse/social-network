import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                 <Field placeholder={'Login'}
                    name={'login'}
                    component={Input}
                    validate={required} />  
            </div>
            <div>
                <Field placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={required}
                    type={'password'} />
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;