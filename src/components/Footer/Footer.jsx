import React from 'react';
import f from './Footer.module.css';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import {Link} from 'react-router-dom'


const Footer = () => {
	return (
		<div className={f.wrapper}>
			<div className={f.logo}>
				<Link to='/'>
					{' '}
					<GlobalSvgSelector id='logo' />
				</Link>
			</div>
			<p className={f.text1}>ЧасПик</p>
			<p className={f.text2}>
				Фирма располагается по адресу: Россия, Чита, Бутина, 73.
			</p>
			<p className={f.text3}>График работы: Пн-пт: 09:00 - 18:00.</p>

			<div className={f.services}>
				<ul>
					<li className={f.list_services_main}>Услуги</li>
					<li className={f.list_services}>Широкоформатная печать</li>
					<li className={f.list_services}>Реклама на транспорте</li>
					<li className={f.list_services}>Термотрансфер Сувиниры</li>
					<li className={f.list_services}>Дизайн рекламы</li>
					<li className={f.list_services}>Наружная реклама</li>
					<li className={f.list_services}>Реклама в интернете</li>
					<li className={f.list_services}>Прямая цифровая печать</li>
				</ul>
			</div>

			<div className={f.company}>
				<ul>
					<li className={f.list_company_main}>Компания</li>
					<li className={f.list_company}>О компании</li>
					<li className={f.list_company}> Отзывы</li>
					<li className={f.list_company}> Цены</li>
				</ul>
			</div>
			<div className={f.contact}>
				<ul>
					<li className={f.list_contact_main}>Контакты</li>
					<li className={f.list_contact}>7(914) 130-24-44</li>
					<li className={f.list_contact}>7(3022) 21-74-74</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
