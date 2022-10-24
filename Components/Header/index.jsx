import React, { useState } from 'react'
import { Container, NavLinks, Ancora, Content, Menu, CloseSidebar} from './style'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <Content>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
            <Ancora href='#Sobre' onClick={showSiderbar}>Quem sou</Ancora>
            <Ancora href='#Projetos' onClick={showSiderbar}>Projetos</Ancora>
            <Ancora href='#Conhecimentos' onClick={showSiderbar}>Conhecimentos</Ancora>
            <Ancora href='#Contato' onClick={showSiderbar}>Contato</Ancora>
        </NavLinks>
      </Content>
    </Container>
  )
}