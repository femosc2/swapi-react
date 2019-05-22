import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";
import SearchEngineInput from './SearchEngineInput';
import SearchEngineOutputList from './SearchEngineOutputList';



const StyledUl = styled.ul`
margin: 0 auto;
width: 50%;
padding: 0;
@media only screen and (max-width: 768px) {
    width: 100%;
}

`

const StyledButton = styled.button`
border: none;
background-color: rgba(255, 255, 255, 0.5);
font-size: 35px;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
width: 20%;
margin: 0 auto;
margin-top: 25px;
text-align: center;
transition: 1s;
font-family: 'Roboto Condensed', sans-serif;
@media only screen and (max-width: 768px) {
    width: 75%;
}

&:hover {
    background: rgba(255,126,119,1);
    filter: hue-rotate(180deg);
    transition: 1s;
    cursor: pointer;
}
&:active {
    background: #fff;
    transition 0.3s;
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.0);
}
`

const StyledSection = styled.section`
width: 100%;
margin: 0 auto;
text-align: center;
`
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
            <StyledSection>
                <SearchEngineInput onInputChange={this.getSearchValue} />
                <br />
                <StyledButton onClick={this.search}>Search</StyledButton>
                {this.state.results != null &&
                    <StyledUl>
                        <SearchEngineOutputList results={this.state.results} />
                    </StyledUl>
                }
            </StyledSection>
            
        )
    }
}

export default SearchEngine
