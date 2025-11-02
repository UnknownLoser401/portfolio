import styled from 'styled-components';

export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url('/Carousel/IMG_3175.JPG');
    padding-top: 65vh;
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: 94%;
`;
export const Arrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 35px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transition: transform 0.5s;

    &:hover {
    animation: up-to-down 0.8s forwards infinite alternate;
    }
    @keyframes up-to-down {
        100%{
            box-shadow: 1px 1px 0 0 #161616;
            transform: translateY(35%) rotate(45deg);
        }
    }
`;