import { Database } from "./databases";
const initResto = `
CREATE TABLE resto (
  idR bigint(20) NOT NULL PRIMARY KEY,
  nomR varchar(255) DEFAULT NULL,
  numAdrR varchar(20) DEFAULT NULL,
  voieAdrR varchar(255) DEFAULT NULL,
  cpR char(5) DEFAULT NULL,
  villeR varchar(255) DEFAULT NULL,
  descR text DEFAULT NULL,
  horairesR text DEFAULT NULL,
  telR varchar(38) DEFAULT NULL,
  mailR varchar(40) DEFAULT NULL,
  siteWeb varchar(40) DEFAULT NULL,
  FOREIGN KEY (idR) REFERENCES resto (idR) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;

INSERT INTO resto (idR, nomR, numAdrR, voieAdrR, cpR, villeR, descR, horairesR, telR, mailR, siteWeb) VALUES
(8, 'La table de POTTOKA', '21', 'Quai Amiral Dubourdieu', '64100', 'Bayonne',  'Cuisine revisitée et moderne', 'Du lundi au vendredi 12:00-15:30','+33 9 59 67 88 23 - +33 7 58 92 15 24','contact@pottoka.fr','www.pottoka.com'),
(12, 'O''grill family', '46', 'Avenue du loup', '64000', 'Pau', 'grill', 'Tous les jours : 11:00 à 15:00 puis 18:00 à 02:00','+33 5 59 32 28 93','ogrill@bouygues.fr','www.ogrill-pau.com'),
(13, 'Mesopotamie grill Pau', '23', 'Avenue Vignancour', '64000', 'Pau', 'brasserie, grill', 'Du Lundi au vendredi : 07:00 à 22:00','+33 9 59 67 88 23 - +33 7 58 92 15 24','mesopotamie@pau.fr','www.mesopotamie.pau.com');

INSERT INTO resto (idR, nomR, numAdrR, voieAdrR, cpR, villeR, descR, horairesR, telR, mailR) VALUES
(1, 'l''entrepote', '2', 'rue Maurice Ravel', '33000', 'Bordeaux', 'Brasserie, grill', 'Tous les jours sauf dimanche : 12:00 à 15:00 puis 19:00 à 23:00','+33 5 57 30 66 47','lentrepote@gmail.com'),
(3, 'Sapporo', '33', 'rue Saint Rémi', '33000', 'Bordeaux', 'Le Sapporo propose à ses clients de délicieux plats typiques japonais.', 'Tous les jours : 12:00 à 16:00','','sapporo.contact@free.fr'),
(6, 'Le Bistrot Sainte Cluque', '9', 'Rue Hugues', '64100', 'Bayonne', 'Bar à tapas', 'Tous les jours : 07:00 à 22:00','+33 5 59 89 10 12','lebistrotsaintecluque@bayonne.fr'),
(9, 'La Rotisserie du Roy Léon', '8', 'rue de coursic', '64100', 'Bayonne',  'Poulets rôtis et plats autour du poulet', 'Du mardi au dimanche 07:00-13:30','+33 6 90 57 82 13','royleon-rottisserie@gmail.com'),
(15, 'Aux délices de Marie', '1', 'Square George V', '64000', 'Pau',  'creperie sucrée & salée', 'Du Mardi au dimanche : 11:00 à 14:00 puis 19:00-23:00 - NON STOP le week-end','+33 5 59 01 04 06','delicesmarie@gmail.com');

INSERT INTO resto (idR, nomR, voieAdrR, cpR, villeR, descR, horairesR, telR, mailR, siteWeb) VALUES
(4, 'Cidrerie du fronton', 'Place du Fronton', '64210', 'Arbonne', 'cidrerie', 'Du lundi au vendredi 12:00 à 15:30','+33 6 10 22 14 10 - +33 7 59 06 40 11','lecidredufronton@proton.fr','www.cidreriedufronton.com'),
(14, 'Creperie du château', 'rue du château', '64000', 'Pau',  'saladerie aussi', 'Du lundi au samedi : 12:00 à 15:00 et 18:30 - 22:30','+33 5 59 22 44 66','creperieduchateau@pau.fr','www.creperieduchateau-pau.com'),
(16, 'Resto Bidon', '', '', '',  '', '','','','');

INSERT INTO resto (idR, nomR, numAdrR, voieAdrR, cpR, villeR, descR, horairesR, telR, siteWeb) VALUES
(2, 'le bar du charcutier', '30', 'rue Parlement Sainte-Catherine', '33000', 'Bordeaux', 'bar à vins, charcuteries et fromages', 'Du lundi au samedi 07:00 à 15:30','+33 6 16 14 22 33 - +33 5 57 26 63 17','www.lebarducharcutier.com'),
(5, 'Agadir', '3', 'Rue Sainte-Catherine', '64100', 'Bayonne', 'Restaurant du monde', 'Tous les soirs 18:00 à 23:30','+33 7 23 41 67 18','www.agadir-resto.com');

INSERT INTO resto (idR, nomR, numAdrR, voieAdrR, cpR, villeR, descR, horairesR, telR) VALUES
(10, 'Bar du Marché', '39', 'Rue des Basques', '64100', 'Bayonne',  'bar à vins', 'Du lundi au samedi 07:00 à 14:00','+33 5 59 11 08 69'),
(11, 'Trinquet Moderne', '60', 'Avenue Dubrocq', '64100', 'Bayonne', 'brasserie', 'Tous les soirs de 18:00 à 23:00','+33 9 09 33 52 18');

INSERT INTO resto (idR, nomR, voieAdrR, cpR, villeR, descR, horairesR, telR, siteWeb) VALUES
(7, 'Talaia', 'quai pedros', '64100', 'Bayonne', 'Découverte de saveurs', 'Du lundi au vendredi 12:00 à 15:30','+33 7 09 54 32 11','www.talaia.com');

`;

const initCritiquer = `
CREATE TABLE critiquer (
  idR bigint(20) NOT NULL,
  mailU varchar(150) NOT NULL,
  note int(11) DEFAULT NULL,
  commentaire varchar(4096) DEFAULT NULL,
  PRIMARY KEY (idR,mailU)
) ;

INSERT INTO critiquer (idR, mailU, note, commentaire) VALUES
(1, 'michel.garay@gmail.com', 3, 'Tres bonne entrecote, les frites sont maisons et delicieuses.'),
(1, 'nicolas.harispe@gmail.com', 4, 'Très bon accueil.'),
(2, 'jj.soueix@gmail.com', 2, 'bof.'),
(2, 'nicolas.harispe@gmail.com', 1, 'Cuisine tres moyenne.'),
(4, 'nicolas.harispe@gmail.com', 5, 'Rapide.'),
(5, 'nicolas.harispe@gmail.com', 3, 'Cuisine correcte.'),
(6, 'nicolas.harispe@gmail.com', 4, 'Cuisine de qualité.'),
(7, 'alex.garat@gmail.com', 4, 'Bon accueil.'),
(7, 'nicolas.harispe@gmail.com', 5, 'Excellent.'),
(7, 'y.barrot@gmail.com', 5, 'Service efficace.');
 `;


 export const restos: Database = {
  name: "restos",
  initSql: `${initResto}${initCritiquer}`,
};
