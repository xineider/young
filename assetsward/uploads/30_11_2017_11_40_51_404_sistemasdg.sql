-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 28-Nov-2017 às 15:54
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
-- Database: `sistemasdg`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `rg` varchar(25) DEFAULT '-',
  `cpf` varchar(25) DEFAULT '-',
  `cep` varchar(25) NOT NULL,
  `uf` varchar(5) NOT NULL,
  `cidade` varchar(150) NOT NULL,
  `rua` varchar(150) NOT NULL,
  `numero` varchar(25) NOT NULL,
  `tel` varchar(25) NOT NULL,
  `cnpj` varchar(25) DEFAULT '-',
  `tipo` tinyint(2) NOT NULL,
  `email` varchar(50) NOT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `rg`, `cpf`, `cep`, `uf`, `cidade`, `rua`, `numero`, `tel`, `cnpj`, `tipo`, `email`, `deletado`, `data_cadastro`) VALUES
(1, 'Teste', 'teste', 'teste', 'teste', '', 'teste', 'teste', 'teste', 'teste', 'teste', 1, 'teste', 1, '2017-10-11 13:17:16'),
(2, 'Joao da Marcenaria  2', '-', '-', '13400-520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(19) 84954-6549', '65.164.161/6561-61', 2, 'l@l.com', 0, '2017-10-11 16:21:22'),
(3, 'Cliente Master Blaster de Testes', '-', '-', '93032-010', 'RS', 'São Leopoldo', 'Rua Alberto Scherer', '6969', '(51) 90904-8787', '82.476.902/3769-02', 2, 'seinemondeeuto@gmail.com', 1, '2017-10-19 15:10:42'),
(4, 'Cliente Comprador Compulsivo', '09.682.094-7', '827.069.823-74', '93032-010', 'RS', 'São Leopoldo', 'Rua Alberto Scherer', '777', '(51) 66666-6666', '37.949.243/0896-08', 2, 'passaumdolar@gmail.com', 1, '2017-10-19 15:11:47');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contas`
--

DROP TABLE IF EXISTS `contas`;
CREATE TABLE IF NOT EXISTS `contas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT '0',
  `id_banco` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `id_conta` int(11) DEFAULT '0',
  `id_empresa_emprestimo` int(11) NOT NULL DEFAULT '0',
  `id_propfun` int(11) DEFAULT '0',
  `descricao` varchar(150) NOT NULL DEFAULT '-',
  `valor` decimal(10,2) NOT NULL,
  `notas_cupons` varchar(150) NOT NULL DEFAULT '0',
  `modo` tinyint(1) NOT NULL COMMENT '1 = entrada, 2 = saída, 3 = empréstimo, 4 = proprietario, 5 = funcionario',
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_banco` (`id_banco`),
  KEY `id_tipo` (`id_tipo`),
  KEY `id_empresa_emprestimo` (`id_conta`),
  KEY `id_empresa_emprestimo_2` (`id_empresa_emprestimo`),
  KEY `id_propfun` (`id_propfun`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `contas`
--

INSERT INTO `contas` (`id`, `id_empresa`, `id_cliente`, `id_banco`, `id_tipo`, `id_conta`, `id_empresa_emprestimo`, `id_propfun`, `descricao`, `valor`, `notas_cupons`, `modo`, `deletado`, `data_cadastro`) VALUES
(35, 107, 2, 0, 2, 0, 0, 0, 'compra de bala', '10.00', '0', 2, 0, '2017-10-24 13:48:41'),
(33, 89, 0, 0, 0, 34, 106, 0, 'Emprestou para outra empresa', '1029031.00', '0', 2, 1, '2017-10-19 15:46:17'),
(34, 106, 3, 0, 1, 33, 89, 0, 'vendas licitas (wink)', '1029031.00', '0', 3, 1, '2017-10-19 15:46:17'),
(32, 106, 3, 3, 2, 0, 0, 0, 'qualquer coisa porque me obrigaram', '40857063.00', '0', 4, 1, '2017-10-19 15:35:11'),
(31, 106, 4, 3, 2, 30, 89, 0, 'É muitinheiro', '92348.00', '0', 3, 1, '2017-10-19 15:30:50'),
(29, 89, 2, 0, 1, 0, 0, 0, 'e', '12.00', '0', 1, 1, '2017-10-19 13:00:03'),
(30, 89, 0, 1, 0, 31, 106, 0, 'Emprestou para outra empresa', '92348.00', '0', 2, 1, '2017-10-19 15:30:50'),
(28, 89, 2, 0, 1, 27, 102, 0, 'gertgtrgrt', '123.00', '0', 3, 1, '2017-10-19 12:52:28'),
(27, 102, 0, 0, 0, 28, 89, 0, 'Emprestou para outra empresa', '123.00', '0', 2, 1, '2017-10-19 12:52:28'),
(36, 107, 2, 7, 3, 0, 0, 0, 'yrdy', '12.00', '0', 2, 0, '2017-11-10 13:13:38'),
(37, 107, 3, 0, 3, 0, 0, 0, 'herh ', '150.00', '0', 1, 0, '2017-11-13 19:32:25'),
(38, 107, 0, 0, 2, 0, 0, 0, 'teste', '20.00', '0', 1, 0, '2017-11-16 12:35:28'),
(39, 107, 0, 7, 2, 0, 0, 0, 'teste 44', '12.00', '442312', 2, 0, '2017-11-16 13:05:13'),
(46, 107, 0, 0, 3, 0, 0, 0, 'grthrt', '120.00', '4343465346', 2, 0, '2017-11-17 12:50:51'),
(47, 107, 0, 7, 3, 0, 0, 20, 'tretert', '15000.00', '12312545', 5, 0, '2017-11-17 16:18:34'),
(48, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 2, 0, '2017-11-24 17:47:59'),
(45, 107, 3, 0, 3, 0, 0, 0, 'tete', '52.00', '0', 2, 0, '2017-11-16 16:18:00'),
(49, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 2, 0, '2017-11-24 17:48:06'),
(50, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 2, 0, '2017-11-27 10:45:50'),
(51, 107, 2, 0, 2, 0, 0, 0, 'dwqdqwdqw', '1244.00', '0', 2, 0, '2017-11-27 10:48:46'),
(52, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 2, 0, '2017-11-27 10:50:36'),
(53, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 2, 0, '2017-11-27 10:50:38'),
(54, 107, 2, 0, 2, 0, 0, 0, 'dwqdqwdqw', '1244.00', '0', 1, 0, '2017-11-27 11:04:21'),
(55, 107, 2, 0, 1, 0, 0, 0, 'fwefwefwe', '12.00', '0', 2, 0, '2017-11-27 11:05:47'),
(56, 107, 2, 0, 1, 0, 0, 0, 'fwefwefwe', '12.00', '0', 2, 0, '2017-11-27 11:05:50'),
(57, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 1, 0, '2017-11-27 11:05:58'),
(58, 107, 2, 0, 1, 0, 0, 0, 'fwefwefwe', '12.00', '0', 2, 0, '2017-11-27 15:49:24'),
(59, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 1, 0, '2017-11-27 15:50:26'),
(60, 107, 2, 0, 2, 0, 0, 0, 'dwqdqwdqw', '1244.00', '0', 1, 0, '2017-11-27 16:07:19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contas_bancos`
--

