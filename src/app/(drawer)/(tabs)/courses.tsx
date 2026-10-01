import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, Image, Dimensions} from 'react-native'
import { useState, useCallback, useEffect } from 'react'

import TextStyle from '@/app/generalStyles/app'

import { useAuth } from '../../../context/AuthContext' 


import { useFocusEffect } from 'expo-router/build/react-navigation'
import { Link } from 'expo-router'

import { Carousel } from 'react-native-reanimated-carousel'

import axios from 'axios'

import Card2 from '@/app/components/card2'

import Footer from '@/app/components/footer'

import tutorImage from '../../images/tutor.jpg'

import uiuxDesign from '../../images/ui_ux.png'

import gsPython from '../../images/gettingStatedPython.jpg'

import introPython from '../../images/introToPython.jpg'

import uiuxPrinciples from '../../images/uiuxPrinciples.jpg'

import proGraDesign from '../../images/professionalGrapicDesigner.jpg'

import digitalMarketing from '../../images/digitalMarketing.jpg'

import introAI from '../../images/IntroToAI.jpg'

import adHM from '../../images/AdvancedHM.jpg'



const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function Courses() {

  const availableCourses = [
    {id: 1, courseTitle: 'Soft Skill'},
    {id: 2, courseTitle: 'Businesses'},
    {id: 3, courseTitle: 'Arts'},
    {id: 4, courseTitle: 'Science'},
  ]

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

          <View style={styles.explore}>
            <View style={styles.explore_1}>
              <View style={styles.explore_header}>
                <Text style={TextStyle.appHeader}>Explore</Text>
              </View>
              
              <View style={styles.topics}>
                <View style={styles.topics_1}>
                  <Text style={[TextStyle.categoryText, {color: '#0A172F'}]}>Topics</Text>

                  <Link href=''  style={TextStyle.linkStyle}>View all</Link>
                </View>
              </View>

              <View style={styles.courses_to_search}>
                <Carousel
                  style={styles.carouselEdge}
                  data={availableCourses}
                  loop
                  layout={{
                    type: "default",
                    offset: 50,           // was: parallaxScrollingOffset
                    scale: 0.9,            // was: parallaxScrollingScale
                    adjacentScale: 0.8,
                  }}
                  renderItem={({ item }) => (
                    <View style={styles.carouselEdge_1}>
                      <Pressable style={styles.courseButton}>
                        <Text>Soft Skill</Text>
                      </Pressable>

                      <Pressable style={styles.courseButton} >
                        <Text>Business</Text>
                      </Pressable>

                      <Pressable style={styles.courseButton}>
                        <Text></Text>
                      </Pressable>

                      <Pressable style={styles.courseButton} >
                        <Text></Text>
                      </Pressable>
                      
                    </View>
                  )}
                />
              </View>
            </View>
          </View>

          <View style={styles.popularCourses}>
            <View style={styles.popularCourses_1}>
              <View style={styles.popularCourses_header}>
                <Text style={[TextStyle.categoryText, {color: '#000'}]}>Popular Courses</Text>

                <Link href='' style={TextStyle.linkStyle}>View all</Link>
              </View>

              <View style={styles.popularCourses_cards}>
                <Card2 img={uiuxDesign} header='UI/UX Design Fundamentals' text='Intermediate' color='#555353'/>
                <Card2 img={gsPython} header='Getting Started with Python' text='Beginner' color='#555353'/>
              </View>
            </View>
          </View>

          <View style={styles.popularCourses}>
            <View style={styles.popularCourses_1}>
              <View style={styles.popularCourses_header}>
                <Text style={[TextStyle.categoryText, {color: '#000'}]}>Top Rated Courses</Text>

                <Link href='' style={TextStyle.linkStyle}>View all</Link>
              </View>

              <View style={styles.popularCourses_cards}>
                <Card2 img={introPython} header='Introduction to Python Professional Course' text='Course' color='#555353'/>
                <Card2 img={uiuxPrinciples} header='UI/UX Design Principles' text='Course' color='#555353'/>
              </View>
            </View>
          </View>

          <View style={styles.popularCourses}>
            <View style={styles.popularCourses_1}>
              <View style={styles.popularCourses_header}>
                <Text style={[TextStyle.categoryText, {color: '#000'}]}>Certificate Courses</Text>

                <Link href='' style={TextStyle.linkStyle}>View all</Link>
              </View>

              <View style={styles.popularCourses_cards}>
                <Card2 img={proGraDesign} header='Professional Graphic Design' text='Certificate' color='#555353'/>
                <Card2 img={digitalMarketing} header='Digital Marketing' text='Certificate' color='#555353'/>
              </View>
            </View>
          </View>

          <View style={styles.popularCourses}>
            <View style={styles.popularCourses_1}>
              <View style={styles.popularCourses_header}>
                <Text style={[TextStyle.categoryText, {color: '#000'}]}>New Courses</Text>

                <Link href='' style={TextStyle.linkStyle}>View all</Link>
              </View>

              <View style={styles.popularCourses_cards}>
                <Card2 img={introAI} header='Introduction to Artificial Intelligence' text='Course' color='#555353'/>
                <Card2 img={adHM} header='Advanced Healthcare Management' text='Course' color='#555353'/>
              </View>
            </View>
          </View>

          <View style={{backgroundColor: '#F4FAFF', width: '100%', height: 75}}></View>


          <Footer />
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
    },

    explore: {
      // backgroundColor: 'red',
      width: '100%',
      height: 250,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    explore_1: {
      // backgroundColor: 'blue',
      width: '100%',
      height: '80%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    explore_header: {
      // backgroundColor: 'green',
      width: '90%',
      height: '25%',
      justifyContent: 'center'
    },

    topics: {
      // backgroundColor: 'pink',
      width: '100%',
      height: '25%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    topics_1: {
      // backgroundColor: 'orange',
      width: '90%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    courses_to_search: {
      // backgroundColor: 'red',
      width: '90%',
      height: '50%'
    },


    carouselEdge: {
      // backgroundColor: 'gold',
      width: SCREEN_WIDTH,
      height: '100%'
    },

    carouselEdge_1: {
      // backgroundColor: 'brown',
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },

    courseButton: {
      backgroundColor: '#ffffff',
      width: '24%',
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '2%'
    },

    //popularCourses

    popularCourses: {
      // backgroundColor: 'green',
      width: '100%',
      height: 380,
      alignItems: 'center',
      justifyContent: 'center'
    },

    popularCourses_1: {
      // backgroundColor: 'blue',
      width: '90%',
      height: '80%'
    },

    popularCourses_header: {
      // backgroundColor: 'pink',
      width: '100%',
      height: '30%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    popularCourses_cards: {
      // backgroundColor: 'gold',
      width: '100%',
      height: '70%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }

})