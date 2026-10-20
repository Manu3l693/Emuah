import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'

// import introPython from '../images/introToPython.jpg'

// import uiuxPrinciples from '../images/uiuxPrinciples.jpg'

import axios from 'axios'
import Card2 from './card2'

type Course = {id: number; courseTitle: String; text: String; image: String; type: String}

export default function TopRatedCourses() {

  const [course, setCourse] = useState<Course[]>([])

  const BASE_URL = 'http://localhost:5000'
  const fetchCourse = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/explore/topRated`)
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
        {/* <Card2 img={introPython} header='Introduction to Python Professional Course' text='Course' color='#555353'/>
        <Card2 img={uiuxPrinciples} header='UI/UX Design Principles' text='Course' color='#555353'/> */}

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
        // backgroundColor: 'yellow',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})