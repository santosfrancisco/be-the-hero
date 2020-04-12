import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Logo,
  Header,
  HeaderText,
  TotalIncidents,
  Title,
  Description,
  IncidentsList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText
} from './styles';

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)

  const goToDetails = (incident) => {
    navigation.navigate('Details', { incident });
  }
  
  const getIncidents = async () => {
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length === total) {
      return;
    }
    setLoading(true);
    const { data, headers } = await api.get('/incidents', { params: { page }});
    setLoading(false);
    setIncidents([...incidents, ...data]);
    setPage(page + 1)
    setTotal(headers['x-total-count'])
  }

  useEffect(() => {
    getIncidents()
  }, [])

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <TotalIncidents>{total} casos</TotalIncidents>
        </HeaderText>
      </Header>
      <Title>
        Bem vindo!
      </Title>
      <Description>
        Escolha um dos casos abaixo e salve o dia!
      </Description>

      <IncidentsList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        onEndReached={getIncidents}
        onEndReachedThreshold={0.2} // chama a função passada para onEndReached quando faltar 20% para o fim da lista
        renderItem={({ item: incident }) => (
          <Incident>
          <IncidentProperty>ONG:</IncidentProperty>
          <IncidentValue>{incident.name}</IncidentValue>

          <IncidentProperty>CASO:</IncidentProperty>
          <IncidentValue>{incident.description}</IncidentValue>

          <IncidentProperty>VALOR:</IncidentProperty>
          <IncidentValue>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</IncidentValue>

          <DetailsButton onPress={() => goToDetails(incident)}>
            <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </DetailsButton>
        </Incident>
        )}
      />
    </Container>
  );
}
