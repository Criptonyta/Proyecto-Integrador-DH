-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema musiqueirosdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema musiqueirosdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `musiqueirosdb` DEFAULT CHARACTER SET utf8 ;
USE `musiqueirosdb` ;

-- -----------------------------------------------------
-- Table `musiqueirosdb`.`usersDB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musiqueirosdb`.`usersDB` (
  `id` INT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(12) NULL,
  `apellido` VARCHAR(10) NULL,
  `password` VARCHAR(50) NULL,
  `email` VARCHAR(20) NULL,
  `userAvatar` VARCHAR(20) NULL,
  `bio` VARCHAR(45) NULL,
  `usersDBcol` VARCHAR(141) NULL,
  `skills` VARCHAR(40) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musiqueirosdb`.`songsDB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musiqueirosdb`.`songsDB` (
  `songId` INT NULL AUTO_INCREMENT,
  `img` VARCHAR(20) NULL,
  `titulo` VARCHAR(25) NULL,
  `precioUnitario` INT NULL,
  `descripcion` VARCHAR(80) NULL,
  `audioFileYTPlayer` VARCHAR(15) NULL,
  `audioFile` VARCHAR(70) NULL,
  `tipoProducto` VARCHAR(20) NULL,
  `usersDB_id` INT NOT NULL,
  PRIMARY KEY (`songId`),
  INDEX `fkSongsDBUsersDB1idx` (`usersDB_id` ASC),
  CONSTRAINT `fkSongsDBUsersDB1`
    FOREIGN KEY (`usersDB_id`)
    REFERENCES `musiqueirosdb`.`usersDB` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `musiqueirosdb`.`instrumentsDB`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `musiqueirosdb`.`instrumentsDB` (
  `InstrumId` INT NULL AUTO_INCREMENT,
  `img` VARCHAR(20) NULL,
  `titulo` VARCHAR(60) NULL,
  `descripcion` VARCHAR(420) NULL,
  `precioUnitario` INT NULL,
  `tipoProducto` VARCHAR(20) NULL,
  `usersDBid` INT NULL,
  PRIMARY KEY (`InstrumId`),
  INDEX `fkInstrumentsDBUsersDB1_idx` (`usersDBid` ASC),
  CONSTRAINT `fkInstrumentsDBUsersDB1`
    FOREIGN KEY (`usersDBid`)
    REFERENCES `musiqueirosdb`.`usersDB` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
