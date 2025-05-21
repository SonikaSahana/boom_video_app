
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

export default function VideoItem({ video, onLike }) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{video.title}</Text>
      <Video
        source={{ uri: video.videoUrl }}
        style={{ height: 200, width: '100%' }}
        controls
        resizeMode="contain"
      />
      <TouchableOpacity onPress={() => onLike(video._id)}>
        <Text style={{ marginTop: 5 }}>❤️ {video.likes} Likes</Text>
      </TouchableOpacity>
    </View>
  );
}
