import React, { useState } from 'react';
import w from './Auth.module.css';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import auth2 from '../../assets/image/auth2.png';

const Auth = ({ toggleModal }) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('')
	const [warn, setWarn] = useState(false)

	const handleLogin = e => {
		setLogin(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const loginSubmit = e => {
		if (login !== '' && password !== '') {
			const url = 'http://localhost/react/login.php';
			var headers = {
				"Accept": 'application/json',
				"Content-type": 'application/json'
			};
			var Data = {
				login: login,
				password: password
			};

			fetch(url, {
				method: "POST",
				headers:headers,
				body: JSON.stringify(Data)
			}).then((response) => response.json())
			.then(response => {
				if (response[0].result === 'Неверный пароль'){
					setError('Ошибка входа')
					setWarn(false)
					localStorage.setItem('warn', warn);
				}else {
					setError('Вы успешно вошли')
					setWarn(true)
					localStorage.setItem('warn', warn);
		}
			})

	};
}

	return (
		<div onClick={toggleModal} className={w.wrapper}>
			<div
				onClick={event => event.stopPropagation()}
				className={w.modalContent}
			>
				<p className={w.main}>Вход в админ панель</p>
				{warn ? <p className={w.info}>{error}</p> : <p className={w.info_warn}>{error}</p>}
				{warn && <p>Редактировать</p>}
				<div className={w.auth}>
					<GlobalSvgSelector id='login' />
				</div>
				<div className={w.auth2}>
					{/* <GlobalSvgSelector id='login' /> */}
					<img src={auth2} alt="" />
				</div>

				<p className={w.login_text}>Логин</p>
				<input
					type='text'
					className={w.login}
					value={login}
					onChange={handleLogin}
				/>
				<p className={w.password_text}>Пароль</p>
				<input
					type='text'
					className={w.password}
					value={password}
					onChange={handlePassword}
				/>
				<p className={w.yes} onClick={loginSubmit}>
					Войти
				</p>
			</div>
		</div>
	);
};

export default Auth;
