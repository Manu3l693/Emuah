import { StyleSheet, Text, View, StatusBar, TextInput, KeyboardAvoidingView, Dimensions, Pressable, FlatList,} from 'react-native'
import { Link, useRouter } from 'expo-router'
import axios from 'axios'
import { FontAwesome } from '@expo/vector-icons'

import { useState } from 'react'



const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Signup() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const router = useRouter()


  const handleChange = (field: string, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', userData)
      if(response.data.success){
        setMessage(response.data.message);
        setUserData({
          name: '', email: '', password: ''
        })
        setTimeout(() => {
          router.navigate('/(auth)/login')
        }, 1500)
      } else{
        setNameError(response.data.nameError)
        setEmailError(response.data.emailError)
        setPasswordError(response.data.passwordError)
      }
    } catch (error) {
      setErrorMessage(`Something went wrong: ${error}`)
    }
  }


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
              <TextInput style={styles.textInput} value={userData.name} onChangeText={(text) => handleChange('name', text)}  placeholder='Name' placeholderTextColor='#0A172F'/>
              <Text style={styles.errorMessage}>{nameError}</Text>

              <TextInput style={styles.textInput} value={userData.email} onChangeText={(text) => handleChange('email', text)}  placeholder='Email' placeholderTextColor='#0A172F'/>
              <Text style={styles.errorMessage}>{emailError}</Text>
              
              <TextInput style={styles.textInput} value={userData.password} onChangeText={(text) => handleChange('password', text)} placeholder='Password' placeholderTextColor='#0A172F' secureTextEntry/>
              <Text style={styles.errorMessage}>{passwordError}</Text>
            </View>

            <View style={styles.button}>
              <View style={styles.buttonStyle}>
                <Pressable style={styles.pressableButton} onPress={handleSubmit} >
                  <Text style={styles.pressableText}>Sign up</Text>
                </Pressable>

                {/* <Text style={styles.message}>{message}</Text>
                <FlatList 
                  data={errorMessage}
                  renderItem={({item, index}) => {
                    return(
                      <Text style={styles.errorMessage}>{item}</Text>
                    )
                  }}    
                /> */}
                <Text style={styles.errorMessage}>{errorMessage}</Text>
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
  errorMessage: {
    color: 'red',
  },
  button: {
    // backgroundColor: 'green',
    flex: 2
  },
  buttonStyle: {
    // backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pressableButton: {
    backgroundColor: '#00aaff',
    width: '95%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressableText: {
    color: '#fff',
    fontSize: 16
  },
  message: {
    color: 'green',
  },
  signupOptions:{
    // backgroundColor: 'gold',
    flex: 1,
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