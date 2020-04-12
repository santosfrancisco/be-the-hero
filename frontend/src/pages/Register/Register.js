import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Col } from 'react-awesome-styled-grid';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { H1 } from '../../components/Headings';
import Link from '../../components/Link';
import logo from '../../assets/logo.svg'
import {
  Container,
  Row,
  FormWrapper,
  Logo,
  Text,
} from './styles';
import api from '../../services/api';

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  
  const handleRegister = async (e) => {
    e.preventDefault();
    const ongData = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const { data } = await api.post('/ongs', ongData);
      alert(`Cadastrado com sucesso. Seu ID de login é: ${data.id}`)
      history.push('/')
    } catch (error) {
      alert('Ocorreu um erro. Tente novamente.')
    }
  }
  return (
    <Container>
      <Row>
        <Col xs={4} sm={3} justify="center">
          <Logo src={logo} alt="Be The Hero" />
            <H1>Cadastro</H1>
          <Text>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </Text>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </Col>
        <Col xs={4} sm={5} justify="center">
          <FormWrapper>
            <form onSubmit={handleRegister}>
              <Input 
                placeholder="Nome da ONG" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Input 
                type="email" placeholder="Email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input 
                placeholder="WhatsApp" 
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
              />
              <Input 
                width="80%" placeholder="Cidade" 
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <Input 
                width="20%" placeholder="UF" 
                value={uf}
                onChange={e => setUf(e.target.value)}
              />
              <Button type="submit">
                Cadastrar
              </Button>
            </form>
          </FormWrapper>
        </Col>
      </Row>
    </Container>
  )
};    

export default Register;
