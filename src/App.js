import React from 'react'
import './App.css';
import {Routes,Route} from "react-router-dom";

import Header from './components/pages/Header';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
//import Footer from './components/pages/Footer';

function App() {
	return (
		<>
		<div className="App">
			<Header title="Amazon"/>
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
			{/*<Footer title="Amazon"/>*/}
		</div>
		</>	
	);
}

export default App;
