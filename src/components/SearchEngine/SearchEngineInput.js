import React, { Component } from 'react';
import styled from "styled-components";


const StyledInput = styled.input`
border: none;
background-color: rgba(255, 255, 255, 0.5);
min-width: 50%;
font-size: 35px;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
font-family: 'Roboto Condensed', sans-serif;
@media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0%;
}

`

class SearchEngineInput extends Component {
    constructor() {
        super()
        this.state = {
            value: "Luke"
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({
            value: event.target.value
        })
        this.props.onInputChange(this.state.value)
    }

    render() {
        return (
            <StyledInput type="text" value={this.state.value} onChange={this.handleChange} />
        )
    }
}

export default SearchEngineInput
