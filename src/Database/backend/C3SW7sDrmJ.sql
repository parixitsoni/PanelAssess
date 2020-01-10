-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2020 at 02:54 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `panelassess`
--

-- --------------------------------------------------------

--
-- Table structure for table `semester`
--

CREATE TABLE `semester` (
  `sem_name` varchar(255) NOT NULL,
  `t1` varchar(255) NOT NULL,
  `t2` varchar(255) NOT NULL,
  `t3` varchar(255) NOT NULL,
  `t4` varchar(255) NOT NULL,
  `t5` varchar(255) NOT NULL,
  `t6` varchar(255) NOT NULL,
  `t7` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `semester`
--

INSERT INTO `semester` (`sem_name`, `t1`, `t2`, `t3`, `t4`, `t5`, `t6`, `t7`) VALUES
('MCA1', 'Dr. Avinash Panwar', 'Mrs. Sheela Bhat', 'Dr. Manoj Kumar Jain', 'Mr. Mohit Gokhroo', 'Mr. Jitesh', 'Mrs. Arpita Jain', 'Mr. Govind'),
('MCA2', 'Dr. Manoj Kumar Jain', 'Mrs. Dipti Shrimal', 'Dr. Manoj Kumar Jain', 'Mr. Mohit Gokhroo', 'Mrs. Nayana Birla', 'Mrs. Arpita Jain', 'Mrs. Neha Jain'),
('MCA3', 'MS. Namita Jain', 'Dr. Manoj Kumar Jain', 'Mrs. Dipti Shrimal', 'Mrs. Sheela Bhat', 'Mrs. Neha Jain', 'MS. Deepika', 'Mr. Bhagwan'),
('MCA4', 'Dr. Avinash Panwar', 'Mrs. Dipti Shrimal', 'Dr. Manoj Kumar Jain', 'Mr. Mohit Gokhroo', 'Mrs. Nayana Birla', 'Mrs. Arpita Jain', 'Mrs. Neha Jain'),
('MCA5', 'Mrs. Dipti Shrimal', 'Dr. Manoj Kumar Jain', 'Dr. Avinash Panwar', 'Mrs. Nayana Birla', 'Mrs. Neha Jain', 'MS. Namita Jain', 'Mr. Indra Kumar Prajapat');

-- --------------------------------------------------------

--
-- Table structure for table `sub_cmd`
--

CREATE TABLE `sub_cmd` (
  `rate_id` int(11) NOT NULL,
  `q1` int(11) NOT NULL,
  `q2` int(11) NOT NULL,
  `q3` int(11) NOT NULL,
  `q4` int(11) NOT NULL,
  `q5` int(11) NOT NULL,
  `q6` int(11) NOT NULL,
  `q7` int(11) NOT NULL,
  `teacher_id` varchar(150) NOT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sub_cmd`
--

INSERT INTO `sub_cmd` (`rate_id`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `q7`, `teacher_id`, `date`) VALUES
(8, 7, 7, 8, 9, 9, 9, 8, 'Dr. Avinash Panwar', '2020-01-07 11:14:03.000000'),
(9, 9, 9, 9, 9, 9, 9, 9, 'Dr. Manoj Kumar Jain', '2020-01-07 11:17:56.000000'),
(10, 7, 10, 8, 9, 7, 10, 9, 'Mrs. Dipti Shrimal', '2020-01-07 11:19:47.000000'),
(11, 6, 8, 10, 8, 10, 9, 10, 'Mrs. Neha Jain', '2020-01-07 11:20:30.000000'),
(12, 9, 10, 7, 9, 9, 9, 10, 'Dr. Avinash Panwar', '2020-01-07 11:21:19.000000'),
(13, 8, 10, 7, 10, 10, 10, 10, 'Dr. Avinash Panwar', '2020-01-07 11:32:47.000000'),
(14, 9, 10, 10, 10, 10, 10, 10, 'Dr. Avinash Panwar', '2020-01-07 11:45:00.000000'),
(15, 9, 10, 10, 9, 9, 10, 9, 'Mrs. Dipti Shrimal', '2020-01-07 11:55:04.000000'),
(16, 8, 10, 10, 9, 9, 10, 10, 'Dr. Manoj Kumar Jain', '2020-01-07 11:56:03.000000'),
(17, 9, 10, 9, 10, 9, 10, 9, 'Mr. Mohit Gokhroo', '2020-01-07 11:56:43.000000'),
(18, 8, 10, 8, 10, 9, 10, 10, 'Mrs. Neha Jain', '2020-01-07 11:57:29.000000'),
(19, 8, 10, 9, 0, 10, 9, 10, 'Mrs. Arpita Jain', '2020-01-07 11:59:18.000000'),
(20, 10, 10, 9, 9, 10, 9, 10, 'Mr. Jitesh', '2020-01-07 12:00:03.000000'),
(21, 8, 7, 0, 0, 0, 0, 0, 'Dr. Avinash Panwar', '2020-01-07 12:28:05.000000'),
(22, 0, 0, 8, 0, 0, 0, 0, 'Dr. Avinash Panwar', '2020-01-07 13:56:10.000000');

-- --------------------------------------------------------

--
-- Table structure for table `s_login`
--

CREATE TABLE `s_login` (
  `user_id` int(11) NOT NULL,
  `un` varchar(122) CHARACTER SET utf8mb4 NOT NULL,
  `pwd` varchar(15) CHARACTER SET utf8mb4 NOT NULL,
  `sem_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `s_login`
--

INSERT INTO `s_login` (`user_id`, `un`, `pwd`, `sem_name`) VALUES
(1, 'parixit', '123', 'MCA1'),
(2, 'mayank', '123', 'MCA2'),
(3, 'hari', '123', 'MCA3'),
(4, 'nitin', '123', 'MCA4'),
(5, 'kushwant', '123', 'MCA5');

-- --------------------------------------------------------

--
-- Table structure for table `teaching_skills`
--

CREATE TABLE `teaching_skills` (
  `rate_id` int(100) NOT NULL,
  `q1` int(255) NOT NULL,
  `q2` int(255) NOT NULL,
  `q3` int(255) NOT NULL,
  `q4` int(255) NOT NULL,
  `q5` int(255) NOT NULL,
  `teacher_id` varchar(255) NOT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teaching_skills`
--

INSERT INTO `teaching_skills` (`rate_id`, `q1`, `q2`, `q3`, `q4`, `q5`, `teacher_id`, `date`) VALUES
(28, 7, 9, 8, 9, 7, 'Dr. Avinash Panwar', '2020-01-07 11:14:15.000000'),
(29, 9, 9, 9, 9, 10, 'Dr. Manoj Kumar Jain', '2020-01-07 11:18:09.000000'),
(30, 5, 9, 8, 10, 10, 'Mrs. Dipti Shrimal', '2020-01-07 11:20:00.000000'),
(31, 6, 9, 8, 10, 9, 'Mrs. Neha Jain', '2020-01-07 11:20:42.000000'),
(32, 7, 9, 7, 10, 10, 'Dr. Avinash Panwar', '2020-01-07 11:21:30.000000'),
(33, 9, 10, 8, 10, 10, 'Dr. Avinash Panwar', '2020-01-07 11:33:11.000000'),
(34, 10, 9, 10, 10, 10, 'Mrs. Dipti Shrimal', '2020-01-07 11:55:17.000000'),
(35, 8, 9, 10, 10, 10, 'Dr. Manoj Kumar Jain', '2020-01-07 11:56:12.000000'),
(36, 8, 8, 10, 10, 10, 'Mr. Mohit Gokhroo', '2020-01-07 11:56:52.000000'),
(37, 8, 10, 9, 10, 9, 'Mrs. Neha Jain', '2020-01-07 11:57:45.000000'),
(38, 9, 9, 9, 10, 10, 'Mrs. Arpita Jain', '2020-01-07 11:59:28.000000'),
(39, 8, 10, 9, 10, 10, 'Mr. Jitesh', '2020-01-07 12:00:14.000000'),
(40, 9, 0, 0, 0, 9, 'Dr. Avinash Panwar', '2020-01-07 12:28:17.000000'),
(41, 0, 0, 0, 0, 8, 'Dr. Avinash Panwar', '2020-01-07 13:56:25.000000');

-- --------------------------------------------------------

--
-- Table structure for table `time_mgmt`
--

CREATE TABLE `time_mgmt` (
  `rate_id` int(150) NOT NULL,
  `q1` int(150) NOT NULL,
  `q2` int(150) NOT NULL,
  `q3` int(150) NOT NULL,
  `q4` int(150) NOT NULL,
  `q5` int(150) NOT NULL,
  `q6` int(150) NOT NULL,
  `teacher_id` varchar(150) NOT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `time_mgmt`
--

INSERT INTO `time_mgmt` (`rate_id`, `q1`, `q2`, `q3`, `q4`, `q5`, `q6`, `teacher_id`, `date`) VALUES
(11, 4, 9, 8, 9, 8, 9, 'Dr. Avinash Panwar', '2020-01-07 11:13:47.000000'),
(12, 5, 8, 9, 9, 9, 9, 'Dr. Manoj Kumar Jain', '2020-01-07 11:17:42.000000'),
(13, 5, 6, 8, 8, 8, 9, 'Mrs. Dipti Shrimal', '2020-01-07 11:19:31.000000'),
(14, 8, 8, 9, 8, 10, 10, 'Mrs. Neha Jain', '2020-01-07 11:20:16.000000'),
(15, 6, 8, 8, 8, 8, 9, 'Dr. Avinash Panwar', '2020-01-07 11:21:05.000000'),
(16, 6, 8, 8, 8, 8, 10, 'Dr. Avinash Panwar', '2020-01-07 11:32:29.000000'),
(17, 10, 10, 10, 10, 10, 10, 'Dr. Avinash Panwar', '2020-01-07 11:40:26.000000'),
(18, 8, 8, 10, 9, 10, 9, 'Mrs. Dipti Shrimal', '2020-01-07 11:54:40.000000'),
(19, 9, 10, 10, 10, 9, 10, 'Dr. Manoj Kumar Jain', '2020-01-07 11:55:48.000000'),
(20, 7, 10, 10, 9, 9, 10, 'Mr. Mohit Gokhroo', '2020-01-07 11:56:29.000000'),
(21, 8, 10, 9, 9, 8, 10, 'Mrs. Neha Jain', '2020-01-07 11:57:10.000000'),
(22, 10, 9, 10, 9, 10, 9, 'Mrs. Arpita Jain', '2020-01-07 11:59:02.000000'),
(23, 9, 10, 10, 10, 10, 10, 'Mr. Jitesh', '2020-01-07 11:59:45.000000'),
(24, 7, 9, 9, 9, 9, 9, 'Dr. Avinash Panwar', '2020-01-07 12:27:54.000000'),
(25, 8, 0, 0, 0, 0, 0, 'Dr. Avinash Panwar', '2020-01-07 13:56:06.000000');

-- --------------------------------------------------------

--
-- Table structure for table `t_login`
--

CREATE TABLE `t_login` (
  `teacher_id` int(255) NOT NULL,
  `teacher_name` varchar(255) NOT NULL,
  `un` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `pwd` varchar(100) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_login`
--

INSERT INTO `t_login` (`teacher_id`, `teacher_name`, `un`, `pwd`) VALUES
(1, 'Dr. Avinash Panwar', 'AP', '123'),
(2, 'Dr. Manoj Kumar Jain', 'MKJ', '123'),
(3, 'Mr. Bhagwan', 'MB', '123'),
(4, 'Mr. Govind', 'MG', '123'),
(5, 'Mr. Indra Kumar Prajapat', 'IP', '123'),
(6, 'Mr. Jitesh', 'MJ', '123'),
(7, 'Mr. Mohit Gokhroo', 'MG', '123'),
(8, 'Mrs. Arpita Jain', 'AJ', '123'),
(9, 'Mrs. Dipti Shrimal', 'DS', '123'),
(10, 'Mrs. Nayana Birla', 'NB', '123'),
(11, 'Mrs. Neha Jain', 'NJ', '123'),
(12, 'Mrs. Sheela Bhatt', 'SB', '123'),
(13, 'MS. Namita Jain', 'MNJ', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `semester`
--
ALTER TABLE `semester`
  ADD PRIMARY KEY (`sem_name`);

--
-- Indexes for table `sub_cmd`
--
ALTER TABLE `sub_cmd`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `s_login`
--
ALTER TABLE `s_login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `teaching_skills`
--
ALTER TABLE `teaching_skills`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `time_mgmt`
--
ALTER TABLE `time_mgmt`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `t_login`
--
ALTER TABLE `t_login`
  ADD PRIMARY KEY (`teacher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sub_cmd`
--
ALTER TABLE `sub_cmd`
  MODIFY `rate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `s_login`
--
ALTER TABLE `s_login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `teaching_skills`
--
ALTER TABLE `teaching_skills`
  MODIFY `rate_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `time_mgmt`
--
ALTER TABLE `time_mgmt`
  MODIFY `rate_id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `t_login`
--
ALTER TABLE `t_login`
  MODIFY `teacher_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
