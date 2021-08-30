import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, TotalCars, CarList } from './styles';

import { Car } from '../../components/Car';

export function Home() {
    const navigation = useNavigation();

    const carData = {
        brand: 'AUDI',
        name: 'RS5 Coupé',
        rent: {
            period: 'ao dia',
            price: '1200.00',
        },
        thumbnail: 'https://production.autoforce.com/uploads/used_model/profile_image/21174070/model_main_comprar-rs-5-pcd-sportback-1165_fcdc130f2e.png',
    }

    function handleCarDetails() {
        navigation.navigate('CarDetails')
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

            <CarList 
                data={[1, 2, 3, 4, 5, 6, 7,]}
                keyExtractor={item => String(item)}
                renderItem={({ item}) => <Car  data={carData} onPress={handleCarDetails}/>}
            />
            
        </Container>
    )
}