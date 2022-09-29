import React, { useState } from 'react'
import { DescriptionText, Container, Title, Carousel, CarouselDiv, DotsContainer, Dots } from './style'


export default function ProjectsContainer() {
  const image1 = '/Carousel/BarbeariaFerreira.png'
  const image2 = '/Carousel/Lacrei.png'
  const image3 = '/Carousel/PetPlan.png'
  const image4 = '/Carousel/RunningApp.png'

  const descriptions = ['Projeto responsivo criado com React Native, Styled-Componentes, Expo e TypeScript', 'Projeto feito para uma ONG onde foi utilizado ReactJs, TypeScript e CSS', 'Projeto final de um Bootcamp, foi utilizado ReactJs, TypeScript e Tailwind', 'Aplicativo feito para um teste técnico com React Native, TypeScript, Expo e Styled-Components, usando APIs para rastrear velocidade, distância e tempo.']

  const images = [
    image1, image2, image3, image4
  ]
  const links = [
    'https://barbershop-website-react-native-srnascimento40.vercel.app/', 'https://github.com/SrNascimento40/handson-lacrei-pages', 'https://pet-plan.vercel.app/', 'https://github.com/SrNascimento40/desafio-riderize'
  ]
  const [indexImg, SetIndexImg] = useState(2)

  const chooseImage = (indexImg) => {
    SetIndexImg(indexImg);
  }

  return (
    <Container id='Projetos' >
      <Title>
        Projetos
      </Title>
      <CarouselDiv>
        <a href={links[indexImg]} target="_blank" >
          <Carousel
            image={images[indexImg]}
          >
            <DescriptionText className='Description' >
              <p>{descriptions[indexImg]}</p>
            </DescriptionText>
          </Carousel>
        </a>
        <DotsContainer>
          {images.map((images, indexImg) => (
            <Dots
              key={indexImg}
              onClick={() => chooseImage(indexImg)}
            >
              ●
            </Dots>
          ))}
        </DotsContainer>
      </CarouselDiv>
    </Container>
  )
}
