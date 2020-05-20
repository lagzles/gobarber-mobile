import React from 'react';
import { Image, ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            {/* macete para  não eprder a configuração ao abrir o teclado  */}
            <View>
              <Title>Faça seu Logon!</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => { }} >
              Entrar
            </Button>

            <ForgotPassword onPress={() => { }}>

              <ForgotPasswordText>Esqueci Minha Senha</ForgotPasswordText>

            </ForgotPassword>
          </Container >
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => { }} >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>
          Criar Conta
        </CreateAccountButtonText>
      </CreateAccountButton>

    </>
  );
};

export default SignIn;
