CREATE TABLE contacts (
    id            SERIAL PRIMARY KEY,
    identifier    VARCHAR(255) NOT NULL UNIQUE,
    type          VARCHAR(10)  NOT NULL,
    message_count INT DEFAULT 0,
    call_count    INT DEFAULT 0
);

CREATE TABLE companies (
   id     SERIAL PRIMARY KEY,
   name   VARCHAR(255) NOT NULL,
   cnpj   VARCHAR(20)  NOT NULL,
   number VARCHAR(50)  NOT NULL UNIQUE,
   email  VARCHAR(255)  NOT NULL UNIQUE
);
