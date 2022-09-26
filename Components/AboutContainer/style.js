import styled from 'styled-components';
import Image from '../../public/InitialPhoto.jpg'

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 0 10vh 0 10vh;

    @media only screen and (max-width: 500px) {
        padding: 0 5vh 0 5vh;
    }
    @media only screen and (max-width: 320px) {
        padding: 0 1vh 0 1vh;

    }
    @media only screen and (min-width: 1024px) {
        padding: 12vh;
        gap: 15vh;
    }
`;
export const Title = styled.h1`
    color: white;
    font-size: 72px;
    font-family: Inter;
    font-weight: 400;
    font-variant: small-caps;

    @media only screen and (max-width: 500px) {
        font-size: 62px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 52px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 78px;
    }
`
export const AboutText = styled.p`
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
`