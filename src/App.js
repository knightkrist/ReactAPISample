import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import Card from './card';

const CartList = (props) =>{
return(
  <div>
    {props.cards1.map(card2 => <Card key={card2.id} {...card2} />)}
  </div>
);
};

class App extends Component {
  state={
    cards1 :[]
  };

  addNewCard = (cardInfo)=>{
    this.setState(prevState => ({
      cards1:prevState.cards1.concat(cardInfo)
    }))
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
      <CartList cards1 ={this.state.cards1}/>
      </div>
    );
  }
}



export default App;
