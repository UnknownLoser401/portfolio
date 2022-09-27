import React, { useState } from 'react'
import { TechnicalText, Container, Title, KnowCard, CardContainer, ContentContainer, InfoDiv } from './style'
import { FaReact } from 'react-icons/fa'

export default function KnowledgeContainer() {
  const [infoText, setInfoText] = useState('Passe o mouse sobre alguma Skill para saber mais sobre ela.')
  return (
    <Container>
      <Title>
        Conhecimentos
      </Title>
      <ContentContainer>
        <InfoDiv>
          <TechnicalText>
            {infoText}
          </TechnicalText>
        </InfoDiv>
        <CardContainer>
          <KnowCard onMouseOver={ () => setInfoText('O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>ReactJs</p>
            <FaReact style={{ height: '55%', width: '55%', alignSelf: 'center', justifySelf: 'center' }} />
          </KnowCard>
          <KnowCard onMouseOver={ () => setInfoText('TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Ele é projetado para o desenvolvimento de grandes aplicativos e transpila para JavaScript.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>TypeScript</p>
            <FaReact style={{ height: '55%', width: '55%', alignSelf: 'center', justifySelf: 'center' }} />
          </KnowCard>
          <KnowCard onMouseOver={ () => setInfoText('React Native é uma estrutura de aplicativo móvel popular, baseada na linguagem JavaScript, que permite criar aplicativos móveis renderizados nativamente para iOS e Android. A estrutura permite criar um aplicativo para várias plataformas usando a mesma base de código.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>React Native</p>
            <FaReact style={{ height: '55%', width: '55%', alignSelf: 'center', justifySelf: 'center' }} />
          </KnowCard>
          <KnowCard onMouseOver={ () => setInfoText('JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>JavaScript</p>
            <FaReact style={{ height: '55%', width: '55%', alignSelf: 'center', justifySelf: 'center' }} />
          </KnowCard>
          <KnowCard onMouseOver={ () => setInfoText('Styled-Components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Com ele, você pode criar websites bonitos e funcionais. Além disso, ganhar mais agilidade e precisão no desenvolvimento web.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>Styled-Components</p>
            <FaReact style={{ height: '55%', width: '55%', alignSelf: 'center', justifySelf: 'center' }} />
          </KnowCard>
          <KnowCard onMouseOver={ () => setInfoText('Python é uma linguagem de programação de alto nível, dinâmica, interpretada, modular, multiplataforma e orientada a objetosSua filosofia de design enfatiza a legibilidade do código com o uso de recuo significativo.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>Python</p>
            <FaReact style={{ height: '55%', width: '55%', alignSelf: 'center', justifySelf: 'center' }} />
          </KnowCard>
        </CardContainer>
      </ContentContainer>
    </Container>
  )
}