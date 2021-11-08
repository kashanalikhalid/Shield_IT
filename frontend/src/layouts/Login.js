import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import SignInLoader from "../components/Loaders/signInLoader";
import '../assets/css/registration.css'
import logo from '../assets/img/logo.png'
import { faKey, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YellowButton from "../components/Buttons/YellowButton";

import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col, Alert,
} from "react-bootstrap";

const Login = ({history}) => {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()



    useEffect(()=>{

    },)


    return (
            <div className="login">
                <div className="login-container d-flex flex-column align-items-center">
                    <img  src={logo} width={300} height={100} alt="logo"/>
                    <h2 className='login-welcome'>Create an account</h2>


                    <Form >
                            <Col className="mt-3" md="12">



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
                                    <FontAwesomeIcon className="login-field-icon" icon={faEnvelope} />

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
                                    <FontAwesomeIcon className="login-field-icon" icon={faKey} />
                                </Form.Group>
                            </Col>

                    </Form>
                    <h3 onClick={()=>{history.push('/forgotpassword')}} className="login-forgot">Forgot Password?</h3>
                    <YellowButton onClick={()=>{history.push('/admin/dashboard')}} className="mt-3" type="Submit" width={300} content="Sign In"/>
                    <p className="login-signup mt-3">Dont have an account? <span onClick={()=>{history.push('/signup')}}>Sign up</span></p>
                </div>


            </div>

    );
};

export default Login;
