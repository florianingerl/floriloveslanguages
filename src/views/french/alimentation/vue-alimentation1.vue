<template>

<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" :class="{ active: livreVisible }" @click="livreVisible=true;">Livre</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" :class="{ active: !livreVisible }" @click="livreVisible=false;">Vocabulaire</a>
  </li>
  
</ul>
<div v-if="$route.params.page == 1">

<div v-if="!livreVisible">
<table>
<tr><td>le vécu</td><td>D'après mon ~, je deviens trés malade si je mange de la viande.</td><td>C'est une expérience. On en a appris quelque chose.</td> </tr>
<tr><td>l'équilibre (m)</td><td>Ni un mec qui dort trop ni un mec qui ne dort jamais, sont dans l'état de l'~.</td><td>Une balance est dans cet état si les deux cotés ont le même poids.</td></tr>
<tr><td>l'abeille (f)</td><td>Maja est une ~. Son ami Willi l'est aussi.</td><td>C'est un insecte qui peut voler et qui est jaune et noir.</td></tr>
<tr><td>la voie</td><td>Paramahansa Yogananda décrit la ~ du Yoga dans ses livres.</td><td>C'est un chemin qu'on peut suivre dans sa vie.</td></tr>
</table>
</div>

<div v-if="livreVisible">
<h1>Formation à l'alimentation vivante - <span style="font-style:oblique">écrit par Crusine Académie</span> </h1>

    Cette académie est le fruit d’expériences et de recherches personnelles. Son but
    est de vous transmettre des connaissances et mon vécu afin de vous aider à
    sillonner vers l’équilibre.
    <VueExercise lg="fr" instruction="Remplis les trous avec ce,cet ou cette">
    <VueGaps lg="fr" gaptext="Je ne comprends pas {cette} paragraph ci-dessus. {Cet} équilibre dont l'auteur parle, je n'y crois pas.
    {Cet} aide que l'auteur m'offre, je n'en veux pas parce que j'aurais besoin de lire {ce} livre pour apprendre {ces} connaissances
    dont il parle.{}" /> </VueExercise>
Je souhaite vous donner l’envie de trouver cette santé radieuse qui nous a été
promise, que ce soit par la culture de la terre, par la passion des abeilles, ou par
mes recettes de crusine. Nul doute que nos amies Joie et Santé sont là, en nous,
alors laissons-les s’exprimer.
<VueExercise lg="fr" instruction="Remplis les trous avec les bonnes propositions à,de ou en ou rien du tout!">
<VueGaps lg="fr" gaptext="Maintenant, ca devient intéressant et j'ai envie {de} continuer {à} lire maintenant.
Je donne {à} l'auteur un peu {de} conviance. J'ai conviance {en} lui. Je laisse moi simplement {} surprendre.
Je m'attends {à} apprendre beaucoup {de} choses.{}" /> </VueExercise>

