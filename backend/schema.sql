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
   number VARCHAR(50)  NOT NULL UNIQUE,
   email  VARCHAR(255)  NOT NULL UNIQUE
);
