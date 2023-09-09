import React, { useEffect, useState } from 'react';
import a from './All.module.css';
import comment from '../../assets/image/comment.jpg';
import comments from '../../assets/image/comments.png';
import axios from 'axios';

const All = ({ data }) => {
	const [datas, setDatas] = useState([]);
	const [puts, setPuts] = useState(false);
	const [description, setDescription] = useState('');
	const [name, setName] = useState('');
	

	const store = localStorage.getItem('warn');

	const changerName = e => {
		setName(e.target.value);
	};
	const changerDescription = e => {
		setDescription(e.target.value);
	};

	useEffect(() => {
		const getData = async () => {
			const reqData = await fetch(
				'http://localhost/react/data.php/' + data.new.id
			);
			const resData = await reqData.json();
			// console.log(resData)
			setDatas(resData);
		};
		getData();
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();
		//console.log(formvalue);
		const formData = {
			id: data.new.id,
			name: name,
			description: description,
		};
		const res = await axios.put('http://localhost/react/data.php', formData);
		setPuts(!puts);
		//let jsonres= res.data.json();
	};

	// console.log(datas.dataid)
	return (
		<>
			{store
				? datas.map(item => (
						<div className={a.wrapper}>
							{puts ? (
								<p className={a.put} onClick={handleSubmit}>
									Cохранить
								</p>
							) : (
								<p onClick={() => setPuts(!puts)} className={a.put2}>
									Редактировать
								</p>
							)}

							<div className={a.header}>
								{puts ? (
									<input
										type='text'
										value={name}
										onChange={changerName}
										className={a.name_input}
									/>
								) : (
									<p className={a.text}>{item.name}</p>
								)}
							</div>
							{puts ? (
								<input
									type='text'
									value={description}
									onChange={changerDescription}
									className={a.description_input}
								/>
							) : (
								<p className={a.description}>{item.description}</p>
							)}
							<h1 className={a.work}>Наши работы</h1>
							<div className={a.main}>
								{data.img.map(item => (
									<img
										src={require('../../assets/image/' + item.img)}
										alt=''
										className={a.main_img}
									/>
								))}
							</div>
							<img src={comment} alt='' className={a.com} />
						</div>
				  ))
				: datas.map(item => (
						<div className={a.wrapper}>
							<div className={a.header}>
								<p className={a.text}>{item.name}</p>
							</div>

							<p className={a.description}>{item.description}</p>
							<h1 className={a.work}>Наши работы</h1>
							{/* <div className={a.main}>
				{data.img.map(item => (
					<img src={require(item.img)} alt='' className={a.main_img} />
				))}
			</div> */}
							<img id='com' src={comment} alt='' className={a.com} />
							<img id='com' src={comments} alt='' className={a.coms} />
						</div>
				  ))}
		</>
	);
};

export default All;
