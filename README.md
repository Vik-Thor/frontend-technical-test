Lecture de l'exo et installation des dépendences
utiliser la dernière version LTS de node avec nvm
faire un tour des dépendances dans package.json
demarrer le projet next et l'api
first commit

discerner les différents les composants réutilisables des maquettes proposé:
- Avatar
- Conversation
- Message
- Text Input
trouver le process de connexion => getLoggedUserId

Voir si il est possible d'installer facilment un storybook sur next
installation de storybook: importation du style global et de-optimization des images sur storybook

creation du composant avatar
ajout d'une simple function classname pour éviter une dépendance
le sass n'est pas pris en compte sur sotrybook et je perd trop de temps pour gérer le support, je passe en css

creation du composant conversation
dans le meme temps choisir d'utilise BEM pour les définitions de style et mobile first et décide de partir sur px en unité en me disant qu'il y aura toujours moyen de les convertirs en em via postcss
choisir une lib pour transcrir les timestamp en date (date)
refactorisation des fonctions utils
je fais des micro traitement de données directement dans les composants (alors que je ne devrais pas) mais pour me rassurer sur le traitement des données
défintion du viewport mobile à 360px

creation du composant message avec ces 2 variants
creation du layout messages
(perdu beaucoup de temps sur le layout message)

creation du layout conversation
creation d'un layout container

désactiver les css module imcompatible avec les import de css basique
voir si on peut pas facilement mettre en place react query => utilisation d'un simple fetch car trop de temps perdu

mise en place de la vue liste conversation

voir dans le doc de next comment utiliser les link et les générations de pages => ok

j'ai un probleme d'encodage avec les link j'avance en mettant l'id de la conversation en dur

terminer avec la fonction post et le refresh mais j'ai dû rater quelque chose au niveau de l'api parce que pour le post l'id de la conversation seul et le timestamp ne suffit pas

pas eu le temsp de tester au niveau functionnel avec cypress
peu amélioré  l'accessiblite avec eslint-plugin-jsx-a11y pour tout ce qui est aria-label etc
je voulais faire un drak mode avec les css props mais pas le temps




# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
