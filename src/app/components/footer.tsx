import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Link } from 'expo-router'
import TextStyle from '../generalStyles/app'


export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <View style={styles.linksContainer}>
            <View style={styles.careers}>
                <Link style={styles.linkStyle} href=''>Careers</Link>
            </View>

            <View style={styles.careers}>
                <Link style={styles.linkStyle} href=''>Private Policy</Link>
            </View>

            <View style={styles.careers}>
                <Link style={styles.linkStyle} href=''>Terms & Conditions</Link>
            </View>
        </View>

        <View style={styles.subscribeContainer}>
            <View style={styles.subscribeContainer_1}>
                <View style={styles.subHeader}>
                    <Text style={[TextStyle.sectionHeader, {color: '#fff'}]}>Subscribe to get our Newsletter</Text>
                </View>

                <View style={styles.subBox}>
                    <TextInput style={styles.subTextInput} placeholder='Your Email' placeholderTextColor='#9DA2AC' />
                </View>

                <View style={styles.subButton}>
                    <Pressable style={styles.subPressableButton}>
                        <Text style={TextStyle.buttonText}>Subscribe</Text>
                    </Pressable>
                </View>
            </View>
        </View>

        <View style={styles.endContainer}>
            <View style={styles.endContainer_1}>
                <View style={styles.skillSphere}>
                    <Text style={{color: '#00AAFF', fontSize: 16, fontWeight: 600}}>Skill<Text style={{color: '#44F62E'}}>S</Text>phere</Text>
                    <Text style={{color: '#fff', fontWeight: 500}}>Your Education is our Priority</Text>
                </View>

                <View style={styles.copyright}>
                    <Text style={{color: '#E2F5FF', fontSize: 12}}>{'\u00A9'} 2024 SkillSphere. All rights reserved.</Text>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A172F',
        width: '100%',
        height: 550,
        alignItems: 'center',
        justifyContent: 'center'
    },

    footerContainer: {
        // backgroundColor: 'purple',
        width: '95%',
        height: '95%'
    },

    linksContainer: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '25%'
    },
    careers: {
        // backgroundColor: 'pink',
        width: '100%',
        flex: 1,
        borderBottomColor: '#C1C4C8',
        borderBottomWidth: .7,
        justifyContent: 'center'
    },

    linkStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 400
    },

    subscribeContainer: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subscribeContainer_1: {
        // backgroundColor: 'red',
        width: '90%',
        height: '60%'
    },

    subHeader: {
        // backgroundColor: 'grey',
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subBox: {
        // backgroundColor: 'green',
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subTextInput: {
        backgroundColor: 'transparent',
        width: '90%',
        height: '65%',
        borderWidth: 1,
        borderColor: '#E2F5FF',
        paddingHorizontal: 20
    },

    subButton: {
        // backgroundColor: 'gold',
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subPressableButton : {
        backgroundColor: '#00AAFF',
        width: '35%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    endContainer: {
        // backgroundColor: 'grey',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    endContainer_1: {
        // backgroundColor: 'red',
        width: '60%',
        height: '90%'
    },

    skillSphere: {
        // backgroundColor: 'purple',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    copyright: {
    //    backgroundColor: 'green',
        width: '100%',
        flex: 1 ,
        alignItems: 'center',
        justifyContent: 'center'
    }
})