L’alimentation vivante est pour moi une voie incontournable, mais ne vous attendez
pas à ce que je vous dicte un protocole strict. Chacun doit trouver sa formule et il
me semble important de vous préciser que les écarts font aussi partie du chemin.
Vous allez découvrir le cadre alimentaire qui permettra à votre organisme de
carburer à son optimum. Sachez, que l’alimentation vivante est un des facteurs
importants dans le processus de régénération, mais qu’il n’est pas le seul. Alors
n’oubliez pas de dormir, de prendre l’air et le soleil, d’entretenir de bonnes relations
et d’avoir une activité physique adaptée.
<VueExercise lg="fr" instruction="Remplis les trous avec de la, du, des, de l' ou simplement de!">
<VueGaps lg="fr" gaptext="À partir de maintenant, je ferai {du} sport. Mais seulement assez {de} sport. Pas trop {d'} activité physique.
Je respirai plus profondement à partir de maintenant pour me donner plus {de l'} air. À partir de maintenant,
je me demeure souvent en dehors pour me donner {du} soleil. Je ne lirai que les livres qui me donnent
{de la} joie.{}" /> </VueExercise>

Ce qui importe, c’est d’être à l’écoute de son ressenti, de comprendre les
processus en cours, et de prendre les meilleures décisions pour soi-même.
Je suis une passionnée qui souhaite un monde joyeux et en bonne santé. Et
vous ?
<VueExercise lg="fr" instruction="Remplis les trous avec ce qui, ou ce que ou celui qui!">
<VueGaps lg="fr" gaptext="À partir de maintenant, je m'en fiche de {ce que} les prof à l'école et mes parents disent à propros de ma santé
et je vais faire attention à {ce que} mon propre corps me dit. {Celui qui} me donne des conseils, je l'écouterai bien sûr mais
je déciderai moi-même de suivre les conseils ou pas.{}" /> </VueExercise>

Mettons-nous toutes et tous au service de la vie.
</div>

</div>

<div v-if="$route.params.page == 2">

<div v-if="!livreVisible">
<table>
<tr><td>la santé</td><td>On ne peut pas regagner sa ~ si on laisse traiter ses symptoms par un médecin.</td><td>On n'a plus cette chose si on est malade.</td></tr>
</table>
</div>

<div v-if="livreVisible">
<h3>Qu'est-ce que l'Hygiénisme ?</h3>
L'hygiénisme est l'art de vivre en bonne santé par le respect des lois de
la nature et par la bonne connaissance des aliments spécifiques à
l'espèce humaine.
Cette conception est révolutionnaire parce qu'elle est aux antipodes des modes de
pensée habituels.
Contrairement à la médecine officielle qui traite les symptômes, l’Hygiénisme part
du principe de supprimer la cause pour faire disparaitre l'effet.
<VueExercise lg="fr"><VueQuestion lg="fr" :question=" {
		question: 'Qu\'est-ce que l\'hygiénisme?',
		type: 'multiple choice',
		options: [{option:'L\'art de suivre les conseils du médecin', correct: false },
     {option:'L\'art de suivre les lois de la nature', correct: true }, 
     ]
	    }" :hasNextButton="false" /></VueExercise>
L’hygiénisme est donc un enseignement tiré directement de l’observation des Lois
de la vie. En un mot, c'est un véritable art de vivre.
L'Hygiénisme enseigne les principes de base pour tous, mais chacun doit doser
chaque facteur de santé selon son propre pouvoir d'assimilation et devenir ainsi
l'artisan de sa santé.
<VueExercise lg="fr" instruction="Remplis les trous avec tout,toute,tous,toutes ou chaque!">
<VueGaps lg="fr" gaptext="{Tout} ce que je viens de lire me semble logique. {Chaque} phrase a du sens.
Dans {toute} ma vie, je n'ai jamais entendu parler de {tout} cela. {Toute} ma santé depend aussi
de mon alimentation.{}" /> </VueExercise>

L’école hygiéniste est simple. Elle redonne au corps son plein potentiel de
guérison. On parlera d’homéostasie*. On ne contre pas, on accompagne. On
permet aux mécanismes de régénération de faire leur travail en agissant sur
l’équilibre du terrain.

<VueExercise lg="fr" instruction="Remplis les trous par à la, au, aux ou de la, du,des" >
 <VueGaps lg="fr" gaptext="Je suis {à la} recherche d'une alimentation qui est bon pour ma santé.
   Je ne peux plus faire attention {aux} conseils que mes parents m'ont donnés. {Du} sucre? Je n'en ai plus besoin!{}" />
</VueExercise>

C’est pour cela qu’un minimum de connaissances en physiologie vous sera
nécessaire.
La loi de l’homéostasie dit que : "Tout système laissé à lui-même revient
spontanément à l’état d’équilibre en passant par des processus
régulateurs"

<VueExercise lg="fr" instruction="Remplis les trous par moi-même, soi-même, toi-même ,lui-même ou elle-même !" >
 <VueGaps lg="fr" gaptext="Je peux prendre soin de {moi-même}. Mon père peut prendre soin de {lui-même}.
   Autant que ma mère peut prendre soin d'{elle-même}. En conclusion, chacun peut prendre soin de {soi-même}." />
</VueExercise>

</div>
</div>

<div v-if="$route.params.page == 3">
<div v-if="!livreVisible">
<table>
<tr><td>le sommeil</td> <td>La nuit est le temps du ~.</td> <td>Si tu es fatigué, tu n'en as eu pas assez.</td></tr>
<tr><td>cerner</td><td></td><td>faire quelques efforts mentales pour mieux comprendre un problème ou une situation</td></tr>
<tr><td>faible</td><td>Si je ne bois pas assez, je suis un peu ~.</td><td>C'est le contraire de fort</td></tr>
</table>

