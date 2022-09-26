import React, { useState } from 'react'
import { DescriptionText, Container, Title, Carousel } from './style'
import image1 from './BarbeariaFerreira.png'
import image2 from '../../public/Carousel/Lacrei.png'
import image3 from '../../public/Carousel/PetPlan.png'

export default function ProjectsContainer() {
  const images = [
    image1, image2, image3
  ]
  console.log({image1});
  const [indexImg, SetIndexImg] = useState(2)

  return (
    <Container>
      <Title>
        Projetos
      </Title>
      <Carousel
      src={images[indexImg]}
      objectFit='cover'
      objectPosition='center'
      />
    </Container>
  )
}
