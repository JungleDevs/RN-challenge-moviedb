import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface TitleProps {
  isFirst: boolean;
}

export const Container = styled.ScrollView``;

export const Banner = styled.ImageBackground`
  height: 472px;
  width: 100%;
`;

export const Overlay = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  flex-shrink: 1;
`;

export const GoBack = styled.TouchableOpacity`
  padding: 4px;
  position: absolute;
  top: 65px;
  left: 21px;
`;

export const DetailsContainer = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: 'Inter-SemiBold';
  font-size: 32px;
  color: #fff;
  margin-left: ${props => (props.isFirst ? 16 : 0)};
`;

export const Text = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #fff;
  margin-bottom: 6px;
`;

export const SmallText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #fff;
  margin-bottom: 16px;
`;

export const TopMovie = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const Trending = styled.View`
  padding: 0 24px;
  margin-top: 80px;
`;

export const TrendingTitle = styled.Text`
  font-family: 'Inter-SemiBold';
  font-size: 24px;
  color: #fff;
  margin-bottom: 16px;
`;