</div>

<div v-if="livreVisible">

Les piliers de l’équilibre et de nos besoins fondamentaux sont :
<ul>
<li> le sommeil</li>
<li> l’eau</li>
<li> la nourriture</li>
<li> le soleil</li>
<li> les liens sociaux</li>
<li> l’exercice physique</li>
</ul>

Il faudrait cerner son point faible et le travailler.
En alimentation, il vous faut :
<ol>
<li>Des fruits et légumes de qualité (carburant et nutriments)</li>
<li>Des feuilles vertes (nutriments et fibres)</li>
<li>Une source grasse protéinée (noix, olive, fruit gras, oeuf, poisson, viande)</li>
</ol>
Le tout non dénaturé, c’est-à-dire cru, non assaisonné ou le moins possible et non
transformé.

À chacun de trouver son équilibre.
<VueExercise lg="fr" instruction="Traduis ces phrases!">
<ol>
<li>Jeder braucht gute Beziehungen.</li>
<li>Sei es jedem selbst überlassen, was er essen will!</li>
</ol>

<HideShow lg="fr">
<ol>
<li>Tout le monde a besoin des bonnes relations.</li>
<li>À chaqun de manger ce qu'il veut!</li>
</ol>
</HideShow>
</VueExercise>

Puiser les connaissances à plusieurs sources puis croiser les informations
pour créer sa compréhension.
<p>Clef n°1 : Apprendre - Acquérir des connaissances sur la santé.
L’apprentissage amène la compréhension et permettra de mettre en oeuvre les
principes appris afin d’obtenir des résultats.</p>
<p>Clef n°2 : Se nourrir- Donner au corps les aliments pour lequel il a été conçu.
Notre seul souci devrait être d’apporter au corps les éléments qui sont
nécessaires à son bon fonctionnement, c’est a dire des aliments vivants . Pour
le reste notre corps s’occupe de tout.</p>
<p>Clef n°3 : Eliminer - Detoxiner le corps.
Tout comme notre voiture , notre corps a besoin de décrassages réguliers.
Veuillez à ce que vos émonctoires fonctionnent correctement.</p>

<VueExercise lg="fr" instruction="Reliez les mots et les explications!">
<p>
mettre en oeuvre - aliment - souci - detoxiner
</p>
<p>
quelque chose dont on s'inquiète - le contraire de s'empoisoner - faire ce qu'on a appris et a décidé de faire - on peut le manger
</p>
<HideShow lg="fr">
<ul>
<li>mettre en oeuvre=faire ce qu'on a appris et a décidé de faire</li>
<li>detoxiner=le contraire de s'empoisoner</li>
<li>souci=quelque chose dont on s'inquiète</li>
<li>aliment=on peut le manger</li>
</ul>
</HideShow>
</VueExercise>

<p>
Clef n° 4 : Se forger sa conviction - Avoir des pensées positives.
Croire en ce que l’on met en place et cultiver la joie. Essayez de parler en
termes positifs.
</p>
<p>
Clef n° 5 : Appliquer - Passer à l’acte.
Une fois la connaissance acquise, il faut mettre en application et rester ouvert,
c’est a dire ne pas s’enfermer dans un dogme qui consisterait à suivre à la
lettre les écrits d’un tel ou un tel. A chacun son rythme d’intégration et de
régénération, parfois ce qui marche pour l’un ne marche pas pour l’autre ou
tout du moins pas aussi rapidement que vous l’auriez souhaité. Ne jamais
désespérer, ayez la foi.
</p>

<VueExercise lg="fr" instruction="Traduis les phrases!">
<ol>
<li>Was für den einen jetzt gut ist, ist für den anderen schlecht.</li>
<li>Was der oder die sagt, kann aus verschiedenen Gründen falsch sein.</li>
</ol>
<HideShow lg="fr">
<li>Ce qui est bon pour l'un maintenant est mauvais pour l'autre.</li>
<li>Ce que dit un tel ou un tel peut être faux pour des raisons différentes.</li>
</HideShow>
</VueExercise>

<h2>100% cru ou pas</h2>
Est-ce que la finalité c’est d’être cru à 100%, je ne le crois pas.
Ce qui est important c’est de dépasser les 50% quotidien de cru afin de palier à la
leucocytose digestive.
Découverte il y déjà de nombreuses années, la leucocytose est la réaction du
système immunitaire enclenchée lors de l’absorption d’aliments cuits. Le système
immunitaire répond a ce qu’il considère être une attaque et s’affaiblit inutilement.
Fort de ce constat, veillez à équilibrer le ratio cuit/cru.

