import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'

import Card2 from './card2'

import axios from 'axios'

// import uiuxDesign from '../images/ui_ux.png'

// import gsPython from '../images/gettingStatedPython.jpg'

type Course = {id: number; courseTitle: String; text: String; image: String; type: String}

export default function PopularCourses() {

  const [course, setCourse] = useState<Course[]>([])

  const BASE_URL = 'http://localhost:5000'
  const fetchCourse = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/explore/popularCourses`)
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
        // backgroundColor: 'green',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})