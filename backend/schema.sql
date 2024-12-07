create extension pgcrypto;

CREATE TABLE roles (
   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
   name VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE users (
   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
   name VARCHAR(255) NOT NULL,
   balance DOUBLE PRECISION NOT NULL,
   email VARCHAR(255) NOT NULL UNIQUE,
   secret VARCHAR(255) NOT NULL,
   role UUID REFERENCES roles(id),
   account_non_expired BOOLEAN DEFAULT TRUE,
   account_non_locked BOOLEAN DEFAULT TRUE,
   credentials_non_expired BOOLEAN DEFAULT TRUE,
   enabled BOOLEAN DEFAULT TRUE
);


CREATE TABLE contacts (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    identifier    VARCHAR(255) NOT NULL UNIQUE,
    type          VARCHAR(10)  NOT NULL,
    message_count INT DEFAULT 0,
    call_count    INT DEFAULT 0
);

CREATE TABLE companies (
   id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
   name   VARCHAR(255) NOT NULL,
   cnpj   VARCHAR(20)  NOT NULL,
   number VARCHAR(50)  NOT NULL,
   email  VARCHAR(255)  NOT NULL
);

INSERT INTO companies (name, cnpj, number, email)
VALUES ('Banco do Brasil', '00.000.000/0001-91', '40040001', 'contato@bb.com.br'),
       ('Banco do Brasil', '00.000.000/0001-91', '08007290001', 'contato@bb.com.br'),
       ('Banco do Brasil', '00.000.000/0001-91', '+556140040001', 'contato@bb.com.br'),

       ('Caixa Econômica Federal', '00.360.305/0001-04', '30041104', 'sac@caixa.gov.br'),
       ('Caixa Econômica Federal', '00.360.305/0001-04', '08001040104', 'sac@caixa.gov.br'),
       ('Caixa Econômica Federal', '00.360.305/0001-04', '+551130041104', 'sac@caixa.gov.br'),

       ('Bradesco', '60.746.948/0001-12', '40020022', 'sac@bradesco.com.br'),
       ('Bradesco', '60.746.948/0001-12', '08007048383', 'sac@bradesco.com.br'),
       ('Bradesco', '60.746.948/0001-12', '+551133350237', 'sac@bradesco.com.br'),

       ('Itaú Unibanco', '60.701.190/0001-04', '40044828', 'atendimento.reclamacoes@itau-unibanco.com.br'),
       ( 'Itaú Unibanco', '60.701.190/0001-04', '08007280728', 'atendimento.reclamacoes@itau-unibanco.com.br'),
       ('Itaú Unibanco', '60.701.190/0001-04', '+551140044828',
        'atendimento.reclamacoes@itau-unibanco.com.br'),

       ('Santander', '90.400.888/0001-42', '40043535', 'ouvidoria@santander.com.br'),
       ('Santander', '90.400.888/0001-42', '08007023535', 'ouvidoria@santander.com.br'),
       ('Santander', '90.400.888/0001-42', '+551140043535', 'ouvidoria@santander.com.br'),

       ('Nubank - Nu Pagamentos', '18.236.120/0001-58', '08006086236', 'meajuda@nubank.com.br'),
       ('Nubank - Nu Pagamentos', '18.236.120/0001-58', '+551196180185', 'meajuda@nubank.com.br'),

       ('Banco Inter', '00.416.968/0001-01', '30034070', 'sac@bancointer.com.br'),
       ('Banco Inter', '00.416.968/0001-01', '08009400007', 'sac@bancointer.com.br'),
       ('Banco Inter', '00.416.968/0001-01', '+553130034070', 'sac@bancointer.com.br'),

       ('BTG Pactual', '30.306.294/0001-45', '08007722828', 'contato@btgpactual.com'),
       ('BTG Pactual', '30.306.294/0001-45', '+551130392828', 'contato@btgpactual.com'),

       ('Banco Safra', '58.160.789/0001-28', '40011030', 'sac@safra.com.br'),
       ('Banco Safra', '58.160.789/0001-28', '08007725755', 'sac@safra.com.br'),
       ('Banco Safra', '58.160.789/0001-28', '+55-1131758248', 'sac@safra.com.br');
