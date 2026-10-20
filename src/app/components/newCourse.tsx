import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'

// import introAI from '../images/IntroToAI.jpg'

// import adHM from '../images/AdvancedHM.jpg'

import axios from 'axios'
import Card2 from './card2'

type Course = {id: number; courseTitle: String; text: String; image: String; type: String}

export default function NewCourse() {

  const [course, setCourse] = useState<Course[]>([])

  const BASE_URL = 'http://localhost:5000'
  const fetchCourse = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/explore/newCourse`)
      if(response.data.success){
        setCourse(response.data.course)
        console.log(response.data.course)
      }
    } catch (error) {
      setCourse([])
    }
  }

  useEffect(()=> {
    fetchCourse()
  }, [])
  return (
    <View style={styles.container}>
        {/* <Card2 img={introAI} header='Introduction to Artificial Intelligence' text='Course' color='#555353'/>
        <Card2 img={adHM} header='Advanced Healthcare Management' text='Course' color='#555353'/> */}

        {course.map((item) => (
        <Card2 
          key={item.id}
          img={item.image ? { uri: `${BASE_URL}/uploads/${item.image}` } : ''}
          header={item.courseTitle}
          text={item.text}
        />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'gold',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    }
})