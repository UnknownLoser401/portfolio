import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding: 0 3vh 0 3vh;

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
`
export const TechnicalText = styled.p`
    color: white;
    font-size: 20px;
    font-family: Inter;
    font-weight: 400;
    text-align: start;
    

    @media only screen and (max-width: 500px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 22px;
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
`;
export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px;
    justify-content: center;
`;
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    align-items: center;
`
export const InfoDiv = styled.div`
    width: 75%;
    padding: 15px;
    max-height: 80vh;
    align-self: center;
`