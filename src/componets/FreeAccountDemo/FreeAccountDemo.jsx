import React from 'react';
import { Button, Form } from 'react-bootstrap';

import CloseIcon from '../../assets/images/close-icon.svg';

function FreeAccountDemo(props) {
    return (
        <section className='account-demo-section-wrap'>
            <div className='account-demo-section-inner'>
                <div className='account-demo-section'>
                    <div
                        className='close-icon'
                        onClick={(e) => {
                            e.preventDefault();
                            props.setToggleFreeAccountDemo(false);
                        }}
                    >
                        <img src={CloseIcon} alt='CloseIcon' />
                    </div>
                    <h3>Register for a free demo account</h3>
                    <p>
                        We’ll send you a confirmation email with your account
                        details. You’ll be able to start practising trading in
                        just a few minutes.
                    </p>
                    <Form>
                        <Form.Group className='form-group form-group-2'>
                            <Form.Select
                                defaultValue='Client type*'
                                className='form-control-2'
                            >
                                <option>Client type*</option>
                                <option>Option 1</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='form-group form-group-2'>
                            <Form.Control
                                type='text'
                                className='form-control-2'
                                placeholder='Full Name *'
                            />
                        </Form.Group>
                        <Form.Group className='form-group form-group-2'>
                            <Form.Control
                                type='text'
                                className='form-control-2'
                                placeholder='Last name*'
                            />
                        </Form.Group>
                        <Form.Group className='form-group form-group-2'>
                            <Form.Select
                                defaultValue='Select country residance*'
                                className='form-control-2'
                            >
                                <option>Select country residance*</option>
                                <option>Option 1</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='form-group form-group-2'>
                            <Form.Control
                                type='text'
                                className='form-control-2'
                                placeholder='Mobile number*'
                            />
                        </Form.Group>
                        <div className='form-btn'>
                            <Button variant='secondary' className='w-100'>
                                Open demo account
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default FreeAccountDemo;
