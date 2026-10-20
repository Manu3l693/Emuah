import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'

// import proGraDesign from '../images/professionalGrapicDesigner.jpg'

// import digitalMarketing from '../images/digitalMarketing.jpg'
import axios from 'axios'
import Card2 from './card2'

type Course = {id: number; courseTitle: String; text: String; image: String; type: String}

export default function CertificateCourse() {
  const [course, setCourse] = useState<Course[]>([])

  const BASE_URL = 'http://localhost:5000'
  const fetchCourse = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/explore/certificationCourse`)
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
        {/* <Card2 img={proGraDesign} header='Professional Graphic Design' text='Certificate' color='#555353'/>
        <Card2 img={digitalMarketing} header='Digital Marketing' text='Certificate' color='#555353'/> */}

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
        // backgroundColor: 'purple',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})