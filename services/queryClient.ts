import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient, Persister } from '@tanstack/react-query-persist-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Création d'un client React Query avec configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (remplace cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Type pour les données du cache React Query
type PersistedClient = unknown;

// Créer un persister pour AsyncStorage
export const asyncStoragePersister: Persister = {
  persistClient: async (client: PersistedClient) => {
    await AsyncStorage.setItem('REACT_QUERY_CACHE', JSON.stringify(client));
  },
  restoreClient: async () => {
    const storedState = await AsyncStorage.getItem('REACT_QUERY_CACHE');
    if (storedState) {
      return JSON.parse(storedState);
    }
    return undefined;
  },
  removeClient: async () => {
    await AsyncStorage.removeItem('REACT_QUERY_CACHE');
  }
};

// Configuration de la persistance
persistQueryClient({
  queryClient,
  persister: asyncStoragePersister,
});

// Exemple d'utilisation React Query pour récupérer des données
export const fetchUserData = async (userId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) {
    throw new Error('Problème lors de la récupération des données utilisateur');
  }
  return response.json();
};

export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Problème lors de la récupération des posts');
  }
  return response.json();
};