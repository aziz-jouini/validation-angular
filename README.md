permier lab : 
Dans le premier laboratoire, j'installe un modèle sportif. Ensuite, je crée un projet Angular nommé "sport". Pour l'étape suivante, je copie les fichiers (CSS, polices, images, JS et SCSS) dans le dossier "assets", et je transfère les liens et les scripts présents dans index.html (du modèle) vers index.html (du projet Angular sport). Ensuite, je copie le code des fichiers index.html et contact.html, et je crée les composants "home" et "contact". Je transfère chaque code dans home.component.html et contact.component.html respectivement. Ensuite, je décompose mon code et crée les composants suivants : header, footer, hero, prochain-match, news, blog. Je copie le code HTML de chaque composant dans son composant correspondant, et j'appelle chaque composant avec son sélecteur (par exemple, pour le header, <app-header></app-header>). Le header et le footer sont appelés dans chaque fichier HTML de chaque composant. Pour cela, j'appelle le header et le footer dans le fichier app.component.html. À chaque fois, j'utilise les balises <app-home></app-home> ou <app-contact></app-contact> pour tester les pages "home" et "contact". Cependant, cette solution n'est pas applicable car il n'est pas logique de tester les pages en appelant leur sélecteur. Par conséquent, je crée deux path dans le fichier AppRoutingModule.ts, puis je vais au fichier header-component.html et je définis le routeLink de chaque composant. Lorsque je teste les pages, les routes fonctionnent correctement, mais lors du passage de la page "home" à la page "contact", il y a un rafraîchissement du navigateur. Étant donné que je travaille dans un projet Angular, j'ai donc dû appliquer le concept de SPA (Single Page Application). Pour cela, je crée la balise <routerOutlet></routerOutlet>, et voilà le problème corrigé.
