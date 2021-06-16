import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	winter: {
		text: 'Burr! It is chilly',
		iconName: 'snowflake'
	},
	summer: {
		text: 'Lets hit the beach',
		iconName: 'sun'
	}
}

const getSeason = (lat, month) => {
	if( month > 2 && month < 9 ){
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const {text, iconName} = seasonConfig[season]

	return(
		<div className = {`season-display ${season}`}>
			<i className={`${iconName} icon massive icon-left`}></i>
			<h1>{text}</h1>
			<i className={`${iconName} icon massive icon-right`}></i>
		</div>
	); 
}

export default SeasonDisplay;