import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {Container, Header, CarImages, Wrapper, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Accessories, Footer } from './style';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { PhotoIndex } from '../../components/PhotoIndex'
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

interface Params {
    car: CarDTO
}
 
export function CarDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleNavigation() {
        navigation.navigate('Scheduling')
    }

    function handleBack() {
        navigation.navigate('Home')
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
                            icon={speedSvg}
                        />
                        ))
                    }
                </Accessories>

                <About>{car.about}</About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleNavigation}/>
            </Footer>
        </Container>
    )
}