-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 14 2022 г., 19:28
-- Версия сервера: 10.4.19-MariaDB
-- Версия PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `npdb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `events`
--

CREATE TABLE `events` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `events`
--

INSERT INTO `events` (`id`, `description`, `title`) VALUES
(1, 'Event #1', 'Event description');

-- --------------------------------------------------------

--
-- Структура таблицы `fonds`
--

CREATE TABLE `fonds` (
  `id` bigint(20) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `fonds`
--

INSERT INTO `fonds` (`id`, `amount`, `description`, `title`) VALUES
(1, 0, 'Fond Description', 'Fond Title');

-- --------------------------------------------------------

--
-- Структура таблицы `fonds_events`
--

CREATE TABLE `fonds_events` (
  `fond_entity_id` bigint(20) NOT NULL,
  `events_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `fonds_monthly_support`
--

CREATE TABLE `fonds_monthly_support` (
  `fond_entity_id` bigint(20) NOT NULL,
  `monthly_support_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `fonds_posts`
--

CREATE TABLE `fonds_posts` (
  `fond_entity_id` bigint(20) NOT NULL,
  `posts_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `description`, `title`) VALUES
(1, 'Post Description', 'Post Title');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `password`, `username`) VALUES
(1, 'User Password', 'UserName ');

-- --------------------------------------------------------

--
-- Структура таблицы `users_fonds`
--

CREATE TABLE `users_fonds` (
  `user_entity_id` bigint(20) NOT NULL,
  `fonds_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `fonds`
--
ALTER TABLE `fonds`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `fonds_events`
--
ALTER TABLE `fonds_events`
  ADD UNIQUE KEY `UK_52imvjacou39eine5s7wxvsiv` (`events_id`),
  ADD KEY `FKd2rhyumg9fx5i56cdbm339thb` (`fond_entity_id`);

--
-- Индексы таблицы `fonds_monthly_support`
--
ALTER TABLE `fonds_monthly_support`
  ADD KEY `FK9lc8rwr6723enlfwvivbm6v65` (`monthly_support_id`),
  ADD KEY `FKm3onvp6wkoq1e1tf0cql2jyfl` (`fond_entity_id`);

--
-- Индексы таблицы `fonds_posts`
--
ALTER TABLE `fonds_posts`
  ADD UNIQUE KEY `UK_kju4ectns5inpx8yawvipeq2v` (`posts_id`),
  ADD KEY `FK5ainrmk7kcn21g2md4ptlfldb` (`fond_entity_id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users_fonds`
--
ALTER TABLE `users_fonds`
  ADD KEY `FKi4k401nlh4bu2ywo87qfx9grc` (`fonds_id`),
  ADD KEY `FKs3x9x7888hb8rpgh2jq28a099` (`user_entity_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `fonds`
--
ALTER TABLE `fonds`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `fonds_events`
--
ALTER TABLE `fonds_events`
  ADD CONSTRAINT `FKd2rhyumg9fx5i56cdbm339thb` FOREIGN KEY (`fond_entity_id`) REFERENCES `fonds` (`id`),
  ADD CONSTRAINT `FKebgl7c7fb3pr499d7llnww4ie` FOREIGN KEY (`events_id`) REFERENCES `events` (`id`);

--
-- Ограничения внешнего ключа таблицы `fonds_monthly_support`
--
ALTER TABLE `fonds_monthly_support`
  ADD CONSTRAINT `FK9lc8rwr6723enlfwvivbm6v65` FOREIGN KEY (`monthly_support_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKm3onvp6wkoq1e1tf0cql2jyfl` FOREIGN KEY (`fond_entity_id`) REFERENCES `fonds` (`id`);

--
-- Ограничения внешнего ключа таблицы `fonds_posts`
--
ALTER TABLE `fonds_posts`
  ADD CONSTRAINT `FK5ainrmk7kcn21g2md4ptlfldb` FOREIGN KEY (`fond_entity_id`) REFERENCES `fonds` (`id`),
  ADD CONSTRAINT `FKm29cgiyrx6v814pd4syo48viw` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`);

--
-- Ограничения внешнего ключа таблицы `users_fonds`
--
ALTER TABLE `users_fonds`
  ADD CONSTRAINT `FKi4k401nlh4bu2ywo87qfx9grc` FOREIGN KEY (`fonds_id`) REFERENCES `fonds` (`id`),
  ADD CONSTRAINT `FKs3x9x7888hb8rpgh2jq28a099` FOREIGN KEY (`user_entity_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
