import React, { useCallback, useEffect, useState } from 'react'
import { DescriptionText, Container, Title, Carousel, CarouselDiv, DotsContainer, Dots, RightArrow, LeftArrow } from './style'


export default function ProjectsContainer() {
  const image1 = '/Carousel/BarbeariaFerreira.png'
  const image2 = '/Carousel/Lacrei.png'
  const image3 = '/Carousel/PetPlan.png'
  const image4 = '/Carousel/RunningApp.png'
  const image5 = '/Carousel/css.png'
  const image6 = '/Carousel/invertido.png'
  const image7 = '/Carrousel/elmSite.gif'


  const gif = '/Carousel/gif/Barbearia.gif'
  const gif1 = '/Carousel/gif/riderize.gif'
  const gif2 = '/Carousel/gif/css.gif'
  const gif3 = '/Carousel/gif/PetPlan.gif'

  const descriptions = ['Projeto responsivo criado com React Native, Styled-Componentes, Expo e TypeScript', 'Projeto feito para uma ONG onde foi utilizado ReactJs, TypeScript e CSS', 'Projeto final de um Bootcamp, foi utilizado ReactJs, TypeScript e Tailwind', 'Aplicativo feito para um teste técnico com React Native, TypeScript, Expo e Styled-Components, usando APIs para rastrear velocidade, distância e tempo.', 'Projeto construído no bootcamp da Digital Innovation One, feito com o intuito de desenvolver habilidades de estilização com CSS', 'Projeto construído no bootcamp da Digital Innovation One com opções de tema, no intuito de desenvolver habilidades de estilização com CSS', 'Projeto realizado utilizando a linguagem Elm, buscando me aprimorar com está linguagem funcional e me aprimorar desenvolvendo o design da página.']

  const [images, setImages] = useState([
    image1, image2, image3, image4, image5, image6, image7
  ])

  const links = [
    'https://barbershop-website-react-native-srnascimento40.vercel.app/', 'https://github.com/SrNascimento40/handson-lacrei-pages', 'https://pet-plan.vercel.app/', 'https://github.com/SrNascimento40/desafio-riderize', 'https://srnascimento40.github.io/trilha-css-desafio-01/', 'https://srnascimento40.github.io/mundo-invertido/'
  ]
  const [indexImg, setIndexImg] = useState(2);
  const [width, setWidth] = useState(Number);

  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        rightImage(indexImg);
      }, 10000);
  });

  const rightImage = useCallback((indexImg) => {
    setIndexImg(indexImg === images.length - 1 ? 0 : indexImg + 1)
  })

  const leftImage = useCallback((indexImg) => {
    setIndexImg(indexImg === 0 ? images.length - 1 : indexImg - 1)
  })

  const chooseImage = (indexImg) => {
    setIndexImg(indexImg);
  }

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const widthDim = hasWindow ? window.innerWidth : null;
    const heightDim = hasWindow ? window.innerHeight : null;
    return {
      widthDim,
      heightDim,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);

      setWidth(windowDimensions.widthDim);

      if (windowDimensions.widthDim <= 600) {
        console.log(width);
        console.log(windowDimensions.widthDim);
        setImages([gif, gif3, gif2, gif1])
      } else {
        console.log(width);
        console.log(windowDimensions.widthDim);
      }

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);


  return (
    <Container id='Projetos' >
      <Title>
        Projetos
      </Title>
      <CarouselDiv
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        {/* <a href={links[indexImg]} target="_blank"> */}
        <Carousel
          image={images[indexImg]}
        >
          <a href={links[indexImg]} target="_blank">
            <div style={{ width: '100%', height: '100%' }}></div>
          </a>
          <RightArrow onClick={() => rightImage(indexImg)}>
            <p>{'>'}</p>
          </RightArrow>
          <LeftArrow onClick={() => leftImage(indexImg)}>
            <p>{'<'}</p>
          </LeftArrow>
          <DescriptionText className='Description' >
            <p>{descriptions[indexImg]}</p>
          </DescriptionText>
        </Carousel>
        <DotsContainer>
          {images.map((images, number) => (
            <Dots
              key={number}
              onClick={() => chooseImage(number)}
              style={{ color: (number == indexImg) ? 'black' : 'currentcolor' }}
            >
              ●
            </Dots>
          ))}
        </DotsContainer>
      </CarouselDiv>
    </Container>
  )
}
