permier lab : 
Dans le premier laboratoire, j'installe un modèle sportif. Ensuite, je crée un projet Angular nommé "sport". Pour l'étape suivante, je copie les fichiers (CSS, polices, images, JS et SCSS) dans le dossier "assets", et je transfère les liens et les scripts présents dans index.html (du modèle) vers index.html (du projet Angular sport). Ensuite, je copie le code des fichiers index.html et contact.html, et je crée les composants "home" et "contact". Je transfère chaque code dans home.component.html et contact.component.html respectivement. Ensuite, je décompose mon code et crée les composants suivants : header, footer, hero, prochain-match, news, blog. Je copie le code HTML de chaque composant dans son composant correspondant, et j'appelle chaque composant avec son sélecteur (par exemple, pour le header, <app-header></app-header>). Le header et le footer sont appelés dans chaque fichier HTML de chaque composant. Pour cela, j'appelle le header et le footer dans le fichier app.component.html. À chaque fois, j'utilise les balises <app-home></app-home> ou <app-contact></app-contact> pour tester les pages "home" et "contact". Cependant, cette solution n'est pas applicable car il n'est pas logique de tester les pages en appelant leur sélecteur. Par conséquent, je crée deux path dans le fichier AppRoutingModule.ts, puis je vais au fichier header-component.html et je définis le routeLink de chaque composant. Lorsque je teste les pages, les routes fonctionnent correctement, mais lors du passage de la page "home" à la page "contact", il y a un rafraîchissement du navigateur. Étant donné que je travaille dans un projet Angular, j'ai donc dû appliquer le concept de SPA (Single Page Application). Pour cela, je crée la balise <routerOutlet></routerOutlet>, et voilà le problème corrigé.
2eme commit : dans cette commit , je crèe le composant add-match et je crèe le route add-match apres je crèe le formulaire pour l'ajout d'un match, et je fais la configuration de formulaire aussi j'installe formsmodule et reactiveformsmodule dans app.module.ts et dans le fichier add-match.ts je cree la fonction addMatch() et quand j'ajoiute un match je stocke les donnes dans le local storage  
3eme commit : dans cette commit , je crèe les composants signup et login et je crèe le route signup . Dans signup.component.html je cree le formulaire de signup et je crèe le button signup donc quand je click sur ce button je fais appel au method signup que je cree dans signup.component.ts. je declare formBuilder comme variable prive dans le constructor et bien sur j'importe le package formbuilder et je crèe methode ngOnInit, cette fonction initialise un formulaire réactif avec plusieurs champs, chacun ayant une valeur initiale vide. Une fois le formulaire initialisé, il peut être lié à des éléments HTML dans le modèle pour gérer l'entrée de l'utilisateur et effectuer des validations.
4eme commit : dans cette commit, je fais le control saisie de formulaire signup. Des balises <div> conditionnelles sont utilisées pour afficher des messages d'erreur spécifiques en fonction de l'état de chaque champ. De plus, un validateur personnalisé MustMatch est appliqué pour vérifier que les champs "password" et "confirmPwd" correspondent.Donc ce formulaire d'inscription vérifie que les champs sont correctement remplis selon les critères spécifiés, et il assure que le champ "confirmPwd" correspond au champ "password". 
5eme commit: dans cette commit je cree le formulaire login avec reactiveformsmodule.
6eme commit: je cree le composant table-match et je fait la configurations de son route apres je cree un table match dans le fichier html de ce composant et dans le fichier ts je cree le method getAllMatches apres je l'appel dans la methode ngOnInit pour afficher les matches dans le tableau et je cree le button edit et delete. pour le delete , ce button permet d'effacer le match dans le tableau et dans le localstorage . et pour le button ledit, il permet de passer a la page add-match et afficher le match dans le formulaire alaide de method ngOninit et pour cela je modifie la methode addmatch, si le match correspond au meme match dans le localstorage , donc afficher ces donnes et realiser la modification si non creer un nouveau match.  
7eme commit:dans cette commit je fais la modification pour la modification des matches afin d'avoir une chose dynamique, donc on fait le passage de table match au modification avec lid , on realise une snapshot pour l'id dans le path et on affiche le match qui correspondant a cette id et aussi on fait le changement de titre de page a l'aide de method interrpulation apres la declaration d'un attribut titre, c'est quand on a une modification,  le titre de page est edit match (si on un id dans le path) sinon le titre est addMatch .

