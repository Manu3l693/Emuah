import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, Image, Dimensions} from 'react-native'
import { useState, useCallback, useEffect } from 'react'

import TextStyle from '@/app/generalStyles/app'

import { useAuth } from '../../../context/AuthContext' 


import { useFocusEffect } from 'expo-router/build/react-navigation'
import { Link } from 'expo-router'

import axios from 'axios'

import Card2 from '@/app/components/card2'

import Footer from '@/app/components/footer'

import tutorImage from '../../images/tutor.jpg'


import PopularCourses from '@/app/components/popularCourses'
import TopRatedCourses from '@/app/components/topRatedCourses'
import CertificateCourse from '@/app/components/certificateCourse'
import NewCourse from '@/app/components/newCourse'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

type Course = { id: number; courseTitle: string; type: string; text: String; image: String; }
// type Card = {id: number; courseTitle: String; text: String; image: String; type: String }

export default function Courses() {

  const { token } = useAuth()
  const [user, setUser] = useState('')
  const [exploreCourse, setExploreCourse] = useState<Course[]>([])
  

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/landing', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (response.data.success) {
        setUser(response.data.user.name)
      }
    } catch (error) {
      setUser('Something went wrong')
    }
  }


  const getCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/explore/exploreCourses')
      if(res.data.success){
        setExploreCourse(res.data.course)
        console.log(res.data.course);
        
      }
    } catch (error) {
      setExploreCourse([])
    }
  }

  useEffect(()=> {
    getUser()
    getCourses()
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
                  <Text style={[TextStyle.appHeader, {fontSize: 22}]}>Welcome, {user || 'Guest'}. 🎉</Text>
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

                  <Link href='/(drawer)/(tabs)/search'  style={TextStyle.linkStyle}>View all</Link>
                </View>
              </View>

              <View style={styles.courses_to_search}>
                <View style={styles.courses_to_search_1}>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.chipRow}
                  >
                    {exploreCourse.map((course, index) => (
                      <Pressable key={`${course.id}-${index}`} style={styles.courseButton}>
                        <Text numberOfLines={1}>{course.courseTitle}</Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
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
                <PopularCourses />
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
                <TopRatedCourses />
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
                <CertificateCourse />
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
                <NewCourse />
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
      width: '100%',
      height: 300,
      alignItems: 'center',
      justifyContent: 'center'
    },

    container_1: {
      width: '90%',
      height: '100%'
    },

    welcome: {
      width: '100%',
      height: '35%',
      justifyContent: 'center'
    },

    welcome_1: {
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
      width: '100%',
      height: '80%',
      flexDirection: 'row'
    },

    introduction_vid: {
      width: '70%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    introduction_vid_1: {
      width: '80%',
      height: '80%'
    },

    watchVideo: {
      width: '100%',
      height: '30%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    watchButton: {
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
      width: '100%',
      height: '15%',
      alignItems: 'flex-end',
    },

    personImage: {
      width: '30%',
      height: '100%',
      justifyContent: 'flex-end'
    },

    personImage_1: {
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
      width: '100%',
      height: 250,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    explore_1: {
      width: '100%',
      height: '80%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    explore_header: {
      width: '90%',
      height: '25%',
      justifyContent: 'center'
    },

    topics: {
      width: '100%',
      height: '25%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    topics_1: {
      width: '90%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    courses_to_search: {
      // backgroundColor: 'yellow',
      width: '100%',
      height: '50%',
      alignItems: 'flex-end'
    },

    courses_to_search_1: {
      // backgroundColor: 'green',
      width: '95%',
      height: '100%'
    },

    chipRow: {
      flexGrow: 1,
      alignItems: 'center',
      gap: 10,
    },

    courseButton: {
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
      paddingVertical: 12,
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },

    popularCourses: {
      width: '100%',
      height: 380,
      alignItems: 'center',
      justifyContent: 'center'
    },

    popularCourses_1: {
      width: '90%',
      height: '80%'
    },

    popularCourses_header: {
      width: '100%',
      height: '30%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    popularCourses_cards: {
      // backgroundColor: 'red',
      width: '100%',
      height: '70%',
      
    }

})