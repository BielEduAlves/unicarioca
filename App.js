import React from "react";
import 'react-native-gesture-handler';
import { } from "react-native";
import Routes from './routes'

import { UsuarioProvider } from './context/usuario'

import './services/firebase';

export default function App() {
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
  )
};
