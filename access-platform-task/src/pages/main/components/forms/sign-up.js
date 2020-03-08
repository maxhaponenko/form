import React, { Fragment } from 'react';
import Tooltip from 'components/tooltip/tooltip';
import ReactHtmlParser from 'react-html-parser';
import { validator } from 'services/validator';

export default class SignUp extends React.Component {

    state = {
        didTryToProcess: false,
        inputs: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        hidePassword: true,
        
        validationRules: {
            firstName: [
                {
                    rule: validator.isNotEmpty,
                    message: 'This field is required'
                },
                {
                    rule: validator.isNotBig,
                    message: 'Second Name is too big. It should be less than 21 characters'
                }
            ],
            lastName: [
                {
                    rule: validator.isNotEmpty,
                    message: 'This field is required'
                },
                {
                    rule: validator.isNotBig,
                    message: 'Second Name is too big. It should be less than 21 characters'
                }
            ],
            email: [
                {
                    rule: validator.isNotEmpty,
                    message: 'This field is required'
                },
                {
                    rule: validator.isEmail,
                    message: 'Please, enter real email address'
                }
            ],
            password: [
                {
                    rule: validator.isNotEmpty,
                    message: 'This field is required'
                },
                {
                    rule: validator.isNotAllowedPasswordCharacters,
                    message: 'Password should pass the following rules: <ul><li>6 to 20 characters</li><li>Must contain at least one digit</li><li>Must contain at least one letter (case insensitive)</li><li>Can contain the following characters: ! @ # $ % & *</li></ul>'
                }
            ]
        },
        validationResult: {},
    }
    

    onInputChange(name, value) {
        if(!this.state.didTryToProcess) {
            this.setState( prevState => ({
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }))
        } else {
            this.setState( prevState => ({
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }), this.validateForm())
        }
    }

    validateForm() {
        let validationResult = {}
        for (var inputName in this.state.validationRules) {
            let result = validator.validate(this.state.inputs[inputName], this.state.validationRules[inputName])
            validationResult[inputName] = result
        }
        this.setState({
            didTryToProcess: true,
            validationResult: validationResult
        })
    }

    componentDidMount() {
        // this.validateForm()
    }

    render() {

        const {
            firstName,
            lastName,
            email,
            password
        } = this.state.inputs
        const { 
            validationResult,
            didTryToProcess
        } = this.state
        
        const isNotValid = (inputName) => {
            if (
                didTryToProcess 
                && validationResult[inputName] !== true
                && validationResult[inputName][0] !== undefined
                ) return true
            return false
        }


        return (
            <Fragment>
                <div className="form__heading">Sign Up for Free</div>
                <form className="auth-form" autoComplete="off">
                    <div className="auth-form__row">
                        <div className={"auth-form__input-container ".concat(isNotValid('firstName') ? "onError" : "")}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name*"
                                value={firstName}
                                onChange={(e) => this.onInputChange('firstName', e.target.value)} />
                            <label>First Name<span style={{ color: '#3BA28A' }}>*</span></label>
                            {isNotValid('firstName') && (
                                <Tooltip className="form-tooltip">{validationResult.firstName[0]}</Tooltip>
                            )}
                            
                            <span className="icon-file-user"></span>
                        </div>
                        <div className={"auth-form__input-container ".concat(isNotValid('lastName') ? "onError" : "")}>
                            <input 
                                type="text"
                                name="lastName"
                                placeholder="Last Name*"
                                value={lastName}
                                onChange={(e) => this.onInputChange('lastName', e.target.value)} />
                            <label>Last Name<span style={{ color: '#3BA28A' }}>*</span></label>

                            {isNotValid('lastName') && (
                                <Tooltip className="form-tooltip">{validationResult.lastName[0]}</Tooltip>
                            )}

                            
                        </div>
                    </div>
                    <div className={"auth-form__input-container ".concat(isNotValid('email') ? "onError" : "")}>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Email Address*"
                            value={email}
                            onChange={(e) => this.onInputChange('email', e.target.value)} />
                        <label>Email Address<span style={{ color: '#3BA28A' }}>*</span></label>
                        {isNotValid('email') && (
                            <Tooltip className="form-tooltip">{validationResult.email[0]}</Tooltip>
                        )}
                    </div>
                    <div className={"auth-form__input-container ".concat(isNotValid('password') ? "onError" : "")}>
                        <input 
                            type={this.state.hidePassword ? 'password' : 'text'}
                            name="password"
                            placeholder="Set A Password*"
                            value={password}
                            onChange={(e) => this.onInputChange('password', e.target.value)}
                            />
                        <label>Set A Password<span style={{ color: '#3BA28A' }}>*</span></label>
                        
                        {isNotValid('password') && (
                            <Tooltip className="form-tooltip"><span>{ReactHtmlParser(validationResult.password[0])}</span></Tooltip>
                        )}
                        
                        {password.length > 0 && (
                            <span className="icon-refresh-locked" onClick={() => this.setState({
                                hidePassword: !this.state.hidePassword
                            })}></span>
                        )}

                    </div>
                    <div className="btn-signUp" onClick={this.validateForm.bind(this)}><span>GET STARTED</span></div>
                </form>
            </Fragment>
        )
    }
}