import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { Image, View, Text } from 'react-native';
import PremiseCard from '../PremiseCard';

const spoletoLogo = require('../../../src/assets/img/spoleto-logo256.png');

class PremiseCarousel extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            carouselItems: [
                {
                    title: 'Item 1'
                },
                {
                    title: 'Item 2'
                },
                {
                    title: 'Item 3'
                },
                {
                    title: 'Item 4'
                },
                {
                    title: 'Item 5'
                },
                {
                    title: 'Item 6'
                },
                {
                    title: 'Item 7'
                }
            ]
        };
    }

    public carousel: any;

    renderItem = ({ item, index }) => {
        return <PremiseCard text="Spoleto" thumb={spoletoLogo} />;
    };

    render() {
        const { carouselItems } = this.state;

        return (
            <>
                <Carousel
                    ref={(ref: any) => (this.carousel = ref)}
                    data={carouselItems}
                    sliderWidth={400}
                    itemWidth={250}
                    renderItem={this.renderItem}
                />
            </>
        );
    }
}

export default PremiseCarousel;
