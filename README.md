# Documentation du Projet React Mobile

Bienvenue dans le projet React Mobile. Ce document présente la structure du projet et détaille l'utilisation des principaux composants : les routes, le queryClient et le hook useAppsTORE.

## Structure du Projet

```
react-mobile/
├── app/                   # Dossier principal pour les pages et la navigation
│   ├── _layout.tsx        # Layout principal de l'application
│   ├── (tabs)/            # Pages organisées en onglets
│   │   ├── _layout.tsx    # Layout des onglets
│   │   ├── index.tsx      # Page d'accueil des onglets
│   │   ├── other.tsx      # Page secondaire
├── assets/                # Ressources statiques (images, polices, etc.)
│   ├── fonts/             # Polices personnalisées
│   ├── images/            # Images utilisées dans l'application
├── components/            # Composants réutilisables
├── constants/             # Constantes globales (ex. couleurs)
├── hooks/                 # Hooks personnalisés
├── services/              # Services (ex. configuration de React Query)
├── store/                 # Gestion de l'état global avec Zustand
├── scripts/               # Scripts utilitaires
├── package.json           # Dépendances et scripts npm
├── tsconfig.json          # Configuration TypeScript
└── README.md              # Documentation du projet
```

Le projet intègre des technologies modernes pour améliorer à la fois la performance et l'esthétique de l'application. Il utilise notamment:
- Zustand pour une gestion d'état centralisée et simplifiée,
- Des polices personnalisées définies dans le dossier assets/fonts afin d'assurer une identité visuelle cohérente,
- React Query pour optimiser la gestion et la synchronisation des requêtes asynchrones.

## Comment exécuter le projet

Pour lancer le projet React Mobile, suivez ces étapes :

1. Installez les dépendances :
   ```
   npm install
   ```

2. Démarrez l'application en mode développement :
   ```
   npm run start
   ```

Assurez-vous d'avoir Node.js et npm installés sur votre système.

## Conclusion

Ce projet est organisé pour garantir une séparation claire des responsabilités entre :
- La définition des routes pour la navigation,
- La gestion des requêtes async avec queryClient,
- La gestion centralisée de l’état avec useAppsTORE.

Utilisez ce document pour mieux comprendre la structure et les principes d’implémentation du projet React Mobile.
