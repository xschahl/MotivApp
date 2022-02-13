import * as React from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image, Text } from 'react-native';
import logo from './assets/MotivApp.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

function HomeScreen() {
    return (
        <View style={styles.container}>
                <Text style={{bottom: 100, fontSize: 40, color: 'black'}}>
                    0.00001 KVC
                </Text>
                <Button
                    onPress={() => {alert("il t'en manques encore")}}
                    title="Tâches"
                />
                <Button
                    onPress={() => {alert("Tqt ça va augmenter")}}
                    title="Bourse"
                />
            <View>
                <Button
                    onPress={() => {alert("Ce service n'est pas disponible pour le moment.")}}
                    title="Retrait"
                />
                <Button
                    onPress={() => {alert("C'est payant crois pas")}}
                    title="Cadeaux"
                />
            </View>
            <View>
                <Button style= {styles.button}
                    onPress={() => {alert("On vous répondra pas.")}}
                    title="Contactez-nous"
                />
            </View>
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
});

export default App;
