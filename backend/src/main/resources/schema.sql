CREATE TABLE contacts (
  id            SERIAL PRIMARY KEY,
  identifier    VARCHAR(255) NOT NULL UNIQUE,
  type          VARCHAR(10)  NOT NULL,
  message_count INT DEFAULT 0,
  call_count    INT DEFAULT 0
);