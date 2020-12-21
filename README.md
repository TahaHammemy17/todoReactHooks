# todoReactHooks
# courte documentation

Ce projet consiste a utiliser REACT HOOKS dans une application de creation modification suppression de tache a faire.

Tout d'abord j'ai creer la navbar a travers bootstrap et en utilisant le react-router-dom
ensuite j'ai creer une "stateless function component" pour la login , pour lui passer les states necessaires il faut utiliser le Hook "useState" avec une fonction handleLogin pour la verification de l'email pour un systeme d'authentification qui enregistre les données de la connexion en localStorage pour ne pas perdre la connectivité, une sorte de Token, pour se deconnecté j'ai opté a l'utilisation du Hook useEffect qui est tres similaire a componendDidMount dans la classe function, puisque juste en montant ce "component" on retire le token du local storage et la session se ferme automatiquement.

Pour la partie des taches j'ai creer un "component" pere todo et deux component fils create et list et a travers les props j'ai pu echangé les données tout en utilisant le useState.

Cette application est une tres bonne initiation pour envahir les hooks de react , dans une application plus développer nous pouvons utiliser le useContext par exemple pour passer des données entre component qui ne sont pas pere-fils, c'est tres proche du concept de REDUX.
