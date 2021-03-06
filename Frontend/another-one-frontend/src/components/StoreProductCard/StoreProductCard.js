import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ShopCardButton from '../Button/Button';
import Styles from '../../shared/styles';

const StoreProductCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLeftContainer}>
        <Image
          style={styles.ImageStyle}
          source={{ uri: props.productImageUrl }}
        />
      </View>
      <View style={styles.cardMiddleContainer}>
        <View style={styles.ProductInfoStyle}>
          <View style={styles.TextPadding}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: Styles.SemiBold,
              }}
            >
              {props.productName}
            </Text>
          </View>
          <View style={styles.ProductInfoContainer}>
            <View>
              <Text
                style={{
                  fontFamily: Styles.Light,
                }}
              >
                {props.productQuantity}
                {props.productQuantityType}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Styles.Regular,
                }}
              >
                {props.productPrice} ,-DKK
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardRightContainer}>
        <ShopCardButton Title="+" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '94%',
    height: 80,
    elevation: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
  },

  cardLeftContainer: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24%',
    height: '100%',
  },
  cardMiddleContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 12,
    width: '60%',
    height: '100%',
  },
  cardRightContainer: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '16%',
    height: '100%',
    alignItems: 'center',
  },
  ImageStyle: {
    height: 40,
    width: 40,
  },
  ProductInfoStyle: {
    width: '92%',
  },
  ProductInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextPadding: {
    paddingBottom: 10,
  },
});

export default StoreProductCard;
