import React, { Component } from 'react';
import styled from "styled-components";
import SearchEngineOutputItem from './SearchEngineOutputItem';


class SearchEngineOutputList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    componentDidMount() {
        console.log("den här mountade")
    }
    render() {
        return (
            this.props.results.map(results => {
                return (
                    <SearchEngineOutputItem key={results.url} results={results} />
                ) 
            })
            // <p> Hej </p>
        )
    }
}

export default SearchEngineOutputList
