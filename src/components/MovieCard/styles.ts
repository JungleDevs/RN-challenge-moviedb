import styled from 'styled-components/native';

interface ContainerProps {
  readonly isFirst: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 168px;
  width: 100%;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${props => (props.isFirst ? '#007CFF' : '#1b1c2a')};
  margin: 8px 0;
`;

export const Banner = styled.Image`
  height: 100%;
  width: 118px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Info = styled.View`
  height: 100%;
  width: 100%;
  flex-shrink: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: 'Inter-SemiBold';
  font-size: 16px;
  color: #fff;
`;

export const Text = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #fff;
  margin-top: 6px;
`;

export const TopTrending = styled.View`
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  margin-bottom: 8px;
  transform: translateX(-6px);
`;

export const TrendingText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #fff;
  margin-left: 6px;
`;
