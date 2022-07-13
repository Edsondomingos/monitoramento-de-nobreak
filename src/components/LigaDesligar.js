import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

export default function LigaDesligar() {

  const [liga, setLigar] = useState(false)

  function switchLigar(){
    setLigar(!liga)
  }

  return (
    <View>
      <Switch value={liga} onValueChange={() => switchLigar()}/>
    </View>
  );
}
