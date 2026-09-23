import { Image, StyleSheet, Text, View } from 'react-native'

import TextStyle from '../generalStyles/app'

type CardProps = {
    img: any
    header: string
    text: string
    footer: string
}

export default function Card({img, header, text, footer}: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardImage}>
        <Image style={styles.image} source={img} />
      </View>

      <View style={styles.cardDetail}>
        <View style={styles.cardDetail_1}>
           <View style={styles.cardDetail_1_1}>
                 <View style={styles.cardHeader}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.cardTextHeader}>{header}</Text>
                </View>
            
                <View style={styles.cardText}>
                    <Text style={TextStyle.appText}>{text}</Text>
                </View>

                <View style={styles.cardFooter}>
                    <Text 
                    numberOfLines={1} 
                    ellipsizeMode='tail' style={styles.cardTextHeader}>{footer}</Text>
                </View>
           </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '47.5%',
        height: '100%'
    },

    cardImage: {
        // backgroundColor: 'green',
        width: '100%',
        height: '35%'
    },
    
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },

    cardDetail: {
        // backgroundColor: 'purple',
        width: '100%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardDetail_1: {
        // backgroundColor: 'red',
        width: '85%',
        height: '85%'
    },
    cardDetail_1_1: {
        // backgroundColor: '#000',
        width: '90%',
        height: '100%'
    },
    cardHeader: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '30%',
        justifyContent: 'center'
    },
    cardTextHeader: {
        color: '#0A172F',
        fontSize: 16,
        fontWeight: 500
    },

    cardText: {
        // backgroundColor: 'red',
        width: '100%',
        height: '50%',
        justifyContent: 'center'
    },

    cardFooter: {
        // backgroundColor: 'indigo',
        width: '100%',
        height: '20%',
        justifyContent: 'center'
    }

    
})