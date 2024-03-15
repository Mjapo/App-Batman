import React, { useState } from 'react';
import { View, Pressable, Text, Alert } from 'react-native';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { styles } from './BatButtonStyle';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [pass, setPass] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleGenerateButton() {
    try {
      const generateToken = generatePass();
      setPass(generateToken);
      setFeedback('Senha gerada com sucesso!');
    } catch (error) {
      setFeedback('Falha ao gerar senha.');
    }
  }

  function handleCopyButton() {
    if (pass) {
      Clipboard.setStringAsync(pass);
      setFeedback('Senha copiada para a área de transferência!');
    } else {
      setFeedback('Nenhuma senha para copiar.');
    }
  }

  return (
    <View style={styles.container}>
      <BatTextInput pass={pass} />
      {feedback ? <Text>{feedback}</Text> : null}
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>Gerar</Text>
      </Pressable>
      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>Copiar</Text>
      </Pressable>
    </View>
  );
}

