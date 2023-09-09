import React, { createRef } from 'react';
import m from './Main.module.css';
import data from '../../api/data.json';
import comment from '../../assets/image/comment.jpg';
import comments from '../../assets/image/comments.png';
import { Link } from 'react-router-dom';

const Main = ({ ref }) => {
	return (
		<div className={m.wrapper}>
			{/* <img src={banner} alt="banner" class/> */}
			<div className={m.baner}></div>
			<div className={m.category}>
				{data.data.map(item => (
					<div className={m.item}>
						<h1 className={m.item_name}>{item.name}</h1>
						<p className={m.item_description}>{item.description}</p>
						<button className={m.item_button}>
							<Link to={item.link}>Подробнее</Link>
						</button>
					</div>
				))}
			</div>

			<div className={m.company}>
				<p className={m.name_company}>О нашей компании</p>
				<div className={m.company_div}>
					<p className={m.text_company} id='about' ref={ref}>
						О нас: Служба рекламы "ЧАСПИК" , выполняет заказы быстро и
						профессионально. Обращаясь сюда, вы можете быть уверены в качестве
						выполняемой работы. Узнать подробную информацию о полном перечне
						предоставляемых услуг вы можете по телефону или на сайте.
						Предоставляем услуги работы дизайнера. В кратчайшие сроки, по
						приемлемой цене. Некоторые позиций сувенирной продукции только под
						заказ! принимаем предварительные заказы, срок доставки от 7 дней!
						Индивидуальный подход к каждому клиенту! Допустимые требования в
						сублимации <br /> 1.Погрешность на отступы (справа, слева, верх и
						низ)может быть 1-3 мм, так как изображение клеится в ручную. <br />{' '}
						2.Если изображение имеет полную заливку (плашку) , то загиб верхнего
						и нижнего края может быть не пропечатан. <br /> 3.Расхождение с
						истинным цветом может быть на 1-4 пантона . <br /> 4.Рекомендуем
						сделать пробный образец (по цене тиража). <br /> 5.Кружки все имеют
						разную высоту, вариация от 1-2 мм. <br /> 6.На всех кружках
						хамелеон, кроме черного, в холодном состоянии изображение видно.
					</p>
				</div>
			</div>
			<img src={comment} alt='' className={m.comment} />
			<img src={comments} alt='' className={m.comments} />
		</div>
	);
};

export default Main;
