import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
import styled from 'styled-components'; 

const Sprite = styled.img`
     width: 5em;
     height: 5em;
     
`;
const Card = styled.div`
box-shadow: 7px 9px 9px -3px rgba(0,0,0,0.75);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
&:focus,
&:hover,
&:visited,
&:link,
&:active {
  text-decoration: none;
}
`;

export default class PokemonCard extends Component {
   state = {
       name:'',
       imgUrl: '',
       pokemonIndex: '',

   }
   componentDidMount (){
    const {name, url}  = this.props;
    const pokemonIndex = url.split("/")[url.split('/').length -2];
    const imgUrl = `https://github.com/pokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
   
    this.setState({
        name: name,
        imgUrl: imgUrl,
        pokemonIndex: pokemonIndex
    }); 
}
    render() {

    
    
         
        return (
            <div className="col-md-3 col-sm-6 mb-5">
               <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                <Card className="card" id="card">
                    
                <h5 className="card-header">{this.state.pokemonIndex}</h5>
                <Sprite className="card-img-top rounded mx-auto mt-2"
                src={this.state.imgUrl}>
                  
                </Sprite>
                <div className="card-body mx-auto">
                  <h6 className="card-title">{this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h6>
                </div>
                  
                </Card>
                </StyledLink>

            </div>
        )
    }
}
