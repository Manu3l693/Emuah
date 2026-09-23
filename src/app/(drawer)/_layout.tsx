import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function RootLayout(){
    return(
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer screenOptions={{drawerPosition: "right", headerStyle: {backgroundColor: '#0A172F'}, headerTintColor: '#fff',}}>
                <Drawer.Screen name="landing"  options={{
                    title: '',
                    headerLeft: () => {
                        return <View style={{width: '70%', height: '100%', justifyContent: 'center'}}>
                            <Text style={{marginLeft: '15%', color: '#00AAFF', fontSize: 24, fontWeight: 600}}>Skill<Text style={{color: '#44F62E'}}>S</Text>phere</Text>
                        </View>
                    }
                }}></Drawer.Screen>
                
                <Drawer.Screen
                    name="(tabs)"
                    options={{ 
                        title: '', 
                        drawerPosition: 'left',
                        headerTintColor: '#0A172F',
                        headerStyle: {backgroundColor: '#F4FAFF', borderBottomColor: '#F4FAFF', borderBottomWidth: 1, elevation: 0, shadowOpacity: 0, shadowOffset: {width: 0, height: 0}},
                        headerRight: () => {
                            return <View style={{backgroundColor: 'transparent', width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <FontAwesome6 name='bell' size={20} color='#0A172F'/>
                            </View>
                        }
                     }}
                        
                />                  
            </Drawer>
        </GestureHandlerRootView>
    )
}