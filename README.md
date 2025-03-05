# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## ETUDE RAPPORT UX ##

Après étude des vidéos et lecture des feedback des utilisateurs, plusieurs problèmes apparaissent :

- Mauvaise gestion du message d'erreur si le user n'est pas enregistré lors du Login,
- mauvaise persistance des données de formulaire,
- manque d'explications sur le  parcours utilisateur notamment ordre des actions (entrer les moyens de paiements avant de créer des transactions),
- pour la version mobile les items de la navbar débordent du champ visuel,
- Les imputs sont trop petits,
- les utilisateurs sont obligés de se logger à chaque fois car leur session n'est pas sauvegardée en localStorage. 

Après mise en place d'une CI d'ux avec lighthouse, plusieurs problèmes apparaissent également :
- Un mauvais contraste entre le background-color et le text des boutons de la page login,
- du javascript inutilisé doit être supprimé pour améliorer les performances,
- certaines ressources bloquent le rendu initial avec des async ou des defer par exemple,
- le cache n'est pas bien géré, à mettre en place pour les ressources statiques. 


## RAPPORT DES MODIFICATIONS APPORTEES ##

1- Modification du background-color des button de la page de Login / Register après étude du ratio du contraste 

Avant 
![img_1.png](img_1.png)

Après
![img.png](img.png)

2- Modification du message d'erreur pour plus de clarté lors du login 

![img_2.png](img_2.png)

![img_3.png](img_3.png)

3- Sauvegarde du User connecté dans le localStorage de son navigateur pour qu'il puisse rester sur la page après rechargement de celle-ci.

![img_4.png](img_4.png)

4- Mise en place d'un menu burger responsive lors du passage en mode mobile 

![img_5.png](img_5.png)

5- Changement de l'ordre des items pour qu'intuitivement le user remplisse les modes de paiement avant de créer des transactions

![img_7.png](img_7.png)

6- Rajout d'un overflow : y sur la classe des categories afin que l'ajout de celles-ci ne cachent pas le bouton +

![img_6.png](img_6.png)

7- Changement du background du body pour un meilleur contraste comme suggéré par les recommandations de lighthouse


