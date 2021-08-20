import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    width: 100%;
`;

export const CarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;

    justify-content: center;
    align-items: center;
`;

export const CarImage = styled.Image`
    width: 330px;
    height: 165px;
`;

export const Wrapper = styled.View`

`;

export const WrapperIndex = styled.View`
 
`;
