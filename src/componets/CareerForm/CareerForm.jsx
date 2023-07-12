import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import AOS from 'aos';
// IMAGES START

import FileIcon from '../../assets/images/file-icon.svg';

function CareerForm() {
    const [fileName, SetFileName] = useState();

    function showPreview(event) {
        if (event.target.files.length > 0) {
            SetFileName(event.target.files[0].name);
        }
    }

    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-back',
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <div className='form-card' data-aos='fade-up'>
            <h6>Application Form</h6>
            <Form>
                <Row>
                    <Col md='6'>
                        <Form.Group className='form-group'>
                            <Form.Control
                                type='text'
                                placeholder='Full Name *'
                            />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group className='form-group'>
                            <Form.Control
                                type='text'
                                placeholder='Full Name *'
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='form-group'>
                            <Form.Select defaultValue='Select Position'>
                                <option>Select Position</option>
                                <option>Product Designer</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='form-group'>
                            <div className='fileupload'>
                                <input type='file' onChange={showPreview} />
                                <span>
                                    <img
                                        src={FileIcon}
                                        alt='FileIcon'
                                        className='me-2'
                                    />
                                    {fileName
                                        ? fileName
                                        : 'Upload your Resume or CV'}
                                </span>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='form-btn'>
                            <Button variant='secondary'>Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default CareerForm;
