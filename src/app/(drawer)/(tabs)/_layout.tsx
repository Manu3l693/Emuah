import { Tabs } from "expo-router";

export default function RootLayout(){
    return(
        <Tabs screenOptions={{tabBarStyle: {backgroundColor: '#F4FAFF'}}}>
            <Tabs.Screen name="courses"  options={{headerShown: false}}></Tabs.Screen>
        </Tabs>
    )
}