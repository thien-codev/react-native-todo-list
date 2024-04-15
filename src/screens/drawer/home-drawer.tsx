import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTabbar from './hometabbar/home-tabbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Setting from './setting';
import Theme from './theme';

const HomeDrawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="HomeTabbar"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeTabbar}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={24} />
          ),
          drawerActiveTintColor: '#003f5c',
        }}
      />
      <Drawer.Screen
        name="Theme"
        component={Theme}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="border-color" color={color} size={24} />
          ),
          drawerActiveTintColor: '#003f5c',
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="toolbox" color={color} size={24} />
          ),
          drawerActiveTintColor: '#003f5c',
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
