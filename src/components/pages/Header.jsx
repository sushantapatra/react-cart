import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import Alert from './Alert';

const Header = (props) => {
	const [theme,setTheme] =useState('dark')
	const [alert,setAlert]=useState(null)

	const showAlert=(message,type)=>{
		setAlert({
			msg:message,
			type:type
		})
		setTimeout(() => {
			setAlert(null)
		}, 1500);
	}

	return (
		<div>
			<nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
					<img src={logo} alt="" width="50" height="35" className="d-inline-block align-text-top"/>
					{props.title}</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">About</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact Us</Link>
							</li>
						
						</ul>
						<select onChange={(e)=>{
							const selectedText = e.target.options[e.target.selectedIndex].text;
								setTheme(e.target.value)
								showAlert(`${selectedText} mode enabled`,'success')
							}}>
							<option value="dark">Dark Mode</option>
							<option value="light">Light Mode</option>
						</select>
					
					</div>̦
				</div>
			</nav>
			<Alert alertMessage={alert}/>
		</div>
		
	)
}

Header.propTypes ={
	title:PropTypes.string.isRequired
}
Header.defaultProps={
	title:'Sushanta'
}
export default Header