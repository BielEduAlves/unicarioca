import React, { useState, useContext } from 'react';
import {
	StyleSheet,
	ScrollView,
	Button
} from "react-native";

import fundo from '../../grupou_assets/grafismos/grafismo_backgroud.png';


import { UsuarioContext } from '../../context/usuario';

import {
	ContainerMain,
	TituloDash
} from './style'
export default function Settings() {
	const { signOut } = useContext(UsuarioContext);
	return (
		<>
			<ImageBackground source={fundo} style={styles.fundo}>
				<ScrollView>
					<ContainerMain>
						<TituloDash>Settings</TituloDash>
						<Button title="Sair" onPress={() => { signOut() }} />

					</ContainerMain>
				</ScrollView>
			</ImageBackground>
		</>
	);
}
const styles = StyleSheet.create({
	fundo: {
		backgroundColor: "#269cd9",
		position: 'absolute',
		width: '150%',
		height: '110%',
		zIndex: 1,

	},
});