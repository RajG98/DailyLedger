
Insert into users (name,email,password,created_at,updated_at) Values
('User','user@ledger.com','$2a$10$blR4.BFKFL0wb/w0kdZAC.RuX4G9YsYGC3ku4z73F1aM.C/tJqyUO',now(),now())
ON CONFLICT (email) DO NOTHING;
Insert into users (name,email,password,created_at,updated_at) Values
('Admin','admin@ledger.com','$2a$10$1RXwh3TGB2teHCnAA/JW1OZaRp3Y6BwnG1qy97LmTDDjUImox/KTi',now(),now())
ON CONFLICT (email) DO NOTHING;
commit;