import React from 'react';

import { Container, Elipse, Cadastrar, Entrar } from './styles';

export default function Main({ navigation }) {
  async function handlePress() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Elipse>
        <Cadastrar title="cadastro" placeholder="Cadastrar" />
        <Entrar onPress={handlePress} />
      </Elipse>
    </Container>
  );
}
