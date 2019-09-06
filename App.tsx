/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Left,
    Button,
    Icon,
    Title,
    Right,
    Body
} from 'native-base';

import MapView, { Circle, Marker } from 'react-native-maps';
import PremiseCard from './src/components/PremiseCard';
import PremiseCarousel from './src/components/PremiseCarousel';

const bobsLogo = require('./src/assets/img/bobs-logo256.png');
const spoletoLogo = require('./src/assets/img/spoleto-logo256.png');
const gronLogo = require('./src/assets/img/gronlogo.png');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        marginTop: 1.5,
        ...StyleSheet.absoluteFillObject
    },
    mapView: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    topContainer: {
        padding: 0,
        marginTop: 0,
        alignItems: 'center',
        backgroundColor: '#ffffffcc'
    },
    appLogo: {
        width: 100,
        height: 64,
        resizeMode: 'contain'
    },
    searchInputItem: {
        backgroundColor: '#ffffffcc'
    },
    searchContainer: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    searchInput: {
        textAlign: 'center'
    }
});

const App = () => {
    // const usingHermes =
    //     typeof HermesInternal === 'object' && HermesInternal !== null;

    return (
        <Fragment>
            <MapView
                initialRegion={{
                    latitude: -20.3215941,
                    longitude: -40.3341022,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05
                }}
                style={styles.mapView}
            >
                <Marker
                    coordinate={{
                        latitude: -20.3215941,
                        longitude: -40.3341022
                    }}
                    image={bobsLogo}
                />
                <Marker
                    coordinate={{
                        latitude: -20.32695,
                        longitude: -40.319834
                    }}
                    image={spoletoLogo}
                />
                {/*<Circle
                    center={{
                        latitude: -20.3215941,
                        longitude: -40.3341022
                    }}
                    radius={2000}
                    fillColor="#8899ee55"
                    strokeColor="#00000000"
                />*/}
            </MapView>

            <SafeAreaView>
                <View style={styles.topContainer}>
                    <Image source={gronLogo} style={styles.appLogo} />
                </View>
                <View style={styles.searchContainer}>
                    <Item rounded bordered style={styles.searchInputItem}>
                        <Icon name="search" style={{ marginLeft: 10 }} />
                        <Input
                            placeholder="Prato, produto ou estabelecimento"
                            style={styles.searchInput}
                        />
                    </Item>
                </View>

            </SafeAreaView>
            <View
                style={{
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    bottom: 20
                }}
            >
                <PremiseCarousel />
            </View>
        </Fragment>
    );
};

export default App;
