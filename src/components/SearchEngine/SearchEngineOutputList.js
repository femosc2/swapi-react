import React, { Component } from 'react';
import styled from "styled-components";


class SearchEngineOutputList extends Component {
    constructor(props) {
        super(props)
        console.log(props.searchResults[0].planets.data.results)
    }
    componentDidMount() {
        console.log("den här mountade")
    }
    render() {
        return (
            this.props.searchResults[0].people.data.results.map(people => {
                return (
                    <p> {people.name}</p>
                ) 
            })
            // <p> Hej </p>
        )
    }
}

export default SearchEngineOutputList
