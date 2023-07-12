import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Faqs() {
    return (
        <div className='faqs-section' data-aos='fade-up' data-aos-delay='200'>
            <Accordion defaultActiveKey='0' flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Regulated Broker</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                        What influences forex prices?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                        How can I start trading forex?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Download forex brochure</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className='text-center'>
                <Link to='/faqs' className='btn btn-primary'>
                    View More
                </Link>
            </div>
        </div>
    );
}

export default Faqs;
