import React, { useState } from 'react';
import { StyleSheet, ScrollView } from "react-native";
import{ Feather} from '@expo/vector-icons';
import Perfil from '../../grupou_assets/icones/icone_perfil.png';


import {
	Container,
	ContainerLogo,
	ContainerFoto,
	Foto,
	BotaoClose,
	Image,
	ContainerTextoInicio,
	Linha1,
	Linha2,
	ContainerForm,
	ContainerBotao,
	Botao,
	BotaoTexto,
	InputTexto,
	Input,
	BotaoBorda,
	BotaoFundo,
	BotaoFoto,
	BotaoFundoTexto,
	BotaoBordaTexto,


} from './style'


export default function Login() {


  return (
		<ScrollView>
			<Container>
				<BotaoClose>
					<Feather name="x" size={20} color="#673f66" />
				</BotaoClose>
				<ContainerFoto>
					<Foto>
						<Image source={Perfil} color="#673f66" />
					</Foto>
					<BotaoFoto>
						<BotaoBordaTexto>
							Carregar nova foto
						</BotaoBordaTexto>
					</BotaoFoto>
				</ContainerFoto>
				<ContainerForm>
					<InputTexto>Nome Completo</InputTexto>
					<Input />
					<InputTexto>E-mail</InputTexto>
					<Input />
					<InputTexto>Senha</InputTexto>
					<Input secureTextEntry autoCapitalize="none" />
					<InputTexto>Confirmar senha</InputTexto>
					<Input secureTextEntry autoCapitalize="none" />
				</ContainerForm>

				<ContainerBotao>
					<BotaoBorda>
						<BotaoBordaTexto>
							Voltar
						</BotaoBordaTexto>
					</BotaoBorda>
					<BotaoFundo>
						<BotaoFundoTexto>
							Concluir
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

