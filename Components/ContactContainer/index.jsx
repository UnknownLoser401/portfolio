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
        {/* <ContactDiv>
          <a href='https://api.whatsapp.com/send?phone=5512992125236' target="_blank" >
            <CircleContact>
              <FaPhone />
            </CircleContact>
          </a>
          <a href='https://api.whatsapp.com/send?phone=5512992125236' target="_blank" >
            <ContactText>(12) 99212-5236</ContactText>
          </a>
        </ContactDiv> */}
        <ContactDiv>
          <a href='mailto:rhyhenryran@gmail.com' target="_blank" >
            <CircleContact>
              <FaMailBulk />
            </CircleContact>
          </a>
          <a href='mailto:rhyhenryran@gmail.com' target="_blank" >
            <ContactText>E-mail</ContactText>
          </a>
        </ContactDiv>
        {/* <ContactDiv>
          <a href='https://www.linkedin.com/in/wallace-nascimento040/' target="_blank" >
            <CircleContact>
              <FaLinkedin />
            </CircleContact>
          </a>
          <a href='https://www.linkedin.com/in/wallace-nascimento040/' target="_blank" >
            <ContactText>Linkedin</ContactText>
          </a>
        </ContactDiv> */}
        <ContactDiv>
          <a href='https://github.com/UnknownLoser401' target="_blank" >
            <CircleContact>
              <FaGithub />
            </CircleContact>
          </a>
          <a href='https://github.com/UnknownLoser401' target="_blank" >
            <ContactText>Github</ContactText>
          </a>
        </ContactDiv>
      </ContainerInfos>
    </Container>
  )
}
