import React from 'react'
import { CircleContact, ContactDiv, ContactText, Container, ContainerInfos, Title } from './style'
import { FaPhone, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

export default function ContactContainer() {
  return (
    <Container>
      <Title>
        Contact
      </Title>
      <ContainerInfos>
        <ContactDiv>
          <CircleContact>
              <FaPhone style={{ position: 'absolute', top:'50%', left:'50%', width: 80, height: 80, marginLeft:-40, marginTop:-40 }} />
          </CircleContact>
          <ContactText>Numero</ContactText>
          {/* +55 (12) 99212-5236 */}
        </ContactDiv>
        <ContactDiv>
          <CircleContact>
              <FaMailBulk style={{ position: 'absolute', top:'50%', left:'50%', width: 80, height: 80, marginLeft:-40, marginTop:-40 }} />
          </CircleContact>
          <ContactText>email</ContactText>
          {/* wallacedigo10@hotmail.com */}
        </ContactDiv>
        <ContactDiv>
          <CircleContact>
              <FaLinkedin style={{ position: 'absolute', top:'50%', left:'50%', width: 80, height: 80, marginLeft:-40, marginTop:-40 }} />
          </CircleContact>
          <ContactText>linkedin</ContactText>
          {/* https://www.linkedin.com/in/wallace-nascimento040/ */}
        </ContactDiv>
        <ContactDiv>
          <CircleContact>
              <FaGithub style={{ position: 'absolute', top:'50%', left:'50%', width: 80, height: 80, marginLeft:-40, marginTop:-40 }} />
          </CircleContact>
          <ContactText>github</ContactText>
          {/* https://github.com/SrNascimento40 */}
        </ContactDiv>
      </ContainerInfos>
    </Container>
  )
}
