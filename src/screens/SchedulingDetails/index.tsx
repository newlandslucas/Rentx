import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    CarImages,
    Wrapper, 
    Content, 
    Details, 
    Description, 
    Brand, 
    Name, 
    Rent, 
    Period, 
    Price, 
    Accessories, 
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceQuota,
    RentalPriceDetails,
    RentalPriceTotal
} from './style';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { PhotoIndex } from '../../components/PhotoIndex'
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTO'

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

interface Params {
    car: CarDTO;
}
 
export function SchedulingDetails() {
    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleNavigation() {
        navigation.navigate('SchedulingComplete')
    }

    function handleBack() {
        navigation.goBack()
    }
    return(
        <Container>
            <Header>
            <BackButton onPress={handleBack} />
            </Header>
    
            <CarImages>
            <ImageSlider 
                imagesUrl={car.photos}
            />
            </CarImages>
    
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
                car.accessories.map(accessory => (
                    <Accessory 
                    key={accessory.type}
                    name={accessory.name} 
                    icon={speedSvg} 
                    />
                )) 
                }
            </Accessories>
    
            <RentalPeriod>
                <CalendarIcon>
                <Feather 
                    name="calendar"
                    size={RFValue(24)}
                    color={theme.colors.shape}
                />
                </CalendarIcon>
    
                <DateInfo>
                <DateTitle>DE</DateTitle>
                <DateValue></DateValue>
                </DateInfo>
    
                <Feather 
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.text}
                />
    
                <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue></DateValue>
                </DateInfo>
            </RentalPeriod>
            
            <RentalPrice>
                <RentalPriceLabel>Total</RentalPriceLabel>
                <RentalPriceDetails>
                <RentalPriceQuota></RentalPriceQuota>
                <RentalPriceTotal></RentalPriceTotal>
                </RentalPriceDetails>
            </RentalPrice>
            </Content>
            
            <Footer>
            <Button 
                title="Alugar agora"
                color={theme.colors.sucess} 
            />

            </Footer>
      </Container>
    );
  }