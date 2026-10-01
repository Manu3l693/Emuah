import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function search() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'plum',
        width: '100%',
        height: 500,
        alignItems: 'center',
        justifyContent: 'center'
    }
})