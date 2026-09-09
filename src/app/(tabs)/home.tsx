import { StyleSheet, Text, View } from 'react-native'


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'plum',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})