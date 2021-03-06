import React from 'react';
import { View, ScrollView, StyleSheet, Platform, Text } from 'react-native';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import Header from '../../components/Header/Header';
import { fetchProducts } from '../ProductsScreen/actions';
import { LinearGradient } from 'expo';
import ClearButton from '../../components/Button/ClearButton';
import Styles from '../../shared/styles';
import { addItem, clearItems, removeItem } from './actions';

class ShoppingListScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: (
      <Header
        title="Shopping List"
        imageUri={require('../../../assets/images/shopping-list-inactive.png')}
      />
    ),
  });

  state = {
    price: 0,
  };

  deleteItem = index => {
    this.props.removeItem(index);
  };

  clearItems = () => {
    this.props.clearItems();
  };

  renderProductCard = () => {
    const { shoppingList } = this.props.shoppingList;
    if (shoppingList) {
      return shoppingList.map((item, index) => (
        <ProductCard
          key={(item.id, index)}
          productName={item.name}
          shopImageUrl={item.shopImage}
          productImageUrl={item.image}
          productQuantity={item.quantity}
          productQuantityType={item.quantityType}
          productPrice={item.price}
          cardTitle="-"
          handleStorage={() => this.deleteItem(index)}
        />
      ));
    }
  };

  renderPrice = () => {
    let price = 0;
    this.props.shoppingList.shoppingList.map(item => {
      price += item.price;
    });
    return price;
    this.setState({ price: price });
  };

  render() {
    if (this.props.shoppingList) {
      return (
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['#FBBB3B', '#F19143']}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.container}
          >
            {this.renderProductCard()}
          </ScrollView>
          <View style={styles.bottomContainer}>
            <View>
              <ClearButton
                handleClick={() => this.clearItems()}
                Title="Clear all"
              />
            </View>
            <View>
              <Text style={styles.text}>Full price:</Text>
              <Text style={styles.text}>{this.renderPrice()} ,-DKK</Text>
            </View>
          </View>
          <View
            style={{
              width: '94%',
              height: '10%',
              borderTopColor: 'black',
              borderTopWidth: 2,
              alignSelf: 'center',
              marginTop: 7,
            }}
          />
        </View>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

export default connect(
  state => ({
    shoppingList: state.shoppingList,
  }),
  { addItem, clearItems, removeItem },
)(ShoppingListScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  bottomContainer: {
    marginTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 16,
    color: 'white',
    fontFamily: Styles.SemiBold,
    textAlign: 'right',
  },
});
