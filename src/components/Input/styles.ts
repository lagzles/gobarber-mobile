import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}


interface TextInputProps {
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 12px;
  margin-bottom: 10px;

  border-width: 2px;
  border-color: #232129;

  ${props => props.isFocused && css`
  border-color: #ff9000;
  `};

  flex-direction: row;
  align-items: center;

`;

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';

  ${props => props.isFilled && css`
    color: #ff9000;
  `};



`;


export const Icon = styled(FeatherIcon)`
margin-right: 16px;
`;
