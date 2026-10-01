import { Tabs } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

export default function RootLayout(){
    return(
        <Tabs screenOptions={{
         tabBarStyle: {backgroundColor: '#F4FAFF'},  
         headerShown: false, 
         tabBarActiveTintColor: '#00AAFF',   // color when tab IS active
         tabBarInactiveTintColor: '#0A172F', 
         }}>
            <Tabs.Screen name="courses"  options={{
               title: 'Courses',
               tabBarIcon: ({color}) => <FontAwesome6 name='book' color={color} size={15} />,
                
            }}></Tabs.Screen>

            <Tabs.Screen name="search"  options={{
               title: 'Search',
               tabBarIcon: ({color}) => <FontAwesome6 name='magnifying-glass' color={color} size={15} />
            }}></Tabs.Screen>

            <Tabs.Screen name="learn"  options={{
               title: 'Learn',
               tabBarIcon: ({color}) => <FontAwesome6 name='tv' color={color} size={15} />
            }}></Tabs.Screen>

            <Tabs.Screen name="cart"  options={{
               title: 'Cart',
               tabBarIcon: ({color}) => <FontAwesome6 name='cart-shopping' color={color} size={15} />
            }}></Tabs.Screen>

            <Tabs.Screen name="account"  options={{
               title: 'Account',
               tabBarIcon: ({color}) => <FontAwesome6 name='user' color={color} size={15} />
            }}></Tabs.Screen>
        </Tabs>
    )
}