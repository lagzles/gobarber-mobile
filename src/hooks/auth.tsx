import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextTPO {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

// hackzinho para burlar o typescript, e poder começar com name do contexto vazio
const AuthContext = createContext<AuthContextTPO>({} as AuthContextTPO);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const user = await AsyncStorage.getItem('@goBarber:user');
      const token = await AsyncStorage.getItem('@goBarber:token');

      // const [user, token] = await AsyncStorage.multiGet([
      //   '@goBarber:user',
      //   '@goBarber:token'
      // ]);

      if (token && user) {
        setData({ user: JSON.parse(user), token });
        //   return { token, user: JSON.parse(user) };
      }

      // return {} as AuthState;
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    // await AsyncStorage.setItem('@goBarber:user', JSON.stringify(user));
    // await AsyncStorage.setItem('@goBarber:token', token);

    await AsyncStorage.multiSet([
      ['@goBarber:token', token],
      ['@goBarber:user', JSON.stringify(user)]
    ])

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    // await AsyncStorage.removeItem('@goBarber:user');
    // await AsyncStorage.removeItem('@goBarber:token');
    await AsyncStorage.multiRemove([
      '@goBarber:user',
      '@goBarber:token'
    ])

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextTPO {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
