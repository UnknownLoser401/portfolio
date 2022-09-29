import React from 'react'
import { CircleContact, ContactDiv, ContactText, Container, ContainerInfos, Title } from './style'
import { FaPhone, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

export default function ContactContainer() {
  return (
    <Container id='Contato'>
      <Title>
        Contact
      </Title>
      <ContainerInfos>
        <ContactDiv>
          <a href='https://api.whatsapp.com/send?phone=5512992125236' target="_blank" >
            <CircleContact>
              <FaPhone style={{ position: 'absolute', top: '50%', left: '50%', width: 80, height: 80, marginLeft: -40, marginTop: -40, color:'#D9D9D9' }} />
            </CircleContact>
          </a>
          <a href='https://api.whatsapp.com/send?phone=5512992125236' target="_blank" >
            <ContactText>Numero</ContactText>
          </a>
        </ContactDiv>
        <ContactDiv>
          <a href='mailto:wallacedigo10@hotmail.com' target="_blank" >
            <CircleContact>
              <FaMailBulk style={{ position: 'absolute', top: '50%', left: '50%', width: 80, height: 80, marginLeft: -40, marginTop: -40, color:'#D9D9D9' }} />
            </CircleContact>
          </a>
          <a href='mailto:wallacedigo10@hotmail.com' target="_blank" >
            <ContactText>email</ContactText>
          </a>
          {/* wallacedigo10@hotmail.com */}
        </ContactDiv>
        <ContactDiv>
          <a href='https://www.linkedin.com/in/wallace-nascimento040/' target="_blank" >
            <CircleContact>
              <FaLinkedin style={{ position: 'absolute', top: '50%', left: '50%', width: 80, height: 80, marginLeft: -40, marginTop: -40, color:'#D9D9D9' }} />
            </CircleContact>
          </a>
          <a href='https://www.linkedin.com/in/wallace-nascimento040/' target="_blank" >
            <ContactText>linkedin</ContactText>
          </a>
        </ContactDiv>
        <ContactDiv>
          <a href='https://github.com/SrNascimento40' target="_blank" >
            <CircleContact>
              <FaGithub style={{ position: 'absolute', top: '50%', left: '50%', width: 80, height: 80, marginLeft: -40, marginTop: -40, color:'#D9D9D9' }} />
            </CircleContact>
          </a>
          <a href='https://github.com/SrNascimento40' target="_blank" >
            <ContactText>github</ContactText>
          </a>
        </ContactDiv>
      </ContainerInfos>
    </Container>
  )
}
