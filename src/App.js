import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Print from './pages/Print/Print';
import Advert from './pages/Advert/Advert';
import Internet from './pages/Internet/Internet';
import Design from './pages/Design/Design';
import Photo from './pages/Photo/Photo';
import Right from './pages/Right/Right';
import Width from './pages/Width/Width';
import Trans from './pages/Trans/Trans';
import { createRef, useRef } from 'react';
import Price from './pages/Price/Price';
function App() {
	const ref = useRef()
	const scrollEffect = targetRef => {
		targetRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};
  return (
		<div className='App'>
			<Header ref={ref} scroll={scrollEffect} />
			<Routes>
				<Route exact path='/' element={<Main ref={ref} />} />
				<Route path='/print' element={<Print />} />
				<Route path='/advertising' element={<Advert />} />
				<Route path='/internet' element={<Internet />} />
				<Route path='/design' element={<Design />} />
				<Route path='/photo' element={<Photo />} />
				<Route path='/right' element={<Right />} />
				<Route path='/width' element={<Width />} />
				<Route path='/trans' element={<Trans />} />
				<Route path='/price' element={<Price/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
