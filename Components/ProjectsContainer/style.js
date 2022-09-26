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
    height: 450;
    width:300;
    border-radius: 50px;
    border: solid;
`;