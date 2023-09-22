<<<<<<< HEAD
select count(medicamento) from farmacia;

select min(idade) from usuarios;

select max(idade) from usuarios;

select avg(idade) from usuarios where idade >= 18;

select categoria, sum(estoque) as total_estoque from farmacia where categoria in ('black', 'blue') group by categoria; 

select categoria, sum(estoque) from farmacia group by categoria;

select 'sem categoria' as categoria, sum(estoque) as total_estoque_sem_categoria from farmacia group by categoria is null;

select 'sem categoria' as categoria, count(estoque) as quantidade_estoque_sem_categoria from farmacia group by categoria is null;

select concat(medicamento, ' ( ', categoria, ' ) ') as nome_e_categoria from farmacia where categoria is not null;


select concat(id, ' - ', medicamento, ' ( ', categoria, ' ) ', coalesce(categoria, 'sem categoria')) from farmacia;


SELECT nome,EXTRACT(YEAR FROM AGE(CAST(cadastro AS DATE))) AS idade,
CASE WHEN cadastro IS NOT NULL THEN TO_CHAR(CAST(cadastro AS DATE), 'YYYY-MM-DD')
ELSE 'sem categoria' END AS data_formatada
FROM usuarios
WHERE EXTRACT(YEAR FROM CAST(cadastro AS DATE)) = 2020;

SELECT  nome, idade, email, AGE(CAST(cadastro AS TIMESTAMP)) FROM usuarios WHERE idade < 18;

SELECT  nome, idade, email, AGE(CAST(cadastro AS TIMESTAMP)) FROM usuarios WHERE idade >= 60;

SELECT categoria, COUNT(*) AS quantidade from farmacia 
WHERE categoria IS NOT NULL 
GROUP BY categoria;

SELECT idade, COUNT(id) AS quantidade_de_registros 
FROM usuarios 
WHERE idade >= 18
GROUP BY idade;

SELECT categoria, SUM(estoque) AS total_do_estoque
FROM farmacia
GROUP BY categoria;









=======
select count(medicamento) from farmacia;

select min(idade) from usuarios;

select max(idade) from usuarios;

select avg(idade) from usuarios where idade >= 18;

select categoria, sum(estoque) as total_estoque from farmacia where categoria in ('black', 'blue') group by categoria; 

select categoria, sum(estoque) from farmacia group by categoria;

select 'sem categoria' as categoria, sum(estoque) as total_estoque_sem_categoria from farmacia group by categoria is null;

select 'sem categoria' as categoria, count(estoque) as quantidade_estoque_sem_categoria from farmacia group by categoria is null;

select concat(medicamento, ' ( ', categoria, ' ) ') as nome_e_categoria from farmacia where categoria is not null;


select concat(id, ' - ', medicamento, ' ( ', categoria, ' ) ', coalesce(categoria, 'sem categoria')) from farmacia;


SELECT nome,EXTRACT(YEAR FROM AGE(CAST(cadastro AS DATE))) AS idade,
CASE WHEN cadastro IS NOT NULL THEN TO_CHAR(CAST(cadastro AS DATE), 'YYYY-MM-DD')
ELSE 'sem categoria' END AS data_formatada
FROM usuarios
WHERE EXTRACT(YEAR FROM CAST(cadastro AS DATE)) = 2020;

SELECT  nome, idade, email, AGE(CAST(cadastro AS TIMESTAMP)) FROM usuarios WHERE idade < 18;

SELECT  nome, idade, email, AGE(CAST(cadastro AS TIMESTAMP)) FROM usuarios WHERE idade >= 60;

SELECT categoria, COUNT(*) AS quantidade from farmacia 
WHERE categoria IS NOT NULL 
GROUP BY categoria;

SELECT idade, COUNT(id) AS quantidade_de_registros 
FROM usuarios 
WHERE idade >= 18
GROUP BY idade;

SELECT categoria, SUM(estoque) AS total_do_estoque
FROM farmacia
GROUP BY categoria;









>>>>>>> 524932775122c0c9b68d89d2f99eafc35c72a29d
