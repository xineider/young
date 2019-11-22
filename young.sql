-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 22-Nov-2019 às 21:04
-- Versão do servidor: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `young`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contatos_young`
--

DROP TABLE IF EXISTS `contatos_young`;
CREATE TABLE IF NOT EXISTS `contatos_young` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `tipo` tinyint(1) NOT NULL COMMENT '1 - contato, 2 - ebook',
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=191 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `contatos_young`
--

INSERT INTO `contatos_young` (`id`, `nome`, `email`, `tipo`, `deletado`, `data_cadastro`) VALUES
(1, 'Marcos', 'markosss13@gmail.com', 2, 0, '2018-06-06 14:17:48'),
(2, 'marcos', 'markosss13@gmail.com', 2, 0, '2018-06-06 14:22:37'),
(3, 'marcos', 'markosss13@gmail.com', 2, 0, '2018-06-06 14:26:07'),
(4, 'marcos', 'markosss13@hotmail.com', 2, 0, '2018-06-06 18:16:28'),
(5, 'marcos', 'm.barcellos.c@gmail.com', 2, 0, '2018-06-06 18:25:54'),
(6, 'marcos', 'markosss13@gmail.com', 2, 0, '2018-06-06 19:13:45'),
(7, 'marcossss', 'markosss13@gmail.com', 2, 0, '2018-06-06 19:13:55'),
(8, 'marcos', 'markosss13@hotmail.com', 2, 0, '2018-06-07 14:34:49'),
(9, 'Marcos', 'markosss13@gmail.com', 1, 0, '2018-06-07 15:05:08'),
(10, 'Marcos 9', 'marcos.s192@gmail.com', 1, 0, '2018-06-07 15:16:59'),
(11, 'Marcos', 'markosss13@gmail.com', 2, 0, '2018-06-07 16:48:42'),
(12, 'marcos', '1232132@asdasd.com', 2, 0, '2018-06-07 19:10:41'),
(13, 'carlos henrique provin almeida', 'pattyeike@gmail.com', 1, 0, '2018-06-07 23:08:22'),
(14, 'Marcos', 'marcos.schneider13@hotmail.com', 2, 0, '2018-06-12 16:58:05'),
(15, 'Marcos', 'marcos.schneider13@hotmail.com', 2, 0, '2018-06-12 17:02:00'),
(16, 'marcos', 'marcos.schneider13@hotmail.com', 2, 0, '2018-06-12 17:07:39'),
(17, 'Simone Breitenbach', 'simonebrei@yahoo.com.br', 2, 0, '2018-06-12 17:16:36'),
(18, 'Marcos', 'markosss13@gmail.com', 1, 0, '2018-06-14 19:00:00'),
(19, 'Simone', 'simonebrei@hotmail.com', 1, 0, '2018-06-18 19:00:15'),
(20, 'Simone', 'simonebrei@yahoo.com.br', 2, 0, '2018-06-18 19:00:32'),
(21, 'Luciana Robalo', 'promocoes@graficargb.com.br', 1, 0, '2018-06-19 16:35:25'),
(22, 'LUCIANE BOTELHO MARTINS', 'lucianebmk@hotmail.com', 1, 0, '2018-06-19 18:56:55'),
(23, 'Lucia Helena MENUZZI Vieira', 'lhmvieora@b.cpm.br', 1, 0, '2018-06-21 18:04:53'),
(24, 'Janes Teresinha Denardi', 'janesdenardi3@gmail.com', 1, 0, '2018-06-22 18:34:13'),
(25, 'alexandre paim de abreu', 'aabreu@caxia.rs.gov.br', 1, 0, '2018-06-26 16:03:40'),
(26, 'BRUNA BRENDER GRANDO', 'bruninha_bru@hotmail.com', 1, 0, '2018-06-26 23:47:20'),
(27, 'matheus', 'matheus.wasem956@gmail.com', 1, 0, '2018-06-29 23:41:24'),
(28, 'Antonio Freitas', 'capitalconsultoria@hotmail.com', 1, 0, '2018-07-03 00:12:30'),
(29, 'Kéthelyn Corrêa da Silva', 'kethelyncorrea1@hotmal.com', 1, 0, '2018-07-09 19:29:06'),
(30, 'Leonardo Augusto Lopes de Araujo', 'leolopesdearaujo@gmail.com', 1, 0, '2018-07-09 19:30:34'),
(31, 'Teste', 'teste@teste.com.br', 3, 0, '2018-07-10 18:13:29'),
(32, '123213', 'markosss123@gmail.com', 3, 0, '2018-07-10 18:22:02'),
(33, 'teste', 'teste@teste.com.br', 3, 0, '2018-07-10 18:41:04'),
(34, 'teste', 'markosss13@gmail.com', 3, 0, '2018-07-10 18:41:20'),
(35, 'teste', 'markosss13@gmail.com', 3, 0, '2018-07-10 18:41:21'),
(36, 'teste', 'markosss13@gmail.com', 3, 0, '2018-07-10 18:41:21'),
(37, 'teste', 'markosss13@gmail.com', 3, 0, '2018-07-10 18:41:21'),
(38, 'teste', 'markosss13@gmail.com', 3, 0, '2018-07-10 18:41:21'),
(39, 'teste', 'markosss13@gmail.com', 3, 0, '2018-07-10 18:41:21'),
(40, 'Fátima dos Santos carpes', 'fatimacarpes@hotmail.com', 1, 0, '2018-07-11 12:23:06'),
(41, 'Fátima dos Santos carpesfatima', 'fatimacarpes@hotmail.com', 1, 0, '2018-07-11 16:03:58'),
(42, 'teste', 'teste@teste.com.br', 3, 0, '2018-07-11 18:19:46'),
(43, 'noticia1', 'noticia1@noticia.com.br', 3, 0, '2018-07-11 19:00:17'),
(44, 'noticia2', 'noticia2@noticia2.com', 3, 0, '2018-07-11 19:01:24'),
(45, 'noticia2', 'noticia2@meuemail.com', 3, 0, '2018-07-11 19:01:37'),
(46, 'noticia2', 'noticia2@email.com', 3, 0, '2018-07-11 19:03:09'),
(47, 'noticia3', 'noticia3@email.com', 3, 0, '2018-07-11 19:03:36'),
(48, 'noticia4', 'noticia4@noticia4.com', 3, 0, '2018-07-11 19:04:13'),
(49, 'noticia5', 'noticia5@noticia5.com', 3, 0, '2018-07-11 19:04:38'),
(50, 'Simone Breitenbach', 'simonebrei@hotmail.com', 3, 0, '2018-07-11 20:51:50'),
(51, 'Maicon Dias da Silva', 'maicondiasdasilva@hotmail.com', 1, 0, '2018-07-13 01:15:01'),
(52, 'paulo silveira da silva', 'paullosilva@hotmail.com', 1, 0, '2018-07-13 12:59:50'),
(53, 'Tainara ', 'tainara.tata@gmail.com', 1, 0, '2018-07-15 19:28:04'),
(54, 'Vanessa Becker', 'vanessabecker.adv@hotmail.com', 1, 0, '2018-07-16 13:45:56'),
(55, 'Adir Cigognini', 'a.cigognini@gmail.com', 1, 0, '2018-07-17 11:34:09'),
(56, 'Mônica Von Borowski ', 'monica.von.borowski@gmail.com', 1, 0, '2018-07-18 18:37:50'),
(57, 'Alex Lima', 'akpraia@hotmail.com', 1, 0, '2018-07-19 15:31:40'),
(58, 'Eunice Marques Oliveira', 'eunicemarquesoliveir@hotmail.com', 1, 0, '2018-07-20 20:33:52'),
(59, 'Simone', 'simonebrei@yahoo.com.br', 3, 0, '2018-07-23 20:10:45'),
(60, 'Camila Jaques Schuler', 'CAMILY.JQS@GMAIL.COM', 1, 0, '2018-07-31 19:29:28'),
(61, 'Paulo Sanches', 'paulo.sanches@hotmail.com.br', 1, 0, '2018-08-01 22:04:50'),
(62, 'PAULO RICARDO RECUERO SOARES', 'paulo.recuero@yahoo.com', 1, 0, '2018-08-02 12:32:58'),
(63, 'Teste', 'teste@teste.com.br', 1, 0, '2018-08-06 20:04:16'),
(64, 'Rogerio Garay Cardoso', 'garayrogerioc@gmail.com', 1, 0, '2018-08-11 21:06:51'),
(65, 'Marco Antonio de Almeida Gomes', 'antoniogomes1958@bol.com.br', 1, 0, '2018-08-14 22:24:43'),
(66, 'Paula Alves', 'paulaalvesnh@gmail.com', 1, 0, '2018-08-15 16:00:39'),
(67, 'Carlos Augusto de Mello Leal', 'cdemelloleal@gmail.com', 1, 0, '2018-08-16 10:07:06'),
(68, 'Adriana Almeida', 'adrianaholzmann@gmail.com', 1, 0, '2018-08-17 16:56:41'),
(69, 'André Antonio Bueno', 'andrebuenonh@gmail.com', 1, 0, '2018-08-19 15:02:04'),
(70, 'ADRIANE AMARAL DA SILVA', 'adriane.asilva@hotmail.com', 1, 0, '2018-08-21 12:37:16'),
(71, 'Adriana Almeida', 'adrianaholzmann@gmail.com', 1, 0, '2018-08-21 18:31:18'),
(72, 'Luciano Pereira', 'lucianonsr@gmail.com', 2, 0, '2018-08-24 19:07:27'),
(73, 'WINDERSON MARQUES MACHADO', 'windersonmarques@hotmail.com', 2, 0, '2018-08-26 21:13:57'),
(74, 'Michael ', 'ianaeimarchandt@gmail.com', 1, 0, '2018-08-27 13:21:46'),
(75, 'edemar pacheco', 'edemarpacheco@hotmail.com', 1, 0, '2018-08-29 18:54:23'),
(76, 'LUIZ CARLOS DA SILVA DINIZ', 'dinizluizcarlos429@gmail.com', 1, 0, '2018-08-30 14:50:22'),
(77, 'Teste de envio', 'teste@teste.com.br', 1, 0, '2018-08-30 20:37:02'),
(78, 'ELIANA DOS SANTOS CARVALHO', 'segurancaelitte@hotmail.com', 1, 0, '2018-08-31 13:20:30'),
(79, 'marcol', 'arte.mvizio@gmail.com', 2, 0, '2018-08-31 23:05:06'),
(80, 'Simone', 'simonebrei@hotmail.com', 3, 0, '2018-09-03 02:07:26'),
(81, 'Simone', 'simonebrei@hotmail.com', 3, 0, '2018-09-03 02:07:54'),
(82, 'Simone', 'simonebrei@hotmail.com', 3, 0, '2018-09-03 02:08:19'),
(83, 'Simone', 'simonebrei@hotmail.com', 3, 0, '2018-09-03 02:08:47'),
(84, 'Simone', 'simonebrei@hotmail.com', 3, 0, '2018-09-03 02:09:04'),
(85, 'Gabriela Maiato Chagas', 'gabrielamaiato@hotmail.com', 1, 0, '2018-09-06 14:24:35'),
(86, 'Claudia Zitto', 'czitto@trt4.jus.br', 1, 0, '2018-09-10 17:46:14'),
(87, 'Mario Cezar de Castro Rodrigues', 'mccr@terra.com.br', 1, 0, '2018-09-25 21:08:16'),
(88, 'DENISE PAZ DA SILVA', 'denise.paz@hotmail.com', 1, 0, '2018-09-28 12:29:07'),
(89, 'ADRIANA EDINÁ AGÜERO', 'aguero_adriana@hotmail.com', 1, 0, '2018-10-04 00:34:36'),
(90, 'Alessandra Vieira Pacheco ', 'avpacheco24@gmail.com', 1, 0, '2018-10-10 16:21:38'),
(91, 'Gilberto Brinhol Carrion', 'gilbertobcarrion@gmail.com', 1, 0, '2018-10-12 20:47:01'),
(92, 'felipe', 'felipefmc@yahoo.com.br', 2, 0, '2018-10-15 12:47:04'),
(93, 'Wagner de Quadros', 'comercial.dequadros@gmail.com', 1, 0, '2018-10-16 01:51:34'),
(94, 'Berenice Martinelli de Marco', 'beremartinelli@gmail.com', 1, 0, '2018-10-16 19:45:33'),
(95, 'ELTON DORNELLES CASTRO', 'eltondornellescastro@gmail.com', 1, 0, '2018-10-19 13:05:19'),
(96, 'Luciane Bortoli', 'luciane.bortoli@gmail.com', 1, 0, '2018-10-19 17:51:17'),
(97, 'julio cesar rocha', 'fresart.fresas@gmail.com', 1, 0, '2018-10-22 19:16:06'),
(98, 'Lidiane ', 'lidiane.dornelles@yahoo.com.br', 1, 0, '2018-10-25 17:45:48'),
(99, 'Liane Teresinha berghan constante da Silveira', 'yuridenoia@gmail.com', 1, 0, '2018-10-27 14:10:45'),
(100, 'Leandro Abreu', 'leandrodem.abreu@gmail.com', 1, 0, '2018-11-01 04:55:13'),
(101, 'Claudia Szortika', 'claudias.q@hotmail.com', 1, 0, '2018-11-06 12:48:52'),
(102, 'Virgéria Cezar Custódio', 'virgeria@gmail.com.br', 1, 0, '2018-11-07 11:52:55'),
(103, 'Camila Santos de Souza Vianna', 'milasouzavianna@yahoo.com.br', 1, 0, '2018-11-14 00:03:10'),
(104, 'ANA CRISTINA SILVA DE MATOS', 'aninha2706a@gmail.com', 1, 0, '2018-11-15 18:23:48'),
(105, 'Sílvia da Silva Dalberto', 'silvia.dalberto@bol.com.br', 1, 0, '2018-11-21 00:10:43'),
(106, 'PAULO GOMES SAPORITI NETO', 'paulo.saporiti@hotmail.com', 1, 0, '2018-11-22 16:11:59'),
(107, 'juliana silva bortolotti', 'julianabortolotti.rs@gmail.com', 1, 0, '2018-11-22 21:29:11'),
(108, 'Edson Ganbarra de Gambarra', 'arte.mvizio@gmail.com', 2, 0, '2018-11-28 21:42:36'),
(109, 'sidney alves da silva', 'sidy_silvaalves@hotmail.com', 1, 0, '2018-11-29 14:30:14'),
(110, 'Simone Paula Mazzochi', 'simonecxs@hotmail.com', 1, 0, '2018-12-01 19:45:17'),
(111, 'Carlos Alberto Klostermeyer', 'c.klostermeyer@hotmail.com', 1, 0, '2018-12-03 16:57:31'),
(112, 'Fabiana', 'fabi.calculostrabalhistas@gmail.com', 1, 0, '2018-12-07 15:26:10'),
(113, 'William Silveira da Silva', '101033@upf.br', 1, 0, '2018-12-10 13:58:56'),
(114, 'Cleonice Elisete da Silveira Feijó', 'cfeijo@tjrs.jus.br', 1, 0, '2018-12-12 15:51:36'),
(115, 'Adre Silvane Rosa', 'adressilva@yahoo.com.br', 1, 0, '2018-12-18 18:31:47'),
(116, 'MICHEL MÜLLER', 'mmullerg@yahoo.com', 1, 0, '2018-12-19 17:20:21'),
(117, 'Jaime Marcelo Ribeiro', 'jmrjaime@gmail.com', 1, 0, '2018-12-21 10:40:09'),
(118, 'Andrius Debastiani', 'andrius.debastiani@hotmail.com', 1, 0, '2019-01-01 17:34:43'),
(119, 'Pâmela Cardoso ', 'pahhhcardossoo@gmail.com', 1, 0, '2019-01-07 23:28:27'),
(120, 'Leandro Scherer', 'leandro_schererdasilva@hotmail.com', 1, 0, '2019-01-08 21:38:56'),
(121, 'Viviane Winter Nicola', 'vivianewnicol@gmail.com', 1, 0, '2019-01-11 12:46:41'),
(122, 'Silvane Vecchietti Christofari', 'silvanecris@hotmail.com', 1, 0, '2019-01-23 13:41:03'),
(123, 'BRUNA BRENDER GRANDO', 'bruninha_bru@hotmail.com', 1, 0, '2019-01-26 13:05:29'),
(124, 'Clairton Lopes', 'clairtonlopes50@gmail.com', 2, 0, '2019-01-29 10:53:25'),
(125, 'Ingrid Fernanda Lopes da Silveira', 'ingridlopesnh@gmail.com', 1, 0, '2019-02-02 05:16:15'),
(126, 'NELITA MARIA FERRI', 'neferri@terra.com.br', 1, 0, '2019-02-10 22:28:51'),
(127, 'Alexsander', 'agmateriais51@gmail.com', 1, 0, '2019-02-12 15:44:05'),
(128, 'Carolina Martins da Silveira', 'carolinamssl@yahoo.com.br', 1, 0, '2019-02-27 16:20:47'),
(129, 'Mauren regina C. soares', 'fe-amor@outlook.com', 1, 0, '2019-03-01 03:38:52'),
(130, 'Victor Mattos', 'rovedamattos@hotmail.com', 1, 0, '2019-03-04 23:37:13'),
(131, 'Evani Lanius Sachett', 'evanilanius@hotmail.com', 1, 0, '2019-03-06 00:13:47'),
(132, 'ELISABETH KARST', 'bethikarst@gmail.com', 1, 0, '2019-03-06 13:20:10'),
(133, 'Araci Erica Richter', 'jonesrichter@yahoo.com.br', 1, 0, '2019-03-07 21:12:09'),
(134, 'Ricardo Zanolete', 'ricardoplustelecom@gmail.com', 1, 0, '2019-03-09 15:37:56'),
(135, 'DANIELA', 'daniela.bottega@yahoo.com.br', 2, 0, '2019-03-11 17:48:39'),
(136, 'DANIELA', 'daniela.bottega@yahoo.com.br', 2, 0, '2019-03-11 17:48:52'),
(137, 'Rosi Terezinha Bystronski Remboski', 'rosi.remboski@gmail.com', 1, 0, '2019-03-13 23:41:22'),
(138, 'THIAGO ANTONIO BARBOZA DE MELLO', 'thmello1@hotmail.com', 1, 0, '2019-03-15 18:39:26'),
(139, 'Paulo Cesar Maciel', 'pcmaciel_@hotmail.com', 1, 0, '2019-03-25 15:03:22'),
(140, 'Cesar Augusto Costa', 'cesar_felice@yahoo.com.br', 1, 0, '2019-03-26 00:08:31'),
(141, 'silmar meira severo', 'silmar.meirasevero@gmail.com', 1, 0, '2019-03-27 18:42:14'),
(142, 'PAULO RICARDO MERTEN', 'prmerten@gmail.com', 1, 0, '2019-03-27 19:12:14'),
(143, 'MARLENE JESUS DE ALMEIDA MACHADO', 'marleneja@terra.com.br', 1, 0, '2019-03-29 18:58:32'),
(144, 'Jair', 'jairsilvars@gmail.com', 1, 0, '2019-04-04 03:52:10'),
(145, 'Bruna Billig Cordeiro', 'bruna-billig@hotmail.com', 1, 0, '2019-04-08 18:39:58'),
(146, 'Mariangela Bueno Gorski', 'marigorski@yahoo.com.br', 1, 0, '2019-04-09 19:34:41'),
(147, 'João Vicente Dantas de Oliveira', 'joaovicente@liess.ind.br', 1, 0, '2019-04-09 19:52:20'),
(148, 'EMANUEL DUARTE ', 'eng.emanuelduarte@gmail.com', 1, 0, '2019-04-16 13:33:26'),
(149, 'ALVARO ARCEMILDO BAMBERG', 'alvaro@bambergadv.com.br', 1, 0, '2019-04-16 17:24:44'),
(150, 'João Vicente Dantas de Oliveira', 'joaovicente65@gmail.com', 1, 0, '2019-04-22 12:42:27'),
(151, 'João Cesar Faria marques', 'Joaocesar@tj.rs.gov.br', 1, 0, '2019-04-28 02:57:59'),
(152, 'João Cesar Faria marques', 'Joaocesar@tj.rs.gov.br', 1, 0, '2019-04-28 02:58:00'),
(153, 'João Cesar Faria marques', 'Joaocesar@tj.rs.gov.br', 1, 0, '2019-04-28 03:01:17'),
(154, 'Marcelo Bonat Agrello', 'marceloagrello@gmail.com', 1, 0, '2019-04-29 03:10:06'),
(155, 'maria augusta mattoso pereira', 'mattosopereira@gmail.com', 1, 0, '2019-04-30 19:37:55'),
(156, 'SIRLEI TERESINHA HENRICH ', 'sirleihp@hotmail.com', 1, 0, '2019-05-02 11:28:40'),
(157, 'Maria cristina', 'mariacristinalves@gmail.com', 2, 0, '2019-05-05 15:28:37'),
(158, 'Marcia Ortiz', 'marcia.ortiz@yahoo.com.br', 1, 0, '2019-05-05 22:06:10'),
(159, 'Larissa Meireles dos Santos ', 'larissa.meireles97@gmail.com', 1, 0, '2019-05-09 17:50:08'),
(160, 'Luis Carlos Hunhoff', 'luiscarloshunhoff@gmail.com', 1, 0, '2019-05-09 18:58:16'),
(161, 'Gilberto Bonato', 'betobobato@ymail.com', 1, 0, '2019-05-15 13:52:18'),
(162, 'Marcos', 'mkominkiewicz@hotmail.com', 1, 0, '2019-05-23 01:19:56'),
(163, 'João Vicente Dantas de Oliveira', 'joaovicente65@gmail.com', 1, 0, '2019-05-24 16:31:06'),
(164, 'Mario Paz', 'paz-mario@hotmail.com', 1, 0, '2019-05-29 14:27:38'),
(165, 'Mario Paz', 'paz-mario@hotmail.com', 1, 0, '2019-05-29 14:44:36'),
(166, 'João Vicente Dantas de Oliveira', 'joaovicente65@gmail.com', 1, 0, '2019-05-31 11:02:06'),
(167, 'Dulcinéia Mainardi Rosentalski', 'dulci_rosen@hotmail.com', 1, 0, '2019-06-04 14:14:13'),
(168, 'pedro cesar franco', 'pedrofranco248@gmail.com', 1, 0, '2019-06-06 18:00:30'),
(169, 'Vitor harras', 'vitorhenriqueharras@gmail.com', 1, 0, '2019-06-17 11:48:09'),
(170, 'Tânia Lourdes Smiderle ', 'taniasmiderle@yahoo.com.br', 1, 0, '2019-06-17 15:19:25'),
(171, 'Luciano', 'luciano_@gmail.com', 2, 0, '2019-06-28 20:11:50'),
(172, 'Luciano', 'lucianowinter700@gmail.com', 2, 0, '2019-06-28 20:12:16'),
(173, 'Luciano', 'lucianowinter700@gmail.com', 2, 0, '2019-06-28 20:12:29'),
(174, 'Mariele de Oliveira Lima Antunes', 'mariele@young.adv.br', 1, 0, '2019-07-02 17:36:19'),
(175, 'diulian ', 'diuliandesouza@gmail.com', 1, 0, '2019-07-03 10:59:48'),
(176, 'MYLLA CHRISTIE ALVES DA SILVA', 'myllachristiealves@gmail.com', 1, 0, '2019-07-08 19:40:44'),
(177, 'João Marcelo Martins Nunes', 'joaomarcelo5@yahoo.com.br', 1, 0, '2019-07-09 00:34:02'),
(178, 'isabel', 'isabelcruz@tj.rs.gov.br', 1, 0, '2019-07-09 19:14:05'),
(179, 'Fabricio Renato de Barcelos', 'fabricio0905@gmail.com', 1, 0, '2019-07-16 14:38:58'),
(180, 'Rosecler Pereira da Silva', 'roseclersilva12@gmail.com', 1, 0, '2019-07-17 14:20:29'),
(181, 'Luciano de Athayde Karasek', 'l.a.karasek@gmail.com', 1, 0, '2019-07-17 14:20:51'),
(182, 'Elton Souza dos Santos', 'eltonsantos@correios.com.br', 1, 0, '2019-07-18 17:02:04'),
(183, 'Elton Souza dos Santos', 'eltonsantos@correios.com.br', 1, 0, '2019-07-18 17:02:04'),
(184, 'Elton Souza dos Santos', 'eltonsantos@correios.com.br', 1, 0, '2019-07-18 17:02:04'),
(185, 'Am Maria Beltrame ', 'anamariasilvabeltrame@gmail.com', 1, 0, '2019-07-19 12:20:38'),
(186, 'eric robert schinkoeth', 'eric1801@gmail.com', 1, 0, '2019-07-28 20:25:49'),
(187, 'Faraday de deus', 'Gente@unimarlitoral.com', 1, 0, '2019-08-04 23:56:18'),
(188, 'Letícia de Mello', 'lehmello@bol.com.br', 1, 0, '2019-08-07 14:06:29'),
(189, 'Hugo Lobo', 'bike_hugo@hotmail.com', 1, 0, '2019-08-09 18:59:01'),
(190, 'novoTeste', 'mvzdeveloper@gmail.com', 1, 1, '2019-11-22 21:01:56');

-- --------------------------------------------------------

--
-- Estrutura da tabela `node_categoria`
--

DROP TABLE IF EXISTS `node_categoria`;
CREATE TABLE IF NOT EXISTS `node_categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `node_categoria`
--

