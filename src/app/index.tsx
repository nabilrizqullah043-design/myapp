import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>MY APP</Text>
      <Text style={styles.subJudul}>UTS MOBILE 1</Text>

      <TextInput
        style={styles.input}
        placeholder="INPUT EMAIL"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="INPUT PASSWORD"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.tombolLogin}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.teksLogin}>TOMBOL LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.containerHome}>
      <Text style={styles.homeJudul}>HOME PAGE</Text>

      <View style={styles.profilBox}>
        <Image
          source={require('../../assets/Fotoprofil.jpeg')}
          style={styles.fotoLingkaran}
        />
        <Text style={styles.nama}>Muhammad Nabil Rizqullah</Text>
      </View>

      <View style={styles.gridMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTeks}>MENU 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTeks}>MENU 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTeks}>MENU 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTeks}>MENU 1</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.tombolLogout}>
        <Text style={styles.teksLogout}>TOMBOL LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  judul: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subJudul: {
    fontSize: 18,
    marginBottom: 60,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 12,
    marginBottom: 15,
    fontSize: 14,
  },
  tombolLogin: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 10,
  },
  teksLogin: {
    fontSize: 14,
    fontWeight: '500',
  },

  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    paddingTop: 40,
  },
  homeJudul: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '500',
  },
  profilBox: {
    alignItems: 'center',
    marginBottom: 40,
  },
  fotoLingkaran: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  namaKamu: {
    fontSize: 14,
    fontWeight: '500',
  },
  gridMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  menuItem: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  menuTeks: {
    fontSize: 14,
  },
  tombolLogout: {
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 12,
    alignItems: 'center',
  },
  teksLogout: {
    fontSize: 14,
    fontWeight: '500',
  },
});