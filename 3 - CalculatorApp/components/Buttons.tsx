import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';

interface ButtonsProps {
    onPressHandler: (value: number | string) => void;
    onPressOperator: (operator: string) => void;
    reset: () => void;
    calculate: () => void;
  }

export default function Buttons({
  onPressHandler,
  onPressOperator,
  reset,
  calculate,
}: ButtonsProps) {
  const numberGrid = [
    ['7', '8', '9', '0'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['=', 'AC', '/', '+'],
  ];

  function handlePress(value: string) {
    let number=Number(value);
    if(number <= 9 && number >= 0) {
      onPressHandler(value);
    }
    else if(value === 'AC') {
      reset();
    }
    else if(value === '=') {
      calculate();
    }
    else {
      onPressOperator(value);
    }
  }

  return (
    <ScrollView>
      <View style={styles.main}>
        {numberGrid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.container}>
            {row.map((item, columnIndex) => (
              <TouchableOpacity
                key={columnIndex}
                style={[
                    styles.button,
                    item === '=' ? { backgroundColor: '#D6D377' } : null,
                  ]}                onPress={() => handlePress(item)}>
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: 200,
    height: 600,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222323',
    borderRadius: 40,
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
