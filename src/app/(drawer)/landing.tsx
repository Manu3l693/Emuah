import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions, Pressable, Image,  NativeSyntheticEvent, NativeScrollEvent} from 'react-native'
import { useEffect, useState, useCallback } from 'react'
import { Link, useRouter } from 'expo-router'

import { useFocusEffect } from 'expo-router/build/react-navigation'



import axios from 'axios'


import { useAuth } from '../../context/AuthContext'

import TextStyle from '../generalStyles/app'

import Compt1 from '../components/compt1'
import Card from '../components/card'
import Footer from '../components/footer'

import landingImage from '../images/landingImage.jpg'
import onlineImage from '../images/icon-online-courses.png'
import expertImage from '../images/icon-expert-tutoring.png'
import certificationImage from '../images/icon-certification.png'
import cardImage1 from '../images/bearded-man.jpeg'
import cardImage2 from '../images/images.jpg'
import getMark from '../images/icon-checkmark.png'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const testimonies = [
    {id: 1, name: 'Jane Doe', img: landingImage, course: 'Marketing Graduate', text: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."'},
    {id: 2, name: 'Jane Doe', img: landingImage, course: 'Marketing Graduate', text: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."'},
    {id: 3, name: 'Jane Doe', img: landingImage, course: 'Marketing Graduate', text: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."'}
]

export default function Landing() {

    useFocusEffect(
    useCallback(() => {
        StatusBar.setBackgroundColor('#0A172F')
        StatusBar.setBarStyle('light-content')
        }, [])
    )


    const [activeIndex, setActiveIndex] = useState(0)
    const [carouselWidth, setCarouselWidth] = useState(SCREEN_WIDTH)

    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / carouselWidth)
        setActiveIndex(index)
    }



    const { token, logout } = useAuth()
    const [user, setUser] = useState<any>(null)
    const router = useRouter()


    

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/landing', {
            headers: { Authorization: `Bearer ${token}` }
            })
            if (response.data.success) {
            setUser(response.data.user)
            }
        } catch (error) {
            await logout()
            router.replace('/(auth)')
        }
        }

        fetchUser() 
        const interval = setInterval(fetchUser, 10000) 

        return () => clearInterval(interval) 
    }, [])

    

  return (
    <View style={{backgroundColor: '#0A172F', flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#0A172F'}}>
            
            <View style={styles.container}>
                <View style={styles.landingPage}>
                    <View style={styles.skillContainer}>
                        <View style={styles.skillHeader}>
                            <View style={styles.skillHeader_1}>
                                <Text style={styles.header1}>Master New Skills</Text>
                                <Text style={styles.header2}>Learn Anywhere, Anytime.</Text>
                            </View>
                        </View>

                        <View style={styles.skillText}>
                            <View style={styles.skillText_1}>
                                <Text style={styles.textSkill}>Our courses offer a diverse range of topics designed to cater to learners of all backgrounds and interests. </Text>
                            </View>
                        </View>

                        <View style={styles.skillButton}>
                            <View style={styles.skillButton_1}>
                                <Pressable style={styles.pressableButton}>
                                    <Link href='/(drawer)/(tabs)/courses' style={styles.buttonText}>Get Started</Link>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.imageContainer}>
                        <View style={styles.imageContainer_1}>
                            <View style={styles.imageImageContainer}>
                                <Image source={landingImage} style={styles.image}/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.subContainer}>
                        <View style={styles.students}>
                            <Text style={styles.subHeader}>5k+</Text>
                            <Text style={styles.subText}>New Students</Text>
                        </View>

                        <View style={styles.mentors}>
                            <View style={styles.mentors_1}>
                                <Text style={styles.subHeader}>20k+</Text>
                                <Text style={styles.subText}>Experienced Mentors</Text>
                            </View>
                        </View>

                        <View style={styles.courses}>
                            <Text style={styles.subHeader}>26k+</Text>
                            <Text style={styles.subText}>Quality Courses</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.whyChoose}>
                <View style={styles.whyChoose_1}>
                    <View style={styles.whyChooseHeader}>
                        <Text style={TextStyle.sectionHeader}>Why choose us?</Text>
                    </View>

                    <View style={styles.whyChooseText}>
                        <Text style={styles.centerText}>We offer a variety of courses on diverse topics designed to enhance your skills and knowledge.</Text>
                    </View>
                </View>
            </View>

            <Compt1 img={onlineImage} header= 'Online Courses' text='Discover a wide variety of online courses that cater to your interests and professional needs. Our courses are designed to be flexible, allowing you to learn at your own pace.'/>

            <Compt1 img={expertImage} header= 'Expert Tutoring' text='Our Tutors bring extensive knowledge and real world experience to the table offering personalized assistance and answering any questions you may have.'/>

            <Compt1 img={certificationImage} header= 'Career Certification' text='Our career certification programs are specifically crafted to help you advance in your profession. These programs meet industry standards and are recognized by employers worldwide'/>

            <View style={styles.category}>
                <View style={styles.category_1}>
                    <View style={styles.category_header}>
                        <View style={styles.category_header_1}>
                            <Text style={TextStyle.categoryText}>Top categories</Text>
                            <Text style={TextStyle.sectionHeader}>See what you can learn</Text>
                        </View>
                    </View>

                    <View style={styles.categoryCard}>
                        <Card img={cardImage1} header= 'Introduction to programming...' text='Dr Sarah Thompson' footer='Course'/>
                        <Card img={cardImage2} header= 'Advanced UI/UX Design Certificate' text='Michael Bennett' footer='Professional Certificate' />
                    </View>

                    
                </View>
            </View>

            <View style={styles.unique}>
                <View style={styles.unique_offers}>
                    <View style={styles.unique_offers_header}>
                        <Text style={TextStyle.sectionHeader}>Our unique offers</Text>
                    </View>

                    <View style={styles.unique_offers_text}>
                        <View style={styles.unique_container}>
                            <View style={styles.unique_get}>
                                <View style={styles.getMark}>
                                    <Image style={styles.getMarkImage} source={getMark} />
                                </View>
                            </View>

                            <View style={styles.unique_text}>
                                <Text style={TextStyle.appText}>Personalized teaching experience tailored to your needs and pace.</Text>
                            </View>
                        </View>

                        <View style={styles.unique_container}>
                            <View style={styles.unique_get}>
                                <View style={styles.getMark}>
                                    <Image style={styles.getMarkImage} source={getMark} />
                                </View>
                            </View>

                            <View style={styles.unique_text}>
                                <Text style={TextStyle.appText}>Peer learning opportunities with interactive discussions and group projects.</Text>
                            </View>
                        </View>

                        <View style={styles.unique_container}>
                            <View style={styles.unique_get}>
                                <View style={styles.getMark}>
                                    <Image style={styles.getMarkImage} source={getMark} />
                                </View>
                            </View>

                            <View style={styles.unique_text}>
                                <Text style={TextStyle.appText}>A community to connect with fellow  students and tutors.</Text>
                            </View>
                        </View>

                        <View style={styles.unique_container}>
                            <View style={styles.unique_get}>
                                <View style={styles.getMark}>
                                    <Image style={styles.getMarkImage} source={getMark} />
                                </View>
                            </View>

                            <View style={styles.unique_text}>
                                <Text style={TextStyle.appText}>Access to exclusive job listings relevant to your new skills.</Text>
                            </View>
                        </View>

                        <View style={styles.unique_container}>
                            <View style={styles.unique_get}>
                                <View style={styles.getMark}>
                                    <Image style={styles.getMarkImage} source={getMark} />
                                </View>
                            </View>

                            <View style={styles.unique_text}>
                                <Text style={TextStyle.appText}>Real-world projects for practical experience.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.Testimonials}>
                <View style={styles.Testimonial_1}>
                    <View style={styles.testimonialHeader}>
                        <Text style={TextStyle.sectionHeader}>Testimonial</Text>
                    </View>

                    <View style={styles.testimonialContent}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={handleScrollEnd}
                             onLayout={(event) => setCarouselWidth(event.nativeEvent.layout.width)}
                            style={styles.scrollViewCarousel}
                        >
                            {testimonies.map((item, index) => (
                            <View key={index} style={[styles.carouselContainer_1, { width: carouselWidth  }]}>
                                <View style={styles.starContainer}></View>
                                <View style={styles.testimonyContainer}>
                                    <View style={styles.testimonyContainer_1}>
                                        <Text style={[TextStyle.appText, {textAlign: 'center'}]}>{item.text}</Text>
                                    </View>
                                </View>
                                <View style={styles.testifierContainer}>
                                    <View style={styles.testifierContainer_1}>
                                        <View style={styles.testifierImage}>
                                            <Image style={styles.testifierImage_1} source={item.img} />
                                        </View>

                                        <View style={styles.testifierName}>
                                            <View style={styles.testifierName_1}>
                                                <Text style={TextStyle.sectionHeader}>{item.name}</Text>
                                                <Text style={[TextStyle.appText, {fontSize: 12}]}>{item.course}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            ))}
                        </ScrollView>

                        <View style={styles.paginationContainer}>
                            <View style={styles.paginationContainer_1}>
                                {testimonies.map((_, index) => (
                                    <View
                                        key={index}
                                        style={[
                                        styles.dot,
                                        activeIndex === index && styles.activeDot
                                        ]}
                                    />
                                    ))}                                 
                            </View>
                        </View>
                        
                    </View>
                </View>
            </View>


            <Footer />
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A172F',
        width: '100%',
        height: SCREEN_HEIGHT * 0.92,
        alignItems: 'center',
        justifyContent: 'center',
    },
    landingPage: {
        // backgroundColor: 'red',
        width: '85%',
        height: '95%'
    },
    skillContainer: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '35%'
    },
    skillHeader: {
        // backgroundColor: 'red',
        width: '100%',
        flex: 1,
        justifyContent: 'center'
    },
    skillHeader_1: {
        // backgroundColor: 'orange',
        width: '100%',
        height: '85%',
        justifyContent: 'space-around'
    },
    header1: {
        color: '#ffff',
        fontSize: 25,
        fontWeight: 600
    },
    header2: {
        color: '#00AAFF',
        fontSize: 25,
        fontWeight: 600
    },
    skillText: {
        // backgroundColor: 'blue',
        width: '100%',
        flex: 1,
        justifyContent: 'center'
    },
    skillText_1: {
        // backgroundColor: '#000',
        width: '100%',
        height: '80%',
        alignItems: 'center'
    },
    textSkill: {
        color: '#CED1D5',
        fontSize: 16
    }, 
    skillButton: {
        // backgroundColor: 'orange',
        width: '100%',
        flex: 1,
        justifyContent: 'center'
    },
    skillButton_1: {
        // backgroundColor: 'lightblue',
        width: '100%',
        height: '80%'
    },
    pressableButton: {
        backgroundColor: '#00AAFF',
        width: '40%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    },
    imageContainer: {
        // backgroundColor: 'purple',
        width: '100%',
        height: '55%',
        alignItems: 'center',
    },
    imageContainer_1 : {
        // backgroundColor: 'red',
        width: '75%',
        height: '60%',
        marginTop: '10%',
        justifyContent: 'center',
        borderColor: '#00AAFF',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    imageImageContainer: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '90%',
        marginLeft: '6%'
    },

    subContainer: {
        // backgroundColor: 'green',
        width: '100%',
        height: '10%',
        flexDirection: 'row'
    },
    students: {
        // backgroundColor: 'red',
        width: '25%',
        height: '65%',
        justifyContent: 'space-between'
    },
    mentors: {
        // backgroundColor: 'blue',
        width: '50%',
        height: '65%',
        alignItems: 'center',
    },
    subHeader: {
        color: '#00AAFF',
        fontWeight: 600,
        fontSize: 20,
        marginBottom: '5%'
    },
    subText: {
        color: '#FFF',
        fontSize: 12
    },
    mentors_1: {
        // backgroundColor: 'pink',
        width: '80%',
        height:'100%',
        justifyContent: 'space-between'
    },
    courses: {
        // backgroundColor: 'gold',
        width: '25%',
        height: '65%',
        justifyContent: 'space-between'
    },
    

    //vwhy choose

    whyChoose: {
        backgroundColor: '#F4FAFF',
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },

    whyChoose_1: {
        // backgroundColor: 'yellow',
        width: '85%',
        height: '60%'
    },

    whyChooseHeader: {
        // backgroundColor: 'green',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    whyChooseText: {
        // backgroundColor: 'purple',
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    centerText: {
        color: '#000',
        textAlign: 'center',
        lineHeight: 25
    },

    //Category

    category: {
        backgroundColor: '#F4FAFF',
        width: '100%',
        height: 450,
        alignItems: 'center',
        justifyContent: 'center'
    },

    category_1:{
        // backgroundColor: 'green',
        width: '90%',
        height: '90%',
    },

    category_header: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '20%'
    },
    category_header_1: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    categoryCard: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    //Unique Offers

    unique: {
        backgroundColor: '#F4FAFF',
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },

    unique_offers: {
        // backgroundColor: 'blue',
        width: '90%',
        height: '90%'
    },

    unique_offers_header: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '10%',
        justifyContent: 'center'
    },

    unique_offers_text: {
        // backgroundColor: 'green',
        width: '100%',
        height: '90%'
    },

    unique_container: {
        // backgroundColor: 'pink',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        
    },

    unique_get: {
        // backgroundColor: 'orange',
        width: '15%',
        height: '100%',
        justifyContent: 'center'
    },

    getMark: {
        // backgroundColor: 'lightblue',
        width: '70%',
        height: '60%',
        borderRadius: 50
    },

    getMarkImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 50
    },

    unique_text: {
    //    backgroundColor: 'purple',
        width: '85%',
        height: '100%',
        justifyContent: 'center'
    },

    //Testimonials

    Testimonials: {
        backgroundColor: '#F4FAFF',
        width: '100%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Testimonial_1: {
        // backgroundColor: 'purple',
        width: '80%',
        height: '85%'
    },

    testimonialHeader: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    testimonialContent: {
    //    backgroundColor: 'green',
        width: '100%',
        height: '90%' 
    },

    scrollViewCarousel: {
        // backgroundColor: 'purple',
        width: '100%',
        height: '85%'
    },

    carouselContainer: {
        // backgroundColor: 'brown',
        width: '100%',
        height: '100%'
    },

    carouselContainer_1: {
        // backgroundColor: 'gold',
        width: '100%',
        height: '100%'
    },

    starContainer: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '20%'
    }
    ,

    testimonyContainer: {
        // backgroundColor: 'green',
        width: '100%',
        height: '55%',
        justifyContent: 'center'
    },

    testimonyContainer_1: {
        // backgroundColor: 'gold',
        width: '100%',
        height: '75%'
    },

    testifierContainer: {
        // backgroundColor: 'pink',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    testifierContainer_1: {
        // backgroundColor: 'silver',
        width: '55%',
        height: '70%',
        flexDirection: 'row'
    },

    testifierImage: {
        // backgroundColor: 'blue',
        width: '30%',
        height: '100%'
    },

    testifierImage_1: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 50
    },

    testifierName: {
        // backgroundColor: 'purple',
        width: '70%',
        height: '100%',
        alignItems: 'flex-end'
    },

    testifierName_1: {
        // backgroundColor: 'green',
        width: '90%',
        height: '100%',
        justifyContent: 'space-evenly'
    },

    paginationContainer: {
        // backgroundColor: 'orange',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    paginationContainer_1: {
        // backgroundColor: 'red',
        width: '50%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'transparent',
        marginHorizontal: 4,
        borderColor: '#007AC6',
        borderWidth: 1,
  },

  activeDot: {
        backgroundColor: '#007AC6',
        width: 8,
  }


})