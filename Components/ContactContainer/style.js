import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
    width: 100%;
    padding: 0 5vh 0 5vh;
    background-color: #D9D9D9;

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
export const ContactText = styled.p`
    color: #2C2C2C;
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    padding-top: 15px;

    @media only screen and (max-width: 400px) {
        font-size: 12px;
    }
`;
export const ContactDiv = styled.div`
    align-items: center;
    padding: 30px;
`;
export const CircleContact = styled.div`
    background-color: #2C2C2C;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
`;