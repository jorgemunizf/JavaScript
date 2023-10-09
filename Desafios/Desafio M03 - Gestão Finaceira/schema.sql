create database dindin;

create table usuarios (
  id serial primary key not null,
  nome text,
  email text unique,
  senha text
  );

create table categorias (id serial primary key, descricao text);

create table transacoes (
  id serial primary key, 
  descricao text, 
  valor int, 
  data timestamp,
  categoria_id int, 
  usuario_id int, 
  tipo text
);

insert into categorias (descricao)
values
 ('Alimentação'),
 ('Assinaturas e Serviços'),
	('Casa'),
	('Mercado'),
	('Cuidados Pessoais'),
	('Educação'),
	('Família'),
	('Lazer'),
	('Pets'),
	('Presentes'),
	('Roupas'),
	('Saúde'),
	('Transporte'),
	('Salário'),
	('Vendas'),
	('Outras receitas'),
	('Outras despesas');


