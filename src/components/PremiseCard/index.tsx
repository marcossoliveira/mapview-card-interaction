import React from 'react';
import {Image, View} from 'react-native';
import {
    Body,
    Button,
    Card,
    CardItem,
    Icon,
    Left,
    Right,
    Text,
    Thumbnail
} from 'native-base';

interface PremiseCardModel {
    thumb: any;
    text: string;
}

const spoletoMenu = require('../../assets/img/spoleto-menu.jpg');

const PremiseCard = (props: PremiseCardModel) => {
    const { thumb, text } = props;

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail
                        small={true}
                        source={thumb}
                        style={{ resizeMode: 'contain' }}
                    />
                    <Body>
                        <Text>{text}</Text>
                        <Text note>$$</Text>
                    </Body>
                </Left>
                <Right>
                    <View
                        style={{
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <Icon name="star" />
                        <Text>4,6</Text>
                    </View>
                </Right>
            </CardItem>
            <CardItem cardBody>
                <Image
                    source={spoletoMenu}
                    style={{ height: 100, width: null, flex: 1 }}
                />
            </CardItem>
            <CardItem>
                <Left>
                    <View
                        style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'column'
                        }}
                    >
                        <Text>Shopping Vitória</Text>
                        <Text note>Enseada do Suá</Text>
                    </View>
                </Left>
                {/*<Body>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                    </Button>
                </Body>*/}
                <Right>
                    <Button transparent>
                        <Icon active name="pin" />
                        <Text>Ver</Text>
                    </Button>
                </Right>
            </CardItem>
        </Card>
    );
};

export default PremiseCard;
