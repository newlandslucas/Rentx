import React from 'react';
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
    Acessories, 
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
import { Acessory } from '../../components/Acessory';
import { PhotoIndex } from '../../components/PhotoIndex'
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

 
export function SchedulingDetails() {
    const theme = useTheme();
    return(
        <Container>
            <Header>
                <StatusBar 
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
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
                        <DateValue>27/08/2021</DateValue>
                    </DateInfo>

                    <Feather 
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>27/08/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 1200.00 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 3600.00</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button title="Alugar" color={theme.colors.sucess}/>
            </Footer>
        </Container>
    )
}