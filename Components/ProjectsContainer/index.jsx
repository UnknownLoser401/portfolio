import React, { useState } from 'react'
import { DescriptionText, Container, Title, Carousel, CarouselDiv, DotsContainer, Dots } from './style'
import image1 from '../../public/Carousel/BarbeariaFerreira.png'
import image2 from '../../public/Carousel/Lacrei.png'
import image3 from '../../public/Carousel/PetPlan.png'

export default function ProjectsContainer() {
  const images = [
    image1, image2, image3
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
        <Carousel
          src={images[indexImg]}
          objectFit='cover'
          objectPosition='center'
        />
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
