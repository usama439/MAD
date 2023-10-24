import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiComponent from "./component/ApiComponent";
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native'; // Assuming you're using React Native
import axios from 'axios'; // Import Axios
import React from 'react';
import BitcoinPriceFetcher from './BitcoinPriceFetcher';
import BitcoinPriceService from './BitcoinPriceService'; 
import { useBitcoinData } from './useBitcoinData';
const App = () => {
  return (
    <BitcoinPriceFetcher />
  );
};
const App = () => {
  return (
    <BitcoinPriceService />
  );
};

export default App;

const App = () => {
  const bitcoinData = useBitcoinData();

  return (
    <View>
      <FlatList
        data={bitcoinData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Currency: {item.code}</Text>
            <Text>Price: {item.rate}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;