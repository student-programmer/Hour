import React, { useState } from 'react';
import h from './Header.module.css';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';



const Header = () => {
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

	return (
		<div className={h.wrapper}>
			<div className={h.logo}>
				<Link to='/'>
					<GlobalSvgSelector id='logo' />
				</Link>
			</div>
			<div className={h.list}>
				<ul className={h.list_ul}>
					<li className={h.list_item}>
						{' '}
						<Link to='/'>Главная</Link>
					</li>
					<li className={h.list_item}>Контакты</li>
					<li className={h.list_item}>Услуги</li>
					<li className={h.list_item}>Отзывы</li>
					<li className={h.list_item}>О нас</li>
				</ul>
			</div>
			{auth && <Auth toggleModal={toggleModal} auth={auth} modal={modal} />}
			<div className={h.auth} onClick={toggleModal}>
				{' '}
				<GlobalSvgSelector id='auth' />
			</div>
		</div>
	);
};

export default Header;
