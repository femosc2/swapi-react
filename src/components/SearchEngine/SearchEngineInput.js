import React, { Component } from 'react';
import styled from "styled-components";


class SearchEngineInput extends Component {
    constructor() {
        super()
        this.state = {
            value: "Anakin Skywalker"
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
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        )
    }
}

export default SearchEngineInput
