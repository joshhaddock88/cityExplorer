import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './css/SearchForm.css';

const SearchForm = ({getLocation, searchedCity}) => {
    return (
        <div class='searchForm'>
            <Form>
                <Form.Group>
                    <Form.Label id="formLabel">Search a City</Form.Label>
                    <Form.Control onChange={searchedCity} placeholder="Enter City" />
                    <Form.Text>
                        Search for a city to see some information!
                    </Form.Text>
                    <Button id="formButton" onClick={getLocation}>Explore!</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchForm;