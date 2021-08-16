import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, TotalCars } from './styles';

import { Car } from '../../components/Car';

export function Home() {

    const carDataOne = {
        brand: 'AUDI',
        name: 'RS5 Coupé',
        rent: {
            period: 'ao dia',
            price: '1200.00',
        },
        thumbnail: 'https://production.autoforce.com/uploads/used_model/profile_image/21174070/model_main_comprar-rs-5-pcd-sportback-1165_fcdc130f2e.png',
    }

    const carDataTwo = {
        brand: 'AUDI',
        name: 'RS6 Avant',
        rent: {
            period: 'ao dia',
            price: '1800.00',
        },
        thumbnail: 'https://production.autoforce.com/uploads/used_model/profile_image/21174071/model_main_comprar-rs-6-pcd-avant-1165_95b6930e12.png',
    }


    return(
        <Container>
               <StatusBar 
                    barStyle="light-content"
                    translucent
                />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            <Car data={carDataOne}/>
            <Car data={carDataTwo}/>
        </Container>
    )
}