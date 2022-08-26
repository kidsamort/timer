import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import './styles.css';

function App() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showSemicolon, setShowSemicolon] = useState(false);

	useEffect(() => {
		setInterval(() => {
			const now = moment();
			const then = moment('2022-08-29 12:12:12', 'YYYY-MM-DD hh:mm:ss');
			const countdown = moment(then - now);
			setDays(countdown.format('D'));
			setHours(countdown.format('HH'));
			setMinutes(countdown.format('mm'));
			setSeconds(countdown.format('ss'));
		}, 1000);
	}, []);

	return (
		<div className="app">
			<h1 className="title">Сайт откроется через</h1>
			<div className="timer-container">
				<div className="timer">
					{days}
					<span>дней</span>
				</div>
				{showSemicolon ? <div className="semicolon">:</div> : null}
				<div className="timer">
					{hours}
					<span>часов</span>
				</div>
				{showSemicolon ? <div className="semicolon">:</div> : null}
				<div className="timer">
					{minutes}
					<span>минут</span>
				</div>
				{showSemicolon ? <div className="semicolon">:</div> : null}
				<div className="timer">
					{seconds}
					<span>секунд</span>
				</div>
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
