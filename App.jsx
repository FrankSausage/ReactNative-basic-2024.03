import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ScrollView } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';
import FlatListBasics from './components/FlatListBasics';
import SectionListBasic from './components/SectionListBasic';
import Count from './components/Count';

const logo ={ uri: 'https://reactnative.dev/img/tiny_logo.png', width: 32, height: 32, };


export default function App() {
  return (
    <ScrollView>
      <Count />
      {/* <Image source={logo} />
      <SectionListBasic />
      <Image source={logo} />
      <FlatListBasics />
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />*/}
      {/* <State name='Jerry'/> */}
      {/* <Image source={logo} />
      <Cat name='Maru' num='1'/>
      <Cat name='Rum Tum Tugger' num='2'/>
      <Image source={logo} />
      <HelloWorld /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
