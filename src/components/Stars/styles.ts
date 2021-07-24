import styled from 'styled-components/native';

interface ContainerProps {
  readonly isFirst: boolean;
}

export const StarsContainer = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  background-color: ${props => (props.isFirst ? '#1F8CFF' : '#252634')};
  border-radius: 4px;
  margin-top: 8px;
  width: 160px;
`;

export const StarsNUmber = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #fff;
`;
