import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
 return (
  <View style={ styles.containterStyle }>
   { props.children }
  </View>
 );
};

const styles = {
 containterStyle: {
  borderBottomWidth: 1,
  padding: 5,
  backgroundColor: '#fff',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  position: 'relative'
 }
};

export default CardSection;
