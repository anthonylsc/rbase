# rBase - GTA RP Server Website

Un site web moderne et impressionnant pour le serveur GTA Roleplay rBase.

## 📋 Prérequis

- **Node.js 16+** ([Télécharger ici](https://nodejs.org/))
- npm (inclus avec Node.js)

## 🚀 Installation et Lancement

### Option 1 : Utiliser le script d'installation (Windows)
```bash
# Double-cliquez sur install.bat
# Puis lancez npm run dev
```

### Option 2 : Installation manuelle

1. **Ouvrez un terminal** dans le dossier du projet

2. **Installez les dépendances :**
```bash
npm install
```

3. **Lancez le serveur de développement :**
```bash
npm run dev
```

4. **Ouvrez votre navigateur** et allez à `http://localhost:5173`

## 📁 Structure du Projet

```
rBaseWeb/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.jsx          # Composant bouton réutilisable
│   │   └── home/
│   │       ├── SpaceBackground.jsx # Fond avec étoiles animées
│   │       ├── HeroSection.jsx     # Section héros
│   │       ├── FeaturesSection.jsx # Section des fonctionnalités
│   │       ├── AboutSection.jsx    # Section à propos
│   │       ├── JoinSection.jsx     # Section pour rejoindre
│   │       └── Footer.jsx          # Pied de page
│   ├── Pages/
│   │   ├── Home.jsx               # Page d'accueil
│   │   ├── ServerPreview.jsx      # Aperçu du serveur
│   │   └── Rules.jsx              # Règles du serveur
│   ├── utils/
│   │   └── index.js               # Utilitaires (createPageUrl)
│   ├── App.jsx                    # Composant principal
│   ├── main.jsx                   # Point d'entrée
│   └── index.css                  # Styles globaux
├── index.html                     # HTML principal
├── package.json                   # Dépendances
├── vite.config.js                 # Configuration Vite
├── tailwind.config.js             # Configuration Tailwind CSS
└── postcss.config.js              # Configuration PostCSS
```

## 🛠️ Commandes disponibles

- `npm run dev` - Lance le serveur de développement (http://localhost:5173)
- `npm run build` - Crée une version optimisée pour la production
- `npm run preview` - Prévisualise la version production en local

## 🎨 Technologies utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Framer Motion** - Animations fluides
- **Tailwind CSS** - Styling utilitaire
- **Lucide React** - Icônes magnifiques
- **React Router** - Navigation

## 🌟 Fonctionnalités

✨ Design moderne avec animations fluides
🌙 Mode clair/sombre
📱 Design responsive
🎯 Navigation intuitive
⚡ Performance optimale
🎨 Composants réutilisables

## 📖 Pages disponibles

- `/` - Page d'accueil
- `/server-preview` - Aperçu du serveur avec screenshots
- `/rules` - Règles du serveur

## 🔧 Personnalisation

### Changer les couleurs
Modifiez `tailwind.config.js` pour ajuster la palette de couleurs.

### Ajouter de nouveaux liens
- Pages : Créez un fichier dans `src/Pages/`
- Routes : Modifiez `src/App.jsx`
- Navigation : Mettez à jour `src/utils/index.js` (createPageUrl)

### Images
Remplacez les URLs Unsplash par vos images personnelles dans les composants.

## 🐛 Dépannage

### npm n'est pas reconnu
- Vérifiez que Node.js est installé : `node --version`
- Installez Node.js depuis [nodejs.org](https://nodejs.org/)

### Le port 5173 est déjà utilisé
Le serveur Vite changerait automatiquement de port. Vérifiez le terminal pour voir le port actuel.

### Les changements ne s'affichent pas
- Videz le cache du navigateur (Ctrl+Shift+Delete)
- Redémarrez le serveur de développement

## 📝 Notes

- Les images utilisées sont du service Unsplash (libre d'utilisation)
- Le serveur est configuré pour faire du hot reload en développement
- Tous les composants utilisent Tailwind CSS pour le styling

## 🤝 Support

Pour les questions ou les problèmes, consultez la documentation:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

**Prêt à démarrer ?** Exécutez `npm install` puis `npm run dev` ! 🚀
