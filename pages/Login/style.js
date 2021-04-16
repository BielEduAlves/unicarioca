import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    padding:0px 10px 30px 10px;
    z-index:1;
`;

export const ContainerLogo = styled.View`
  flex-direction:row;
  width:100%;
  margin:50px 0;
  padding:0 20px;
  justify-content:center;
`;
export const Image = styled.Image`
  width:300px;
  height:100px;
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
 font-weight:bold;
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
 font-weight:bold;
`;