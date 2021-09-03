import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import {Container, Header, CarImages, Wrapper, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Accessories, Footer } from './style';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { PhotoIndex } from '../../components/PhotoIndex'
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';

import { getAcessoryIcon } from '../../utils/getAcessoryIcon'

interface Params {
    car: CarDTO;
}
 
export function CarDetails() {
    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleNavigation() {
        navigation.navigate('Scheduling')
    }

    function handleBack() {
        navigation.goBack();
    }

    return(
        <Container>
            <StatusBar 
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <BackButton onPress={handleBack} />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={car.photos}/>
            </CarImages>

            <Wrapper>
                <PhotoIndex />
            </Wrapper>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {
                        car.accessories.map(Acessory => (
                        <Accessory 
                            key={Acessory.type}
                            name={Acessory.name}
                            icon={getAcessoryIcon(Acessory.type)}
                        />
                        ))
                    }
                </Accessories>

                <About>{car.about}</About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleNavigation} color={theme.colors.shape}/>
            </Footer>
        </Container>
    )
}