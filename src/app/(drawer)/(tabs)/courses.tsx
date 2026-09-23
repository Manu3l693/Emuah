import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, Image } from 'react-native'
import { useState, useCallback, useEffect } from 'react'

import TextStyle from '@/app/generalStyles/app'

import { useAuth } from '../../../context/AuthContext' 


import { useFocusEffect } from 'expo-router/build/react-navigation'
import { Link } from 'expo-router'

import axios from 'axios'

import tutorImage from '../../images/tutor.jpg'



export default function Courses() {
  const { token } = useAuth()
  const [user, setUser] = useState('')

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/landing', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (response.data.success) {
        setUser(response.data.user.name) // adjust field name to match your User model
      }
    } catch (error) {
      setUser('Something went wrong')
    }
  }

  useEffect(()=> {
    getUser()
  }, [])


  useFocusEffect(
    useCallback(()=> {
      StatusBar.setBackgroundColor('#F4FAFF')
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  

  return (
    <>
      <View style={{backgroundColor: '#F4FAFF', flex: 1}}>
        <ScrollView style={{flex: 1}}>

          <View style={styles.container}>
            <View style={styles.container_1}>
              <View style={styles.welcome}>
                <View style={styles.welcome_1}>
                  <Text style={[TextStyle.appHeader, {fontSize: 22}]}>Welcome, {user}. 🎉</Text>
                  <Text style={TextStyle.categoryText}>Let's get you started!</Text>
                </View>
              </View>

              <View style={styles.videoContainer}>
                <View style={styles.videoContainer_1}>

                  <View style={styles.introduction_vid}>
                    <View style={styles.introduction_vid_1}>
                      <View style={styles.watchVideo}>
                        <Text style={[TextStyle.appText, {fontWeight: 400}]}>Watch our introductory video by our Founder.</Text>
                      </View>

                      <View style={styles.watchButton}>
                        <Pressable style={styles.watchButton_1}><Link href='https://youtu.be/NGAIdmMaHcQ?si=_vnNS0yqB6Y7CD_L' style={[TextStyle.appText, {fontWeight: 500}]}>Watch Video</Link></Pressable>
                      </View>

                      <View style={styles.tutor}>
                        <Text style={[TextStyle.sectionHeader, {fontSize: 13}]}>Prof. Andy</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.personImage}>
                    <View style={styles.personImage_1}>
                      <Image source={tutorImage} style={styles.tutorImage}/>
                    </View>
                  </View>

                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'plum',
      width: '100%',
      height: 300,
      alignItems: 'center',
      justifyContent: 'center'
    },

    container_1: {
      // backgroundColor: 'pink',
      width: '90%',
      height: '100%'
    },

    welcome: {
      // backgroundColor: 'green',
      width: '100%',
      height: '35%',
      justifyContent: 'center'
    },

    welcome_1: {
      // backgroundColor: 'blue',
      width: '100%',
      height: '60%',
      justifyContent: 'space-evenly'
    },

    videoContainer: {
      backgroundColor: '#fff',
      width: '100%',
      height: '65%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    videoContainer_1: {
      // backgroundColor: 'yellow',
      width: '100%',
      height: '80%',
      flexDirection: 'row'
    },

    introduction_vid: {
      // backgroundColor: 'blue',
      width: '70%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    introduction_vid_1: {
      // backgroundColor: 'purple',
      width: '80%',
      height: '80%'
    },

    watchVideo: {
      // backgroundColor: 'orange',
      width: '100%',
      height: '30%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    watchButton: {
      // backgroundColor: 'yellow',
      width: '100%',
      height: '55%',
      justifyContent: 'flex-end'
    },

    watchButton_1: {
      backgroundColor: 'transparent',
      width: '57%',
      height: '50%',
      borderColor: '#0A172F',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    tutor: {
      // backgroundColor: 'green',
      width: '100%',
      height: '15%',
      alignItems: 'flex-end',
    },

    personImage: {
      // backgroundColor: 'orange',
      width: '30%',
      height: '100%',
      justifyContent: 'flex-end'
    },

    personImage_1: {
      // backgroundColor: 'silver',
      width: '100%',
      height: '90%',
      alignItems: 'center'
    },

    tutorImage: {
      width: '90%',
      height: '100%',
      objectFit: 'cover'
    }


})