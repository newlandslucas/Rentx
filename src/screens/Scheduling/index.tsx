import React from 'react';
import { useTheme } from 'styled-components';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, } from './style';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';


export function Scheduling() {
    const theme = useTheme();

    return(
        <Container>
            <Header>
                <BackButton color={theme.colors.shape} />
                <Title>
                    Escolha uma {'\n'}
                    data de início e  {'\n'}
                    fim fo aluguel.
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
        </Container>
    )
}