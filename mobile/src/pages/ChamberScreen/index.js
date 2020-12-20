import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert, RefreshControl, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import styles from './styles';

export default function ChamberScreen({ route }) {
  const pageContent = Object.values(route.params);

  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadAPI() {
    try {
      setRefreshing(true);

      const response = await api.get('posts');

      setPosts(response.data);
      setRefreshing(false);
    } catch {
      setRefreshing(false);
      Alert.alert('Erro', 'Falha ao carregar posts');
    }
  }

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => loadAPI()} />
      }
    >
      <View style={styles.container}>
        {pageContent.map(area => (
          <View key={area.title}>
            <View style={styles.header_container}>
              <Text style={styles.header_label}>{area.title}</Text>
            </View>

            {area.properties.categories.map(category => (
              <View key={category}>
                {posts.map(post => {
                  if (post?.category === category) {
                    return (
                      <TouchableOpacity
                        key={post?.title}
                        style={styles.post_btn}
                      >
                        <Icon name="office-building" size={26} color='#000000' />
                        <Text style={styles.post_title}>
                          {post?.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView >
  );
}
