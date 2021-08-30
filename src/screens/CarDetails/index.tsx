import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Container, Header, CarImages, Wrapper, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer } from './style';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { PhotoIndex } from '../../components/PhotoIndex'
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

 
export function CarDetails() {
    const navigation = useNavigation();

    function handleNavigation() {
        navigation.navigate('Scheduling')
    }

    return(
        <Container>
            <StatusBar 
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <BackButton />
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={['https://production.autoforce.com/uploads/used_model/profile_image/21174070/model_main_comprar-rs-5-pcd-sportback-1165_fcdc130f2e.png']}/>
            </CarImages>

            <Wrapper>
                <PhotoIndex />
            </Wrapper>

            <Content>
                <Details>
                    <Description>
                        <Brand>AUDI</Brand>
                        <Name>RS5 Coupé</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 1200</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name="250Km/h" icon={speedSvg} />
                    <Acessory name="4.6s" icon={accelerationSvg} />
                    <Acessory name="450 HP" icon={forceSvg} />
                    <Acessory name="Gasolina" icon={gasolineSvg} />
                    <Acessory name="Auto" icon={exchangeSvg} />
                    <Acessory name="4 Pessoas" icon={peopleSvg} />
                </Acessories>
                <About>
                    A personificação do mais puro dinamismo: uma parte frontal impressionante, que transborda potência, em conjunto com as linhas de fluxo exclusivas, uma postura ampla e dominante, assim como uma traseira impressionante. Impulsionado por um V6 Biturbo, com 450 CV.
                </About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleNavigation}/>
            </Footer>
        </Container>
    )
}