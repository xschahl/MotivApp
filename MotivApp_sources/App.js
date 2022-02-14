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
                    onPress={() => navigation.navigate('Faire 1h de sport')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Remplir ou ranger le lave vaiselle"
                    onPress={() => navigation.navigate('Remplir ou ranger le lave vaiselle')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Faire le ménage"
                    onPress={() => navigation.navigate('Faire le ménage')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Faire à manger"
                    onPress={() => navigation.navigate('Faire à manger')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title="Faire le linge"
                    onPress={() => navigation.navigate('Faire le linge')}
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

function ContactScreen() {
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

function SportScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, fontWeight: 'bold', bottom: 130}}>
                01:00:00
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {'"Il faut viser la lune, parce qu’au moins,\n si vous échouez, vous finirez dans les étoiles."'}
                {'\n\nOscar Wilde'}
            </Text>
            <TouchableOpacity style={styles.buttonTache}>
                <Button
                    title="Valider la tâche"
                    onPress={() => navigation.navigate('MotivApp')}
                />
            </TouchableOpacity>
        </View>
    );
}

function MenageScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, fontWeight: 'bold', bottom: 130}}>
                01:00:00
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {'"La meilleure façon de prédire l’avenir\n est de le créer." \n\nPeter Drucker'}
            </Text>
            <TouchableOpacity style={styles.buttonTache}>
                <Button
                    title="Valider la tâche"
                    onPress={() => navigation.navigate('MotivApp')}
                />
            </TouchableOpacity>
        </View>
    );
}

function MangerScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, fontWeight: 'bold', bottom: 130}}>
                00:30:00
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {'"Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement." \n\nMartin Luther King'}
            </Text>
            <TouchableOpacity style={styles.buttonTache}>
                <Button
                    title="Valider la tâche"
                    onPress={() => navigation.navigate('MotivApp')}
                />
            </TouchableOpacity>
        </View>
    );
}

function LingeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, fontWeight: 'bold', bottom: 130}}>
                00:30:00
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {'"La sagesse suprême, c’est d’avoir des rêves assez grands pour ne pas les\n perdre de vue pendant qu’on les\n poursuit". \n\nFrancis Scott Fitzgerald'}
            </Text>
            <TouchableOpacity style={styles.buttonTache}>
                <Button
                    title="Valider la tâche"
                    onPress={() => navigation.navigate('MotivApp')}
                />
            </TouchableOpacity>
        </View>
    );
}

function VaiselleScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, fontWeight: 'bold', bottom: 130}}>
                00:30:00
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {'"Ce sont nos choix qui montrent qui\n nous sommes, bien  plus que nos capacités." \n\nJoanne K.Rowling'}
            </Text>
            <TouchableOpacity style={styles.buttonTache}>
                <Button
                    title="Valider la tâche"
                    onPress={() => navigation.navigate('MotivApp')}
                />
            </TouchableOpacity>
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
                <Stack.Screen name="Contactez-nous" component={ContactScreen} />
                <Stack.Screen name="Faire 1h de sport" component={SportScreen} />
                <Stack.Screen name="Remplir ou ranger le lave vaiselle" component={VaiselleScreen} />
                <Stack.Screen name="Faire le ménage" component={MenageScreen} />
                <Stack.Screen name="Faire à manger" component={MangerScreen} />
                <Stack.Screen name="Faire le linge" component={LingeScreen} />
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
    },
    buttonTache: {
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        bottom: -200,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;
