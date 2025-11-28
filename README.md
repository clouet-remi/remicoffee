# RemiCoffee

Une application web de 4 pages construite avec Node.js et Express, permettant la gestion de contenus et interactions simples sur un site.

Ce projet a été réalisé dans le cadre de la formation Concepteur Développeur d’Applications chez O’clock, avec un focus sur le développement back-end, la conception de base de données et l’intégration avec PostgreSQL.

🔗 Site en ligne : https://remicoffee.onrender.com/

---


## 🎯 Objectifs du projet

- Concevoir et implémenter un back-end complet avec Node.js et Express.

- Créer et gérer une base de données relationnelle PostgreSQL (MCD → MLD).

- Permettre la navigation et l’affichage dynamique de contenus sur 4 pages.

- Expérimenter la séparation entre logique métier et routes Express.

- Gérer la configuration des variables d’environnement pour sécuriser les informations sensibles.
  
---

## 🛠️ Technologies utilisées

| Technologie        | Usage                                         |
|------------------|-----------------------------------------------|
| Node.js + Express | Serveur web et gestion des routes             |
| PostgreSQL        | Base de données relationnelle                 |
| Sequelize / pg    | ORM ou driver pour la connexion à la BDD     |
| CSS3 / HTML5      | Intégration front-end                          |
| dotenv            | Gestion des variables d’environnement        |
| Render            | Hébergement en ligne                          |

---

## 💻 Fonctionnalités principales

- Gestion de contenus sur 4 pages distinctes.

- Mise en place d’une base de données PostgreSQL structurée via script db:init.

- Connexion sécurisée aux données via variables d’environnement.

- Logique back-end complète, conception MCD → MLD, relations et requêtes SQL.

- Routes Express modulaires pour l’organisation du code.

---

## 🚀 Lancer le projet

1. Cloner le projet et installer les dépendances :

```
git clone <URL_REPO>
cd remicoffee
npm install
```


2. Configurer les variables d’environnement :
Créez un fichier .env basé sur env.example et renseignez vos informations (connexion PostgreSQL, secrets éventuels, etc.).

3. Initialiser la base de données PostgreSQL :

`npm run db:init`


Assurez-vous d’avoir créé une base de données correspondante à votre configuration .env.

4. Démarrer le serveur :

`npm start`


Le site sera disponible localement sur http://localhost:3000
 (ou le port défini dans votre .env).

## 📝 Remarques

- Une partie de l’intégration front-end m’a été fournie.

- Tout le back-end a été développé depuis zéro, avec conception complète MCD → MLD, routes, contrôleurs et gestion de la base de données.