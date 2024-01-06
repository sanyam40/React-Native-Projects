import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppContext} from '../context/AppContext';
import Buttons from './Buttons';

export default function Home() {
  const {
    value1,
    value2,
    operator,
    ans,
    onPressHandler,
    onPressOperator,
    reset,
    calculate,
  } = React.useContext(AppContext);
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.head}>CALCULATOR</Text>
        <Text
          style={{
            fontSize: 40,
            textAlign: 'right',
            color: '#fff',
            padding: 10,
          }}>
          {value1 !== '0' && <>{value1}</>} {operator}{' '}
          {value2 !== '0' && <>{value2}</>}
        </Text>
        <Text
          style={{
            fontSize: 40,
            textAlign: 'right',
            color: '#fff',
            padding: 10,
          }}>
          {ans !== 0 && <>= {ans}</>}
        </Text>
        <View style={styles.space}>
          <Buttons
            onPressHandler={onPressHandler}
            onPressOperator={onPressOperator}
            reset={reset}
            calculate={calculate}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    padding: 10,
  },
  main: {
    backgroundColor: '#000',
    height: '100%',
  },
  space: {
    paddingTop: 50,
  },
});
