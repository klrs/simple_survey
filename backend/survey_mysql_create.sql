CREATE SCHEMA IF NOT EXISTS `survey_db` DEFAULT CHARACTER SET utf8 ;
USE `survey_db`;

CREATE USER IF NOT EXISTS 'survey_db_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON `survey_db`.* TO 'survey_db_user'@'localhost' IDENTIFIED BY 'password';

CREATE TABLE IF NOT EXISTS `survey_db`.`Scale` (
	`scale_id` int NOT NULL AUTO_INCREMENT,
	`option1` int NOT NULL,
	`option2` int NOT NULL,
	`option3` int,
	`option4` int,
	`option5` int,
	PRIMARY KEY (`scale_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `survey_db`.`Survey` (
	`survey_id` int NOT NULL AUTO_INCREMENT,
	`name` TEXT NOT NULL,
	`optionCount` int NOT NULL,
	`scaleId` int NOT NULL,
	PRIMARY KEY (`survey_id`),
	CONSTRAINT `fk_Survey_Scale1`
		FOREIGN KEY (`scaleId`)
  	REFERENCES `survey_db`.`Scale`(`scale_id`))
ENGINE = InnoDB;

INSERT INTO `survey_db`.`Scale` (`option1`, `option2`, `option3`, `option4`, `option5`) VALUES
            ('0', '0', '0', '0', '0', 'Eri mieltä');
INSERT INTO `survey_db`.`Survey` (`name`, `optionCount`, `scaleId`) VALUES ('Mielipide asiasta x', '5', '1');