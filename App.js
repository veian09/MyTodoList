import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { TodoList } from './src/TodoList';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Image source={require('./assets/veian.jpg')} style={styles.drawerImage} />
        <Text style={styles.Name}>Veian Keth Cay-uman</Text>
        <Text style={styles.schoolId}>20201282</Text>
        <Text style={styles.sectionCode}>IT73-IT35B</Text>
        <Text style={styles.courseDesc}>Application Dev. Emerging Technologies</Text>
        <Text style={styles.courseName}>Bachelor of Science in Information Technology</Text>
        <Text style={styles.academicYear}>2023-2024</Text>
      </View>
      <DrawerItemList {...props} />
    </View>
    <View style={styles.drawerFooter}>
      <DrawerItem
        label="Todo List"
        onPress={() => props.navigation.navigate('TodoList')}
        style={styles.todoButton}
        labelStyle={styles.todoLabel}
      />
    </View>
  </DrawerContentScrollView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TodoList" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="TodoList" component={TodoList} options={{ title: "" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#87CEEB', // Sky blue background
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  Name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
    marginBottom: 10,
  },
  schoolId: {
    fontSize: 16,
    color: '#FFFFFF', // White text color
    marginBottom: 5,
  },
  sectionCode: {
    fontSize: 16,
    color: '#FFFFFF', // White text color
    marginBottom: 5,
  },
  courseDesc: {
    fontSize: 14,
    color: '#FFFFFF', // White text color
    marginBottom: 5,
  },
  courseName: {
    fontSize: 14,
    color: '#FFFFFF', // White text color
    marginBottom: 5,
  },
  academicYear: {
    fontSize: 14,
    color: '#FFFFFF', // White text color
    marginBottom: 5,
  },
  
  drawerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  drawerFooter: {
    alignItems: 'center',
    marginBottom: 20,
  },
  todoButton: {
    justifyContent: 'center',
    width: 120, 
  },
  todoLabel: {
    textAlign: 'center',
  },
});

export default App;
