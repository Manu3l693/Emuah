import { StyleSheet, Text, View, StatusBar, TextInput, KeyboardAvoidingView, Dimensions, Pressable} from 'react-native'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'


const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Signup() {
  return (
    <>
      <StatusBar backgroundColor='#f4faff' barStyle='dark-content'/>
      <KeyboardAvoidingView style={styles.container} behavior='padding' keyboardVerticalOffset={64}>
          <View style={styles.accountBox}>
            <View style={styles.header}>
              <View style={styles.header_1}>
                <Text style={styles.textHeader}>Create an account</Text>
                <Text style={styles.texts}>Enter your personal details and start your journey with us.</Text>
              </View>
            </View>

            <View style={styles.formBox}>
              <TextInput style={styles.textInput} placeholder='Name' placeholderTextColor='#0A172F'/>
              <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='#0A172F'/>
              <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#0A172F' secureTextEntry/>
            </View>

            <View style={styles.button}>
              <View style={styles.buttonStyle}>
                <Pressable style={styles.pressableButton}>
                  <Text style={styles.pressableText}>Sign up</Text>
                </Pressable>
              </View>
              
              <View style={styles.signupOptions}>
                <View style={styles.signupOptions_1}>
                  <Pressable style={styles.signupOptionsPressables}>
                    <FontAwesome name='facebook' size={20} color='#0A172F' />
                  </Pressable>

                  <Pressable style={styles.signupOptionsPressables}>
                    <FontAwesome name='google-plus' size={20} color='#0A172F' />
                  </Pressable>

                  <Pressable style={styles.signupOptionsPressables}>
                    <FontAwesome name='apple' size={20} color='#0A172F' />
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={styles.signin}>
              <Text style={styles.texts}>Already have an account? <Link href='/(auth)/login' style={{color: '#00AAFF'}}>Sign in</Link></Text>
            </View>
          </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4faff',
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
  },
  accountBox: {
    // backgroundColor: 'yellow',
    width: '85%',
    height: SCREEN_HEIGHT * 0.8, 
  },
  header: {
    // backgroundColor: 'purple',
    flex: 1,
    alignItems: 'center',
  },
  header_1: {
    // backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textHeader: {
    color: '#0A172F',
    fontSize: 20,
    fontWeight: 700
  },
  texts: {
    textAlign: 'center',
    color: '#555353',
    lineHeight: 20
  },
  formBox: {
    // backgroundColor: 'blue',
    flex: 3,
    justifyContent: 'space-evenly'
  },
  textInput: {
    backgroundColor: '#E2F5FF',
    width: '100%',
    height: 50,
    borderRadius: 3
  },
  button: {
    // backgroundColor: 'green',
    flex: 2
  },
  buttonStyle: {
    // backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressableButton: {
    backgroundColor: '#00aaff',
    width: '95%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressableText: {
    color: '#fff',
    fontSize: 16
  },
  signupOptions:{
    // backgroundColor: 'gold',
    flex: 1.5,
    alignItems: 'center'
  },
  signupOptions_1: {
    // backgroundColor: '#fff',
    width: '55%',
    height: '50%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '5%'
   
  },
  signupOptionsPressables : {
    // backgroundColor: 'red',
    width: 45,
    height: 45,
    borderRadius: '50%',
    borderColor: '#DDDDDE',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  signin: {
    // backgroundColor: 'red',
    flex: 0.5,
    justifyContent: 'flex-end'
  }
})