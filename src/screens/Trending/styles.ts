import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #070818;
  padding: 0 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
  height: 50px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: 'Inter-SemiBold';
`;

export const Search = styled.Image`
  height: 20px;
  width: 20px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1b1c2a;
  height: 50px;
  border-radius: 8px;
  padding: 2px 12px;
  margin: 24px 0;
`;

export const TextInput = styled.TextInput`
  width: 85%;
  height: 100%;
  color: #fff;
  font-size: 18px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  background-color: #1b1c2a;
  padding: 12px 20px;
  border-radius: 8px;
  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-SemiBold';
  color: #fff;
  font-size: 20px;
`;
