import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Logo,
  Header,
  Box,
  IncidentProperty,
  IncidentValue,
  GoBackButton,
  HeroTitle,
  HeroDescription,
  ActionsWrapper,
  ActionButton,
  ActionButtonText
} from './styles';

export default function Incidents() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const formattedIncidentValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value);
  const message = `Olá ${incident.name}, estou entrando em contato, pois, gostaria de ajudar no caso "${incident.title}" com ${formattedIncidentValue}`

  const goToIncidentsList = () => {
    navigation.goBack();
  }

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  const sendWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
  }
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <GoBackButton onPress={goToIncidentsList}>
          <Feather name="arrow-left" size={30} color="#E02041" />
        </GoBackButton>
      </Header>
      <Box>
          <IncidentProperty>ONG:</IncidentProperty>
          <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue>{incident.title}</IncidentValue>

          <IncidentProperty>DESCRIÇÃO:</IncidentProperty>
          <IncidentValue>{incident.description}</IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentValue>{formattedIncidentValue}</IncidentValue>
        </Box>
        <Box>
          <HeroTitle>Salve o dia!</HeroTitle>
          <HeroTitle>Seja o herói desse caso.</HeroTitle>
          <HeroDescription>Entre em contato:</HeroDescription>
          <ActionsWrapper>
            <ActionButton>
              <ActionButtonText onPress={sendWhatsapp}>WhatsApp</ActionButtonText>
            </ActionButton>
            <ActionButton>
              <ActionButtonText onPress={sendMail}>Email</ActionButtonText>
            </ActionButton>
          </ActionsWrapper>
        </Box>
    </Container>
  );
}