<VueExercise lg="fr" instruction="Formez des questions!">
<p>Exemple:</p>
<p>Il faut manger tout cru. -> Est-ce qu'il faut manger tout cru?</p>

<ol>
<li>Tu ne réfléchis pas avant de manger.</li>
<li>Tu ne regardes pas le prix avant d'acheter des aliments inutiles.</li>
</ol>

<HideShow lg="fr">
<ol>
<li>Est-ce que tu ne réfléchis pas avant de manger?</li>
<li>Est-ce que tu ne regardes pas le prix avant d'acheter des aliments inutiles?</li>
</ol>
</HideShow>
</VueExercise>


Naturellement vous verrez s’installer des périodes totalement crues en fonction
des saisons et de votre ressenti personnel.
Vous avez éliminé les poisons majeurs, additifs, alcool, gluten, produits
transformés par l’agro-alimentaire, produits laitiers de vache, vous avez
sérieusement diminué vos apports carnés et vous avez introduit fruits et légumes
frais à plus de 50% vous êtes déjà presque parfait !
Il ne faut pas sous-estimer le plaisir de la table ou la convivialité pour perdurer sur
le chemin de l’alimentation santé.

<VueExercise lg="fr" instruction="Traduis les phrases suivantes!">
<ol>
<li>Man darf mit ihm auf keinen Fall darüber sprechen.</li>
<li>Man darf auf keinen Fall Alkohol tringen.</li>
</ol>
<HideShow lg="fr">
<li>Il ne faut surtout pas lui en parler.</li>
<li>Il ne faut surtout pas boire de l'alcool.</li>
</HideShow>

</VueExercise>


<h2>Organisation et planification des repas</h2>
Choisir le jour des courses en fonction de son planning. Au début faites une liste
puis par la suite laissez vous séduire à l’ instinct. Vous allez apprendre à repérer
les bons fruits et légumes. En rentrant, vous allez nettoyer et trier vos achats pour
faciliter l’élaboration de vos menus quotidien. Profitez de votre jour de repos pour
confectionner des sauces, des déshydratations, des lait végétaux ainsi, en rentrant
du travail vos repas seront prêts en un tour de main. Pensez à toujours avoir des
fruits à croquer en stock et des bananes mûres. L’utilisation de boites hermétiques
vous facilitera la tâche afin de disposer d’un choix tout prêt d’ingrédients déjà triés.

<VueExercise lg="fr" instruction="Décrivez les mots suivants!">
<p>quotidien - légume - repos</p>
<HideShow lg="fr">
<ul>
<li>quotidien - on fait des activités bzzzz par habitude ou chaque jour</li>
<li>légume - Une tomate, une pomme de terre et un chou-rave le sont, mais pas une banane ou une pomme</li>
<li>repos - On en a besoin si on a travaillé beaucoup.</li>
</ul>
</HideShow>
</VueExercise>

<h2>Les combinaisons alimentaires</h2>
Une mauvaise combinaison alimentaire ralentira la digestion et sera généralement
accompagnée de ballonnements, de gaz, de levures indésirables. Cela nuira à une
bonne assimilation des nutriments. Certaines personnes sont plus ou moins
sensibles à cette chimie.
Pour faire très simple, d’une manière générale, les verdures vont avec tout.
Les gras ne font pas bon ménage avec les sucres, mais n’en faites pas une
religion, le plaisir des papilles vaut quelque fois le coup de se laisser tenter!
Les agrumes se marient bien avec les gras.
Et rien de mieux que d’être à l’écoute de vos sensations.

<VueExercise lg="fr" instruction="Remplis les trous avec la bonne conjugaison du verbe aller, valoir, se marier et entendre">
<VueGaps lg="fr" gaptext="Je ne {m'entends} pas avec ma mére. Elle ment toujours. Ca ne {vaut} pas la peine de lui expliquer l'alimentation saine. Elle ne veut que que je {me marie} avec une femme quelquonque et produire 100 enfants. Moi et elle, ca ne {va} plus ensemble.">

</VueGaps>
</VueExercise>

