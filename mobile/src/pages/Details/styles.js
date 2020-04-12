import styled from 'styled-components/native';
import constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.Image`

`;

export const GoBackButton = styled.TouchableOpacity`

`;

export const Box = styled.View`
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #41414d;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 16px;
  color: #737380;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #13131A;
  margin-bottom: 16px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: #737380;
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  min-width: 45%;
  height: 50px;
  background: #E02041;
  border-radius: 8px;
`;

export const ActionButtonText = styled.Text`
  color: #F0F0F5;
  font-size: 16px;
  font-weight: bold;
`;
