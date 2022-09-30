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
    position: absolute;

    @media only screen and (max-width: 500px) {
        padding: 0 3vh 0 3vh;
    }
    @media only screen and (max-width: 320px) {
        padding: 0 1vh 0 1vh;
    }
    @media only screen and (min-width: 1024px) {
        padding: 12vh;
        gap: 30px;
    }
`;
export const Title = styled.h1`
    color: #2C2C2C;
    font-size: 72px;
    font-family: Inter;
    font-weight: 400;
    font-variant: small-caps;
    position: relative;

    @media only screen and (max-width: 500px) {
        font-size: 62px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 52px;
    }
    @media only screen and (max-width: 220px) {
        font-size: 26px;
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
    padding-bottom: 15px;

    @media only screen and (max-width: 400px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 250px) {
        font-size: 7px;
    }
`;
export const ContactDiv = styled.div`
    align-items: center;
    justify-content: center;
`;
export const CircleContact = styled.div`
    background-color: #2C2C2C;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70px;
        height: 70px;
        margin-left: -35px;
        margin-top: -35px;
        color:#D9D9D9;
    }
    @media only screen and (max-width: 800px) {
        height: 125px;
        width: 125px;
    }
    @media only screen and (max-width: 400px) {
        height: 100px;
        width: 100px;
    }
    @media only screen and (max-width: 230px) {
        height: 50px;
        width: 50px;

        svg {
            width: 30px;
            height: 30px;
            margin-left: -15px;
            margin-top: -15px;
        }
    }
`;
export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7%;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 650px) {
        flex-wrap: wrap;
    }
    @media only screen and (max-width: 230px) {
        gap: 15%;
    }
`;