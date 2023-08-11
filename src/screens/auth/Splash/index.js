import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import Button from '../../../components/Button';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash = ({navigation}) => {

    const onSignin = () =>{
        navigation.navigate('Signin')
    }

    const onSignup = () =>{
        navigation.navigate('Signup')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You'll Find</Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                    <Text style={styles.title}>Here!</Text>
                </View>

                <Button onPress={onSignup} title="Sign Up" />

                <Pressable hitSlop={20}>
                    <Text onPress={onSignin} style={styles.footerText}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Splash);