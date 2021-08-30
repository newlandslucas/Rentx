import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, DataValueContainer, Content, Footer} from './style';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
    const theme = useTheme();
    const navigation = useNavigation();

    function handleNavigation() {
        navigation.navigate('SchedulingDetails')
    }

    return(
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton color={theme.colors.shape} />
                <Title>
                    Escolha uma {'\n'}
                    data de início e  {'\n'}
                    fim do aluguel.
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DataValueContainer selected={false}>
                            <DateValue></DateValue>
                        </DataValueContainer>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DataValueContainer selected={false}>
                            <DateValue></DateValue>
                        </DataValueContainer> 
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button 
                    title="Confirmar"
                    onPress={handleNavigation}
                />
            </Footer>
        </Container>
    )
}