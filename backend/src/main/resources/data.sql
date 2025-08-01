
Insert into users (name,email,password) Values
('User','user@ledger.com','user123')
ON CONFLICT (email) DO NOTHING;
Insert into users (name,email,password) Values
('Admin','admin@ledger.com','admin123')
ON CONFLICT (email) DO NOTHING;
commit;