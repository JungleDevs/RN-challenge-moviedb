import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #070818;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin: 24px 0;
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

export const Content = styled.View`
  padding: 0 24px;
`;
