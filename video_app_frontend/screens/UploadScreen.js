import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
    if (result.type === 'success') {
      setVideo(result);
    }
  };

  const uploadVideo = async () => {
    if (!video || !title) {
      Alert.alert('Error', 'Please select a video and enter a title');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', {
      uri: video.uri,
      name: video.name,
      type: 'video/mp4'
    });

    try {
      const res = await fetch('https://localhost:5000/api/videos/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${global.token}`,
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      });

      if (res.ok) {
        Alert.alert('Success', 'Video uploaded!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Upload failed');
      }
    } catch (err) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" onChangeText={setTitle} />
      <Button title="Pick Video" onPress={pickVideo} />
      <Button title="Upload" onPress={uploadVideo} />
    </View>
  );
}
