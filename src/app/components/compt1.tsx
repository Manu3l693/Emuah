import { Image, StyleSheet, Text, View } from 'react-native'

import TextStyle from '../generalStyles/app'

type Compt1Props = {
  img: any 
  header: string
  text: string
}

export default function Compt1({img, header, text}: Compt1Props) {
  return (
    <View style={styles.container}>
      <View style={styles.container_1}>
        <View style={styles.containerImage}>
            <View style={styles.containerImage_1}>
                <Image style={styles.image} source={img} />
            </View>
        </View>

        <View style={styles.containerHeader}>
            <Text style={TextStyle.sectionHeader}>{header}</Text>
        </View>

        <View style={styles.containerText}>
            <Text  style={[TextStyle.appText, {textAlign: 'center'}]}>{text}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4FAFF',
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_1: {
        // backgroundColor: 'yellow',
        width: '80%',
        height: '80%'
    },
    containerImage: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '30%',
        alignItems: 'center'
    },
    containerImage_1 : {
        // backgroundColor: 'purple',
        width: '15%',
        height: '85%',
        borderRadius: 50
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 50
    },
    containerHeader: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerText: {
        // backgroundColor: 'brown',
        width: '100%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center'
    }

})