<h2>Eau tiède citronnée du matin, pourquoi ?</h2>
½ citron dans un grand verre d’eau tiède (*Note de moi: tiéde = ni très chaud ni très froid) vous sera bénéfique pour :
- Eliminer les toxines : le citron fraichement pressé agit comme un diurétique et
aide les reins à drainer les toxines. Il stimule et draine également le foie. L’eau
tiède permet au système digestif de se réveiller en douceur et va permettre de
relancer le transit intestinal.
- Détoxifier la peau : rempli d’antioxydant et de Vit C il contribue à vous donner
bonne mine.
- Renforce le système immunitaire.
- Hydrate les cellules.
- Aide à retrouver une bonne haleine.

<VueExercise lg="fr" instruction="Remplis les trous avec la bonne proposition à ou de ou les pronoms y et en!">
<VueGaps lg="fr" gaptext="Manger trop ne m'aide pas {à} résoudre les problèmes de maths. Je n'{en} peut pas bénéfiquer. Ne manger rien me permets au moins {de} gagner du contrôle sur les sens.">

</VueGaps>
</VueExercise>

Essayez pendant un mois et constatez les résultats.
Cela ne marche que si vous pressez un citron, mais pas avec les jus en bouteille.
Le citron est généralement alcalinisant, mais, les personnes « neuro-arthritiques »
risquent au contraire de s’acidifier avec le citron. A doser selon votre constitution…

<VueExercise lg="fr" instruction="Traduis les phrases! Utilisez la bonne négation!">
<VueWholeSentences lg="fr" :sentences="[{task: 'Ich esse nur roh.', solution: 'Je ne mange que cru.'},
                                 {task: 'Ich esse nichts gekocht.', solution: 'Je ne mange rien cuit.' },
                                 {task: 'Ich koche nie!', solution: 'Je ne cuire jamais.' },
                                 {task: 'Ich habe heute noch nichts gegessen.', solution: 'Je n\'ai pas encore mangé aujourd\'hui.'}]">

</VueWholeSentences>

</VueExercise>



</div>
</div>

<div v-if="$route.params.page==4">

<div v-if="!livreVisible">
<table>
<tr><td>l'huile</td><td>Jeter de l'~ sur le feu, c'est rendre une situation émotionelle encore plus pire.</td><td>Cela ne manque jamais dans une salade. Un vélo en a également besoin.</td></tr>
<tr><td>le noix</td><td>Est-ce que tu connais un ~ noix qui est rouge?</td><td>Ils sont très gras. On a besoin d'un outil pour les ouvrir. Ils appartiennent sans doute à la nourriture propre à l'espèce humaine.</td>
</table>
</div>

<div v-if="livreVisible">
<h2>Les indispensables sauces et accompagnements</h2>

Huiles / Graisses (1) - Huile d'olive, huile de lin, huile de noix de coco, beurre de
noix, tahini, graines de sésame, graines de tournesol, graines de potiron, pignons,
amandes, noix de cajou, noix de macadamia, avocat.
Les sels (2) - sel rose, Tamari, Miso, algues, l’eau de Quinton.
Les acides (3) - citron, citron vert, orange, pamplemousse, tomate, choucroute,
vinaigre de cidre, tamarin.
Les sucrés (4) - datte, figue, autres fruits secs, miel, orange, baies, papaye,
mangue,sirop de coco/d’agave/d’érable.
Les aromates (5) - ail, gingembre, oignon, piment, poivron, Cayenne, basilic,
origan, thym, aneth, menthe, Curry, tomates séchées au soleil. Herbes : ciboulette,
cerfeuil, menthe (la menthe est particulièrement agréable avec les agrumes),
persil, épices.
- les groupes 1, 2, et 3 constituent les principaux ingrédients.
-Les groupes 4 & 5 sont des éléments ajoutés en fonction de l'humeur ou de la
salade.

<VueExercise lg="fr" instruction="Quelle est la couleur des fruits et légumes suivants?">
<p>tomate - noix de macadamia - graines de potiron - avocat - citron</p>
<HideShow lg="fr">
<p>Une tomate est rouge. Une noix de macadamia est blanche. Les graines de potiron sont verts. Un avocat est vert. Un citron est jaune.</p>
</HideShow>
</VueExercise>

Ingrédients supplémentaires, mais sans s'y limiter :
une cuillère à soupe de moutarde à l'ancienne maison.
une cuillère à soupe de levure alimentaire en flocons (ajoute une saveur de
fromage).

