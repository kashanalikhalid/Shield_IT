import React, {useState,useEffect} from 'react';
import '../assets/css/login.css'
import '../assets/css/login-stars.css'
import adminAvatar from '../assets/img/admin.jpg'
import superAdminAvatar from '../assets/img/super-admin.jpg'
import logo from '../assets/img/logo.svg'
import checkSymbol from '../assets/img/check.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
import Switch from "react-switch";
import YellowButton from "../components/Buttons/YellowButton";
import {useDispatch,useSelector} from "react-redux";
import SignInLoader from "../components/Loaders/signInLoader";

import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col, Alert,
} from "react-bootstrap";

const Login = ({history}) => {
    const [selectedUser,setSelectedUser]=useState('Admin')
    const [checkbox, setCheckbox]=useState('none')
    const [checked,setChecked]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [remember,setRemember]=useState(false)


    const handleSwitchChange=()=> {
        //false==admin
        //true=superadmin
        if(checked===true)
        {
            setChecked(false)
            setSelectedUser('Admin')
        }else{
            setChecked(true)
            setSelectedUser('Super Admin')

        }
    }

    const submitHandler=(e)=>{
        e.preventDefault();
    }


    const checkboxHandler=()=>{
        if(checkbox==='none') {
            setCheckbox('block');
            setRemember(true);
        }
        else {
            setCheckbox('none')
            setRemember(false)
        }

    }


    return (
        <div className='login'>
            <div className="row login-container container no-gutters mt-3 pr-2 pt-2">
                <div className="col-12 col-md-6 login-left no-gutters text-center d-flex flex-column">

                    <Row>
                        <img  className="login-logo mt-2" src={logo} alt="logo"/>
                    </Row>
                    <h2 className="mt-4 pt-4">Login to you account!</h2>
                    <Container>
                        <Alert className='login-error' variant="danger">
                            <button
                                aria-hidden={true}
                                className="close login-error-close"
                                data-dismiss="alert"
                                type="button"
                            >
                                {/*<i className="nc-icon nc-simple-remove"></i>*/}
                            </button>
                            <span>
                    Wrong Email or Password
                  </span>
                        </Alert>

                        <Form onSubmit={e=>{submitHandler(e)}}>
                            <Row className="justify-content-center">
                                <Col className="mt-3" md="10" sm="">
                                    <Form.Group className="yellow-form-group mt-4">
                                        <Form.Control
                                            className="yellow-form-field"
                                            required='true'
                                            placeholder="Email"
                                            type="email"
                                            value={email}
                                            onChange={e=>{setEmail(e.target.value)}}
                                        >
                                        </Form.Control>
                                        {/*<FontAwesomeIcon className="login-field-icon" icon={faEnvelope} />*/}

                                    </Form.Group>

                                    <Form.Group className="yellow-form-group mt-4">
                                        <Form.Control
                                            className="yellow-form-field"
                                            required='true'
                                            placeholder="Password"
                                            type="password"
                                            value={password}
                                            onChange={e=>setPassword(e.target.value)}
                                        >
                                        </Form.Control>
                                        {/*<FontAwesomeIcon className="login-field-icon" icon={faKey} />*/}
                                    </Form.Group>

                                    <Form.Group onClick={checkboxHandler} className="yellow-form-group mt-4">
                                        <label className=" px-2 login-form-checkbox--label"  >Remember Me</label>
                                        <img style={{display:`${checkbox}`}} className="login-form-checkbox--img"  width={23} height={23} src={checkSymbol} alt=""/>
                                        <div className="login-form-checkbox">
                                        </div>


                                    </Form.Group>
                                    <h5 className="login-forgot ml-5 mt-5">Forgot password?</h5>
                                    <YellowButton onClick={()=>{history.push('/admin/dashboard')}} type="submit" className="mt-2 float-left" width={200} content="Login"/>
                                    <Row className="d-flex flex-column align-items-center justify-content-center d-md-none">
                                        <Switch
                                            className="mt-2 ml-5"
                                            offColor='#fdda00'
                                            onColor='#000000'
                                            onChange={handleSwitchChange}
                                            checked={checked}
                                            checkedIcon={null}
                                            uncheckedIcon={null}
                                        />
                                        <p className="ml-5 login-mobile-user">{checked===false? 'Admin' : 'Super Admin'}</p>

                                    </Row>

                                </Col>

                            </Row>


                        </Form>
                    </Container>
                    <div className="mt-auto mb-3">
                        <Row  className=" no-gutters d-flex flex-row justify-content-start align-items-start">
                            <Col  xs={1}>
                                <SocialIcon bgColor="#6001d2" className="login-social" url="https://yahoo.com/" />
                            </Col>
                            <Col xs={1}>
                                <SocialIcon  className="login-social" url="https://facebook.com/" />
                            </Col>
                            <Col xs={1}>
                                <SocialIcon  className="login-social" url="https://linkedin.com/jaketrent" />
                            </Col>

                        </Row>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Login;
