---
layout: page
title: Obrint Barcelona
---

## Introducció
Com tot moviment amb una barreja de filosofia i interessos econòmics, el món del programari lliure i de codi obert sempre s'ha envoltat d'una certa atmosfera del que en anglès anomenen FUD: Fear, Uncertainty and Doubt; Por, incertesa i dubte. D'altra banda la realitat ens dibuixa un estat molt diferent. Les grans empreses tecnològiques contribueixen grans quantitats de codi en projectes de programari lliure, tant Google, Microsoft o Apple tenen projectes als que hi contribueixen dia a dia i en fan gala.

Tot i així seguim tenint la sensació que no en fem servir de manera general. Res més lluny de la realitat, cada cop que accedim a Internet, les nostres dades passen per diversos dispositius que utilitzen programari lliure, la gran majoria de les solucions web estan basades en tecnologies lliures tals com [Apache](http://apache.org/), [Nginx](https://www.nginx.com/), [PHP](http://php.net), [.NET](https://opensource.microsoft.com), [GNU](http://gnu.org), i un llarguíssim etcètera. D'altra banda, la majoria dels productes que utilitzem no són programari lliure del tot ja que els creadors consideren que una manera d'assegurar-se el negoci és restringint-ne l'ús, tot i que no sigui necessàriament l'única ni la millor manera de fer-ho.

Podríem resumir l’èxit del programari lliure en permetre l’ús i desenvolupament de programari a tothom per igual, reduint el cost.

En aquest article tractarem per què és fonamental facilitar la creació de tecnologies que facilitin l'establiment d'una xarxa de coneixement amb un focus en els avantatges que en pot treure un ciutadà d'un lloc concret, com Barcelona.

## Històries

### Citybikes

#### Dades obertes amb programari lliure per tothom - [http://citybik.es](http://citybik.es)

L'any 2007 a Barcelona es va instaurar un sistema de bicicletes pels ciutadans. Aquests disposaven de certs sistemes rudimentaris per accedir a certes dades que la concessionària del projecte permetia als usuaris de fer servir. Si bé això pot funcionar fins a cert punt, alguns ciutadans van creure que això es podia fer millor, com va ser el cas d'en Lluís Esquerda i Citybikes.

Quan fem servir programari propietari, no ens passa mai pel cap la possibilitat d'arreglar-lo o millorar-lo. De vegades inclús se'ns dóna la possibilitat de contactar algun autor i implorar millores o canvis. D'altra banda això és possiblement més feina que posar-se mans a l'obra i dedicar l'energia i coneixement per crear un sistema similar. Com que en Lluís no havia de satisfer ni clients, ni caps, ni plans de negoci, va poder crear el producte que ell desitjava com a ciutadà. No obstant, a l'inici es va trobar certs problemes simplement perquè les dades de Bicing en aquell moment no eren obertes.

Des de llavors el projecte de Citybikes ha crescut moltíssim transcendint Barcelona i oferint dades unificades per sistemes de bicicletes de més de 400 ciutats d'arreu del món, contribuïdes per ciutadans d'aquests països que en alguns casos possiblement no haguessin mai tingut una aplicació per conèixer l'estat de les bicicletes. Amb el temps, la comunitat internacional ha anat creant diferents aplicacions client pel sistema tant web com la majoria de les plataformes mòbils i ha contribuït la gran majoria dels diferents sistemes de bicicletes de les diferents ciutats del món.
Un altre dels resultats més sorprenents de Citybikes és que s'hagi convertit en el standard de facto en sistemes de bicicletes compartides fins al punt que d'altres projectes hagin decidit aprofitar aquesta tecnologia, creada sota llicència lliure, per basar-hi [d'altres projectes](https://citybik.es/projects) com CityMapper i Moovit. De la mateixa manera, [diferents estudis](http://ceur-ws.org/Vol-904/paper11.pdf) [universitaris](http://bikesharingatlas.org/network/bicing) s'han basat en les dades obtingudes de Citybikes per crear i analitzar coneixement sobre diferents ciutats, ja que és l'única manera uniforme i clara d'accedir a les dades. Un altre exemple seria com es fa servir Citybikes per explicar com tractar dades de manera general en diferents [llibres](https://www.amazon.es/Automated-Data-Collection-Practical-Scraping/dp/111883481X/).

### Guifi.net

#### Organitzant la xarxa comunitària més gran del país - [http://guifi.net](http://guifi.net)
Fa bastants anys ja que Internet va arribar per quedar-se. Inicialment l’accés a la xarxa de xarxes es va fer mitjançant el cablejat telefònic que les grans operadores de telecomunicacions ja tenien desplegat. Les adaptacions necessàries per fer-ho possible han estat cares, fet que ha motivat aquestes empreses, tot i amb l’ajut de la inversió pública que han anat rebent, sempre hagin prioritzat les àrees amb un retorn econòmic més alt, bàsicament les grans ciutats.

Davant aquesta situació un grup de joves de la plana de Vic van passar a l’acció per dissenyar un sistema flexible que els permetés anar creant, de mica en mica, una xarxa que els interconnectés. La xarxa va créixer ràpidament. Amb l’ajut d’altres ciutadans amb necessitats similars, es van anar creant nodes que expandien la xarxa pel territori, fent arribar els seus serveis a més gent a cada pas. Un dels trets principals d’aquest creixement, i possiblement el fet que l’ha convertit en un projecte de xarxa oberta a nivell europeu, és que la gent hagi pogut crear aquests nodes fàcilment podent així contribuir a l'expansió de la xarxa de manera directa. Perquè això fos possible s’ha fet servir programari lliure tant per gestionar-ne l’organització com en la majoria dels nodes que conformen la xarxa.

Guifi.net és avui un dels projectes tecnològics comunitaris més grans de Catalunya, probablement el més gran. Mitjançant la combinació de les tecnologies sense fil i de les de fibra òptica actualment disposem d’una infraestructura de xarxa de comuns que ens permet satisfer les nostres necessitats de connectivitat, tant en un poble com en una gran ciutat.

### Trovit

#### Emprenent amb una bona idea i una bona base - [http://www.trovit.es](http://www.trovit.es)

A la societat generem dades, aquestes dades les creem persones per d'altres persones, però és difícil que aquestes arribin a donar fruit, de fet ha estat un dels grans temes a solucionar des de que va sorgir Internet.

Al voltant de l'any 2007 un grup de 4 va fundar Trovit amb la intenció d'aglutinar certs anuncis, per la societat. Si bé no formava part de la seva missió, Trovit va adoptar diferents tecnologies lliures per la seva qualitat i facilitat d'adopció. Pot sonar trivial, però una de les tasques més delicades que adopta qualsevol projecte en començar és la decisió de les tecnologies base. Estem parlant concretament de projectes com Debian Linux, PHP, Lucene, Apache, MySQL i més tard Solr, com moltes altres empreses aleshores i inclús avui dia.

Han passat els anys i Trovit ha seguit el seu camí. En aquest camí, els enginyers de Trovit van adonar-se'n de que estaven arribant als límits de les tecnologies en les que es basaven. Això no va ser impediment però, ja que van podem col·laborar amb aquests projectes per tal de millorar-los. Per ells i per tothom.
És molt potent el fet que pel seu camí passi millorar projectes, idees, que compartim entre tots. És probable que les contribucions de Trovit ajudessin a fer viables projectes d'arreu del món. Amb tota naturalitat. Avui dia Trovit té vora 120 empleats, ofereix servei a 46 països, des de Barcelona.

### Wikipedia

#### informació sense límits - [https://wikipedia.org](https://wikipedia.org)

Allà per finals del 2000 el CEO d’un projecte petit anomenat Nupedia, Jimmy Wales, va tenir l’estrambòtica idea de començar una enciclopèdia que podria ser editada per tothom. Per dur a terme l’exòtica idea necessitaven una web que permetés l’enllaç i edició dels articles per part dels usuaris.

Wikipedia va començar el Gener del 2001 utilitzant UseModWiki i això li va permetre començar amb la idea de manera imminent i sense costos de producció de programari a mida i comprovar si realment era una idea de bojos o no. Cap a mitjans del 2001 Wikipedia havia crescut tant que era massa gran per UseModWiki, el programa se'ls havia quedat petit i era moment de començar a pensar en alternatives. Un estudiant d’universitat que era editor de Wikipedia va començar un nou programa utilitzant un aleshores nou llenguatge de programació anomenat PHP i una base de dades anomenada MySQL, tots dos programari lliure. Gràcies a les característiques de PHP i a l’ús d’una base de dades el nou programa va funcionar bé fins que de nou es va quedar petit. Amb tota l’experiència guanyada en aquest temps Lee Daniel Crocker va començar el que esdevendria la base del projecte que finalment al 2003 es va conèixer com [MediaWiki](https://www.mediawiki.org), el programari en que es basa Wikipedia.

L'impacte de la cultura lliure ha anat més enllà del programari lliure. El sol fet d'haver adoptat una llicència adequada dins les Creative Commons, ha assegurat que, de la mateixa manera que els desenvolupadors contribueixen a diferents peces de codi, es pugui construir entre tots una enciclopèdia. Wikipedia ha trascendit totes les barreres, arribant a més de 200 idiomes, milions d'articles. Costa imaginar una altra manera d'arribar a aquests números, si no és perquè qualsevol persona hi pot contribuir i aportar el que cregui que ha d'aportar. Per exemple, a casa nostra vam estar impulsors d'aquest moviment, sent la [primera edició](http://www.bbc.com/mundo/movil/noticias/2012/05/120501_tecnologia_wikipedia_catalan_aa.shtml) no anglesa en publicar un article. A partir d'aquí, [Amical](https://en.wikipedia.org/wiki/Amical) ha treballat molt per assegurar que la Vikipèdia estigui viva i formi part del nostre dia a dia.
MediaWiki és programari lliure, utiltizat per milers de pàgines web i només una petita part del seu desenvolupament el fa la Wikimedia Fundation, l’entitat responsable de Wikipedia. La resta del desenvolupament la fan totes les persones que o bé necessiten adaptar el programa o arreglar errors per tal que MediaWiki funcioni millor pel seu ús. Si la Wikipedia és un projecte molt inclusiu, MediaWiki ha arribat on Wikipedia no podia. Avui dia podem trobar wikis de tota mena, que la gent s'ha instal·lat. Ho fa servir per comunicació interna o externa: [universitats](https://wikitolearn.org), [organitzacions](https://community.kde.org), i un llarg etcètera.

### La informàtica personal i Linux
La informàtica personal ha estat, des del dia que va arribar als mercats, un espai de la informàtica que sentim proper ja que qui més qui menys cada dia acabem fent servir un ordinador, una tauleta o un mòbil intel·ligent. La informàtica personal i certes parts de la professional és especial, ja que és un dels pocs espais en els que el programari és producte central i no accessori. La llibertat en la informàtica personal ha estat tema de discussió des de fa molt de temps i està guanyant rellevància sobretot des que sabem del cert que els sistemes proprietaris fan usos de les nostres dades dels que no som conscients.

Tot i així, fa molt de temps que parlem de sistemes operatius lliures, es parla d'UNIX, [GNU](http://gnu.org) i BSD des dels anys 80, inclús abans que es s'entengués la informàtica personal com a tal. Aquests sistemes han evolucionat continuadament. Com dèiem abans, GNU/Linux, la conjunció del nucli Linux i les èines de GNU, les podem trobar arreu: des de servidors, telèfons mòbils, ordinadors personals, cotxes, neveres i un llarguíssim etcètera. Tot i que no s'ha acabat d'adoptar definitivament, hi ha molts projectes que s'han ocupat de fer possible que avui dia el programari lliure sigui viable com a plataforma: [KDE](http://kde.org), [Ubuntu](http://ubuntu.com), [Gnome](http://gnome.org), [LibreOffice](https://www.libreoffice.org) són alguns exemples d'aquests projectes i es dóna el cas que hi ha desenvolupadors de tots aquests projectes a casa nostra que veuen com aquesta feina no s'acaba d'aprofitar a casa, com a tots ens agradaria.

Tant [escoles catalanes](http://linkat.xtec.cat/portal/index.php) com escoles a [Taiwan](https://dot.kde.org/2013/10/02/ezgo-free-and-open-source-software-taiwans-schools). [Creant](http://linux.softpedia.com/blog/KDE-and-Linux-Were-Used-in-the-Production-of-the-Movie-quot-Gravity-quot-425516.shtml) [películes](http://forums.scotsnewsletter.com/index.php?showtopic=72685) o en governs com el de la [ciutat de Múnic](https://en.wikipedia.org/wiki/LiMux) tenen un denominador comú que és el programari lliure com a plataforma de treball. Al programari lliure li queda feina a fer per arribar a totes les llars, però es tracta de feina de promoció i educació més que funcionalitat tècnica. Ens han ensenyat a fer servir eines que no controlem i això ens atrapa. Tot i així, res ens impedeix alliberar-nos-en exceptuant és clar, els agents comercials.

## Conclusió
El programari lliure ha guanyat.

Gairebé tots els projectes que es desenvolupen avui dia estan basats en programari lliure, des del més petit dels projectes que una programadora aficionada està desenvolupant a un petit poble de la rodalia, fins els grans projectes de les grans corporacions com poden ser Google o Facebook. Això és possible pel fet que amb el programari lliure tothom hi pot guanyar: rics i pobres, grans i petits. Tot i així, no podem baixar la guàrdia. És un món que canvia constantment i hem d'assegurar que anem al ritme que toca, i que no donem passos en fals.

Quan parlem de programari lliure, normalment ens referim a les 4 llibertats fonamentals del programari lliure. Havent repassat aquests casos, què veiem que estan aportant realment?

1. _libertat d'ús_: no volem ni ens interessa excloure ningú en la societat a causa de decisions (econòmiques o no) que hagin adoptat els responsables del programari a disposició. Com hagués pogut Wikipedia acabar tenint el millor programari per enciclopèdies si només l'haguéssin pogut fer servir ells?

2. _llibertat de modificació_: tot sovint tenim la sensació que les eines que tenim avui dia són suficients i tot el que necessitarem en la nostra vida. D'altra banda, sempre trobem a faltar certa funcionalitat o veiem que amb uns petits canvis podríem fer servir els programes amb molta més lleugeresa. És per això que existeixen els desenvolupadors de programari, que ens podran implementar els canvis necessaris. Sense poder modificar, com podem assegurar que el programari estarà traduït per la nostra gent? Com podem assegurar que quan les necessitats canvïin ens podrem adaptar? Com hauria pogut Trovit basar el producte principal al voltant del tecnologies lliures si no les podia inspeccionar o modificar?

3. _llibertat de distribució_: com dèiem en el 1r punt, volem una societat que tingui accés a la informàtica. Necessitem que arribi i sovint posar els mitjans serà la manera més fàcil de poder-ho fer servir. Hem de poder fer arribar el programari a la gent. Com de difícil hauria estat la feina de Guifi.net si hagués hagut de comprar llicències a diferents empreses de programari per cada un dels sistemes que han desplegat?

4. _llibertat de distribució de les modificacions_: quan parlem de tenir la llibertat de modificar, és fàcil caure en el parany d'imaginar-nos fent els canvis nosaltres mateixos o contractant a algú que ho faci. Gent d'arreu té exactament les mateixes necessitats que tenim nosaltres, i vice-versa. Un projecte de programari lliure amb una visió que sàpiga unir les diferents contribucions serà un projecte que avançarà inexorablement. Seria Linux un projecte tant omnipresent com és avui dia si empreses, sovint competidores, no hi estiguessin contribuïnt per fer una plataforma millor entre tots?

*Per [Aleix Pol](https://twitter.com/aleixpol) i [Àlex Fiestas](https://twitter.com/afiestas)*.
