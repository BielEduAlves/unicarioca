import React, { useState } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	ProgressBarAndroid,
	Button
} from "react-native";
import ProgressCircle from 'react-native-progress-circle';
import * as Progress from 'react-native-progress';
import logo from '../../assets/logo.png';
import fundo from '../../grupou_assets/grafismos/grafismo_backgroud.png';
import membroImg from '../../grupou_assets/icones/icone_perfil.png';

import {
	BarraTop,
	ContainerMain,
	ContainerDash,
	ContainerSkill,
	ContainerComparaSkill,
	ContainerGraficoSkill,
	TextBarraPercentCor1,
	TextBarraPercentCor2,
	SkillMembro,
	SkillMembroGraph,
	SkillMembroFoto,
	SkillMembroPercent,
	SkillMembroNome,
	SkillMembroDisciplina,
	SkillTextPercent,
	ContainerGrafico,
	ContainerMembros,
	Membro,
	MembroFoto,
	MembroStatus,
	ContainerProgresso,
	TextPercent,
	HardSkillNome,
	HardSkillPercent,
	SoftSkillNome,
	ContainerSoftSkill,
	TituloDash,
	TituloSkill,
	TituloContainer,
	TituloContainer2,
	TituloContainer3,
	BotaoBorda,
	BotaoMais,
	TextoBotaoBorda,
	TextoBotaoMais,


} from './style'
export default function Dashboard({ navigation }) {
	const [botaoAtual, setBotaoAtual] = useState('aluno');
	return (
		<>
			<ImageBackground source={fundo} style={styles.fundo}>
				<ScrollView>
					<ContainerMain>
						<TituloDash>Dashboard</TituloDash>
						<Button title="Chat" onPress={() => navigation.push('Chat')} />
						<ContainerDash>
							<TituloContainer>Comparativo de skills</TituloContainer>

							<ContainerComparaSkill>
								<TituloSkill>HTML</TituloSkill>
								<ContainerGrafico>
									<ContainerGraficoSkill>
										<Progress.Bar progress={0.5} width={250} color="#279bd8" />
										<TextBarraPercentCor1>você</TextBarraPercentCor1>
									</ContainerGraficoSkill>
									<ContainerGraficoSkill>
										<Progress.Bar progress={0.7} width={250} color="#e42e6b" />
										<TextBarraPercentCor2>Turma</TextBarraPercentCor2>
									</ContainerGraficoSkill>
								</ContainerGrafico>
							</ContainerComparaSkill>

							<ContainerComparaSkill>
								<TituloSkill>Computação Gráfica</TituloSkill>
								<ContainerGrafico>
									<ContainerGraficoSkill>
										<Progress.Bar progress={0.5} width={250} color="#279bd8" />
										<TextBarraPercentCor1>você</TextBarraPercentCor1>
									</ContainerGraficoSkill>
									<ContainerGraficoSkill>
										<Progress.Bar progress={0.7} width={250} color="#e42e6b" />
										<TextBarraPercentCor2>Turma</TextBarraPercentCor2>
									</ContainerGraficoSkill>
								</ContainerGrafico>
							</ContainerComparaSkill>

							<ContainerComparaSkill>
								<TituloSkill>React Native</TituloSkill>
								<ContainerGrafico>
									<ContainerGraficoSkill>
										<Progress.Bar progress={0.5} width={250} color="#279bd8" />
										<TextBarraPercentCor1>você</TextBarraPercentCor1>
									</ContainerGraficoSkill>
									<ContainerGraficoSkill>
										<Progress.Bar progress={0.7} width={250} color="#e42e6b" />
										<TextBarraPercentCor2>Turma</TextBarraPercentCor2>
									</ContainerGraficoSkill>
								</ContainerGrafico>
							</ContainerComparaSkill>
						</ContainerDash>

						<ContainerDash>
							<TituloContainer>Alunos top soft skills</TituloContainer>
							<ContainerSkill horizontal pagingEnable bounces={false} >
								<SkillMembro>
									<SkillMembroGraph>
										<ProgressCircle
											percent={90}
											radius={40}
											borderWidth={3}
											color="#e82d6c"
											shadowColor="#fff"
											bgColor="#fff"
										>
											<SkillMembroFoto>
												<Image source={membroImg} />
											</SkillMembroFoto>
										</ProgressCircle>
										<SkillMembroPercent>
											<SkillTextPercent >{'9.0'}</SkillTextPercent>
										</SkillMembroPercent>
									</SkillMembroGraph>
									<SkillMembroNome>Emmett Brown</SkillMembroNome>
									<SkillMembroDisciplina>HMTL</SkillMembroDisciplina>
								</SkillMembro>
								<SkillMembro>
									<SkillMembroGraph>
										<ProgressCircle
											percent={70}
											radius={40}
											borderWidth={3}
											color="#e82d6c"
											shadowColor="#fff"
											bgColor="#fff"
										>
											<SkillMembroFoto>
												<Image source={membroImg} />
											</SkillMembroFoto>
										</ProgressCircle>
										<SkillMembroPercent>
											<SkillTextPercent >{'7.0'}</SkillTextPercent>
										</SkillMembroPercent>
									</SkillMembroGraph>
									<SkillMembroNome>Marty McFly</SkillMembroNome>
									<SkillMembroDisciplina>Programação orientada a objetos</SkillMembroDisciplina>
								</SkillMembro>
								<SkillMembro>
									<SkillMembroGraph>
										<ProgressCircle
											percent={60}
											radius={40}
											borderWidth={3}
											color="#e82d6c"
											shadowColor="#fff"
											bgColor="#fff"
										>
											<SkillMembroFoto>
												<Image source={membroImg} />
											</SkillMembroFoto>
										</ProgressCircle>
										<SkillMembroPercent>
											<SkillTextPercent >{'6.0'}</SkillTextPercent>
										</SkillMembroPercent>
									</SkillMembroGraph>
									<SkillMembroNome>Biff Tannen</SkillMembroNome>
									<SkillMembroDisciplina>Métodos Numéricos</SkillMembroDisciplina>
								</SkillMembro>
								<SkillMembro>
									<SkillMembroGraph>
										<ProgressCircle
											percent={100}
											radius={40}
											borderWidth={3}
											color="#e82d6c"
											shadowColor="#fff"
											bgColor="#fff"
										>
											<SkillMembroFoto>
												<Image source={membroImg} />
											</SkillMembroFoto>
										</ProgressCircle>
										<SkillMembroPercent>
											<SkillTextPercent >{'10.0'}</SkillTextPercent>
										</SkillMembroPercent>
									</SkillMembroGraph>
									<SkillMembroNome>Emmett Brown</SkillMembroNome>
									<SkillMembroDisciplina>JAVA</SkillMembroDisciplina>
								</SkillMembro>

							</ContainerSkill>
						</ContainerDash>


						<ContainerDash>
							<TituloContainer>Minhas top hard skills</TituloContainer>
							<ContainerSkill horizontal pagingEnable bounces={false} >

								<SkillMembro>
									<SkillMembroGraph>
										<ProgressCircle
											percent={80}
											radius={40}
											borderWidth={8}
											color="#e82d6c"
											shadowColor="#fff"
											bgColor="#fff"
										>
											<HardSkillNome>HTML</HardSkillNome>
										</ProgressCircle>
										<HardSkillPercent>
											<SkillTextPercent >{'8.0'}</SkillTextPercent>
										</HardSkillPercent>
									</SkillMembroGraph>
								</SkillMembro>

								<SkillMembro>
									<SkillMembroGraph>
										<ProgressCircle
											percent={80}
											radius={40}
											borderWidth={8}
											color="#e82d6c"
											shadowColor="#fff"
											bgColor="#fff"
										>
											<HardSkillNome>HTML</HardSkillNome>
										</ProgressCircle>
										<HardSkillPercent>
											<SkillTextPercent >{'8.0'}</SkillTextPercent>
										</HardSkillPercent>
									</SkillMembroGraph>
								</SkillMembro>

								<SkillMembro>
									<SkillMembroGraph>
										<ProgressCircle
											percent={80}
											radius={40}
											borderWidth={8}
											color="#e82d6c"
											shadowColor="#fff"
											bgColor="#fff"
										>
											<HardSkillNome>HTML</HardSkillNome>
										</ProgressCircle>
										<HardSkillPercent>
											<SkillTextPercent >{'8.0'}</SkillTextPercent>
										</HardSkillPercent>
									</SkillMembroGraph>
								</SkillMembro>


							</ContainerSkill>
						</ContainerDash>

						<ContainerDash>
							<TituloContainer>Alunos top soft skills</TituloContainer>
							<ContainerSoftSkill>
								<SoftSkillNome>Liderança</SoftSkillNome>
								<SoftSkillNome>Empatia</SoftSkillNome>
								<SoftSkillNome>Gestão de conflitos</SoftSkillNome>
								<SoftSkillNome>Comunicação</SoftSkillNome>
							</ContainerSoftSkill>
						</ContainerDash>


						<ContainerDash>
							<TituloContainer>Titulo Disciplina</TituloContainer>
							<TituloContainer2>AV..</TituloContainer2>
							<BotaoMais>
								<TextoBotaoMais>Ver Mais</TextoBotaoMais>
							</BotaoMais>
							<ContainerMembros horizontal pagingEnable bounces={false}>

								<Membro>
									<MembroFoto>
										<Image source={membroImg} />
									</MembroFoto>
									<MembroStatus></MembroStatus>
								</Membro>
								<Membro>
									<MembroFoto>
										<Image source={membroImg} />
									</MembroFoto>
									<MembroStatus></MembroStatus>
								</Membro>
								<Membro>
									<MembroFoto>
										<Image source={membroImg} />
									</MembroFoto>
									<MembroStatus></MembroStatus>
								</Membro>
								<Membro>
									<MembroFoto>
										<Image source={membroImg} />
									</MembroFoto>
									<MembroStatus></MembroStatus>
								</Membro>
								<Membro>
									<MembroFoto>
										<Image source={membroImg} />
									</MembroFoto>
									<MembroStatus></MembroStatus>
								</Membro>
								<Membro>
									<MembroFoto>
										<Image source={membroImg} />
									</MembroFoto>
									<MembroStatus></MembroStatus>
								</Membro>
							</ContainerMembros>

							<TituloContainer3>Tarefas concluída</TituloContainer3>
							<ContainerProgresso>
								<Progress.Bar progress={0.7} width={250} color="#f4921c" />
								<TextPercent>70%</TextPercent>
							</ContainerProgresso>
						</ContainerDash>
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

