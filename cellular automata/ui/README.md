*Travail collaboratif avec Alexandre BONNET, Romane JOUVET et Alexandre Grosdidier*

Fait sur Processing Java, nécessite la librairie SoundCipher (téléchargeable sur leur site) : https://explodingart.com/soundcipher/download.html

Le principe du projet est de produire un outil de création musicale intégrant un automate cellulaire vivant à partir de différentes notes de musique : selon une sélection initiale dans une intervalle d'une octave, l'automate obéira à des règles qui vont faire évoluer les notes sélectionnés et les jouer sous forme d'accords.
Une UI réagissant aux notes jouées est également présente.
*Nous avons utilisé l'IA pour nous aider à régler quelques soucis, notamment quand on devait mettre en commun tous nos codes mais qu'il y avait des soucis d'exécution*

*Limitations*

L'intervalle d'une octave étant très limitée, les différents accords joués forment vite une boucle, peu importe les notes initiales. Nous avons essayé d'intégrer un système de gammes musicales permettant de produire des résultats plus harmonieux, mais on obtenait à la place des résultats encore plus répétitifs.
Le système actuel sans gammes augmente le risque de faire des combinaisons dissonantes.

*Pistes d'amélioration*

- Agrandir l'intervalle d'une ou deux octaves supplémentaires
- ajouter des règles (ainsi qu'une option pour en activer/désactiver certaines)
- ajouter différents instruments OU utiliser de la synthèse à partir d'oscillateurs eux aussi contrôlés par l'automate
