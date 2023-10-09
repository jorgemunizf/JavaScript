create database biblioteca;

create table autores (
  id serial primary key, 
  nome varchar(100), 
  idade char(2)
  );

create table livros (
  id serial primary key,
  nome varchar(100) not null,
  genero varchar(150),
  editora varchar(150),
  data_publicacao date,
  autor_id int references autores(id)
  );