import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import VideoItem from '../components/VideoItem';

export default function HomeScreen({ navigation }) {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const res = await fetch('https://localhost:5000/api/videos'); 
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error('Failed to fetch videos', err);
    }
  };

  const handleLike = async (id) => {
    try {
      await fetch(`https://localhost:5000/api/videos/like/${id}`, {
        method: 'POST',
      });
      fetchVideos(); 
    } catch (err) {
      console.error('Failed to like video', err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Upload Video" onPress={() => navigation.navigate('Upload')} />
      {videos.length === 0 ? (
        <Text style={{ marginTop: 20, textAlign: 'center' }}>No videos uploaded yet.</Text>
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <VideoItem video={item} onLike={handleLike} />
          )}
          contentContainerStyle={{ paddingVertical: 16 }}
        />
      )}
    </View>
  );
}
