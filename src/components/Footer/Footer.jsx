import React from 'react';
import f from './Footer.module.css';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import { Link } from 'react-router-dom';
import vk from '../../assets/image/vk.png';
import od from '../../assets/image/od.png';
import telegram from '../../assets/image/telegram.png';
import minivk from '../../assets/image/minivk.png';
import miniod from '../../assets/image/miniod.png';
import minitel from '../../assets/image/minitel.png';

const Footer = () => {
	return (
		<div className={f.wrapper} id='footer'>
			<div className={f.logo}>
				<Link to='/'>
					{' '}
					<GlobalSvgSelector id='logo' />
				</Link>
			</div>
			<div className={f.logo2}>
				<Link to='/'>
					{' '}
					<GlobalSvgSelector id='footer' />
				</Link>
			</div>
			<p className={f.text1}>ЧасПик</p>
			<p className={f.text2}>
				Фирма располагается по адресу: Россия, Чита, Бутина, 73.
			</p>
			<p className={f.text3}>График работы: Пн-пт: 09:00 - 18:00.</p>

			<div className={f.services}>
				<ul>
					<li className={f.list_services_main}>
						{' '}
						<Link to='/'>Услуги</Link>
					</li>
					<li className={f.list_services}>
						<Link to='/width'> Широкоформатная печать</Link>
					</li>
					<li className={f.list_services}>
						<Link to='/advertising'>Реклама на транспорте</Link>
					</li>
					<li className={f.list_services}>
						<Link to='/print'>Термотрансфер</Link>
					</li>
					<li className={f.list_services}>
						<Link to='/photo'>Сувениры</Link>
					</li>
					<li className={f.list_services}>
						<Link to='/design'> Дизайн рекламы </Link>
					</li>
					<li className={f.list_services}>
						<Link to='/trans'> Наружная реклама</Link>
					</li>
					<li className={f.list_services}>
						<Link to='/internet'> Реклама в интернете</Link>
					</li>
					<li className={f.list_services}>
						<Link to='/right'> Прямая цифровая печать</Link>
					</li>
				</ul>
			</div>

			<div className={f.company}>
				<ul>
					<li className={f.list_company_main}>Компания</li>
					<li className={f.list_company}>
						<a href='/#about'>О компании</a>
					</li>
					<li className={f.list_company}> Отзывы</li>
					<li className={f.list_company}> <Link to='/price'>Цены</Link></li>
				</ul>
			</div>
			<div className={f.contact}>
				<ul>
					<li className={f.list_contact_main}>Контакты</li>
					<li className={f.list_contact}>7(914) 130-24-44</li>
					<li className={f.list_contact}>7(3022) 21-74-74</li>
				</ul>
			</div>
			<div className={f.messengers}>
				<p>Мессенджеры</p>
				<div className={f.mes}>
					<img src={vk} alt='vk' className={f.vk} />
					<img src={od} alt='od' />
					<img src={telegram} alt='telegram' />
				</div>
			</div>
			<div className={f.messengers2}>
				<p>Мессенджеры</p>
				<div className={f.mes2}>
					<img src={minivk} alt='vk' className={f.vk2} />
					<img src={miniod} alt='od' />
					<img src={minitel} alt='telegram' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
