import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Image, View, ScrollView } from "react-native";


import logoImg from '../../assets/logo.png';
import fundo from '../../assets/login_backgroud.png';

import {
	BackgroundImage,
	Container,
	Logo,
	CaixaLogin,
	Botao,
	BotaoTexto,
	InputTexto,
	Input,
	ForgotPassword,
	TextForgotPassword,
	ContainerBotoes,
	ContainerInputs,
	CaixaTextoChamada,
	TextoChamada,
	TextoGrupou,
	ContainerButtons,
	Button,
	ButtonText,
} from './style'

import { UsuarioContext } from '../../context/usuario'

export default function Login() {

	const { signIn, signUp } = useContext(UsuarioContext);

	const [botaoAtual, setBotaoAtual] = useState('aluno');
	const [carregando, setCarregando] = useState('false');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSignIn() {
		try {
			signIn(email, password)
		} catch (err) {
			console.warn(err)
		}
	}

	function handleSignUp() {
		setCarregando(true);
		try {
			signUp(email, password)
		} catch (err) {
			console.warn(err)
		} finally {
			setCarregando(false);
		}
	}
	return (
		<>
			<BackgroundImage source={fundo}></BackgroundImage>

			<Container>

				<Logo>
					<Image source={logoImg} style={{ width: 300, height: 100 }} />
				</Logo>

				<CaixaTextoChamada>
					<TextoChamada>
						Problemas para formar
					</TextoChamada>
					<TextoChamada>
						um grupo de trabalho
					</TextoChamada>
					<TextoChamada>
						O <TextoGrupou>Grupou! </TextoGrupou>resolve!
					</TextoChamada>
				</CaixaTextoChamada>

				<CaixaLogin>
					<ContainerBotoes>
						<Botao ultimoClick={
							botaoAtual == 'aluno' ? true : false
						}
							onPress={() => {
								setBotaoAtual('aluno')
							}}>
							<BotaoTexto
								ultimoClick={
									botaoAtual == 'aluno' ? true : false
								}
							>Aluno</BotaoTexto>
						</Botao>
						<Botao
							ultimoClick={
								botaoAtual == 'professor' ? true : false
							}
							onPress={() => {
								setBotaoAtual('professor')
							}}>
							<BotaoTexto
								ultimoClick={
									botaoAtual == 'professor' ? true : false
								}
							>Professor</BotaoTexto>
						</Botao>
					</ContainerBotoes>

					<ContainerInputs>
						<InputTexto>Email</InputTexto>
						<Input
							placeholder="Digite seu email"
							onChangeText={text => setEmail(text)}
							value={email}
						/>

						<InputTexto>Senha</InputTexto>
						<Input
							placeholder="Digite sua senha"
							secureTextEntry={true}
							onChangeText={text => setPassword(text)}
							value={password}
						/>
					</ContainerInputs>

					<ForgotPassword >
						<TextForgotPassword >Esqueci minha senha</TextForgotPassword >

					</ForgotPassword >


					<ContainerButtons>
						<Button
							invert={true}
							onPress={() => { handleSignUp() }}
						>
							{carregando ?
								<ActivityIndicator color="#AE1B73" /> :
								<ButtonText invert={true}>
									Cadastre-se
								</ButtonText>
							}


						</Button>
						<Button
							onPress={() => { handleSignIn() }}
						>
							<ButtonText>Entrar</ButtonText>
						</Button>
					</ContainerButtons>




				</CaixaLogin>
			</Container>

		</>
	);
}