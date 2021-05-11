import styled from 'styled-components/native';

export const BarraTop = styled.View`
  position:absolute;
  top:0;
  width:100%;
  height:25px;
  background-color:#297cae;
  z-index:20;
`;
export const ContainerMain = styled.View`
    flex:1;
    width:100%;
    min-height:100%;
    justify-content:flex-end;
    padding:60px 10px 30px 10px;
    z-index:1;
`;
export const ContainerDash = styled.View`
  flex-direction:column;
  background-color:#fff;
  border-radius:25px;
  width:100%;
  margin:20px 0 0 0;
  padding:20px;
  min-height:200px;
`;


//Comparativo
export const ContainerComparaSkill = styled.View`
    margin:0px 0 0px 0;
    padding:5px 0;
    width:100%;
    border:0px solid #ccc;
`;
export const ContainerGrafico = styled.View`
  margin:15px 0 0 0;
  padding:0px 0;
  width:100%;
  border:0px solid #000;   
`;
export const ContainerGraficoSkill = styled.View`
   flex-direction:row;
    margin:0px 0 5px 0;
    padding:5px 0;
    width:100%;
    border:0px solid #ccc;
`;

export const TextBarraPercent = styled.Text`
  position:absolute;
  bottom:3px;
  right:10px;
  font-size:10px;
  text-align:center;
`;
export const TextBarraPercentCor1 = styled(TextBarraPercent)`
  color:#279bd8;
`;
export const TextBarraPercentCor2= styled(TextBarraPercent)`
  color:#e42e6b;
`;



//Comparativo
//TOP-SKILL
export const ContainerSkill = styled.ScrollView`
  flex-direction:row;
  margin:20px 0 20px 0;
  padding:5px 0;
`;
export const SkillMembro = styled.View`
  width:100px;
  margin-right:15px;
`;
export const SkillMembroGraph = styled.View`
  margin:0 0 15px 0;
`;
export const SkillMembroPercent = styled.View`
  position:absolute;
  bottom:5px;
  right:15px;
  background-color:#e82d6c;
  border-radius:40px;
  width:25px;
  height:25px;
  align-items:center;
  justify-content:center;
  `;
export const SkillTextPercent = styled.Text`
  font-size:10px;
  color:#fff;
  `;
export const SkillMembroFoto = styled.View`
  border-radius:40px;
  width:60px;
  height:60px;
  background-color:#ccc;
  align-items:center;
  justify-content:center;
`;
export const SkillMembroNome = styled.Text`
  font-size:15px;
  text-align:center;
  margin-bottom:5px;
  color:#8b8da3;
  `;
export const SkillMembroDisciplina = styled.Text`
  font-size:10px;
  color:#8b8da3;
  text-align:center;
  `;
//TOP-SKILL
//HARDSKILL
export const HardSkillNome = styled.Text`
  font-size:15px;
  text-align:center;
  margin-bottom:5px;
  color:#e52c6a;
  `;
export const HardSkillPercent = styled.View`
position:absolute;
bottom:5px;
right:15px;
background-color:#e82d6c;
border-radius:40px;
width:25px;
height:25px;
align-items:center;
justify-content:center;
`;
//HARDSKILL
//SOFTSKILL
ContainerSoftSkill
export const ContainerSoftSkill = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    margin:15px 0 15px 0;
    padding:5px 0;
    width:100%;
    border:0px solid #ccc;
`;
export const SoftSkillNome = styled.Text`
  min-width:100px;
  border-radius:5px;
  background-color:#259bd7;
  align-items:center;
  justify-content:center;
  padding:10px;
  color:#fff;
  margin:0 10px 10px 0px;
  text-align:center;
`;
//SOFTSKILL
//MEMBRO
export const ContainerMembros = styled.ScrollView`
    flex-direction:row;
    margin:15px 0 15px 0;
    padding:5px 0;
    width:100%;
    border:0px solid #ccc;
`;
export const Membro = styled.View`
  width:60px;
  margin-right:15px;
  align-items:center;
`;
export const MembroStatus = styled.View`
  position:absolute;
  bottom:3px;
  right:3px;
  background-color:#37cc7b;
  border-radius:40px;
  width:10px;
  height:10px;
  `;

export const MembroFoto = styled.View`
  border-radius:40px;
  width:60px;
  height:60px;
  background-color:#ccc;
  align-items:center;
  justify-content:center;
