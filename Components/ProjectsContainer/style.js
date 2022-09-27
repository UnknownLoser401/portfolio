import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    background-color: #D9D9D9;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 0 5vh 0 5vh;
    gap: 1vh;
`;
export const Title = styled.h1`
    color: #2C2C2C;
    font-size: 72px;
    font-family: Inter;
    font-weight: 400;
    font-variant: small-caps;
    padding: 15px;
    padding-bottom: 40px;

    @media only screen and (max-width: 500px) {
        font-size: 62px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 52px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 78px;
    }
`;
export const DescriptionText = styled.p`
    color: white;
    font-size: 22px;
    font-family: Inter;
    font-weight: 300;

    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 24px;
    }
`;
export const Carousel = styled(Image)`
    display: flex;
    border-radius: 50px;
    border: solid;
    max-height: 70vh;
`;
export const CarouselDiv = styled.div`
`;
export const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Dots = styled.div`
    margin: 0 3px;
    cursor: pointer;
    font-size: 20px;
    color: #2C2C2C;

    &:hover {
        color: black;
        text-shadow: 0px 0px 5px #2C2C2C
    }
`;