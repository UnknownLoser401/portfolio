import React, { useCallback, useEffect, useState } from 'react'
import { DescriptionText, Container, Title, Carousel, CarouselDiv, DotsContainer, Dots, RightArrow, LeftArrow } from './style'


export default function ProjectsContainer() {
  const image1 = '/Carousel/spaceInvader.png'
  const image2 = '/Carousel/steamSearch.png'
  const image3 = '/Carousel/BMI.png'
  const image4 = '/Carousel/titanicSurvival.png'
  const image5 = '/Carousel/snakeGame.png'
  // const image6 = '/Carousel/invertido.png'
  // const image7 = '/Carousel/elmPage.gif'


  const gif = '/Carousel/gif/Barbearia.gif'
  const gif1 = '/Carousel/gif/riderize.gif'
  const gif2 = '/Carousel/gif/css.gif'
  const gif3 = '/Carousel/gif/PetPlan.gif'

  const descriptions = ['Space Invader Game', 'Steam Game Searching Website', 'BMI Calculator Website', 'Titanic Survival Website', 'Snake Game Website']

  const [images, setImages] = useState([
    image1, image2, image3, image4, image5
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
