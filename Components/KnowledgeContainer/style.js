import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding: 0 3vh 0 3vh;

    @media only screen and (max-width: 500px) {
        padding: 0 2vh 0 2vh;
    }
    @media only screen and (max-width: 320px) {
        padding: 0 1vh 0 1vh;
    }
    @media only screen and (min-width: 1024px) {
        padding: 8vh 5vh 8vh 5vh;
        gap: 10vh;
    }
`;
export const Title = styled.h1`
    color: white;
    font-size: 72px;
    font-family: Inter;
    font-weight: 400;
    font-variant: small-caps;
    padding: 10px;
    padding-bottom: 40px;

    @media only screen and (max-width: 500px) {
        font-size: 52px;
        padding-bottom: 35px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 42px;
        padding-bottom: 30px;
    }
    @media only screen and (max-width: 300px) {
        font-size: 32px;
        padding-bottom: 27px;
    }
    @media only screen and (max-width: 220px) {
        font-size: 23px;
        padding-bottom: 25px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 78px;
    }
`
export const TechnicalText = styled.p`
    color: white;
    font-size: 25px;
    font-family: Lucida Console;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 1.5px;
    word-spacing: 5px;
    text-align: start;
    

    @media only screen and (max-width: 800px) {
        font-size: 19px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        font-weight: 300;
    }
    @media only screen and (max-width: 450px) {
        font-weight: 300;
        text-align: center;
    }
    @media only screen and (max-width: 300px) {
        font-size: 12px;
    }
`
export const KnowCard = styled.div`
    height: 120px;
    width: 120px;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    color: #2C2C2C;
    box-shadow: 20px 20px 4px rgba(0,0,0,0.25);

    &:hover {
        box-shadow: 0px 0px 15px white;
    }
    @media only screen and (max-width: 800px) {
        height: 100px;
        width: 100px;
    }
    @media only screen and (max-width: 700px) {
        height: 85px;
        width: 85px;
    }
    @media only screen and (max-width: 600px) {
        height: 65px;
        width: 65px;
    }
    @media only screen and (max-width: 500px) {
        height: 60px;
        width: 60px;
    }
    @media only screen and (max-width: 450px) {
        height: 90px;
        width: 90px;
    }
    @media only screen and (max-width: 370px) {
        height: 70px;
        width: 70px;
    }
    @media only screen and (max-width: 205px) {
        height: 50px;
        width: 50px;
    }
`;
export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px;
    justify-content: center;

    @media only screen and (max-width: 700px) {
        align-items: center;
        gap: 20px;
        padding: 10px;

        p {
            display: none;
        }
        svg {
            height: 35%;
            width: 35%;
            margin-top: 25%;
        }
    }

    @media only screen and (max-width: 450px) {
        align-items: center;
        gap: 30px;
    }
    @media only screen and (min-width: 1024px) {
        gap: 50px;
    }
`;
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    @media only screen and (max-width: 450px) {
        flex-direction: column-reverse;
        justify-content: space-evenly;
    }
`
export const InfoDiv = styled.div`
    width: 75%;
    padding: 15px;
    max-height: 80vh;
    align-self: center;

@media only screen and (max-width: 450px) {
    padding: 10px;
}
`