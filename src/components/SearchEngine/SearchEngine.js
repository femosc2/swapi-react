import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";
import SearchEngineInput from './SearchEngineInput';
import SearchEngineOutputList from './SearchEngineOutputList';


class SearchEngine extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: "",
            searchResults: null,

        }
        this.search = this.search.bind(this)
    }

    searchForPeople() {
        return axios.get("https://swapi.co/api/people/?search=" + this.state.searchValue)
    }
    searchForVehicles() {
        return axios.get("https://swapi.co/api/vehicles/?search=" + this.state.searchValue)
    }
    searchForSpecies() {
        return axios.get("https://swapi.co/api/species/?search=" + this.state.searchValue)
    }
    searchForStarships() {
        return axios.get("https://swapi.co/api/starships/?search=" + this.state.searchValue)
    }
    searchForPlanets() {
        return axios.get("https://swapi.co/api/planets/?search=" + this.state.searchValue)
    }
    searchForFilms() {
        return axios.get("https://swapi.co/api/films/?search=" + this.state.searchValue)
    }


    search() {
        console.log("hej")
        axios.all([this.searchForPeople(), this.searchForVehicles(), this.searchForSpecies(), this.searchForPlanets(),
        this.searchForFilms(), this.searchForStarships()]).then(axios.spread((people, vehicles, species, starships, films, planets ) => {
            this.setState({
                searchResults: [{
                    searchResultPeople: people,
                    searchResultFilms: films,
                    searchResultStarships: starships,
                    searchResultSpecies: species,
                    searchResultVehicles: vehicles,
                    searchResultPlanets: planets,
                }]
            })
        }))
    }
    getSearchValue(searchValue) {
        this.setState({
            searchValue
        })
    }
    render() {
        const search = () => {
            console.log("hej")
            axios.all([this.searchForPeople(), this.searchForVehicles(), this.searchForSpecies(), this.searchForPlanets(),
            this.searchForFilms(), this.searchForStarships()]).then(axios.spread((people, vehicles, species, starships, films, planets ) => {
                this.setState({
                    searchResults: [{
                        searchResultPeople: people,
                        searchResultFilms: films,
                        searchResultStarships: starships,
                        searchResultSpecies: species,
                        searchResultVehicles: vehicles,
                        searchResultPlanets: planets,
                    }]
                })
                console.log(this.state.searchResults)
            }))
            }
        return (
            <section>
                <p>SearchEngine</p>
                <SearchEngineInput onInputChange={this.getSearchValue} />
                {this.state.searchResults != null &&
                    <SearchEngineOutputList searchResults={this.state.searchResults} />
                }
                <button onClick={search}>Search</button>
            </section>
            
        )
    }
}

export default SearchEngine
