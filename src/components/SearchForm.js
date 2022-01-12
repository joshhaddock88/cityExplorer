import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({getLocation, searchedCity}) => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Search a City</Form.Label>
                    <Form.Control onChange={searchedCity} placeholder="Enter City" />
                    <Form.Text>
                        Search for a city to see some information!
                    </Form.Text>
                    <Button onClick={getLocation}>Explore!</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchForm;