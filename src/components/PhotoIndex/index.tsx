import React from 'react';
import { Container, Wrapper, Index } from './style';

export function PhotoIndex() {
    return(
        <Container>
            <Wrapper>
                <Index active={true}/>
                <Index active={false}/>
                <Index active={false}/>
                <Index active={false}/>
            </Wrapper>
        </Container>
    )
}