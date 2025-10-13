
insert into users (name,email,password,created_at,updated_at) values
('User','user@ledger.com','$2a$10$blR4.BFKFL0wb/w0kdZAC.RuX4G9YsYGC3ku4z73F1aM.C/tJqyUO',now(),now())
ON CONFLICT (email) DO NOTHING;
insert into users (name,email,password,created_at,updated_at) values
('Admin','admin@ledger.com','$2a$10$1RXwh3TGB2teHCnAA/JW1OZaRp3Y6BwnG1qy97LmTDDjUImox/KTi',now(),now())
ON CONFLICT (email) DO NOTHING;


-- 1️⃣ USER TABLE
--raj123
insert into users (id, name, email,password,created_at,updated_at)
values ('a6631f83-22c1-4ad6-a5b4-6d488efda471', 'Rajarshi Goswami', 'rajarshi@example.com','$2a$12$kDLAZ01xwtICnjXZJpVuo.GY2TSFb2Zqt.IswaHSgU1FqDwnkQCXK',now(),now())
ON CONFLICT (id) DO NOTHING;

-- 2️⃣ ACCOUNT TABLE
insert into accounts (account_id, title, amount, user_id)
values
('e92b8a53-987a-4f3b-9a71-91d245bbaf63', 'Savings Account', 25000, 'a6631f83-22c1-4ad6-a5b4-6d488efda471'),
('c72d9f64-81a2-442a-9ad1-7208b5ee9b54', 'Expenses Account', 5000, 'a6631f83-22c1-4ad6-a5b4-6d488efda471')
ON CONFLICT (account_id) DO NOTHING;

-- 3️⃣ CATEGORY TABLE
insert into categories (category_id, name, user_id)
values
(4, 'Salary', 'a6631f83-22c1-4ad6-a5b4-6d488efda471')
ON CONFLICT (category_id) DO NOTHING;

-- 4️⃣ TRANSACTION TABLE
insert into transactions (txn_id, title_desc, amount, time_stamp, type, account_id, user_id)
values
('txn-001', 'Lunch at Cafe', '350', now() - interval '2 days', 'EXPENSE', 'c72d9f64-81a2-442a-9ad1-7208b5ee9b54', 'a6631f83-22c1-4ad6-a5b4-6d488efda471'),
('txn-002', 'Online Shopping', '1200', now() - interval '1 day', 'EXPENSE', 'c72d9f64-81a2-442a-9ad1-7208b5ee9b54', 'a6631f83-22c1-4ad6-a5b4-6d488efda471'),
('txn-003', 'Monthly Salary', '40000', now() - interval '10 days', 'INCOME', 'e92b8a53-987a-4f3b-9a71-91d245bbaf63', 'a6631f83-22c1-4ad6-a5b4-6d488efda471'),
('txn-004', 'Cab Ride', '250', now() - interval '5 days', 'EXPENSE', 'c72d9f64-81a2-442a-9ad1-7208b5ee9b54', 'a6631f83-22c1-4ad6-a5b4-6d488efda471')
ON CONFLICT (txn_id) DO NOTHING;

-- 5️⃣ TRANSACTION_CATEGORY MAPPING TABLE
insert into transaction_category (transaction_id, category_id)
values
('txn-001', 1), -- Food
('txn-002', 2), -- Shopping
('txn-003', 4), -- Salary
('txn-004', 3) -- Travel
ON CONFLICT (transaction_id, category_id) DO NOTHING;

commit;