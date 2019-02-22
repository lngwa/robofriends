import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { searchRobots } from '../reducers'
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css'

import { setSearchField, requestRobots} from '../actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobot: () => requestRobots()(dispatch)	
	}	
}

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobot();			
	}

	render(){
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {return robot.name.toLowerCase().includes(searchField.toLowerCase())});
		console.log(robots);
		const content =  isPending ? <h1>Loading ...</h1> : <CardList robots = {filteredRobots}/>

		return (
			<div className="tc pa2 ma2"> 
			<h1 className="f1">RoboFriends</h1>
			<SearchBar  search={onSearchChange} />
			<hr />
			<Scroll>
				{ content }
			</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);