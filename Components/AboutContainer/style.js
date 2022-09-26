import styled from 'styled-components';
import Image from '../../public/InitialPhoto.jpg'

export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url('/InitialPhoto.jpg');
    height: 95vh;
    width: 100%;
    background-size: cover;
    background-position: right;
`;