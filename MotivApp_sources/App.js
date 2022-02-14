import React, { useRef, useState }  from 'react';
import { Button, TextInput, View, StyleSheet, Image, Text, TouchableOpacity, Animated, SafeAreaView} from 'react-native';
import logo from './assets/MotivApp.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import kevin_pp from './assets/kevin_pp.jpeg'
// Tab ICons...
import home from './assets/home.png';
import search from './assets/search.png';
import notifications from './assets/bell.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';
// Menu
import menu from './assets/menu.png';
import close from './assets/close.png';
// Photo
import photo from './assets/photo.jpg';
import kevin from './assets/kevin.jpg';


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
            <Text style={{fontSize: 25, fontWeight: 'bold', bottom: 130}}>
                (+ 0.01 KVC)
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
            <Text style={{fontSize: 25, fontWeight: 'bold', bottom: 130}}>
                (+ 0.01 KVC)
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
            <Text style={{fontSize: 25, fontWeight: 'bold', bottom: 130}}>
                (+ 0.01 KVC)
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
            <Text style={{fontSize: 25, fontWeight: 'bold', bottom: 130}}>
                (+ 0.01 KVC)
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
            <Text style={{fontSize: 25, fontWeight: 'bold', bottom: 130}}>
                (+ 0.01 KVC)
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

function HomeScreen2({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Accueil");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container2}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={kevin} style={{
          width: 80,
          height: 80,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Kevin Spegt</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>Voir le profile de Kevin</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Accueil", home)}
          {TabButton(currentTab, setCurrentTab, "Recherche", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Réglages", settings)}
        </View>

        <View>
          {/* {TabButton(currentTab, setCurrentTab, "Déconnexion", logout)} */}
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image>

          </TouchableOpacity>
                <Text style={{bottom: -40, fontSize: 40, color: 'black', left: 50}}>
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
            <View style={{bottom: -120}}>
                <Button
                    title="Contactez-nous"
                    onPress={() => navigation.navigate('Contactez-nous')}
                />
            </View>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "Logout") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "black" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "black" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="MotivApp" component={HomeScreen2} />
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
    container2: {
      flex: 1,
      backgroundColor: 'powderblue',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
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
        bottom: -100,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTache: {
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        bottom: -200,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;
