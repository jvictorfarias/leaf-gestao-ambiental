import React from 'react';

import { Container, Elipse, Cadastrar, Entrar, CadastrarText } from './styles';

export default function Main({ navigation }) {
  async function handlePress() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Elipse>
        <Cadastrar title="cadastro" placeholder="Cadastrar">
          <CadastrarText />
        </Cadastrar>
        <Entrar onPress={handlePress} />
      </Elipse>
    </Container>
  );
}
