import React, { Component } from 'react';
import styled from "styled-components";


const StyledListItem = styled.li`
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
margin: 0 auto;
margin-top: 20px;
width: 75%;
list-style: none;
text-align: center;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 35px;
padding: 0;
@media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0%;
}
`

const StyledH4 = styled.h4`
max-width: 100%;
text-align: center;
`
const StyledLi = styled.li`
color: black;
text-align: center;
padding: 0;
padding-top: 1px;
`

const StyledH2 = styled.h2`
color: black;
text-align: center;
`

const StyledUl = styled.ul`
color: black;
list-style: none;
text-align: center;
padding: 0;
`
const StyledA = styled.a`
color: inherit;
transition: 1s;

&:hover {
    cursor: pointer;
    transition: 1s;
    color: rgba(255,126,119,1);
}
`

class SearchEngineOutputItem extends Component {
    componentDidMount() {
        console.log("Listitem mounted")
    }
    render() {
        return (
            <StyledListItem key={this.props.results.url}>
                <StyledH2> {this.props.results.name} {this.props.results.title} </StyledH2>
                {this.props.results.films !== undefined && <StyledH4> Appeared in: </StyledH4>}
                <StyledUl>
                {this.props.results.films !== undefined && this.props.results.films.map(film => {
                    return (
                        <StyledLi> <StyledA href={film}>{film}</StyledA> </StyledLi>
                    )
                })}
                </StyledUl>
                <StyledH4> General Information </StyledH4>
                <StyledUl>
                    <StyledLi> {this.props.results.model !== undefined && "Model: " + this.props.results.model}</StyledLi>
                    <StyledLi> {this.props.results.manufacturer !== undefined && "Manufacturer: " + this.props.results.manufacturer}</StyledLi>
                    <StyledLi> {this.props.results.birth_year !== undefined && "Born: " + this.props.results.birth_year}</StyledLi>
                    <StyledLi> {this.props.results.height !== undefined && "Height: " + this.props.results.height + "cm"} </StyledLi>
                    <StyledLi> {this.props.results.mass !== undefined && "Mass: " + this.props.results.mass + "kg"}</StyledLi>
                    <StyledLi> {this.props.results.length !== undefined && "Length: " + this.props.results.length}</StyledLi>
                    <StyledLi> {this.props.results.gender !== undefined && "Gender: " + this.props.results.gender}</StyledLi>
                    <StyledLi> {this.props.results.eye_color !== undefined && "Eye Color: " + this.props.results.eye_color}</StyledLi>
                    <StyledLi> {this.props.results.cargo_capacity !== undefined && "Cargo Capacity:" + this.props.results.cargo_capacity}</StyledLi>
                    <StyledLi> {this.props.results.hyperdrive_rating !== undefined && "Hyperdrive Rating: " + this.props.results.hyperdrive_rating}</StyledLi>
                    <StyledLi> {this.props.results.climate !== undefined && "Climate: " + this.props.results.climate}</StyledLi>
                    <StyledLi> {this.props.results.terrain !== undefined && "Terrain: " + this.props.results.terrain}</StyledLi>
                    <StyledLi> {this.props.results.rotation_period !== undefined && "Hours for a single rotation:  " + this.props.results.rotation_period}</StyledLi>
                    <StyledLi> {this.props.results.gravity !== undefined && "Gravity: " + this.props.results.gravity}</StyledLi>
                    <StyledLi> {this.props.results.max_atmosphering_speed !== undefined && "Top Speed: " + this.props.results.max_atmosphering_speed  + " mph"}</StyledLi>
                    <StyledLi> {this.props.results.average_height !== undefined && "Average Height: " + this.props.results.average_height + "cm"}</StyledLi>
                    <StyledLi> {this.props.results.average_lifespan !== undefined && "Average Lifespan: " + this.props.results.average_lifespan + " years"}</StyledLi>
                    <StyledLi> {this.props.results.language !== undefined && "Language: " + this.props.results.language}</StyledLi>
                    <StyledLi> <StyledA href={this.props.results.homeworld}>{this.props.results.homeworld !== undefined && "Homeworld: " + this.props.results.homeworld}</StyledA></StyledLi>
                    <StyledLi> {this.props.results.director !== undefined && "Director: " + this.props.results.director}</StyledLi>
                    <StyledLi> {this.props.results.producer !== undefined && "Producer: " + this.props.results.producer}</StyledLi>
                    <StyledLi> {this.props.results.release_date !== undefined && "Release Date: " + this.props.results.release_date}</StyledLi>
                    
                {/* </StyledUl>
                {this.props.results.residents !== undefined && <StyledH4> Residents </StyledH4>}
                <StyledUl>
                    {this.props.results.residents !== undefined && this.props.results.residents.map(resident => {
                    return (
                        <StyledLi> {resident} </StyledLi>
                    )
                    })}
                </StyledUl>
                {this.props.results.people !== undefined && <StyledH4> Notable members of species </StyledH4>}
                <StyledUl>
                    {this.props.results.people !== undefined && this.props.results.people.map(people => {
                    return (
                        <StyledLi> {people} </StyledLi>
                    )
                    })}
                </StyledUl>
                {this.props.results.characters !== undefined && <StyledH4> Featured Characters </StyledH4>}
                <StyledUl>
                    {this.props.results.characters !== undefined && this.props.results.characters.map(character => {
                    return (
                        <StyledLi> {character} </StyledLi>
                    )
                    })}
                </StyledUl>
                {this.props.results.planets !== undefined && <StyledH4> Featured Planets </StyledH4>}
                <StyledUl>
                    {this.props.results.planets !== undefined && this.props.results.planets.map(planet => {
                    return (
                        <StyledLi> {planet} </StyledLi>
                    )
                    })}
                </StyledUl>
                {this.props.results.species !== undefined && <StyledH4> Featured Species </StyledH4>}
                <StyledUl>
                    {this.props.results.species !== undefined && this.props.results.species.map(specie => {
                    return (
                        <StyledLi> {specie} </StyledLi>
                    )
                    })}
                </StyledUl>
                {this.props.results.vehicles !== undefined && <StyledH4> Featured Vehicles </StyledH4>}
                <StyledUl>
                    {this.props.results.vehicles !== undefined && this.props.results.vehicles.map(vehicle => {
                    return (
                        <StyledLi> {vehicle} </StyledLi>
                    )
                    })}
                </StyledUl>
                {this.props.results.residents !== undefined && <StyledH4> Featured Starships </StyledH4>}
                <StyledUl>
                    {this.props.results.residents !== undefined && this.props.results.residents.map(resident => {
                    return (
                        <StyledLi> {resident} </StyledLi>
                    )
                    })} */}
                </StyledUl>
            </StyledListItem>
        )
    }
}

export default SearchEngineOutputItem
