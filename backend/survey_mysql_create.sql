CREATE SCHEMA IF NOT EXISTS `survey_db` DEFAULT CHARACTER SET utf8 ;
USE `survey_db` ;

CREATE USER IF NOT EXISTS 'survey_db_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON `survey_db`.* TO 'survey_db_user'@'localhost' IDENTIFIED BY 'password';

CREATE TABLE IF NOT EXISTS `survey_db`.`Scale` (
	`scale_id` bigint NOT NULL AUTO_INCREMENT,
	`option1` bigint NOT NULL,
	`option2` bigint NOT NULL,
	`option3` bigint,
	`option4` bigint,
	`option5` bigint,
	PRIMARY KEY (`scale_id`)
);

CREATE TABLE IF NOT EXISTS `survey_db`.`Survey` (
	`survey_id` bigint NOT NULL AUTO_INCREMENT,
	`name` TEXT NOT NULL,
	`optionCount` int NOT NULL,
	`scaleId` int NOT NULL,
	PRIMARY KEY (`survey_id`),
	CONSTRAINT `fk_Survey_Scale1`
		FOREIGN KEY (`scaleId`)
  	REFERENCES `survey_db`.`Scale` (`scale_id`)
);

INSERT INTO `survey_db`.`scale` (`option1`, `option2`, `option3`, `option4`, `option5`) VALUES ('0', '0', '0', '0', '0');
INSERT INTO `survey_db`.`survey` (`name`, `optionCount`, `scaleId`) VALUES ('Mielipide asiasta x', '5', '1');