DROP TABLE IF EXISTS `contas_bancos`;
CREATE TABLE IF NOT EXISTS `contas_bancos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `banco` varchar(50) NOT NULL,
  `agencia` varchar(15) NOT NULL,
  `conta` varchar(15) NOT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `contas_bancos`
--

INSERT INTO `contas_bancos` (`id`, `id_empresa`, `banco`, `agencia`, `conta`, `deletado`, `data_cadastro`) VALUES
(1, 89, 'Santander', '13546384351', '6843523648', 1, '2017-10-17 11:49:21'),
(2, 102, 'teste', '123123124', '124124', 1, '2017-10-17 17:40:41'),
(3, 106, 'Cofrinho', 'Da Dinheiro', '1234567890', 1, '2017-10-19 15:25:35'),
(4, 102, 'teste 2', '123123124', '124124', 1, '2017-10-19 15:28:55'),
(5, 102, 'teste 2 3', '123123124', '124124', 1, '2017-10-19 15:29:00'),
(6, 106, 'teste 2 ew346', '12346', '12412346', 1, '2017-10-19 15:29:08'),
(7, 107, 'teste', '123', '123', 0, '2017-10-24 13:44:02');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contas_pagar`
--

DROP TABLE IF EXISTS `contas_pagar`;
CREATE TABLE IF NOT EXISTS `contas_pagar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT '0',
  `id_banco` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `id_conta` int(11) DEFAULT '0',
  `id_empresa_emprestimo` int(11) NOT NULL DEFAULT '0',
  `id_propfun` int(11) DEFAULT '0',
  `descricao` varchar(150) NOT NULL DEFAULT '-',
  `valor` decimal(10,2) NOT NULL,
  `notas_cupons` varchar(150) NOT NULL DEFAULT '0',
  `vezes` int(11) NOT NULL DEFAULT '0' COMMENT '0 = indeterminado',
  `modo` tinyint(1) NOT NULL COMMENT '1 = entrada, 2 = saída, 3 = empréstimo, 4 = proprietario, 5 = funcionario',
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_banco` (`id_banco`),
  KEY `id_tipo` (`id_tipo`),
  KEY `id_empresa_emprestimo` (`id_conta`),
  KEY `id_empresa_emprestimo_2` (`id_empresa_emprestimo`),
  KEY `id_propfun` (`id_propfun`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `contas_pagar`
--

INSERT INTO `contas_pagar` (`id`, `id_empresa`, `id_cliente`, `id_banco`, `id_tipo`, `id_conta`, `id_empresa_emprestimo`, `id_propfun`, `descricao`, `valor`, `notas_cupons`, `vezes`, `modo`, `deletado`, `data_cadastro`) VALUES
(42, 107, 3, 0, 3, 0, 0, 0, 'tete', '52.00', '0', 0, 6, 1, '2017-11-16 16:17:57'),
(41, 107, 3, 0, 3, 0, 0, 0, 'teste', '1244.00', '0', 0, 6, 1, '2017-11-16 15:30:37'),
(40, 107, 3, 0, 3, 0, 0, 0, 'Teste', '120.00', '0', 0, 6, 1, '2017-11-16 15:08:29'),
(43, 107, 2, 0, 1, 0, 0, 0, 'fwefwefwe', '12.00', '0', 2, 6, 0, '2017-11-27 10:57:59');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contas_receber`
--

DROP TABLE IF EXISTS `contas_receber`;
CREATE TABLE IF NOT EXISTS `contas_receber` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT '0',
  `id_banco` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `id_conta` int(11) DEFAULT '0',
  `id_empresa_emprestimo` int(11) NOT NULL DEFAULT '0',
  `id_propfun` int(11) DEFAULT '0',
  `descricao` varchar(150) NOT NULL DEFAULT '-',
  `valor` decimal(10,2) NOT NULL,
  `notas_cupons` varchar(150) NOT NULL DEFAULT '0',
  `vezes` int(11) DEFAULT '0' COMMENT '0 = indeterminado',
  `modo` tinyint(1) NOT NULL COMMENT '1 = entrada, 2 = saída, 3 = empréstimo, 4 = proprietario, 5 = funcionario',
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_banco` (`id_banco`),
  KEY `id_tipo` (`id_tipo`),
  KEY `id_empresa_emprestimo` (`id_conta`),
  KEY `id_empresa_emprestimo_2` (`id_empresa_emprestimo`),
  KEY `id_propfun` (`id_propfun`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `contas_receber`
--

INSERT INTO `contas_receber` (`id`, `id_empresa`, `id_cliente`, `id_banco`, `id_tipo`, `id_conta`, `id_empresa_emprestimo`, `id_propfun`, `descricao`, `valor`, `notas_cupons`, `vezes`, `modo`, `deletado`, `data_cadastro`) VALUES
(42, 107, 3, 0, 3, 0, 0, 0, 'tete', '52.00', '0', 0, 6, 0, '2017-11-16 16:17:57'),
(41, 107, 3, 0, 3, 0, 0, 0, 'teste', '1244.00', '0', 0, 6, 0, '2017-11-16 15:30:37'),
(40, 107, 3, 0, 3, 0, 0, 0, 'Teste', '120.00', '0', 0, 6, 0, '2017-11-16 15:08:29'),
(43, 107, 2, 0, 2, 0, 0, 0, 'dwqdqwdqw', '1244.00', '0', 0, 6, 0, '2017-11-24 12:30:50'),
(44, 107, 2, 0, 2, 0, 0, 0, 'fwefwe', '1233.00', '0', 7, 6, 0, '2017-11-24 13:24:12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contas_tipos`
--

DROP TABLE IF EXISTS `contas_tipos`;
CREATE TABLE IF NOT EXISTS `contas_tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `descricao` text,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `contas_tipos`
--

INSERT INTO `contas_tipos` (`id`, `nome`, `descricao`, `deletado`, `data_cadastro`) VALUES
(1, 'Test', 'asd', 0, '2017-10-16 13:53:12'),
(2, 'teste 23', '123', 0, '2017-10-16 15:31:37'),
(3, 'sei la bla qualquer coisa pru bleh 2', 'voce quebrou meu ovo!', 0, '2017-10-19 15:49:18');

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresas`
--

DROP TABLE IF EXISTS `empresas`;
CREATE TABLE IF NOT EXISTS `empresas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(25) NOT NULL,
  `nome_fantasia` varchar(150) NOT NULL,
  `razao_social` varchar(150) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `uf` varchar(5) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `rua` varchar(150) NOT NULL,
  `numero` varchar(25) NOT NULL,
  `tel` varchar(25) NOT NULL,
  `email` varchar(150) NOT NULL,
  `ramo` varchar(150) NOT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=108 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `empresas`
--

INSERT INTO `empresas` (`id`, `cnpj`, `nome_fantasia`, `razao_social`, `cep`, `uf`, `cidade`, `rua`, `numero`, `tel`, `email`, `ramo`, `deletado`, `data_cadastro`) VALUES
(107, '23.285.285/0001-50', 'Pazze Ligth and Heavy Steel Frame', 'Pazze Estruturas Metálicas EIRELI', '93046-270', 'RS', 'São Leopoldo', 'Avenida Oscar Uebel', '1380', '(51) 30915-494', 'contato@pazzesteelframe.com.br', 'METALURGICA', 0, '2017-10-23 19:30:53'),
(106, '28.037.490/2946-09', 'minha empresa', 'minha empresa realmente real de maneira realista', '93020-390', 'RS', 'São Leopoldo', 'Rua Anchieta', '645', '(51) 96666-969', 'nethervaccuum@gmail.com', 'empresarial', 1, '2017-10-19 15:09:24'),
(105, '', '', '', '', '', '', '', '', '', '', '', 1, '2017-10-19 12:29:28'),
(102, '16.518.432/1684-32', 'teste', 'teste', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(19) 13435-4349', 'l@l.com', 'teste', 1, '2017-10-17 17:17:20'),
(89, '55.684.654/6846-35', 'QUORP', 'QUORP', '93020-190', 'RS', 'São Leopoldo', 'Av. Unisinos', '190', '(19) 98291-6539', 'leonardopeixe42@gmail.com', 'Aceleradora', 1, '2017-10-09 19:50:34'),
(100, '16.518.432/1684-32', 'teste', 'teste', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(19) 13435-4349', 'l@l.com', 'teste', 1, '2017-10-17 17:16:42'),
(101, '16.518.432/1684-32', 'teste', 'teste', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(19) 13435-4349', 'l@l.com', 'teste', 1, '2017-10-17 17:17:06');

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
CREATE TABLE IF NOT EXISTS `funcionarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `rg` varchar(25) NOT NULL,
  `cpf` varchar(25) NOT NULL,
  `cep` varchar(25) NOT NULL,
  `uf` varchar(5) NOT NULL,
  `cidade` varchar(150) NOT NULL,
  `rua` varchar(150) NOT NULL,
  `numero` varchar(25) NOT NULL,
  `tel` varchar(25) NOT NULL,
  `funcao` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tipo` tinyint(2) NOT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `funcionarios`
--

INSERT INTO `funcionarios` (`id`, `id_empresa`, `nome`, `rg`, `cpf`, `cep`, `uf`, `cidade`, `rua`, `numero`, `tel`, `funcao`, `email`, `tipo`, `deletado`, `data_cadastro`) VALUES
(11, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 0, '2017-10-09 19:50:34'),
(10, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 1, '2017-10-09 19:50:34'),
(9, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 1, '2017-10-09 19:50:34'),
(12, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 1, '2017-10-09 19:50:34'),
(13, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 1, '2017-10-09 19:50:34'),
(14, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 1, '2017-10-09 19:50:34'),
(15, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 1, '2017-10-09 19:50:34'),
(16, 89, 'Leonardo Peixe', '68.743.168-4', '454.250.078-09', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '523', '(19) 34336-050', 1, 'leonardopeixe42@gmail.com', 1, 1, '2017-10-09 19:50:34'),
(17, 102, 'teste', '16.843.168-4', '196.135.413-84', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(19) 68351-6843', 1, 'teste@.comfrwef', 1, 0, '2017-10-17 17:17:20'),
(18, 106, 'Zé do Xerox da Oi', '20.384.926-9', '908.237.460-29', '93020-390', 'RS', 'São Leopoldo', 'Rua Anchieta', '666069', '(51) 90666-1234', 1, 'pamonhaumreal@gmail.com', 1, 0, '2017-10-19 15:09:24'),
(19, 107, 'Teste', '1111111111', '111.111.111-11', '13400-520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(12) 34535-1385', 1, 'teste@teste.com', 1, 0, '2017-10-23 19:30:53'),
(20, 107, 'Adriano Eduardo Rubbo', '9102307965', '017.894.760-11', '93115-200', 'RS', 'São Leopoldo', 'Rua Quinze de Novembro', '395', '(51) 91658-272', 1, 'rubbo.adriano.e@gmail.com', 1, 0, '2017-10-23 19:30:53'),
(21, 107, 't2', '1385413513584', '45.641.354-13', '13400-520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(16) 14351-3541', 1, 'o@o.com', 1, 0, '2017-10-25 16:17:08');

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios_funcoes`
--

DROP TABLE IF EXISTS `funcionarios_funcoes`;
CREATE TABLE IF NOT EXISTS `funcionarios_funcoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `funcionarios_funcoes`
--

INSERT INTO `funcionarios_funcoes` (`id`, `nome`, `deletado`) VALUES
(1, 'Montador', 0),
(2, 'teste', 1),
(3, 'teste', 1),
(4, 'Teste2', 1),
(5, 'gerger', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios_salarios`
--

DROP TABLE IF EXISTS `funcionarios_salarios`;
CREATE TABLE IF NOT EXISTS `funcionarios_salarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_conta_tipo` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_conta_tipo` (`id_conta_tipo`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios_salarios_valores`
--

DROP TABLE IF EXISTS `funcionarios_salarios_valores`;
CREATE TABLE IF NOT EXISTS `funcionarios_salarios_valores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_funcionarios_salarios` int(11) NOT NULL,
  `porcentagem` decimal(10,2) NOT NULL,
  `ordem` int(11) NOT NULL,
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_funcionarios_salarios` (`id_funcionarios_salarios`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios_tipos`
--

DROP TABLE IF EXISTS `funcionarios_tipos`;
CREATE TABLE IF NOT EXISTS `funcionarios_tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `descricao` text,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `funcionarios_tipos`
--

INSERT INTO `funcionarios_tipos` (`id`, `nome`, `descricao`, `deletado`, `data_cadastro`) VALUES
(1, 'Fixo', NULL, 0, '2017-10-16 14:05:47'),
(2, 'teste', 'ttte', 1, '2017-10-16 17:50:28'),
(3, 'avulso 2', 'aham', 0, '2017-10-19 15:50:01');

-- --------------------------------------------------------

--
-- Estrutura da tabela `proprietarios`
--

DROP TABLE IF EXISTS `proprietarios`;
CREATE TABLE IF NOT EXISTS `proprietarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `rg` varchar(25) NOT NULL,
  `cpf` varchar(25) NOT NULL,
  `cep` varchar(25) NOT NULL,
  `uf` varchar(5) NOT NULL,
  `cidade` varchar(150) NOT NULL,
  `rua` varchar(150) NOT NULL,
  `numero` varchar(25) NOT NULL,
  `tel` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `deletado` tinyint(1) NOT NULL DEFAULT '0',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `proprietarios`
--

INSERT INTO `proprietarios` (`id`, `id_empresa`, `nome`, `rg`, `cpf`, `cep`, `uf`, `cidade`, `rua`, `numero`, `tel`, `email`, `deletado`, `data_cadastro`) VALUES
(52, 88, 'Mateus Barcellos', '16.451.321-6', '454.684.646-84', '93020-190', 'RS', 'São Leopoldo', 'Av. Unisinos', '190', '(19) 18468-4654', 'contato@quorp.com.br', 0, '2017-10-09 19:47:42'),
(53, 89, 'Mateus Barcellos', '16.451.321-6', '454.684.646-84', '93020-190', 'RS', 'São Leopoldo', 'Av. Unisinos', '190', '(19) 18468-4654', 'contato@quorp.com.br', 0, '2017-10-09 19:50:34'),
(54, 100, 'teste', '16.843.516-8', '168.435.168-43', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(32) 13843-5138', '313@351.com', 0, '2017-10-17 17:16:42'),
(55, 101, 'teste', '16.843.516-8', '168.435.168-43', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(32) 13843-5138', '313@351.com', 0, '2017-10-17 17:17:06'),
(56, 102, 'teste', '16.843.516-8', '168.435.168-43', '13400520', 'SP', 'Piracicaba', 'Rua Floriano Peixoto', '123', '(32) 13843-5138', '313@351.com', 0, '2017-10-17 17:17:20'),
(57, 103, '', '', '', '', '', '', '', '', '', '', 0, '2017-10-19 11:55:57'),
(58, 104, '', '', '', '', '', '', '', '', '', '', 0, '2017-10-19 12:11:50'),
(59, 105, '', '', '', '', '', '', '', '', '', '', 0, '2017-10-19 12:29:28'),
(60, 106, 'Gran Proprietário Master Flash', '38.492.470-6', '983.268.347-26', '93020-390', 'RS', 'São Leopoldo', 'Rua Anchieta', '111', '(51) 96969-0666', 'masquesacoessamerda@gmail.com', 0, '2017-10-19 15:09:24'),
(61, 107, 'Paulo Roberto Pazze', '506296385', '951.632.390-15', '93046-270', 'RS', 'São Leopoldo', 'Avenida Oscar Uebel', '1380', '(51) 99827-1805', 'pazze.eng@gmail.com', 0, '2017-10-23 19:30:53');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `login` varchar(150) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `tipo` tinyint(1) NOT NULL COMMENT '1 = administrador, 2 = proprietario, 3 = usuario comum',
  `data_cadastro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_empresa` (`id_empresa`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `id_empresa`, `login`, `senha`, `tipo`, `data_cadastro`) VALUES
(1, 0, 'admin', '745536f0652656dae49565e5fa26152b', 1, '2017-09-29 13:53:09');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
