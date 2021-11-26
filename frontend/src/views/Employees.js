import {useDispatch, useSelector} from "react-redux";

// react-bootstrap components
import SearchField from "react-search-field";
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form, Tooltip, OverlayTrigger,
} from "react-bootstrap";

import  '../assets/css/list.css'
import 'font-awesome/css/font-awesome.min.css';


const Employees=({history, location})=>{

    const list=()=>{
            return(

                <Container fluid>
                    <div   className='table-entry'>
                        <Row  className=' click justify-content-center flex-row align-items-center' >
                            <Col className='click'   xs={10} md={1}>
                                <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                     src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                            </Col>
                            <Col className='click' xs={2} className='d-md-none'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                            <Col className='click' xs={6} md={6}>
                                <p className='click'>
                                    <span>Kashan Ali </span><br/>
                                    <span>3630221012313</span>
                                </p>

                            </Col>
                            <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                <OverlayTrigger
                                    overlay={
                                        <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                    }
                                >
                                    <Button   size='sm' className='btn-fill btn-padding btn-margin' variant="secondary"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                </OverlayTrigger>

                            </Col>
                            <Col md={1} className='d-none d-md-block'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                            onClick={(e)=>{console.log(e.target.checked)}}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </Row>
                    </div>


                    <div   className='table-entry'>
                        <Row  className=' click justify-content-center flex-row align-items-center' >
                            <Col className='click'   xs={10} md={1}>
                                <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                     src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                            </Col>
                            <Col className='click' xs={2} className='d-md-none'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                            <Col className='click' xs={6} md={6}>
                                <p className='click'>
                                    <span>Kashan Ali </span><br/>
                                    <span>3630221012313</span>
                                </p>

                            </Col>
                            <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                <OverlayTrigger
                                    overlay={
                                        <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                    }
                                >
                                    <Button   size='sm' className='btn-fill btn-padding btn-margin' variant="secondary"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                </OverlayTrigger>

                            </Col>
                            <Col md={1} className='d-none d-md-block'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                            onClick={(e)=>{console.log(e.target.checked)}}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </Row>
                    </div>

                    <div   className='table-entry'>
                        <Row  className=' click justify-content-center flex-row align-items-center' >
                            <Col className='click'   xs={10} md={1}>
                                <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                     src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                            </Col>
                            <Col className='click' xs={2} className='d-md-none'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                            <Col className='click' xs={6} md={6}>
                                <p className='click'>
                                    <span>Kashan Ali </span><br/>
                                    <span>3630221012313</span>
                                </p>

                            </Col>
                            <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                <OverlayTrigger
                                    overlay={
                                        <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                    }
                                >
                                    <Button   size='sm' className='btn-fill btn-padding btn-margin' variant="secondary"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                </OverlayTrigger>

                            </Col>
                            <Col md={1} className='d-none d-md-block'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                            onClick={(e)=>{console.log(e.target.checked)}}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </Row>
                    </div>

                    <div   className='table-entry'>
                        <Row  className=' click justify-content-center flex-row align-items-center' >
                            <Col className='click'   xs={10} md={1}>
                                <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                     src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                            </Col>
                            <Col className='click' xs={2} className='d-md-none'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                            <Col className='click' xs={6} md={6}>
                                <p className='click'>
                                    <span>Kashan Ali </span><br/>
                                    <span>3630221012313</span>
                                </p>

                            </Col>
                            <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                <OverlayTrigger
                                    overlay={
                                        <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                    }
                                >
                                    <Button   size='sm' className='btn-fill btn-padding btn-margin' variant="secondary"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                </OverlayTrigger>

                            </Col>
                            <Col md={1} className='d-none d-md-block'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                            onClick={(e)=>{console.log(e.target.checked)}}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </Row>
                    </div>

                    <div   className='table-entry'>
                        <Row  className=' click justify-content-center flex-row align-items-center' >
                            <Col className='click'   xs={10} md={1}>
                                <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                     src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                            </Col>
                            <Col className='click' xs={2} className='d-md-none'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                            <Col className='click' xs={6} md={6}>
                                <p className='click'>
                                    <span>Kashan Ali </span><br/>
                                    <span>3630221012313</span>
                                </p>

                            </Col>
                            <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                <OverlayTrigger
                                    overlay={
                                        <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                    }
                                >
                                    <Button   size='sm' className='btn-fill btn-padding btn-margin' variant="secondary"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                </OverlayTrigger>

                            </Col>
                            <Col md={1} className='d-none d-md-block'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                            onClick={(e)=>{console.log(e.target.checked)}}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </Row>
                    </div>

                    <div   className='table-entry'>
                        <Row  className=' click justify-content-center flex-row align-items-center' >
                            <Col className='click'   xs={10} md={1}>
                                <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                     src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                            </Col>
                            <Col className='click' xs={2} className='d-md-none'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                            <Col className='click' xs={6} md={6}>
                                <p className='click'>
                                    <span>Kashan Ali </span><br/>
                                    <span>3630221012313</span>
                                </p>

                            </Col>
                            <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                <OverlayTrigger
                                    overlay={
                                        <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                    }
                                >
                                    <Button   size='sm' className='btn-fill btn-padding btn-margin' variant="secondary"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                </OverlayTrigger>

                            </Col>
                            <Col md={1} className='d-none d-md-block'>
                                <Form.Check className='checkbox'>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            type="checkbox"
                                            onClick={(e)=>{console.log(e.target.checked)}}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                    </Form.Check.Label>
                                </Form.Check>
                            </Col>
                        </Row>
                    </div>

                </Container>
            )
    }

    return (
        <>
            {
                list()
            }
        </>
    );
}

export default Employees;
