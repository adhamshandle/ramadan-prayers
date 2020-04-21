import React from "react";
import { Row, Col, FormGroup, FormControl, ProgressBar, DropdownButton } from 'react-bootstrap'
// import { postObject, getAllObjects } from "../../services/CommonServices";
import './register.css'
import { withRouter, Link } from 'react-router-dom'
import { toast, Flip } from 'react-toastify';
// import config from "../../../src/config";

// var ReactS3Uploader = require("react-s3-uploader");
// const shortid = require('shortid');
class Register extends React.Component {
    toastSettings = {
        position: "top-right",
        autoClose: 5000,
        transition: Flip,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: "sub-toast",
    }
    state = {
        nameAr: '',
        nameEn: '',
        contactNamefirstEn: '',
        contactNamefirstAr: '',
        contactNamelastEn: '',
        contactNamelastAr: '',
        email: '',
        phone_number: '',
        city: 'Jeddah',
        cities: [],
        zip: '21589',
        cr_url: '',
        policy_checked: false,
        progress: 0,
    }
    handleLogin(e) {
        e.preventDefault();
        toast.dismiss()
        if (!this.state.contactNamefirstEn.trim() || !this.state.contactNamelastEn.trim() || !this.state.nameEn.trim() || !this.state.email.trim() || !this.state.phone_number.trim() || !this.state.city.trim() || !this.state.zip.trim()) {
            toast.error(this.props.strings.typeValues, this.toastSettings)
            return;
        }

        if (isNaN(this.state.phone_number)) {
            toast.error(this.props.strings.inValidPhone, this.toastSettings)
            return;
        }

        if (!this.state.policy_checked) {
            toast.error(this.props.strings.acceptPolicy, this.toastSettings)
            return;
        }


        // postObject("vendors/self-register", {
        //     email: this.state.email.trim(),
        //     name: {
        //         en: this.state.nameEn.trim(),
        //         ar: this.state.nameAr.trim()
        //     },
        //     contactNameFirst: {
        //         en: this.state.contactNamefirstEn.trim(),
        //         ar: this.state.contactNamefirstAr.trim()
        //     },
        //     contactNameLast: {
        //         en: this.state.contactNamelastEn.trim(),
        //         ar: this.state.contactNamelastAr.trim()
        //     },
        //     city: this.state.city,
        //     zip: this.state.zip,
        //     phone_number: this.state.phone_number.trim(),
        //     cr_url: this.state.cr_url,
        // })
        //     .then((response) => {
        //         toast.success(this.props.strings.pendingApproval, this.toastSettings)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         toast.error(this.props.strings.alreadySubmitted, this.toastSettings)
        //     })
        this.setState({
            nameAr: '',
            nameEn: '',
            contactNamefirstEn: '',
            contactNamefirstAr: '',
            contactNamelastEn: '',
            contactNamelastAr: '',
            email: '',
            phone_number: '',
            zip: ''
        })

    }
    checkEnLang = (e) => {


        const ENreg = /[\u0600-\u06FF]/
        if (ENreg.test(e.key)) {
            e.preventDefault();
            toast.error(this.props.strings.onlyEnglish, this.toastSettings)
        }

    }
    checkArLang = (e) => {

        const ARreg = /[a-zA-Z]+/g
        if (ARreg.test(e.key)) {
            e.preventDefault();
            toast.error(this.props.strings.onlyArabic, this.toastSettings)
        }

    }

    handleFinishedUpload = (info) => {
        const splitInfo = info.signedUrl.split("?")[0]
        this.setState({ cr_url: splitInfo })
    };

    onProgress = info => {
        this.setState({ progress: info });
        if (info === 100) {
            this.setState({ progress: 0 });

        }
    };

    onUploadError = info => {
        console.log(info);
        var _notificationSystem = this.refs.notificationSystem;
        _notificationSystem.addNotification({
            title: <span data-notify="icon" className="pe-7s-close" />,
            message: <div>{"No internet connection "}</div>,
            level: "error",
            position: "tr",
            autoDismiss: 3
        });
    };

    componentDidMount() {
        window.scroll(0, 0)
        // getAllObjects('order/cities?country=SA')
        //     .then((response) => {
        //         this.setState({ cities: response.data })
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }


    render() {
        const uploadOptions = {
            // server: config.API_URL.slice(0, -1),
            signingUrlWithCredential: true,
            // s3path: "vendors/" + shortid.generate() + "/",
            autoUpload: true,
            signingUrl: "/s3/sign",
            onError: this.onUploadError
        };
        return (
            <div className="Login Reset" style={{ direction: "rtl" }}>
                <div className="login-area gray-bg">
                    <div className="container">
                        <Row>
                            <Col mdOffset={3} md={12}>

                                <div className="login-content mb-30">
                                    {/* <h2 className="login-title">{this.props.strings.registerVendor}</h2> */}
                                    <h2 className="login-title" style={{ direction: "rtl" }}> <span className="are-vendor">تسجيل حساب</span></h2>

                                    <form onSubmit={this.handleLogin.bind(this)}>
                                        <FormGroup controlId="vendor-register">
                                            <Row>
                                                <Col md={12}>
                                                    <label>اﻷسم</label>
                                                    <FormControl id="vendor-nameAr" onKeyPress={(e) => this.checkArLang(e)} type="text" onChange={(e) => this.setState({ nameAr: e.target.value })} placeholder="اسم" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <label>البريد اﻷلكتروني*</label>
                                                    <FormControl id="vendor-email" type="email" onChange={(e) => this.setState({ email: e.target.value })} placeholder="example@domain.com" />
                                                </Col>
                                                <Col md={12}>
                                                    <label>التليفون المحمول*</label>
                                                    <FormControl id="vendor-phoneNumber" type="text" onChange={(e) => this.setState({ phone_number: e.target.value })} placeholder="0123456789" />
                                                </Col>
                                            </Row>
                                            <input className="login-sub main-btn" type="submit" value="ارسال" />
                                        </FormGroup>
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
export default withRouter(Register);