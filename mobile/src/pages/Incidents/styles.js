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

export const HeaderText = styled.Text`
  font-size: 16px;
  color: #737380;
`;

export const TotalIncidents = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 34px;
  color: #737380;
`;

export const IncidentsList = styled.FlatList`

`;

export const Incident = styled.View`
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

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #E02041;
  font-size: 16px;
  font-weight: bold;
`;
