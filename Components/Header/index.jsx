import React, { useState } from 'react'
import { Container, NavLinks, Ancora, Content, Menu, CloseSidebar} from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

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
            <Ancora onClick={showSiderbar}>Quem sou</Ancora>
            <Ancora onClick={showSiderbar}>Projetos</Ancora>
            <Ancora onClick={showSiderbar}>Conhecimentos</Ancora>
            <Ancora onClick={showSiderbar}>Contato</Ancora>
        </NavLinks>
      </Content>
    </Container>
  )
}