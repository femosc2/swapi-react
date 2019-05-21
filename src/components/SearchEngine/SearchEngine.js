import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";
import SearchEngineInput from './SearchEngineInput';
import SearchEngineOutputList from './SearchEngineOutputList';


class SearchEngine extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: "Luke",
            searchResults: null,

        }
        this.search = this.search.bind(this)
        this.getSearchValue = this.getSearchValue.bind(this)
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
        this.searchForFilms(), this.searchForStarships()]).then(axios.spread((people, vehicles, species, planets, films, starships ) => {
            let results = [...people.data.results, ...films.data.results, ...planets.data.results,
                ...species.data.results, ...starships.data.results, ...vehicles.data.results]
            this.setState({
                results
            })
        }))
    }
    getSearchValue(searchValue) {
        this.setState({
            searchValue
        })
    }
    render() {
        return (
            <section>
                <p>SearchEngine</p>
                <SearchEngineInput onInputChange={this.getSearchValue} />
                <button onClick={this.search}>Search</button>
                {this.state.results != null &&
                    <ul>
                        <SearchEngineOutputList results={this.state.results} />
                    </ul>
                }
            </section>
            
        )
    }
}

export default SearchEngine
