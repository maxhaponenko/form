import React from 'react'
import './auth-form.scss'
import { TabContent, TabPane } from 'reactstrap';

class AuthForm extends React.Component {

    state = {
        tabs: {
            signUp: 'signUp',
            login: 'login'
        },
        hidePassword: true,
        activeTab: 'signUp',
        inputName: '',
        lastName: '',
        email: '',
        password: ''
    }



    toggle(tab) {
        this.setState({
            activeTab: tab
        })
    }

    render() {
        return (
            <div className="panel">
                <div className="panel__header">
                    <div className="row no-gutters">
                        <Tab
                            className="tab"
                            isActive={this.state.tabs.signUp === this.state.activeTab}
                            toggle={() => this.toggle(this.state.tabs.signUp)}>SIgnUp</Tab>

                        <Tab
                            className="tab"
                            isActive={this.state.tabs.login === this.state.activeTab}
                            toggle={() => this.toggle(this.state.tabs.login)}>Login</Tab>
                    </div>
                </div>
                <div className="panel__body">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId={this.state.tabs.signUp}>
                            <div className="form__heading">Sign Up for Free</div>
                            <form className="auth-form" autoComplete="off">
                                <div className="row no-gutters">
                                    <div className="col-6">
                                        <input type="text" 
                                            placeholder="First Name*"
                                            value={this.state.inputName} 
                                            onChange={(e) => {
                                            this.setState({
                                                inputName: e.target.value
                                            })
                                        }}/>
                                        <label>First Name<span style={{color: '#3BA28A'}}>*</span></label>
                                        <span style={{right: 10}} className="icon-file-user"></span>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" 
                                            placeholder="Last Name*"
                                            value={this.state.lastName} 
                                            onChange={(e) => {
                                            this.setState({
                                                lastName: e.target.value
                                            })
                                        }}/>
                                        <label>Last Name<span style={{color: '#3BA28A'}}>*</span></label>
                                    </div>
                                </div>    
                                <div>
                                    <input type="email" 
                                        placeholder="Email Address*" 
                                        value={this.state.email} 
                                        onChange={(e) => {
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }}/>
                                    <label>Email Address<span style={{color: '#3BA28A'}}>*</span></label>
                                </div>
                                <div>
                                    <input type={this.state.hidePassword ? 'password' : 'text'} 
                                        placeholder="Set A Password*" 
                                        value={this.state.password} 
                                        onChange={(e) => {
                                        this.setState({
                                            password: e.target.value
                                        })
                                    }}/>
                                    <label>Set A Password<span style={{color: '#3BA28A'}}>*</span></label>
                                    {this.state.password.length > 0 && (
                                        <span className="icon-refresh-locked" onClick={() => this.setState({
                                            hidePassword: !this.state.hidePassword
                                        })}></span>
                                    )}
                                   
                                </div>
                                <button className="btn-signUp"><span>GET STARTED</span></button>
                            </form>
                        </TabPane>
                        <TabPane tabId={this.state.tabs.login}>
                            <div className="form__heading">Welcome Back!</div>
                            <form className="auth-form" autoComplete="off">
                                <div>
                                    <input type="email"
                                        placeholder="Email Address*"
                                        value={this.state.email}
                                        onChange={(e) => {
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} />
                                    <label>Email Address<span style={{ color: '#3BA28A' }}>*</span></label>
                                </div>
                                <div style={{marginBottom: 55}}>
                                    <input type={this.state.hidePassword ? 'password' : 'text'}
                                        placeholder="Set A Password*"
                                        value={this.state.password}
                                        onChange={(e) => {
                                            this.setState({
                                                password: e.target.value
                                            })
                                        }} />
                                    <label>Set A Password<span style={{ color: '#3BA28A' }}>*</span></label>
                                    {this.state.password.length > 0 && (
                                        <span className="icon-refresh-locked" onClick={() => this.setState({
                                            hidePassword: !this.state.hidePassword
                                        })}></span>
                                    )}
                                </div>
                                <span className="forgot-password">Forgot Password?</span>
                                <button className="btn-signUp"><span>LOG IN</span></button>
                            </form>
                        </TabPane>
                    </TabContent>
                </div>
                <div className="panel__footer">
                    
                </div>
            </div>
        )
    }
}

export default AuthForm


const Tab = ({
    isActive,
    className,
    style,
    toggle,
    children
}) => {

    const classNames = isActive ? ('active '.concat(className ? className : '')) : (''.concat(className ? className : ''))

    return (
        <div className={classNames} style={style ? style : null} onClick={toggle}>
            <div>{children}</div>
        </div>
    )
}