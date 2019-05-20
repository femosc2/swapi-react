import React, { Component } from 'react';
import styled from "styled-components";


class SearchEngineOutputList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    componentDidMount() {
        console.log("den här mountade")
        console.log(this.props)
    }
    render() {
        return (
            <p>SearchEngineOutputItem</p>
        )
    }
}

export default SearchEngineOutputList
