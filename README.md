# Le Petit Pas Marseillais

## Lien du site 

```
https://le-petit-pas-marseillais.netlify.app/#/
```

## Ajout dans le projet

### Les commentaires

Affichage de commentaire (L'api ne permet pas une gestion propre), pour cela nous avons utiliser la fonction filtre sur le tableau des commentaires de cette façon :

```
const result = data.filter(d => d.idArticle == this.post.id);
```

Nous avons aussi fait l'ajout des commentaires mais ça envoie dans le vide

```
addComment: (event) => {
      event.preventDefault();
      console.log(event.target.author.value);

      fetch(`https://my-json-server.typicode.com/RomainDreidemy/API-le-petit-pas-marseillais/comments`, {
        method: 'post',
        body: {
          "id": 2,
          "idArticle": 2,
          "author": "Romain Dreidemy",
          "message": "Les savons c'est trop bien"
        }
      })
    }
```

### Le bouton partager (mobile)

Nous avons ajouter la possibilité d'avoir un bouton partagez lorsqu'il est disponible (quasiment exclusivement sur mobile)

Vous trouverez ce bouton au moment de la lecture d'un article

### Affichage des articles déjà vu

Une page pour voir les articles dèjà consulté est présent si vous vous rendez dans la liste des articles.

Pour garder cette liste de page en mémoire nous avons utilisé le localStorage

```
localStorage.setItem(this.$route.path, this.post.title);
```

Puis pour la récupérer

```
created() {
    var values = []
    let keys = Object.keys(localStorage);

    keys.forEach(key => {
      if(new RegExp('^/article/[0-9]+').test(key)){
        values.push([key, localStorage.getItem(key)])
      }
    });

    if(values.length > 0){
      this.pages = values
    }
  }
```


## Installation du projet
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
