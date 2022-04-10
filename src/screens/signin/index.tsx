import React, {useState} from 'react'; 
import {
  View,
  Text,
   Image,
  } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png'

export default function SignIn(){

  const[text, setText] = useState('');

  return(
  <View style={styles.container}>


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

    </View>

  </View>
  );
}