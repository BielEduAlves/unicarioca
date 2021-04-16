import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    padding:0px 10px 30px 10px;
`;

export const ContainerLogo = styled.View`
  flex-direction:row;
  width:100%;
  margin:50px 0;
  padding:0 20px;
  justify-content:center;
`;

export const ContainerFoto = styled.View`
  width:100%;
  margin:100px 0 20px 0;
  padding:0;
  justify-content:center;
  align-items:center;
`;
export const Foto = styled.View`
  width:120px;
  height:120px;
  border-radius:60px;
  background-color:#55c;
  margin:0;
  justify-content:center;
  align-items:center;
`;

export const BotaoClose = styled.TouchableOpacity`
  position:absolute;
  width:20px;
  height:20px;
  top:40px;
  right:20px;
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
  color:#673f66;
  text-align:center;
`;
export const ContainerForm = styled.View`
  background-color:#fff;
  width:100%;
  border-radius:25px;
  padding:0 20px;
`;
export const ContainerBotao = styled.View`
  flex-direction:row;
  margin:30px 0 30px 0;
  padding: 0 20px;
`;

export const Botao = styled.TouchableOpacity`
  flex:1;
  border:1px solid #AE1B73;
  border-radius:5px;
  margin: 0 5px;
  align-items:center;
  justify-content:center;
  height:60px;
`;
export const BotaoTexto = styled.Text`
 font-size:20px;
 color: ${props=> props.ultimoClick ? "#AE1B73;" : "#ccc"}; 
`;
export const InputTexto = styled.Text`
 font-size:20px;
 color:#b4b8c6;
 margin: 25px 0 5px 0;
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

export const BotaoFundo = styled.TouchableOpacity`
  flex:1;
  border:1px solid #AE1B73;
  background-color:#AE1B73;
  border-radius:5px;
  margin: 0 5px;
  align-items:center;
  justify-content:center;
  height:60px;
`;
export const BotaoFundoTexto = styled.Text`
 font-size:15px;
 color:#fff;
`;
export const BotaoBorda = styled.TouchableOpacity`
  flex:1;
  border-radius:5px;
  border:1px solid #AE1B73;
  margin: 0 5px;
  align-items:center;
  justify-content:center;
  height:60px;
`;
export const BotaoBordaTexto = styled.Text`
 font-size:15px;
 color: #AE1B73;
`;
export const BotaoFoto = styled(BotaoBorda)`
  margin:30px 0 0 0;
  height:40px;
  padding:0 20px;
`;