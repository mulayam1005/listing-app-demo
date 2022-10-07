import React, {useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from '@emotion/native';

import {faker} from '@faker-js/faker';
import {RootStackParamList} from './stack';
import {getImage} from './utils/image';
import {Container} from './components/container';
import {Typography} from './components/typography';
import {DetailsLine} from './components/details-line';
import {DetailsTitle} from './components/details-title';
import {Cart} from './components/cart';

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({min: 0.1, max: 10, precision: 0.1});
const SPEC_5 = faker.color.human();

//

export const Item = () => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();
  const {params} = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  const [quantity, setQuantity] = useState<number>(5);

  if (!params) {
    return <Typography>Loading ...</Typography>;
  }

  nav.setOptions({
    title: params.name,
  });

  //
  //

  return (
    <React.Fragment>
      <ScrollView>
        <Container>
          <ItemImage
            source={{uri: getImage(900, params.id)}}
            size={Dimensions.get('screen').width * 0.9}
          />
        </Container>

        <ViewBox>
          <Typography color="#000000" weight="semiBold" fontSize={18}>
            {params.name}
          </Typography>

          {params.salePrice ? (
            <Typography weight="regular" fontSize={18} color="red">
              <ItemDiscountedPrice>SAR {params.price}</ItemDiscountedPrice>
              {'  '}
              SAR {params.price}
            </Typography>
          ) : (
            <Typography weight="regular" color="#000000">
              SAR {params.price}
            </Typography>
          )}
        </ViewBox>

        <Container>
          <Typography>{params.description}</Typography>
        </Container>

        <Container>
          <DetailsTitle color="#000000">Details</DetailsTitle>
          <DetailsLine label="Brand">{params.brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU">
            <Typography weight="medium" fontSize={14} color="#000000">
              {SPEC_2}
            </Typography>
          </DetailsLine>

          <Typography weight="medium" />
          <Typography weight="medium" color="#000000">
            Specifications
          </Typography>
          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">{SPEC_4} kg</DetailsLine>
          <DetailsLine label="Battery">{SPEC_5}</DetailsLine>
        </Container>
        <Container />
        <Container />
      </ScrollView>

      <Cart quantity={quantity} update={setQuantity} />
    </React.Fragment>
  );
};

//
//

const ItemImage = styled.Image<{size: number}>(props => ({
  width: props.size,
  height: props.size,
  marginVertical: 16,
  paddingHorizontal: '5%',
  borderRadius: 9,
}));

const ViewBox = styled.View({
  paddingHorizontal: 25,
});

const ItemDiscountedPrice = styled(Typography)({
  textDecorationLine: 'line-through',
});

ItemDiscountedPrice.defaultProps = {
  fontSize: 18,
  color: 'black',
};
