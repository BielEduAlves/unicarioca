import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";

import logo from '../../assets/logo.png';
import fundo from '../../assets/login_backgroud.png';

import {
		Container,
		ContainerLogo,
		Image,
		ContainerTextoInicio,
		Linha1,
		Linha2,
    CaixaLogin,
		ContainerBotao,
		Botao,
		BotaoTexto,
		InputTexto,
		Input,
		BotaoCadastrar,
		BotaoEntrar,
		BotaoTextoEntrar,
		BotaoTextoCadastrar,
		ContainerEsqueci,
		EsqueciSenha,
		EsqueciSenhaTexto

} from './style'


export default function Login() {
	
	const [botaoAtual, setBotaoAtual] = useState('aluno');

  return (
		<>
		
		
		<ScrollView>
		<ImageBackground source={fundo} style={styles.fundo}></ImageBackground>

					<Container>
						<ContainerLogo>
							<Image source={logo} style={{ width: 300, height: 100 }}/>
						</ContainerLogo>
						<ContainerTextoInicio>
							<Linha1>
								Problemas para forma
							</Linha1>
							<Linha1>
								um grupo de trabalho?
							</Linha1>
							<Linha2>
								O Grupou!	resolve!
							</Linha2>
						</ContainerTextoInicio>
						<CaixaLogin>
							<ContainerBotao>
								<Botao
									ultimoClick={botaoAtual == 'aluno'}
									onPress={()=>{setBotaoAtual('aluno')}}
								>
									<BotaoTexto ultimoClick={botaoAtual == 'aluno'}>
										Aluno
									</BotaoTexto>
								</Botao>
								<Botao
									ultimoClick={botaoAtual == 'professor'}
									onPress={()=>{setBotaoAtual('professor')}}
								>
									<BotaoTexto ultimoClick={botaoAtual == 'professor'}>
										Professor
									</BotaoTexto>
								</Botao>
							</ContainerBotao>
							
							<InputTexto>E-mail:</InputTexto>
							<Input />
							
							<InputTexto>Senha:</InputTexto>
							<Input secureTextEntry autoCapitalize="none" />
							
							<ContainerEsqueci>
								<EsqueciSenha>
										<EsqueciSenhaTexto>Esqueci minha senha</EsqueciSenhaTexto>

									</EsqueciSenha>
							</ContainerEsqueci>
							
							<ContainerBotao>
								<BotaoCadastrar>
									<BotaoTextoCadastrar>
										Cadastre-se
									</BotaoTextoCadastrar>
								</BotaoCadastrar>
								
								<BotaoEntrar>
									<BotaoTextoEntrar>
										Entar
									</BotaoTextoEntrar>
								</BotaoEntrar>
							</ContainerBotao>
						</CaixaLogin>
					</Container>
	</ScrollView>
	
	</>
  );
}
const styles = StyleSheet.create({
  fundo: {
		position:'absolute',
		width:'200%',
		height:'105%',
		zIndex:0,
		left:-240,
  },

});

