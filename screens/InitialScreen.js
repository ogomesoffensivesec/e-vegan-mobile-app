import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CoupleImage from '../assets/couple/6.png'
import CoupleImage2 from '../assets/couple/2.png'
import CoupleImage3 from '../assets/couple/6.png'
import Dots1 from '../assets/icons/threedots1.png'
import Dots2 from '../assets/icons/threedots2.png'
import Dots3 from '../assets/icons/threedots3.png'

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Carousel from 'react-native-snap-carousel';

SplashScreen.preventAutoHideAsync();

const InitialScreen = ({navigation}) => {
  const carouselItems = [
    {
      coupleImg: CoupleImage,
      dotImage: Dots1
    },
    {
      coupleImg: CoupleImage2,
      dotImage: Dots2
    },
    {
      coupleImg: CoupleImage3,
      dotImage: Dots3
    },
  ]
  function renderItem({ item }) {
    return (
      <View style={styles.viewImage}>
        <Image source={item.coupleImg} style={{
          resizeMode: 'cover'
        }} />
        <Image source={item.dotImage} style={{
          resizeMode: 'cover', marginTop: 30
        }} />
      </View>
    )
  }
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Thin': require('../assets/fonts/Lato-Thin.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    /*
    Lato-Bold.ttf
    Lato-BoldItalic.ttf
    Lato-Italic.ttf
    Lato-Light.ttf
    Lato-LightItalic.ttf
    Lato-Regular.ttf
    Lato-Thin.ttf
    Lato-ThinItalic.ttf
    OFL.txt
    Lato-Black.ttf
    Lato-BlackItalic.ttf
    */
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View>
        <Text style={styles.titleText}>E-<Text style={{ color: '#007F5F' }}>VEGAN</Text></Text>
        <Text style={styles.subtitle}>
          O seu aplicativo de compras <Text style={styles.subtitle.greenText}>veganas</Text>
        </Text>
      </View>
      <Carousel
        layout='default'
        loop={false}
        data={carouselItems}
        sliderWidth={450}
        itemWidth={350}
        firstItem={1}
        renderItem={renderItem} />


      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={()=>{navigation.navigate('Register')}}>
          <Text style={styles.registerButton.buttonTitle}>Sou novo por aqui</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.loginButton.buttonTitle}>Já sou membro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 44,
    fontWeight: "900",
    color: "#AACC00",
    marginTop: 50,
    textAlign: 'center',
    fontFamily: 'Lato-Regular'

  },
  coupleImageStyle: {
    width: 231,
    height: 256
  },
  viewImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#007F5F',
    height: '30%',
    width: '100%',
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
    boxShadow: ' 0px 9px 41px 31px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: 10


  },
  loginButton: {
    width: 246,
    height: 55,
    backgroundColor: '#FFFF3F',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    buttonTitle: {
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      color: '#007F5F',
      fontFamily: 'Lato-Black',
      textAlign: 'center'

    }
  },
  registerButton: {

    width: 246,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    buttonTitle: {
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      color: '#007F5F',
      fontFamily: 'Lato-Black',
      textAlign: 'center'

    }
  },
  DotsImage: {
    marginVertical: 25
  },
  subtitle: {
    marginBottom: 70,
    fontFamily: 'Lato-Regular',

    greenText: {
      fontFamily: 'Lato-Bold',
      color: '#007F5F'
    }

  }

});


export default InitialScreen