INSERT INTO `node_categoria` (`id`, `nome`, `deletado`, `data_cadastro`) VALUES
(1, 'Blog', 0, '2018-03-09 20:07:42'),
(2, 'Notícias', 0, '2018-03-09 20:07:55'),
(3, 'Legislação', 0, '2018-04-05 11:46:37'),
(4, 'Informativo', 0, '2018-04-19 17:36:46'),
(5, 'Informes', 0, '2018-05-07 14:02:15');

-- --------------------------------------------------------

--
-- Estrutura da tabela `node_post`
--

DROP TABLE IF EXISTS `node_post`;
CREATE TABLE IF NOT EXISTS `node_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `escritor` varchar(150) NOT NULL,
  `data_post` datetime NOT NULL,
  `conteudo` text NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0=Publicado /1=rascunho',
  `arquivo` varchar(250) DEFAULT NULL COMMENT 'arquivo = imagem',
  `data_post_alteracao` datetime NOT NULL,
  `link` varchar(250) NOT NULL,
  `deletado` tinyint(4) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `node_post`
--

INSERT INTO `node_post` (`id`, `escritor`, `data_post`, `conteudo`, `titulo`, `status`, `arquivo`, `data_post_alteracao`, `link`, `deletado`, `data_cadastro`) VALUES
(1, 'Alex', '2018-03-11 00:00:00', '<div style=\"font-family: \'effra\', Verdana, Geneva, Tahoma, sans-serif;\"><h5 style=\"text-align: center;\"><strong>RESPONSABILIDADE CIVIL – AÇÕES CONTRA PLANOS DE SAÚDE</strong></h5>\n\n<div class=\"row\"><div class=\"col s12 lx10 offset-lx1\"><img src=\"/assets/imgs/blog/imagem_01.jpg\" style=\"\n    max-width: 100%;\n\"></div></div>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Com a grande expansão dos planos particulares de saúde, muitos clientes perguntam com frequência <strong style=\"color: #532501;\">como agir no caso de necessitar de um serviço contratado pelo plano e ver negado o atendimento por parte deste</strong>. A questão possui vários desdobramentos técnicos e que devem ser encaminhados por advogado de sua confiança, mas em linhas gerais,&nbsp; acaba resultando numa ação judicial na esfera cível com pedido liminar, para obter o amparo que foi negado pelo agente contratado, no caso o plano de saúde.</p>\n<p style=\"text-align: justify;\">&nbsp;</p>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Em geral, são processos relativamente no que se refere ao atendimento do procedimento urgente. Isso se deve ao fato de que, geralmente, o advogado formula um pedido de tutela antecipada (“liminar”). Mas se você está se perguntando o que é uma liminar, sintetizarei para você: uma liminar é uma <strong style=\"color: #532501;\">decisão de urgência</strong> concedida pelo Poder Judiciário desde que preenchidos certos requisitos legais. Tais pedidos são necessários pelo caráter iminente&nbsp; da questão que, quase sempre, envolve um risco a saúde do interessado. <strong style=\"color: #532501;\">Se a questão for muito urgente, pode sair em questão de horas, ou no mesmo dia da distribuição do processo.</strong> Nos casos não tão urgentes, geralmente sai em 4 ou 5 dias.</p>\n<p style=\"text-align: justify;\">&nbsp;</p>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Em uma pesquisa sobre os principais temas ou dúvidas das pessoas afetadas por alguma negativa de plano de saúde estão:</p>\n<ul style=\"\n    padding: 0 0 0 40px;\n\"><li style=\"list-style: disc;\">O plano negou minha cirurgia;</li>\n    <li style=\"list-style: disc;\">Plano de saúde não autoriza cirurgia, o que fazer?</li>\n    <li style=\"list-style: disc;\">Plano de saúde não cobre parto, o que fazer?</li>\n    <li style=\"list-style: disc;\">O plano de saúde negou um procedimento;</li>\n    <li style=\"list-style: disc;\">Plano de saúde nega exame;</li>\n    <li style=\"list-style: disc;\">Plano de saúde nega atendimento;</li>\n    <li style=\"list-style: disc;\">Plano de saúde nega Home care.</li>\n</ul>\n<p style=\"text-align: justify; text-indent: 35.4pt;\">Normalmente as ações se referem a negação, por parte do plano de saúde, de diversos procedimentos, próteses, órteses, exames, materiais cirúrgicos, internações hospitalares e/ou reajustes abusivos de mensalidade. Em menor quantidade, há as ações envolvendo o cancelamento inesperado da apólice, a expulsão de idosos do plano, o descredenciamento de hospitais, entre outras. Para causas mais simples nesta área, é possível até mesmo valer-se do Juizado Especial Cível para processar o plano de saúde.</p>\n<p style=\"text-align: justify; text-indent: 35.4pt;\">&nbsp;</p><p style=\"text-align: justify; text-indent: 35.4pt;\">Algumas dúvidas muito frequentes dos cidadãos são:</p>\n<ul style=\"\n    padding: 0 0 0 40px;\n           \">\n    <li style=\"list-style: disc;\">Posso processar o meu plano de saúde?</li>\n    <li style=\"list-style: disc;\">Qual o risco de processar meu plano de saúde?</li>\n    <li style=\"list-style: disc;\">Posso contratar um advogado para processar meu plano de saúde?</li>\n</ul>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Além das dúvidas supracitadas, outro temor muito comum do cidadão que se vê na necessidade de processar o seu plano de saúde é se, em caso de promover uma demanda judicial contra o plano de saúde, este pode promover retaliações. Neste caso devemos ser claros:&nbsp; <strong style=\"color: #532501;\">não é necessário temer retaliações.</strong> <u>O acesso ao Poder Judiciário é um direito constitucional</u>. Assim, caso isso ocorra, a questão deverá ser objeto de ação na Justiça.</p>\n<p style=\"text-align: justify;\">&nbsp;</p><div class=\"col s10 offset-s1 m5 l4\" style=\"float:left\"><img src=\"/assets/imgs/blog/imagem_02.jpg\" style=\"\n    max-width: 100%;\n    height: auto;\n\"></div><p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Infelizmente, tais empresas acabam negando procedimentos caros no momento em que o consumidor mais precisa. Mas <strong style=\"color: #532501;\">deve-se ficar atento:</strong> mesmo que o plano de saúde alegue que não há o direito ao procedimento indicado pelo médico, ainda assim deve-se mover um processo contra o plano.&nbsp; Note-se que, ainda que o plano de saúde tenha negado a cobertura com base no contrato, é direito do consumidor questionar a validade da negativa na Justiça. <u>É comum que os contratos de planos de saúde contenham cláusulas abusivas. Nesse caso, as cláusulas são anuladas e<strong style=\"color: #532501;\"> o procedimento é liberado pelo Poder Judiciário.</strong></u></p>\n<p style=\"text-align: justify;\">&nbsp;</p>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; De outra parte, se o plano ficou caro demais com o passar do tempo, há que se analisar <strong style=\"color: #532501;\">como baixar a mensalidade do plano de saúde</strong>. Hoje em dia é possível revisar os aumentos abusivos das mensalidades dos planos por ação judicial. Podem ser revisadas as mensalidades, também, de planos de saúde chamado&nbsp; “PME – Pequenas e Médias Empresas”, que tenham sido reajustados por alta taxa de sinistralidade. Normalmente são processos céleres, e a revisão pode ser concedida em caráter liminar. <u>Muitas pessoas conseguem, ainda, a devolução dos valores pagos em excesso nos últimos 5 anos.</u></p>\n<p style=\"text-align: justify;\">&nbsp;</p>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Outra pergunta frequente é se o consumidor que realizou um procedimento com médico não credenciado ao plano de saúde e o reembolso foi pequeno, pode&nbsp; pedir na Justiça um valor maior de reembolso.&nbsp; A resposta é sim. Os valores de reembolso pelos planos de saúde costumam ser muito pequenos e, dependendo do caso, a Justiça determina até mesmo o reembolso integral das despesas. Com efeito, se o plano de saúde não quer cobrir, por exemplo a quimioterapia de uso oral; exame PET-CT; home care; material cirúrgico importado; cirurgia de obesidade mórbida; cirurgia plástica reparadora, também posso exigir na Justiça essas coberturas, e <u>as decisões mais recentes determinam que tais tratamentos e procedimentos sejam integralmente cobertos pelos planos de saúde, independente do que esteja previsto no rol da ANS.</u></p>\n<p style=\"text-align: justify;\">&nbsp;</p>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong><u>Outras perguntas muito frequentes: </u></strong></p>\n<p style=\"text-align: justify;\"><strong style=\"color: #532501;\">&nbsp;</strong></p>\n<strong>1) Meu plano de saúde alegou que, como meu contrato é antigo, não há cobertura de “Stent”, o que devo fazer? </strong>\n<div class=\"row\" style=\"margin-top: 1em;margin-bottom: 1em;\">\n    <div class=\"col s1\" style=\"font-weight:bold;text-align:right;\">R:</div>\n<div class=\"col s11\" style=\"text-align: justify;\">Embora o contrato de plano de saúde antigo exclua a cobertura, a Justiça entende em sentido contrário (posicionamento pacífico – Súmula 93), obrigando a cobertura de “Stent cardiológico”. O mesmo se aplica com relação a marca-passo, endopróteses cardíacas, e outros materiais cirúrgicos ligados ao ato cirúrgico, sem caráter estético.</div></div>\n\n<p style=\"text-align: justify;\">&nbsp;</p>\n<strong>2) Trabalho há mais de 10 anos em uma empresa e vou me aposentar. Tenho direito a manter o plano de saúde? </strong>\n<div class=\"row\" style=\"margin-top: 1em;margin-bottom: 1em;\">\n    <div class=\"col s1\" style=\"font-weight:bold;text-align:right;\">R:</div>\n<div class=\"col s11\" style=\"text-align: justify;\">Caso o consumidor tenha laborado há 10 anos ou mais na mesma empresa, já esteja aposentado ou tenha direito a se aposentar, e verificado o desconto, em folha de pagamento, de uma cota-parte para pagamento do plano de saúde, é possível a manutenção do plano por prazo indeterminado para o mesmo e seus dependentes, desde que você assuma o pagamento integral do plano.</div>\n</div>\n<p style=\"text-align: justify;\">&nbsp;</p>\n<strong>3) Fui demitido da empresa em que trabalhava, posso manter o plano de saúde? </strong>\n<div class=\"row\" style=\"margin-top: 1em;margin-bottom: 1em;\">\n    <div class=\"col s1\" style=\"font-weight:bold;text-align:right;\">R:</div>\n<div class=\"col s11\" style=\"text-align: justify;\">Sim, por algum tempo. Em casos de demissão, a lei obriga a manutenção do plano de saúde no prazo mínimo de 6 meses e máximo de 2 anos.</div>\n</div>\n<p style=\"text-align: justify;\"><strong style=\"color: #532501;\">&nbsp;</strong></p>\n<strong>4) Quais são os documentos que eu preciso ter em mãos para iniciar um processo contra o meu plano de saúde? </strong>\n<p style=\"text-align: justify;\"><strong style=\"color: #532501;\">&nbsp;</strong></p>\n<div class=\"row\" style=\"\n    display: flex;\n\"><div class=\"col s8 offset-s2 m4 l3\"><img src=\"/assets/imgs/blog/ebook_v2.jpg\" style=\"\n    max-width: 100%;\n\"></div><div class=\"col s12 m8 l9 valign-wrapper\" style=\"\n\"><div><a class=\"abrir-formulario-ebook\"><p style=\"text-align: justify;\"><span style=\"color: #e8b61d;cursor:pointer;\">CLIQUE AQUI E BAIXE UM E-Book. Preparamos um documento com a lista do que você precisa para isso. </span></p></a>\n<a id=\"btn-gerenciar\" class=\"btn center waves-effect waves-light black-text abrir-formulario-ebook\" style=\"position: relative;/* bottom: 125px; */left: 50%;/* margin-left: -25%; */transform: translate(-50%);margin-top: 40px;color: #000 !important;\">Baixar</a></div></div></div>\n\n\n\n<p style=\"text-align: justify;\">&nbsp;</p>\n<p style=\"text-align: justify;text-indent: 35.4pt;\">Por fim recomendamos que procure se informar com um advogado acerca de detalhes particulares e mais específicos do caso.</p>\n\n<p style=\"margin-left: 35.4pt; text-align: justify;\">&nbsp;</p><p style=\"margin-left: 35.4pt; text-align: justify;\">&nbsp;</p><p style=\"margin-left: 35.4pt; text-align: justify;\">&nbsp;</p>\n<p style=\"margin: 0 35.4pt;text-align: justify;color: #e8b61d;\">Jeverton Alex de Oliveira Lima</p>\n<p style=\"margin: 0 35.4pt;text-align: justify;\">Advogado da Young, Dias, Lauxen e Lima,&nbsp; escritório com sedes em São Leopoldo/RS e Porto Alegre/RS, FONE: (051)30855507.</p>\n<div style=\"clear:both;height:30px;\"></div>\n                \n              \n<div style=\"clear:both;height:30px;\"></div>\n</div>', 'RESPONSABILIDADE CIVIL – AÇÕES CONTRA PLANOS DE SAÚDE', 0, 'imagem_01.jpg', '2018-03-11 00:00:00', 'responsabilidade-civil-acoes-contra-planos-de-saude', 0, '2018-03-21 17:33:20'),
(2, 'Alex', '2018-07-09 00:00:00', '<div style=\"font-family: \'effra\', Verdana, Geneva, Tahoma, sans-serif;\"><h5 style=\"text-align: center;\"><strong>ATENÇÃO – ASSALTOS AOS TRABALHADORES DOS CORREIOS</strong></h5>\n<div class=\"row\"><div class=\"col s12 lx10 offset-lx1\"><img src=\"/assets/imgs/blog/imagem_03.jpg\" style=\"\n    max-width: 100%;\n\"></div></div>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trabalhador dos correios: estas notícias da imagem lhe soam familiar?<br>\nFique atento pois sua segurança deve ser prioridade no seu ambiente de trabalho.<br>\nSeparamos abaixo uma lista de notícias sobre este tipo de incidente.<br>\nSe você está passando por situações assim ou saiba de algum colega, procure a assessoria jurídica para esclarecer as suas dúvidas.</p><br>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Lista de Notícias:</b></p><br><br>\n\n<div class=\"row\" style=\"margin-bottom: 50px;\"><div class=\"col s12 lx10 offset-lx1 center\"><img src=\"/assets/imgs/blog/imagem_04.jpg\" style=\"\n    max-width: 90%; margin: 20px auto;\n\"></div>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Justiça do Trabalho condenou os Correios a pagar indenização de R$ 10 mil a cada trabalhador de Curitiba e Região Metropolitana que estava em agências assaltadas nos últimos cinco anos. A decisão é de...</p>\n<a id=\"btn-noticia-1\" class=\"btn btn-golden waves-effect waves-light black-text center\" style=\"position: relative; left: 50%; transform: translateX(-50%);\">LEIA A MATÉRIA NA ÍNTEGRA</a>\n</div>\n\n\n\n<div class=\"row\" style=\"margin-bottom: 50px;\"><div class=\"col s12 lx10 offset-lx1 center\"><img src=\"/assets/imgs/blog/imagem_05.jpg\" style=\"\n    max-width: 90%; margin: 20px auto;\n\"></div>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Um funcionário da Empresa Brasileira de Correios e Telégrafos (ECT) vai receber R$ 10 mil de indenização por causa dos dois assaltos que ele sofreu no ambiente de trabalho, em Presidente Médici (RO). A decisão foi da 2ª Turma do Tribunal...</p>\n<a id=\"btn-noticia-2\" class=\"btn btn-golden waves-effect waves-light black-text center\" style=\"position: relative; left: 50%; transform: translateX(-50%);\">LEIA A MATÉRIA NA ÍNTEGRA</a>\n</div>\n\n\n\n<div class=\"row\" style=\"margin-bottom: 50px;\"><div class=\"col s12 lx10 offset-lx1 center\"><img src=\"/assets/imgs/blog/imagem_08.jpg\" style=\"\n    max-width: 90%; margin: 20px auto;\n\"></div>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A 2ª Turma do Tribunal Regional do Trabalho da Paraíba (13ª Região) aumentou para R$ 30.888,03 (valores a atualizados) a indenização que a Empresa Brasileira dos Correios e Telégrafos deverá pagar a uma funcionária por danos morais.  A 4ª Vara do Trabalho...</p>\n<a id=\"btn-noticia-3\" class=\"btn btn-golden waves-effect waves-light black-text center\" style=\"position: relative; left: 50%; transform: translateX(-50%);\">LEIA A MATÉRIA NA ÍNTEGRA</a>\n</div>\n\n\n\n<div class=\"row\" style=\"margin-bottom: 50px;\"><div class=\"col s12 lx10 offset-lx1 center\"><img src=\"/assets/imgs/blog/imagem_06.jpg\" style=\"\n    max-width: 90%; margin: 20px auto;\n\"></div>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A juíza Christiane Bimbatti Amorim, do Tribunal Regional do Trabalho da 9ª Região, alega que as agências não estão adotando medidas suficientes para impedir a ação dos ladrões. “O fato de não ter sido adotado medidas suficientes a fim de evitar roubos e, via de consequência, abalo mental dos que lá trabalham já enseja em culpa”...</p>\n<a id=\"btn-noticia-4\" class=\"btn btn-golden waves-effect waves-light black-text center\" style=\"position: relative; left: 50%; transform: translateX(-50%);\">LEIA A MATÉRIA NA ÍNTEGRA</a>\n</div>\n\n\n\n<div class=\"row\" style=\"margin-bottom: 50px;\"><div class=\"col s12 lx10 offset-lx1 center\"><img src=\"/assets/imgs/blog/imagem_07.jpg\" style=\"\n    max-width: 90%; margin: 20px auto;\n\"></div>\n<p style=\"text-align: justify;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mais um trabalhador da Empresa Brasileira de Correios e Telégrafos (ECT) conseguiu na justiça o direito a indenização após ser vítima de assalto na agência em que trabalhava. O caso foi julgado procedente na 2º Vara do Trabalho...</p>\n<a id=\"btn-noticia-5\" class=\"btn btn-golden waves-effect waves-light black-text center\" style=\"position: relative; left: 50%; transform: translateX(-50%);\">LEIA A MATÉRIA NA ÍNTEGRA</a>\n</div>\n\n\n<p style=\"margin-left: 35.4pt; text-align: justify;\">&nbsp;</p><p style=\"margin-left: 35.4pt; text-align: justify;\">&nbsp;</p><p style=\"margin-left: 35.4pt; text-align: justify;\">&nbsp;</p>\n<p style=\"margin: 0 35.4pt;text-align: justify;\">Atenciosamente,</p>\n<p style=\"margin: 0 35.4pt;text-align: justify;color: #e8b61d;\">Equipe YDLL</p>\n<p style=\"margin: 0 35.4pt;text-align: justify;\">Advogado da Young, Dias, Lauxen e Lima,&nbsp; escritório com sedes em São Leopoldo/RS e Porto Alegre/RS, FONE: (051)30855507.</p>\n<div style=\"clear:both;height:30px;\"></div>\n                \n              \n<div style=\"clear:both;height:30px;\"></div>\n</div>', 'ATENÇÃO – ASSALTOS AOS TRABALHADORES DOS CORREIOS', 0, 'imagem_03.jpg', '2018-07-09 00:00:00', 'atencao-asstaltos-aos-trabalhadores-dos-correios', 0, '2018-07-11 18:56:50'),
(3, 'Alex', '2018-08-03 00:00:00', '<div style=\"font-family: \'effra\', Verdana, Geneva, Tahoma, sans-serif;\">\n<h5 style=\"text-align: center;\"><strong>SEMINÁRIO DE ORGANIZAÇÃO SINDICAL DO SINTRAJUFE/RS DIA 18 DE AGOSTO	</strong></h5>\n <div class=\"row\">\n <div class=\"col s12 lx10 offset-lx1\">\n <img src=\"/assets/imgs/blog/imagem_09.jpg\" style=\"\n     max-width: 100%;\n \"></div></div>\n<p class=\"justified\">&nbsp;</p>\n<p class=\"justified\">No dia 18 de Agosto, sábado, Jeverton Lima, advogado, sócio do escritório Young, Dias, Lauxen e Lima Advogados Associados e coordenador da assessoria jurídica do Sintrajufe/RS estará presente no Seminário de Organização Sindical do Sintrajufe/RS que ocorrerá no Salão Multicultural Alê Junqueira, no endereço Rua Marcílio Dias, 660, Bairro Menino Deus em Porto Alegre. O início será às 10 horas.</p>\n<p class=\"justified\">&nbsp;</p>\n<p class=\"justified\">Segundo dados do site do Sintrajufe/RS, o objetivo do seminário é iniciar o debate sobre a unificação da representação das categorias do Judiciário Federal e do Ministério Público da União no Sintrajufe/RS. O evento está aberto à participação dos servidores de ambas as categorias.</p>\n<p class=\"justified\">&nbsp;</p>\n<div class=\"row\"><img src=\"/assets/imgs/blog/imagem_10.jpeg\" style=\"max-width: 100%;\">\n<small>*Imagem retirada do site do Sintrajufe/RS.</small></div>\n<div class=\"row\">\n<p class=\"center\">Confira no <a href=\"https://www.sintrajufe.org.br/ultimas-noticias-detalhe/15846/sintrajufe-rs-promove-dia-18-seminario-de-organizacao-sindical-com-participacao-de-servidores-do-mpu\" target=\"_blank\">site do Sintrajufe/RS</a> a matéria e a programação completa.</p>\n</div>\n</div>', 'SEMINÁRIO DE ORGANIZAÇÃO SINDICAL DO SINTRAJUFE/RS DIA 18 DE AGOSTO', 0, 'imagem_09.jpg', '2018-08-03 00:00:00', 'seminario-de-organizacao-sindical-do-sintrajufe-rs-18-agosto', 0, '2018-08-03 17:26:19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `node_post_categoria`
--

DROP TABLE IF EXISTS `node_post_categoria`;
CREATE TABLE IF NOT EXISTS `node_post_categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_post` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `deletado` tinyint(4) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_post` (`id_post`),
  KEY `id_categoria` (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `node_post_categoria`
--

INSERT INTO `node_post_categoria` (`id`, `id_post`, `id_categoria`, `deletado`, `data_cadastro`) VALUES
(1, 1, 2, 0, '2018-06-04 16:47:15'),
(2, 1, 4, 0, '2018-06-04 16:47:15');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_setor` int(11) NOT NULL COMMENT 'PADRAO: 1 = Adminstrativo, 2 = Financeiro, 3 = T.I',
  `login` varchar(150) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `imagem` varchar(150) NOT NULL DEFAULT '/assets/imgs/user-padrao.jpg',
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `telefone` varchar(150) NOT NULL,
  `nivel` tinyint(1) NOT NULL COMMENT '1 = admin, 2 = gerente, 3 = usuario',
  `cpf` varchar(411) DEFAULT NULL,
  `hash_login` varchar(150) DEFAULT NULL COMMENT 'hash de login, para verificacao mais segura via ajax alterado a cada login',
  `cargo` varchar(45) DEFAULT NULL COMMENT '1 - advogado',
  `oab` varchar(20) DEFAULT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_setor` (`id_setor`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `id_setor`, `login`, `senha`, `imagem`, `nome`, `email`, `telefone`, `nivel`, `cpf`, `hash_login`, `cargo`, `oab`, `deletado`, `data_cadastro`) VALUES
(1, 0, 'admin', '69bb1e0d2a703a8b614bcb4af108f77a', '/assets/imgs/user-padrao.jpg', 'Administrador', 'contato@young.adv.br', '(42) 34234-234', 1, NULL, '033ba475034339f1396f8cdfdc947193', '0', NULL, 0, '2017-11-30 18:49:14'),
(2, 3, 'pablo', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Pablo', 'pablo@young.adv.br', '(12) 41241-2412', 3, '', 'd3d4b649ea9ac587edd74d887102397b', '1', '', 0, '2017-11-30 18:54:31'),
(3, 3, 'taina', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Tainã', 'cleberson@cleber.com.br', '66 666 6666 99', 3, NULL, 'b956efc18c7f722aaa03c418d9ebeaef', '1', NULL, 0, '2017-11-30 19:52:24'),
(4, 2, 'elisandra', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Elisandra', 'teste@teste.com', '342423423', 3, NULL, '756aeb49fc6c6a20d1d447396c0ca6dd', '1', NULL, 0, '2017-12-06 16:39:39'),
(5, 1, 'arthur', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Arthur Orlando Dias Filho', 'geren@geren.com', '12312341', 3, NULL, '', NULL, '040806', 0, '2017-12-06 17:57:00'),
(6, 3, 'mariele', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Mariele', 'marquito@maquito.com', '1251251234124', 2, NULL, 'b7af02ab35ee458e7e25724d68f96fb1', '1', NULL, 0, '2018-01-17 11:38:04'),
(7, 3, 'marilia', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Marília', 'marquito@maquito.com', '1251251234124', 3, NULL, NULL, NULL, NULL, 0, '2018-01-17 11:38:19'),
(9, 2, 'fabio', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Fábio', 'teste@teste.com', '23423423', 2, NULL, '0f11340a9d53bafd0c54e40822a0e057', '1', NULL, 0, '2018-01-18 13:27:31'),
(10, 4, 'aliny', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Aliny Marin', 'aliny@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 22:56:21'),
(11, 4, 'ana', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Ana Cristina Heerbach', 'ana@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 22:56:56'),
(12, 4, 'anderson', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Anderson Nunes da Silva', 'anderson@gmail.com', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 22:57:44'),
(13, 4, 'ariane', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Ariane Gabriella Rocha', 'ariane@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 22:58:15'),
(14, 4, 'caroline', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Caroline da Cássia Cadora', 'caroline@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 22:58:53'),
(15, 4, 'daniela', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Daniela Santos de Souza', 'daniela@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 22:59:29'),
(16, 4, 'diana', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Diana Tem Caten Butzen', 'diana@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:00:09'),
(17, 4, 'dyandra', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Dyandra Sulzback Brasil', 'dyandra@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:00:59'),
(18, 4, 'eduarda', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Eduarda Gonçalves Berbigier', 'eduarda@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:01:33'),
(19, 4, 'francisco', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Francisco Alf de Carvalho', 'francisco@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:02:07'),
(20, 4, 'gabriela', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Gabriela Pereira M. Correa', 'gabriela@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:02:38'),
(21, 4, 'heleonora', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Heleonora Desdema Busanello', 'heleonora@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:03:13'),
(22, 4, 'iolanda', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Iolanda Navegantes Santos Prates', 'iolanda@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:03:41'),
(23, 4, 'jessica', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Jéssica Dornelles Dymkovski', 'jessica@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:04:11'),
(24, 4, 'karoline', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Karoline Gonçalves Bruno', 'karoline@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:04:45'),
(25, 4, 'leticia', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Letícia Kaiane de Paula Klipel', 'leticia@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:05:28'),
(26, 4, 'lilian', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Lilian da Silva Rangel', 'lilian@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:06:06'),
(27, 4, 'luiza', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Luiza da Mota Borges', 'luiza@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:06:32'),
(28, 4, 'maicon', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Maicon Roberto Rivas', 'maicon@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:07:07'),
(29, 4, 'pamela', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Pamela da Silva Ribeiro', 'pamela@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:07:34'),
(30, 4, 'rodrigo', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Rodrigo Spigolon Montano', 'rodrigo@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:07:57'),
(31, 4, 'walter', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Walter Fabiano Barbosa Neto', 'walter@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:08:27'),
(32, 5, 'ariel', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Ariel Giordano Vivan', 'ariel@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:15:45'),
(33, 5, 'jaqueline', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Jaqueline Matiazzo de Carvalho', 'jaqueline@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:16:17'),
(34, 5, 'juliana', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Juliana Ribeiro Dal Bosco', 'juliana@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:16:52'),
(35, 5, 'katia', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Katia Oliveira de Avila', 'katia@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:17:16'),
(36, 5, 'mauricio', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Maurício Vieira da Silva', 'mauricio@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:17:43'),
(37, 5, 'ohana', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Ohana Cabelleira Lopes', 'ohana@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:18:16'),
(38, 5, 'rayssa', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Rayssa Gonçalves de Sant Helena', 'rayssa@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:18:42'),
(39, 5, 'vera', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Vera Lucia Correa Oliveira', 'vera@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '0', NULL, 0, '2019-02-27 23:19:10'),
(40, 6, 'gabriel', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Gabriel Lemos Weber', 'gabriel@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:19:38'),
(41, 6, 'ihana', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Ihana dos Santos Guerra', 'ihana@teste.com.br', '(51) 99999-9999', 3, NULL, '7e4cef100971839538e61088563b0450', '1', '', 0, '2019-02-27 23:20:03'),
(42, 6, 'luciana', '745536f0652656dae49565e5fa26152b', '/assets/imgs/user-padrao.jpg', 'Luciana Ruttscheidt da Cunha', 'luciana@teste.com.br', '(51) 99999-9999', 3, NULL, NULL, '1', '', 0, '2019-02-27 23:20:28');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
