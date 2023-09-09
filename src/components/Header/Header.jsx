import React, { useState } from 'react';
import h from './Header.module.css';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
import auth2 from '../../assets/image/auth2.png'
//  import LinkScroll from 'react-linkscroll';
//  import { Link, animateScroll as scroll } from 'react-scroll';

const Header = ({ ref, scroll }) => {
	const [auth, setAuth] = useState(false);
	const [modal, setMoadl] = useState(false);

	const toggleModal = () => {
		setAuth(!auth);
		localStorage.setItem('storedData', JSON.stringify(!auth));
	};
	if (auth) {
		document.body.classList.add('activeModal');
	} else {
		document.body.classList.remove('activeModal');
	}

 const anchors = document.querySelectorAll('a[href*="#"]');

 for (let anchor of anchors) {
		anchor.addEventListener('click', function (event) {
			event.preventDefault();
			const blockID = anchor.getAttribute('href');
			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
 }
	return (
		<div className={h.wrapper}>
			<div className={h.logo}>
				<Link to='/'>
					<GlobalSvgSelector id='logo' />
				</Link>
			</div>
			<div className={h.logo2}>
				<Link to='/'>
					<GlobalSvgSelector id='logo2' />
				</Link>
			</div>
			<div className={h.list}>
				<ul className={h.list_ul}>
					<li className={h.list_item}>
						{' '}
						<Link to='/'>Главная</Link>
					</li>
					<li className={h.list_item}>
						{' '}
						<a href='#footer'>Контакты</a>
					</li>
					<li className={h.list_item}>
						<Link to='/'>Услуги</Link>
					</li>
					<li className={h.list_item}>
						<a href='#com'>Отзывы</a>
					</li>
					<li className={h.list_item}>
						{' '}
						{/* <Link to='/#about' >
							О нас
						</Link> */}
						<a href='/#about'>О нас</a>
					</li>
				</ul>
			</div>
			{auth && <Auth toggleModal={toggleModal} auth={auth} modal={modal} />}
			<div className={h.auth} onClick={toggleModal}>
				<GlobalSvgSelector id='auth' />
			</div>
			<div className={h.auth2} onClick={toggleModal}>
					{/* <GlobalSvgSelector id='auth2' /> */}
					<img src={auth2}alt="" />
			</div>
		</div>
	);
};

export default Header;
