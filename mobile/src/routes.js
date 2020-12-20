import React, { useState, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from './services/api';

import CovidScreen from './pages/CovidScreen/index';
import HomeScreen from './pages/HomeScreen/index';
import ChamberScreen from './pages/ChamberScreen/index';
import ScheduleScreen from './pages/ScheduleScreen/index';
import InformingScreen from './pages/InformingScreen/index';
import CivilProtectionScreen from './pages/CivilProtectionScreen/index';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  const [tabs, setTabs] = useState([]);

  const components = {
    HomeScreen: HomeScreen,
    CovidScreen: CovidScreen,
    ChamberScreen: ChamberScreen,
    ScheduleScreen: ScheduleScreen,
    InformingScreen: InformingScreen,
    CivilProtectionScreen: CivilProtectionScreen,
  };

  async function loadAppPages() {
    try {
      const response = await api.get('pages');

      setTabs(response.data);
    } catch {
      Alert.alert('Erro', 'Não foi possível inicializar o app');
    }
  }

  useEffect(() => {
    loadAppPages();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content' />

      {tabs.length > 0 &&
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#000000',
            inactiveTintColor: '#d1d1d1'
          }}
        >
          {tabs.map(tab => (
            <Tab.Screen
              initialParams={tab.content}
              key={tab.title}
              name={tab.title}
              component={components[tab.component]}
              options={{
                tabBarIcon: () => (
                  <Icon name={tab.icon} size={22} color='#000000' />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      }
    </>
  );
}