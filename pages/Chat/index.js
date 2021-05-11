import React, { useState } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Button
} from "react-native";
import ProgressCircle from 'react-native-progress-circle';
import * as Progress from 'react-native-progress';
import logo from '../../assets/logo.png';
import fundo from '../../grupou_assets/grafismos/grafismo_backgroud.png';
import membroImg from '../../grupou_assets/icones/icone_perfil.png';

import {
	ContainerMain,
	TituloDash
} from './style'


export default function Chat({ navigation }) {

	return (
		<>

			<ImageBackground source={fundo} style={styles.fundo}>
				<ScrollView>

					<ContainerMain>
						<TituloDash>Chat</TituloDash>
						<Button title="Chat" onPress={() => navigation.goBack()} />
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

