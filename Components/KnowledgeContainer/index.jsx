import React, { useState } from 'react';
import { TechnicalText, Container, Title, KnowCard, CardContainer, ContentContainer, InfoDiv } from './style';
import { FaCss3Alt, FaJs, FaPython, FaReact } from 'react-icons/fa';
import { SiTypescript }  from "react-icons/si";

export default function KnowledgeContainer() {
  const [infoText, setInfoText] = useState('Move your mouse onto an icon to know more info.');
  return (
    <Container id='Conhecimentos'>
      <Title>
        Knowledge/Skills
      </Title>
      <ContentContainer>
        <InfoDiv>
          <TechnicalText>
            {infoText}
          </TechnicalText>
        </InfoDiv>
        <CardContainer>
          {/* <KnowCard onMouseOver={ () => setInfoText('React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>ReactJs</p>
            <FaReact style={{ height: '55%', width: '55%'}} />
          </KnowCard> */}
          {/* <KnowCard onMouseOver={ () => setInfoText('TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Ele é projetado para o desenvolvimento de grandes aplicativos e transpila para JavaScript.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>TypeScript</p>
            <SiTypescript style={{ height: '55%', width: '55%'}} />
          </KnowCard> */}
          {/* <KnowCard onMouseOver={ () => setInfoText('React Native é uma estrutura de aplicativo móvel popular, baseada na linguagem JavaScript, que permite criar aplicativos móveis renderizados nativamente para iOS e Android. A estrutura permite criar um aplicativo para várias plataformas usando a mesma base de código.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>React Native</p>
            <FaReact style={{ height: '55%', width: '55%'}} />
          </KnowCard> */}
          <KnowCard onMouseOver={ () => setInfoText("JavaScript is a programming language that makes websites dynamic and interactive. It responds to user actions like clicks, scrolls, and form entries. It can update content without reloading the page (like loading new posts on social media), create animations, validate forms, and much more. It's now also widely used for server-side and full-stack development.") }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>JavaScript</p>
            <FaJs style={{ height: '55%', width: '55%'}} />
          </KnowCard>
          <KnowCard onMouseOver={ () => setInfoText('CSS (Cascading Style Sheets) is the language used to style and layout web pages. CSS takes the raw structure created by HTML and makes it look good. It controls everything visual: colors, fonts, spacing, positioning of elements, and even complex animations and responsive layouts that adapt to different screen sizes (like phones and desktops).') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>CSS</p>
            <FaCss3Alt style={{ height: '55%', width: '55%'}} />
          </KnowCard>
          <KnowCard onMouseOver={ () => setInfoText('Python is a high-level, general-purpose programming language known for its simplicity and readability. It is for General-Purpose Programming since a versatile, all-purpose tool you can use for a huge variety of tasks, from simple everyday jobs to complex, specialized projects.') }>
            <p style={{ paddingBottom: 10, fontSize: 14 }}>Python</p>
            <FaPython style={{ height: '55%', width: '55%'}} />
          </KnowCard>
        </CardContainer>
      </ContentContainer>
    </Container>
  )
}