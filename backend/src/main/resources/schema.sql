CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT not null,
    email TEXT not null unique,
    password TEXT not null,
    created_at Timestamp,
    updated_at timestamp
);
commit;


