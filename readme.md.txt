# Modern Multilingual Portfolio - Eric Nyongolo

Ce projet est un portfolio professionnel, moderne et interactif, conçu pour présenter mes compétences en **Support IT**, **Administration** et **Développement Web**.

🚀 **Démo en direct :** [ericnyongolo.vercel.app](https://ericnyongolo.vercel.app)

## 🌟 Fonctionnalités
- **Multilingue :** Support complet du Français, Anglais et Swahili via un système i18n personnalisé en JavaScript pur.
- **Design Responsive :** Optimisé pour mobile, tablette et desktop avec Tailwind CSS.
- **Interactivité :** - Effet de "typing" dynamique dans la section héros.
  - Filtrage des projets par catégorie (Web, IT, Admin).
  - Animations au scroll (Reveal effect).
- **Contact Direct :** Formulaire fonctionnel intégré avec **EmailJS** et bouton flottant WhatsApp.
- **Performance :** Score SEO et Rapidité optimisés (Statique, sans frameworks lourds).

## 🛠️ Technologies utilisées
- **HTML5** & **Tailwind CSS** (Stylisation et Layout)
- **JavaScript (Vanilla)** (Logique multilingue, animations, filtrage)
- **EmailJS** (Gestion des emails côté client)
- **FontAwesome** (Icônes)

## 📂 Structure du projet
```text
├── index.html       # Page d'accueil (Hero, Services)
├── about.html       # Bio, Compétences, Expériences & Formation
├── projects.html    # Grille de projets filtrable
├── contact.html     # Formulaire de contact & Réseaux sociaux
├── css/
│   └── style.css    # Styles personnalisés
├── js/
│   ├── i18n.js      # Moteur de traduction (FR/EN/SW)
│   ├── main.js      # Animations et menu mobile
│   └── email.js     # Configuration EmailJS
└── images/          # Assets et captures de projets
