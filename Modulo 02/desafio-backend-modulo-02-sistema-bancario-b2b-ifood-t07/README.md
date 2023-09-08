# API de Contas Bancárias

Esta é uma API simples para gerenciar contas bancárias. Ela permite criar, atualizar, encerrar contas, fazer depósitos, saques, transferências e verificar o saldo e extrato de uma conta.

## Instalação

1. Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Clone este repositório para a sua máquina local:

```Javascript
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

3. Navegue até o diretório do projeto:

```
cd nome-do-repositorio
```

4. Instale as dependências do projeto executando o seguinte comando no terminal:

```Javascript
npm install
```

5. Inicie o servidor:

```
npm run dev
```

O servidor estará rodando na porta padrão 3000. Você pode acessar a API através de **`http://localhost:3000`**.

## Uso

A API possui os seguintes endpoints:

- `GET /contas`: Lista todas as contas.
- `POST /contas`: Cria uma nova conta.
- `PUT /contas/{numeroConta}`: Atualiza os dados de uma conta existente.
- `DELETE /contas/{numeroConta}`: Encerra uma conta (somente se o saldo for zero).
- `POST /deposito`: Realiza um depósito em uma conta.
- `POST /saque`: Realiza um saque em uma conta(somente se possuir saldo).
- `POST /transferencia`: Realiza uma transferência entre contas.
- `GET /saldo`: Retorna o saldo de uma conta.
- `GET /extrato`: Retorna o extrato de uma conta.

Para usar esses endpoints, você precisa fazer requisições HTTP para os URLs correspondentes e fornecer os parâmetros necessários no corpo da solicitação ou nos query parameters, conforme especificado em cada endpoint.

## Exemplos de Uso

Aqui estão alguns exemplos de como usar a API com o programa **[Insomnia]**(https://insomnia.rest/).

1. **Listar todas as contas**:
  ```
  GET http://localhost:3000/contas
  ```
2. **Criar uma nova conta**
   ```
   POST http://localhost:3000/contas
   ```
   No corpo da requisição(JSON):

   ```json
   {
    "nome": "Nome do Cliente",
    "cpf": "123.456.789-00",
    "data_nascimento": "01/01/1990",
    "telefone": "(99) 99999-9999",
    "email": "cliente@email.com",
    "senha": "senha123"
    }
   ```
  
3. **Atualizar uma conta existente:**
```
PUT http://localhost:3000/contas/{numeroConta}
```

Corpo da solicitação (JSON):

```json
{
  "nome": "Novo Nome",
  "cpf": "123.456.789-00",
  "data_nascimento": "01/01/1990",
  "telefone": "(99) 99999-9999",
  "email": "novo@email.com",
  "senha": "novaSenha123"
}
```
4. **Encerrar uma conta:**
```
DELETE http://localhost:3000/contas/{numeroConta}
```

5. **Realizar um depósito:**
```
POST http://localhost:3000/deposito
```

Corpo da solicitação (JSON):

```json
Copy code
{
  "numero_conta": "1",
  "valor": 100.00
}
```

6. **Realizar um saque:**
```
POST http://localhost:3000/saque
```

Corpo da solicitação (JSON):

```json
{
  "numero_conta": "1",
  "valor": 50.00,
  "senha": "senha123"
}
```

7. **Realizar uma transferência:**
```
POST http://localhost:3000/transferencia
```
Corpo da solicitação (JSON):

```json
{
  "numero_conta_origem": "1",
  "numero_conta_destino": "2",
  "valor": 30.00,
  "senha": "senha123"
}
```

8. **Verificar o saldo de uma conta:**
```
GET http://localhost:3000/saldo?numero_conta=1&senha=senha123
```

9. **Obter o extrato de uma conta:**
```
GET http://localhost:3000/extrato?numero_conta=1&senha=senha123
```
Lembre-se de ajustar os valores e parâmetros de acordo com o que você deseja testar.

## Documentação
Para obter mais informações sobre os endpoints disponíveis e os parâmetros necessários, consulte a documentação da API em docs/api-docs.md.

## Contribuição
Se você quiser contribuir com melhorias ou correções para esta API, sinta-se à vontade para fazer um fork deste repositório, criar um novo branch, fazer suas alterações e criar uma solicitação de pull.

   

