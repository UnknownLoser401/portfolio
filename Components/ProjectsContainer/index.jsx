import React, { useState } from 'react'
import { DescriptionText, Container, Title, Carousel, CarouselDiv, DotsContainer, Dots } from './style'
import image1 from '../../public/Carousel/BarbeariaFerreira.png'
import image2 from '../../public/Carousel/Lacrei.png'
import image3 from '../../public/Carousel/PetPlan.png'
import image4 from '../../public/Carousel/RunningApp.png'

export default function ProjectsContainer() {
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
    <Container>
      <Title>
        Projetos
      </Title>
      <CarouselDiv>
        <a href={links[indexImg]} target="_blank" >
          <Carousel
            src={images[indexImg]}
            width={850}
            height={450}
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
          />
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
