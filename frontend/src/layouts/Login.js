import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import SignInLoader from "../components/Loaders/signInLoader";
import '../assets/css/login.css'
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
                    <h2 className='login-welcome'>Welcome back to Shield IT</h2>


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
                    <h3 className="login-forgot">Forgot Password?</h3>
                    <YellowButton type="Submit" width={200} content="Login"/>
                </div>


            </div>

    );
};

export default Login;