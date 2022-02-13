import * as React from 'react';
import { Button, TextInput, View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import logo from './assets/MotivApp.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const KVC = 0.000001;

function LoginScreen({ navigation }) {
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    return (
        <View style={styles.container}>
            <Image source={logo} style={{bottom : 90, width: 305, height : 205}} />
            <Text style={{bottom: -290}}>Copyright : EPIGANG 2026</Text>
            <TextInput
                value={text}
                onChangeText={onChangeText}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={text2}
                onChangeText={onChangeText2}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button
                title={'Login'}
                style={styles.input}
                onPress={() => navigation.navigate('MotivApp')}
            />
            <Button
                title={'Create account'}
                style={styles.input}
                onPress={() => navigation.navigate('Create account')}
            />
        </View>
    );
}

function AccountScreen({ navigation }) {
    const [text, onChangeText] = React.useState("");
    const [text2, onChangeText2] = React.useState("");
    const [text3, onChangeText3] = React.useState("");
    const [text4, onChangeText4] = React.useState("");
    const [text5, onChangeText5] = React.useState("");
    return (
        <View style={styles.container}>
            <Image source={logo} style={{bottom : 55, width: 305, height : 205}} />
            <Text style={{bottom: -290}}>Copyright : EPIGANG 2026</Text>
            <TextInput
                value={text}
                onChangeText={onChangeText}
                placeholder={'Email'}
                style={styles.input}
            />
            <TextInput
                value={text2}
                onChangeText={onChangeText2}
                placeholder={'Name'}
                style={styles.input}
            />
            <TextInput
                value={text3}
                onChangeText={onChangeText3}
                placeholder={'Surname'}
                style={styles.input}
            />
            <TextInput
                value={text4}
                onChangeText={onChangeText4}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={text5}
                onChangeText={onChangeText5}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button
                title={'Login'}
                style={styles.input}
                onPress={() => navigation.navigate('MotivApp')}
            />
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
                <Text style={{bottom: 65, fontSize: 40, color: 'black'}}>
                    0.00001 KVC
                </Text>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Faire 1h de sport"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Remplir ou ranger le lave vaiselle"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Faire le ménage"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Faire à manger"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Faire le linge"
                />
            </TouchableOpacity>
            <View style={{bottom: -50}}>
                <Button
                    title="Contactez-nous"
                    color='red'
                    onPress={() => navigation.navigate('Contactez-nous')}
                />
            </View>
        </View>
    );
}

function Contact() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={{bottom : 55, width: 350, height : 350}} />
            <Text style={{fontSize : 20}}>
                POUR NOUS CONTACTER :
            </Text>
            <Text style={{bottom: -50, fontSize: 20, color: 'blue', textDecorationLine: 'underline'}}>
                motivapp.contact@epitech.eu
            </Text>
        </View>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="MotivApp" component={HomeScreen} />
                <Stack.Screen name="Create account" component={AccountScreen} />
                <Stack.Screen name="Contactez-nous" component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'powderblue',
    },
    input: {
        width: 280,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;
