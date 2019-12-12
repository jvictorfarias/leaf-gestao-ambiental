import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 360px;
  height: 640px;
  background: #00ca14;
`;

export const Cadastro = styled.Text.attrs({
  placeholderTextColor: '#eee',
  placeholder: 'Olá',
})`
  position: absolute;
  width: 134px;
  height: 23px;
  left: 113px;
  top: 553px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;
`;

export const Entrar = styled.Text`
  position: absolute;
  width: 80px;
  height: 23px;
  left: 140px;
  top: 496px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #00ca14;
`;
