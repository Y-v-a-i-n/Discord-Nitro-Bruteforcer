# Discord Nitro BruteForcer

Un code nitro classique fait 16 caractères et un code nitro game fait 24 caractères (62 caractères possibles), en comptant environ 10 000 nitros non claim .
```js
//Nitro classique : 
62¹⁶=4.7672402e+28
4.7672402e+28/10000=4.7672402e+24
//Nitro game : 
62²⁴=1.0408797e+43
1.0408797e+43/10000=1.0408797e+39
```
Il y a donc 4.7672402e+24 combinaisons possibles pour un nitro classique et 1.0408797e+39 combinaisons possibles pour un nitro game.</br>
Si on prend en compte le fait qu'on peut vérifier 1 seul nitro toutes les 5 secondes par adresse ip...
```js
//Nitro classique : 
4.7672402e+24/12=3.9727002e+23
//Soit 3.9727002e+23 secondes d'attente
3.9727002e+23/60=6.621167e+21
//Soit 6.621167e+21 minutes d'attente
6.621167e+21/60=1.1035278e+20
//Soit 1.1035278e+20 heures d'attente
1.1035278e+20/24=4.5980325e+18
//Soit 4.5980325e+18 jours d'attente
4.5980325e+18/365=1.2597349e+16
//Soit 1.2597349e+16 années d'attente
//Nitro Boost : 
1.0408797e+39/12=8.6739975e+37
//Soit 8.6739975e+37 secondes d'attente
8.6739975e+37/60=1.4456663e+36
//Soit 1.4456663e+36 minutes d'attente
1.4456663e+36/60=2.4094438e+34
//soit 2.4094438e+34 heures d'attente
2.4094438e+34/24=1.0039349e+33
//Soit 1.0039349e+33 jours d'attente
1.0039349e+33/365=2.7505066e+30
//Soit 2.7505066e+30 années d'attente
```
il nous faudra donc attendre 1.2597349e+16 années pour bruteforce 1 seul nitro classique et 2.7505066e+30 années si on vérifie tout les nitros sur une seul adresse ip. Je vous laisse faire les calculs pour le nombre de proxy dont vous disposez mais le résultat sera déjà très proche du mien.</br></br>
tout ça pour en venir à la conclusion : </br> il est "impossible" de bruteforce un code nitro, j'ai fait ce programme simplement pour le fun et pour prouver à toutes les personnes qui passent leurs temps à essayer de bruteforce un nitro que c'est inutile (après on sait jamais hein vous avez 1 chance sur 4.7672402e+24 d'obtenir un nitro classique et 1 chance sur 1.0408797e+39 d'obtenir un nitro game). La méthode bruteforce est bien, quand on sait l'utiliser.