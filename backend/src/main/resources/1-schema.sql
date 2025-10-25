-- Enable UUID generation support
create EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- USERS TABLE
-- ==========================================
create table if not exists users (
    id uuid primary key default uuid_generate_v4(),
    name TEXT NOT NULL,
    email text not null unique,
    password text not null,
    created_at timestamp default now(),
    updated_at timestamp default now()
);

-- ==========================================
-- ACCOUNT TABLE
-- ==========================================
create table if not exists accounts (
    account_id uuid primary key default uuid_generate_v4(),
    title text not null,
    amount integer not null,
    user_id uuid not null,
    foreign key (user_id) references users(id) on delete cascade
);

-- ==========================================
-- CATEGORY TABLE
-- ==========================================
create sequence IF NOT EXISTS category_id_seq START 1;

create table if not exists categories (
    category_id int primary key default nextval('category_id_seq'),
    name TEXT NOT NULL,
    user_id uuid ,
    foreign key (user_id) references users(id) on delete cascade
);

-- ==========================================
-- TRANSACTION TABLE
-- ==========================================
create table if not exists transactions (
    txn_id text primary key, -- generated like TXN20251013225645834729
    title_desc text not null,
    amount text not null,
    time_stamp timestamp not null default now(),
    type text not null check (type in ('EXPENSE', 'INCOME')),
    account_id uuid not null,
    user_id uuid not null,
    foreign key (account_id) references accounts(account_id) on delete cascade,
    foreign key (user_id) references users(id) on delete cascade
);

-- ==========================================
-- TRANSACTION_CATEGORY (Many-to-Many JOIN TABLE)
-- ==========================================
create table if not exists transaction_category (
    transaction_id text not null,
    category_id int not null,
    primary key (transaction_id, category_id),
    foreign key (transaction_id) references transactions(txn_id) on delete cascade,
    foreign key (category_id) references categories(category_id) on delete cascade
);

commit;