<VueExercise lg="fr">
<VueQuestion lg="fr" :question="{
		question: 'Qu\'est-ce qui n\'est pas un outil pour manger?',
		type: 'multiple choice',
		options: [{option:'Une cuillère', correct: false },
     {option:'Une fourchette', correct: false }, 
     {option: 'Un marteau', correct: true },
     {option: 'Un couteau', correct: false }
     ]
	    }" :hasNextButton="false" >

</VueQuestion>

</VueExercise>

<p>
Conseils:
<ol>
<li>Ajouter de l'eau lorsque cela est possible dans la plupart des préparations
afin de mettre moins ou pas d'huile. Si vous utilisez des avocats, assurez-vous
qu’ils soient mûrs et ajouter-les comme dernier ingrédient, si vous les
mettez en premier, cela peut affecter le goût et la texture.</li>
<li> Toujours ajouter les acides (3) en dernier pour avoir des sauces plus
épaisses et crémeuses.</li>
</ol>


<VueExercise instruction="Traduis les phrases suivantes!">
<ul>
<li>Ölivenöl ist sehr fett. Fügen Sie es als erstes dem Salat hinzu.</li>
<li>Zwiebeln sind sehr scharf. Füge Sie als zweites dem Salat hinzu.</li>
<li>Bevor Sie Tomaten kaufen, versichern Sie sich, dass diese reif sind.</li>
</ol>
<HideShow>
<ol>
<li>L'huile d'olive est très gras. Ajoutez-le en premier à la salade!</li>
<li>Des oignons sont très piquants. Ajoutez-les en deuxième à la salade!</li> 
<li>Avant d'acheter des tomates, assurez-vous qu'ils soient mûres.</li>
</ul>
</HideShow>
</VueExercise>

<ul>
<li>L'utilisation d'un mixeur vous aidera à obtenir une texture crémeuse, mais si
vous n'en avez pas un bocal fera l’affaire. Il suffit d'ajouter vos ingrédients, de
mettre le couvercle et de bien secouer.</li>
<li>Les vinaigrettes crémeuses colleront mieux aux salades et éviteront une
flaque dans le fond de l’assiette.</li>
<li>Trempez les fruits secs oléagineux facilite la digestion par la suppression des
inhibiteurs d’enzymes. De plus, vous obtiendrez des mélanges plus lisses et
onctueux.</li>

</ul>

<VueExercise instruction="Traduis les phrases suivantes!">
<ol>
<li>Eine Gabel ist nützlich zum Essen. Wenn Sie keine haben, tun es Ihre Hände auch.</li>
<li>Klopapier ist praktisch. Wenn Sie im Wald sind und keines haben, tun es ein paar Blätter von den Bäumen auch.</li>
</ol>
<HideShow>
<ol>
<li>Une fourchette est utile pour manger. Si vous n'en avez pas, vos mains feront l'affaire.</li>
<li>Le papier-toilette est pratique. Si vous êtes dans la foret et si vous n'en aves pas, quelques feuilles des arbres feront l'affaire. </li>
</ol>
</HideShow>
</VueExercise>

<ul>
<li>L'ajout d'un peu de moutarde aide à ce que l’émulsion soit plus stable.</li>
<li>Le rapport pour une vinaigrette à l’huile est généralement de 3 parts d’huile
pour 1 part de vinaigre ou de jus de citron, mais c’est à vous de juger ce qui
vous convient le mieux.</li>
<li>Pour faire une vinaigrette rapide, combinez un demi-avocat avec une tasse
de vinaigrette déjà prête. Mélangez jusqu'à consistance lisse.</li>
</ul>

<VueExercise instruction="Remplis les trous avec la conjugaison correcte du verbe!">
<VueGaps lg="fr" gaptext="Ne mangez rien du tout afin que votre repas {soit} (être) rapide. Préparez le repas vite afin que vous {puissiez} (pouvoir) faire autre chose après.">

</VueGaps>
</VueExercise>

</p>

