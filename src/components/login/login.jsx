import React from "react";
import { Row, Col, FormControl } from 'react-bootstrap'
// import { postObject, transferCart, getObjectWithToken } from "../../services/CommonServices";
import '../register/register.css'
// import axios from 'axios'
// import config from '../../config'
import { withRouter, Link } from 'react-router-dom'
import { toast, Flip } from 'react-toastify';
// import { Subscribe } from "unstated";
// import CartContainer from "../../Cart";

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <div className="login-area gray-bg">
                    <div className="container">
                        <Row>
                            <Col md={6}>
                                <div className="login-content mb-30">
                                    {/* <h2 className="login-title">{this.props.strings.login} <span className="are-vendor"><a href="https://dashboard.bab-makkah.qpix.io/">{this.props.strings.loginVen}</a></span></h2> */}
                                    <p>تسجيل الدخول</p>
                                    {/* <div className="social-sign">
<a href="#">
<i className="fa fa-facebook" /> Sign in with facebook</a>
<a className="twitter" href="#">
<i className="fa fa-twitter" /> Sign in with twitter</a>
</div> */}
                                    {/* <form onSubmit={(e) => this.handleLogin(e, cart)}> */}
                                    <form >
                                        <label>التليفون المحمول*</label>
                                        <FormControl type="text" onChange={(e) => this.setState({ phone_number_login: e.target.value })} placeholder="0523456789" />
                                        <label>كلمة المرور*</label>
                                        <FormControl type="password" onChange={(e) => this.setState({ password_login: e.target.value })} placeholder="******" />
                                        <div className="login-lost">
                                            {/* <span className="log-rem">
     <FormGroup>
         <Checkbox>Remember me</Checkbox>
     </FormGroup>
 </span> */}
                                            <span className="forgot-login">
                                                <Link to="/reset-password">نسيت كلمة المرور؟</Link>
                                            </span>
                                        </div>
                                        <input className="login-sub main-btn" type="submit" value="دخول" />
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);