`;
export const MembroNome = styled.Text`
  font-size:15px;
  margin-bottom:5px;
  color:#8b8da3;
  `;
export const MembroDisciplina = styled.Text`
  font-size:10px;
  color:#8b8da3;
  text-align:center;
  `;
export const ContainerProgresso = styled.View`
  flex-direction:row;
  margin:15px 0 15px 0;
  padding:0px 0;
  width:100%;
  height:8px;
  `;
export const TextPercent = styled.Text`
font-size:10px;
color:#f4921c;
position: absolute;
top:-3px;
right:20px;
`;

export const TituloDash = styled.Text`
  font-size:25px;
  color:#fff;
  padding:0 0 0 20px;
`;
export const TituloContainer = styled.Text`
  font-size:20px;
  font-weight:bold;
  color:#4d5169;
  padding:0 0 0 0px;
  margin-bottom:0px;
`;
export const TituloContainer2 = styled.Text`
  font-size:15px;
  color:#949cb0;
  padding:0 0 0 0px;
`;
export const TituloContainer3 = styled.Text`
  font-size:15px;
  color:#949cb0;
  margin:0 0 5px 0;
`;
export const TituloSkill = styled.Text`
  font-size:15px;
  color:#949cb0;
  padding:0 0 0 0px;
`;

//Botoes
export const BotaoBorda = styled.TouchableOpacity`
  border-radius:5px;
  border:1px solid #AE1B73;
  align-items:center;
  justify-content:center;
`;
export const TextoBotaoBorda = styled.Text`
 font-size:15px;
 color: #AE1B73;
`;
export const BotaoMais = styled(BotaoBorda)`
  position:absolute;
  top:20px;
  right:20px;
  padding:5px;
  width:70px;
  height:30px;
`;
export const TextoBotaoMais = styled.Text`
 font-size:12px;
 color: #AE1B73;
`;


/*
export const Image = styled.Image`
  width:200px;
  height:60px;
  justify-content:center;
`;
export const ContainerTextoInicio = styled.View`
  flex-direction:column;
  width:300px;
  margin:50px 0;
  padding:0 20px;
  justify-content:center;
`;
export const Linha1 = styled.Text`
  font-size:25px;
  color:#fff;
  text-align:center;
`;
export const Linha2 = styled.Text`
  font-size:25px;
  color:#fff;
  text-align:center;
  
`;
export const Bold = styled.Text`
  
`;
export const CaixaLogin = styled.View`
  background-color:#fff;
  width:100%;
  border-radius:25px;
  padding:0 20px;
`;
export const ContainerBotao = styled.View`
  flex-direction:row;
  margin-bottom:30px;
`;

export const Botao = styled.TouchableOpacity`
  flex:1;
  border-bottom-width:4px;
  border-bottom-color: ${props=> props.ultimoClick ? "#AE1B73" : "#fff"};
  margin: 0 5px;
  align-items:center;
  justify-content:center;
  height:60px;
`;
export const BotaoTexto = styled.Text`
 font-size:20px;
 color: ${props=> props.ultimoClick ? "#673f66" : "#ccc"}; 
`;
export const InputTexto = styled.Text`
 font-size:20px;
 color:#b4b8c6;
 margin: 20px 0 5px 0;
`;
export const Input = styled.TextInput`
  border:1px solid #ccc;
  border-radius:5px;
  padding: 0 20px;
  height:60px; 
`;
export const ContainerEsqueci = styled.View`
  flex-direction:row;
  margin:5px 0 50px 0;
  justify-content:flex-end;
`;
export const EsqueciSenha = styled.TouchableOpacity`
  
`;
export const EsqueciSenhaTexto = styled.Text`
  color:#AE1B73;
`;

export const ContainerBotaoConfirmar = styled.View`
  flex-direction:row;
  margin-top:30px;
`;

export const BotaoEntrar = styled.TouchableOpacity`
  flex:1;
  border:1px solid #AE1B73;
  background-color:#AE1B73;
  border-radius:5px;
  margin: 0 5px;
  align-items:center;
  justify-content:center;
  height:60px;
`;
export const BotaoTextoEntrar = styled.Text`
 font-size:15px;
 color:#fff;
`;
export const BotaoCadastrar = styled.TouchableOpacity`
  flex:1;
  border-radius:5px;
  border:1px solid #AE1B73;
  margin: 0 5px;
  align-items:center;
  justify-content:center;
  height:60px;
`;
export const BotaoTextoCadastrar = styled.Text`
 font-size:15px;
 color: #AE1B73;
`;*/