<p>
<h3>Comment conserver et assaisonner vos salades ?</h3>
<li> Lors de l'achat de vos salades, une tête plus lourde indique la fraîcheur.
Regardez la base de la salade, elle ne doit pas être brune sinon cela signifie
que ça fait longtemps qu’elle a été coupée.
</li>
<li>Il est important de bien sécher votre salade et investir dans une essoreuse
me semble indispensable. Une fois séchée vous pourrez la conserver, soit
emballée dans un torchon propre soit dans une boite hermétique. Prenez soin
de mettre du Sopalin qui permettra de réguler l’humidité. Une salade reste
impeccable 5 jours dans votre frigo.</li>
<li>Les salades à feuilles doivent toujours être préparées si possible à la dernière
minute.</li>

<VueExercise instruction="Trouve les contraires des adjectives suivants!">
Exemple: lourd <-> léger
<p>bon - dispensable - dernier - nouveau</p>
<HideShow>
<p>bon <-> mauvais, dispensable <-> indispensable, dernier <-> premier , nouveau <-> vieux </p>
</HideShow>
</VueExercise>

<ul>
<li>Les feuillages tels que la roquette poivrée ou la chicorée amère donneront du
caractère à vos salades.</li>
<li>Les feuillages tendres comme la mâche, la laitue ou les jeunes pousses, sont
à traiter avec plus de délicatesse, avec du jus de citron par exemple.</li>
<li>Romaine et autres laitues croquantes ont une affinité pour les vinaigrettes
crémeuses.</li>
</ul>

<VueExercise instruction="Trouve au moins 5 adjectives à être placé devant le nom!">
<HideShow>
nouveau, jeune, vieux, bon, mauvais, petit, grand, joli, gros
</HideShow>
</VueExercise>

</p>

<p>
<h6>Exemples de sauces salade :</h6>
Voici quelques exemples de combinaisons qui peuvent être faites au blender, mais
ne vous limitez pas !
<ul>
<li>Base: eau, graines de tournesol, moutarde, quinton, jus de citron ou vinaigre
de cidre, curcuma, gingembre.</li>
<li>Sauce thaïe : beurre d'amande, tamari ou quinton, jus de citron vert, tamarin,
gingembre, ail.</li>
<li>Sauce sucrée : chair et eau de coco jeune, jus de citron, ail et dattes .
Sauce italienne : eau de quinton, noix de macadamia, vinaigre de cidre, ail,
basilic et origan.</li>
<li>Béchamel : Cajou trempées, levure maltée, HE de poivre noir, jus de citron.
Vinaigrette aux tomates séchées : noix de cajou, jus de pamplemousse et
tomates séchées au soleil.</li>
<li>Crutschup : poivron, tomates séchées, dattes, vinaigre de cidre, piment</li>
<li>Avoca’sauce : avocat , jus de citron et herbes fraiches.</li>
<li>Chutney: Abricots secs, jus d’orange, citron confit, gigembre, sel rose</li>
</ul>

<VueExercise instruction="Pour tous les aliments suivants, dites s'ils sont surtout gras, sucré ou piquant">
Exemple: Les noix sont surtout gras.
<p>beurre d'amande - avocat - datte  - gigembre</p>
<HideShow>
<p>gras - beurre d'amande, avocat</p>
<p>sucré - datte</p>
<p>piquant - gigembre</p>
</HideShow>

</VueExercise>
</p>




</div>
</div>

<div v-if="$route.params.page==5">

</div>

<button @click="nextPageClicked">Page suivante</button>

</template>

<script>
import VueGaps from "./../../vue-gaps.vue";
import VueQuestion from "./../../Question.vue";
import VueExercise from "./../../Exercise.vue";
import HideShow from "./../../HideShow.vue";
import VueWholeSentences from "./../../WholeSentences.vue"; 

export default {
  
  components: {
     VueGaps,
     VueQuestion,
     VueExercise,
     HideShow,
     VueWholeSentences
  },

  mounted(){
     console.log("The mounted function of VueConditionnel1 was called!");
     
  },
  setup(){
   console.log("The setup function of VueConditionnel1  is executed!");
  },
  data(){
   return {
      numPages : 5,
      livreVisible: true
   };
  },
  methods: {
    nextPageClicked(){
      
      let page = parseInt(this.$route.params.page);
      if(page == this.numPages){
         alert("Il n'y a pas de page suivante");
         return;
      }
      this.$router.push({ ...this.$route, params: { page: page +1 } });
      //this.$router.push("/french/alimentation/" + (page+1) );
    }
  }
}
</script>

<style scoped>

td {
   width: 30%;
}

</style>