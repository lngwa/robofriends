import React, {Component} from 'react';
import {robots} from './robots';
import Card from './Card';

class CardList extends Component{
	render(){
		return robots.map(user => <Card id={user.id} name={user.name} email={user.email} />);
	}
}

export default CardList