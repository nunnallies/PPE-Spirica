-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 07 fév. 2023 à 17:22
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `spirica`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `IdAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `Identifiant` varchar(100) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  PRIMARY KEY (`IdAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`IdAdmin`, `Identifiant`, `mdp`, `Nom`, `Prenom`) VALUES
(1, 'admin@spirica.fr', 'admin', 'Admin', 'backoff');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `IDClient` int(11) NOT NULL AUTO_INCREMENT,
  `Identifiant` varchar(200) NOT NULL,
  `mdp` varchar(200) NOT NULL,
  `entreprisedistri` varchar(200) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  PRIMARY KEY (`IDClient`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`IDClient`, `Identifiant`, `mdp`, `entreprisedistri`, `Nom`, `Prenom`) VALUES
(1, 'distributeur1@distribution.com', 'distribution', 'distribution', 'Distributeur', 'Un'),
(2, 'distributeur2@distribution2.com', 'distribution2', 'distribution2', 'Distributeur', 'deux');

-- --------------------------------------------------------

--
-- Structure de la table `documents`
--

DROP TABLE IF EXISTS `documents`;
CREATE TABLE IF NOT EXISTS `documents` (
  `IDdocuments` int(11) NOT NULL AUTO_INCREMENT,
  `NomDoc` varchar(200) NOT NULL,
  `Contenu` longtext,
  `Lien` varchar(300) NOT NULL,
  `IDdossier` int(11) NOT NULL,
  PRIMARY KEY (`IDdocuments`),
  KEY `Documents_Dossier_FK` (`IDdossier`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `documents`
--

INSERT INTO `documents` (`IDdocuments`, `NomDoc`, `Contenu`, `Lien`, `IDdossier`) VALUES
(1, 'Kbis', NULL, 'PPE-Spirica/ressources/docs/TAM-Kbis-au-15-juin-2021.pdf', 1),
(2, 'Statuts', NULL, 'PPE-Spirica/ressources/docs/TOTAL DIRECT ENERGIE SOLUTIONS - Statuts mis à jour.pdf', 1),
(3, 'Kbis', NULL, 'PPE-Spirica/ressources/docs/extrait_immatriculation_inpi_632012100.pdf', 2),
(4, 'Liasse fiscale', NULL, 'PPE-Spirica/ressources/docs/TOTAL DIRECT ENERGIE SOLUTIONS - sociaux.pdf', 1);

-- --------------------------------------------------------

--
-- Structure de la table `dossier`
--

DROP TABLE IF EXISTS `dossier`;
CREATE TABLE IF NOT EXISTS `dossier` (
  `IDdossier` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(20050) NOT NULL,
  `Statut` varchar(50) NOT NULL DEFAULT 'En cours d''analyse',
  `IDClient` int(11) NOT NULL,
  PRIMARY KEY (`IDdossier`),
  KEY `Dossier_CLIENT_FK` (`IDClient`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `dossier`
--

INSERT INTO `dossier` (`IDdossier`, `Nom`, `Statut`, `IDClient`) VALUES
(1, 'Total Energie', 'En cours d\'analyse', 2),
(2, 'L\'oréal', 'En cours d\'analyse', 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `Documents_Dossier_FK` FOREIGN KEY (`IDdossier`) REFERENCES `dossier` (`IDdossier`);

--
-- Contraintes pour la table `dossier`
--
ALTER TABLE `dossier`
  ADD CONSTRAINT `Dossier_CLIENT_FK` FOREIGN KEY (`IDClient`) REFERENCES `client` (`IDClient`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
