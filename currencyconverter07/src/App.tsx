import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { currencyByRupee } from './constant';
import CurrencyButton from './Components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

export default function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  const buttonPressed=(targetValue:Currency)=>{
    if(!inputValue){
      return Snackbar.show({text:'Please enter a value',backgroundColor:'#EA7773',textColor:'#FFFFFF'});
    }
    const inputAmount=parseFloat(inputValue);
    if(!isNaN(inputAmount)){
      const convertedValue=inputAmount*targetValue.value;
      const result=`${targetValue.symbol} ${convertedValue.toFixed(2)} ${targetValue.name}`;
      setResult(result);
      setSelectedCurrency(targetValue.name);
    }
    else{
      return Snackbar.show({text:'Please enter a valid value',backgroundColor:'#F4BE2C',textColor:'#FFFFFF'});
    }
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
        <View style={styles.rupeesContainer}>
          <Text style={styles.rupee}>Rs.</Text>
          <TextInput maxLength={14} value={inputValue} clearButtonMode='always' onChangeText={setInputValue} keyboardType='number-pad' placeholder='Enter amt in Rs'/>
        </View>
        {result && (
          <Text style={styles.resultTxt}>
            {result}
          </Text>
        )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList numColumns={3} data={currencyByRupee} keyExtractor={item=>item.name} renderItem={({item})=>(
            <Pressable onPress={()=>buttonPressed(item)} style={[styles.button,selectedCurrency === item.name && styles.selected]}>
              <CurrencyButton {...item}/>
            </Pressable>
          )}>
          </FlatList>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});