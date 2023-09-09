import React from 'react';
import p from './Price.module.css';
import comment from '../../assets/image/comment.jpg'
import comments from '../../assets/image/comments.png'

const Price = () => {
	return (
		<div className={p.wrapper}>
			<div className={p.block}>
				<p>Цены на товары</p>
			</div>
			<div className={p.price_list}>
				<div className={p.one_price}>
					<p className={p.name}>Сувениры</p>
					<ul>
						<li>Кружка - 320 руб </li>
						<li>Тарелка - 350 руб</li>
						<li>Брелок - 150 руб </li>
						<li>Флешка - 500 руб</li>
						<li> Магнит - 35/45 руб </li>
						<li>Блокнот - 150 руб</li>
						<li>Ручка - 120 руб</li>
					</ul>
				</div>
				<div className={p.two_price}>
					<p className={p.name}>Одежда</p>
					<ul>
						<li>Футболка с нанесением - 550 руб </li>
						<li>Бейсболка с нанесением - 250 руб </li>
						<li>Ветровка с нанесением - 1100 руб</li>
						<li>Толстовка с нанесением - 2000 руб</li>
					</ul>
				</div>
				<div className={p.three_price}>
					<p className={p.name}>Распечатка</p>
					<ul>
						<li>Печать визиток - от 2,5 руб (свыше 2000шт)</li>
						<li>Печать фотографий - от 8 руб</li>
						<li> Печать баннера - 1кв.м - 240 руб </li>
						<li>Перфорированный баннер(сетка) - 480 руб</li>
						<li> Пробивка люверсов - 35 руб/шт</li>
						<li>Пластиковая карта - 15 руб/шт </li>
						<li> Пленка самоклейка(бумажная) - 35 руб</li>
						<li>Брошюрование - 20 руб/без обложки, 60 руб обложка 2 стороны</li>
					</ul>
				</div>
				<div className={p.four_price}>
					<p className={p.name}>Цветная и ч/б печать</p>
					<ul>
						<li> A4 - 22 руб </li>
						<li> A3 - 42 руб </li>
					</ul>
				</div>
				<div className={p.five_price}>
					<p className={p.name}>Лмаинирование</p>
					<ul>
						<li> A4 - 30 руб </li>
						<li> A3 - 60 руб </li>
					</ul>
				</div>
				<div className={p.six_price}>
					<p className={p.name}>Копирование</p>
					<ul>
						<li> A4 - 3 руб </li>
						<li> A3 - 6 руб </li>
					</ul>
				</div>
			</div>
            <img src={comment} alt="comment"  className={p.comment}/>
            <img src={comments} alt="comment"  className={p.comments}/>
		</div>
	);
};

export default Price;
