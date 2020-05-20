import React from 'react';
import { Image, ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
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
              <Title>Faça seu Cadastro!</Title>
            </View>

            <Input name="name" icon="user" placeholder="E-mail" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => { }} >
              Cadastrar
            </Button>

          </Container >
        </ScrollView>
      </KeyboardAvoidingView>

      {/* <BackToSignIn onPress={() => { navigation.navigate('SignIn') }} > */}
      <BackToSignIn onPress={() => { navigation.goBack() }} >
        <Icon name="arrow-left" size={20} color="#ff9000" />
        <BackToSignInText>
          Voltar para Login
        </BackToSignInText>
      </BackToSignIn>

    </>
  );
};

export default SignUp;
