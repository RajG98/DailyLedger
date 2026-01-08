import React, { useState } from 'react';
import svgPaths from "../imports/svg-eoxo8t85xb";

interface Bank {
  id: number;
  name: string;
  accountNumber: string;
  balance: string;
  type: string;
}

export function CardSection() {
  const [banks, setBanks] = useState<Bank[]>([
    {
      id: 1,
      name: 'Bank of America',
      accountNumber: '****1234',
      balance: '₹50,00,000',
      type: 'Checking'
    },
    {
      id: 2,
      name: 'Chase Bank',
      accountNumber: '****5678',
      balance: '₹25,00,000',
      type: 'Savings'
    },
    {
      id: 3,
      name: 'Wells Fargo',
      accountNumber: '****9012',
      balance: '₹15,00,000',
      type: 'Checking'
    }
  ]);

  const handleAddBank = () => {
    const newBank: Bank = {
      id: banks.length + 1,
      name: 'New Bank',
      accountNumber: '****0000',
      balance: '₹0',
      type: 'Checking'
    };
    setBanks([...banks, newBank]);
  };

  const handleRemoveBank = (id: number) => {
    setBanks(banks.filter(bank => bank.id !== id));
  };

  return (
    <div className="card-section">
      {/* My Banks Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">
          My <span className="text-primary">Banks</span>
        </h4>
        <button 
          className="btn btn-link text-dark text-decoration-none p-0 d-flex align-items-center gap-2"
          onClick={handleAddBank}
        >
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path d={svgPaths.p24bc1480} fill="#3C3C3B" />
          </svg>
          <span className="d-none d-sm-inline">Add Bank</span>
        </button>
      </div>

      {/* Banks List */}
      <div className="banks-list">
        {banks.map((bank) => (
          <div key={bank.id} className="bank-item">
            <div className="bank-item-header">
              <div className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1">
                <div className="bank-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7v3h20V7L12 2z" fill="#236EFF" />
                    <path d="M4 10h3v7H4v-7zm6.5 0h3v7h-3v-7zm6.5 0h3v7h-3v-7z" fill="#236EFF" />
                    <path d="M2 18h20v3H2v-3z" fill="#236EFF" />
                  </svg>
                </div>
                <div className="flex-grow-1 min-w-0">
                  <div className="bank-name text-truncate">{bank.name}</div>
                  <div className="bank-account">{bank.accountNumber}</div>
                </div>
              </div>
              <button 
                className="btn btn-link p-0 text-danger flex-shrink-0"
                onClick={() => handleRemoveBank(bank.id)}
                title="Remove bank"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="bank-details">
              <div className="bank-detail-item">
                <span className="bank-detail-label">Type</span>
                <span className="bank-detail-value">{bank.type}</span>
              </div>
              <div className="bank-detail-item">
                <span className="bank-detail-label">Balance</span>
                <span className="bank-detail-value text-primary">{bank.balance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}