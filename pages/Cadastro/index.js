import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image} from "react-native";
import{ Feather} from '@expo/vector-icons';
import logo from '../../assets/logo.png';


import {
	Container,
	ContainerLogo,
	BotaoClose,
	ContainerTextoInicio,
	Linha1,
	ContainerBotao,
	BotaoBorda,
	BotaoBordaTexto,
	BotaoFundo,
	BotaoFundoTexto,

} from './style'


export default function Login() {
	
	const [botaoAtual, setBotaoAtual] = useState('aluno');

  return (

		<ScrollView>
		<Container>
		<BotaoClose>
			<Feather name="x" size={20} color="#673f66" />
		</BotaoClose>
		<ContainerLogo>
				<Image source={logo} style={{ width: 250, height: 90 }} />
		</ContainerLogo>

		<ContainerTextoInicio>
				<Linha1>
					Você é aluno ou professor?
				</Linha1>
			</ContainerTextoInicio>
			<ContainerBotao>
					<BotaoBorda
						ultimoClick={botaoAtual == 'aluno'}
						onPress={()=>{setBotaoAtual('aluno')}}
					>
						<BotaoBordaTexto ultimoClick={botaoAtual == 'aluno'}>
							Aluno
						</BotaoBordaTexto>
					</BotaoBorda>
					<BotaoFundo
						ultimoClick={botaoAtual == 'professor'}
						onPress={()=>{setBotaoAtual('professor')}}
					>
						<BotaoFundoTexto ultimoClick={botaoAtual == 'professor'}>
							Professor
						</BotaoFundoTexto>
					</BotaoFundo>
				</ContainerBotao>

		</Container>

	</ScrollView>  
  );
}
const styles = StyleSheet.create({
  image: {
  },

});

