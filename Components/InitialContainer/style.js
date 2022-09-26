import styled from 'styled-components';

export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url('/InitialPhoto.jpg');
    padding-top: 65vh;
    height: 90vh;
    width: 100%;
    background-size: cover;
    background-position: right;
`;
export const Arrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 35px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`;