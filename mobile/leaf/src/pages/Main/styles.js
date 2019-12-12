import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #00ca14;
`;

export const Elipse = styled.View`
  flex: 1;
  justify-content: flex-start;

  width: 360px;
  height: 460px;
  left: 0px;
  top: 442px;
  border-radius: 300px;

  background: #ffffff;
`;

export const Cadastrar = styled(RectButton)`
  margin-top: 50px;
  margin-bottom: 550px;

  margin-left: 90px;
  margin-right: 90px;
  border-radius: 50px;
  background: #00ca14;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const CadastrarText = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Entrar = styled(RectButton)`
  margin-top: 90px;
  margin-bottom: 400px;
  border-radius: 50px;
  margin-left: 90px;
  margin-right: 90px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;
