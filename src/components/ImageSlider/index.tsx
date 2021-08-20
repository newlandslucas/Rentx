import React from 'react';
import { Container, CarImageWrapper, CarImage } from './style';

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
    return(
        <Container>
                <CarImageWrapper>
                    <CarImage 
                        source={{ uri: imagesUrl[0]}}
                    />
                </CarImageWrapper>
        </Container>
        
    )
}