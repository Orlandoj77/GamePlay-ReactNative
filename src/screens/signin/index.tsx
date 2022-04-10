import React, {useState} from 'react'; 
import {
  View,
  Text,
   Image,
   StatusBar
  } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
export default function SignIn(){


  return(
  <View style={styles.container}>


    {/*mudar a cor da statusbar*/}
    <StatusBar barStyle="light-content"
    backgroundColor="transparent"
    translucent />


    <Image source={IllustrationImg} 
    style={styles.image }/>

    <View style={styles.content}>

      <Text style={styles.title}>
      Conecte-se {`\n`}
      e organize suas{`\n`}
      jogatinas
      </Text>

      <Text style={styles.subtitle}>
      Crie grupos para jogar seus games{`\n`}
      favoritos com seus amigos
      </Text>
    <ButtonIcon />
    </View>

  </View>
  );
}