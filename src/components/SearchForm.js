import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = () => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Search a City</Form.Label>
                    <Form.Control placeholder="Enter City" />
                    <Form.Text>
                        Search for a city to see some information!
                    </Form.Text>
                    <Button>Explore!</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchForm;