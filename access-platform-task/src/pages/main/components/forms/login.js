import React, { Fragment } from 'react';
import Tooltip from 'components/tooltip/tooltip';

export default class Login extends React.Component {

    state = {
        didTryToProcess: false,
        inputs: {
            email: '',
            password: ''
        },
        hidePassword: true,
    }

    onInputChange(name, value) {
        if(!this.state.didTryToProcess) {
            this.setState( prevState => ({
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }))
        }
    }

    render() {

        const {
            email,
            password
        } = this.state.inputs

        return (
            <Fragment>
                <div className="form__heading">Welcome Back!</div>
                <form className="auth-form" autoComplete="off">
                    <div className={"auth-form__input-container ".concat(true ? "onError" : "")}>
                        <input 
                            type="email"
                            placeholder="Email Address*"
                            value={email}
                            onChange={(e) => this.onInputChange('email', e.target.value)} />
                        <label>Email Address<span style={{ color: '#3BA28A' }}>*</span></label>
                        <Tooltip show={true} className="form-tooltip">Please fill your name</Tooltip>
                    </div>
                    <div className={"auth-form__input-container ".concat(true ? "onError" : "")} style={{ marginBottom: 55 }}>
                        <input 
                            type={this.state.hidePassword ? 'password' : 'text'}
                            placeholder="Set A Password*"
                            value={password}
                            onChange={(e) => this.onInputChange('password', e.target.value)} />
                        <label>Set A Password<span style={{ color: '#3BA28A' }}>*</span></label>
                        <Tooltip show={true} className="form-tooltip">Please fill your name hphohoho ohsfdlskdfj s;dlfj e</Tooltip>
                        {password.length > 0 && (
                            <span className="icon-refresh-locked" onClick={() => this.setState({
                                hidePassword: !this.state.hidePassword
                            })}></span>
                        )}
                    </div>
                    <span className="forgot-password">Forgot Password?</span>
                    <div className="btn-signUp"><span>LOG IN</span></div>
                </form>
            </Fragment>
        )
    }
}