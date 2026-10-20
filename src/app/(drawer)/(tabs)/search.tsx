import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, FlatList } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { useState, useEffect } from 'react'

import axios from 'axios'

import { FontAwesome5 } from '@expo/vector-icons'

import TextStyle from '@/app/generalStyles/app'

type Course = { id: number; courseTitle: string; type: string; subject: String }

export default function Search() {

  
  const [course, setCourse] = useState<Course[]>([])
  const [subject, setSubject] = useState<Course[]>([])

  const handleCourse = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/explore/searchedCourses')
      if(response.data.success){
        setCourse(response.data.course)
        console.log(response.data.course)
      }
    } catch (error) {
      setCourse([])
    }
  }

  const handleSubject = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/explore/browseSubject')
      if(response.data.success){
        setSubject(response.data.course)
        console.log(response.data.course)
      }
    } catch (error) {
      setSubject([])
    }
  }


  useEffect(()=> {
    handleCourse()
    handleSubject()
  }, [])

  return (
    <View style={{backgroundColor: '#F4FAFF', flex: 1}}>
      <ScrollView style={{flex: 1}}>

        <View style={styles.SearchBarcontainer}>
          <View style={styles.searchBar}>
            <Pressable style={styles.searchIconContainer}>
              <FontAwesome6  name='magnifying-glass' size={16} color='#B3B3B3'/>
            </Pressable>

            <TextInput  style={styles.textInputStyle} placeholder='Search for a course' placeholderTextColor='#757575'/>
          </View>
        </View>

        <View style={styles.topSearchContainer}>
          <View style={styles.topSearchContainer_1}>
            <View style={styles.topSearchHeader}>
              <Text style={TextStyle.sectionHeader}>Top Searches</Text>
            </View>

            <View style={styles.topSearchSearch}>
              <View style={styles.topSearchSearch_1}>
                {course.map((item) => (
                  <Pressable style={styles.courseButton} key={item.id}>
                    <Text>{item.courseTitle}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.browseSubject}>
          <View style={styles.browseSubject_1}>
            <View style={styles.browseSubjectHeader}>
              <Text style={[TextStyle.sectionHeader, {marginLeft: '3%'}]}>Browse subject</Text>
            </View>

            <View style={styles.subjectToBrowse}>
              {subject.map((item) => (
                <View style={styles.subjectContainer} key={item.id}>
                  <Pressable style={styles.subjectPressables}>
                    <Text style={{color: '#555353'}}>{item.subject}</Text>

                    <FontAwesome5 name='greater-than' size={10} color='#757575' />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    SearchBarcontainer: {
        // backgroundColor: 'plum',
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },

    searchBar: {
      backgroundColor: '#FFFFFF',
      width: '85%',
      height: '40%',
      flexDirection: 'row'
    },

    searchIconContainer: {
      // backgroundColor: 'red',
      width: '15%',
      height: '100%',
      alignItems:'flex-end',
      justifyContent: 'center',
      paddingRight: 10
    },

    textInputStyle: {
      // backgroundColor: 'blue',
      width: '85%',
      height: '100%'
    },

    topSearchContainer: {
      // backgroundColor: 'red',
      width: '100%',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center'
    },

    topSearchContainer_1: {
      // backgroundColor: 'purple',
      width: '85%',
      height: '100%'
    }, 

    topSearchHeader: {
      // backgroundColor: 'green',
      width: '100%',
      height: '20%',
      justifyContent: 'center'
    },

    topSearchSearch: {
      // backgroundColor: 'yellow',
      width: '100%',
      height: '80%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    topSearchSearch_1: {
      // backgroundColor: 'brown',
      width: '100%',
      height: '90%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },

    courseButton: {
      // backgroundColor: 'purple',
      paddingHorizontal: 16,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#0A172F',
    },

    browseSubject: {
      // backgroundColor: 'red',
      width: '100%',
      height: 700,
      alignItems: 'center',
      justifyContent: 'center'
    },

    browseSubject_1: {
      // backgroundColor: 'blue',
      width: '90%',
      height: '100%',
    },

    browseSubjectHeader: {
      // backgroundColor: 'green',
      width: '100%',
      height: '5%',
      justifyContent: 'center'
    },

    subjectToBrowse: {
      // backgroundColor: 'gold',
      width: '100%',
      flex: 1
    },

    subjectContainer: {
      // backgroundColor: '#fff',
      width: '100%',
      flex: 1,
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: '#555353',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    subjectPressables: {
      // backgroundColor: 'pink',
      width: '98%',
      height: '70%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
})