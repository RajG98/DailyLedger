import React, { useState } from 'react';
import svgPaths from "../imports/svg-eoxo8t85xb";

const transactions = [
  {
    id: '#7890328',
    name: 'Spotify',
    icon: svgPaths.p2d8c5700,
    iconFill: '#0B8800',
    amount: '-₹13,000',
    amountColor: 'text-danger',
    date: '16 Jan 2:30pm',
  },
  {
    id: '#3948509',
    name: 'Starbucks',
    icon: svgPaths.p127ded00,
    iconFill: '#086000',
    amount: '-₹24,000',
    amountColor: 'text-danger',
    date: '15 Jan 3:30pm',
  },
  {
    id: '#2980298',
    name: 'Upwork',
    icon: svgPaths.p1b229880,
    iconFill: '#0EAC00',
    amount: '+₹50,000',
    amountColor: 'text-success',
    date: '14 Jan 2:30pm',
    isCircle: true,
  },
];

export function TransactionHistory() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="card shadow">
      <div className="card-body">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <h4 className="mb-0">Transaction History</h4>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-primary btn-sm d-flex align-items-center gap-2">
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                <path d={svgPaths.p30c17c80} fill="white" />
              </svg>
              <span className="d-none d-sm-inline">View Report</span>
            </button>
            <button 
              className="btn btn-primary btn-sm d-flex align-items-center gap-2"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d={svgPaths.p2bd60480} fill="white" />
              </svg>
              <span className="d-none d-sm-inline">Filter</span>
            </button>
          </div>
        </div>

        {/* Filter Options */}
        {filterOpen && (
          <div className="filter-panel mb-3 p-3 bg-light rounded">
            <div className="row g-2">
              <div className="col-12 col-md-4">
                <select className="form-select form-select-sm">
                  <option>All Types</option>
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
              <div className="col-12 col-md-4">
                <input type="date" className="form-control form-control-sm" />
              </div>
              <div className="col-12 col-md-4">
                <button className="btn btn-sm btn-secondary w-100">Apply</button>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Transaction</th>
                <th className="d-none d-md-table-cell">ID</th>
                <th>Amount</th>
                <th className="d-none d-lg-table-cell">Date</th>
                <th className="d-none d-xl-table-cell">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="transaction-icon">
                        {transaction.isCircle ? (
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <circle cx="12.5" cy="12.5" fill={transaction.iconFill} r="12.5" />
                            <path d={transaction.icon} fill="white" />
                          </svg>
                        ) : (
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d={transaction.icon} fill={transaction.iconFill} />
                          </svg>
                        )}
                      </div>
                      <span className="transaction-name">{transaction.name}</span>
                    </div>
                  </td>
                  <td className="text-muted d-none d-md-table-cell">{transaction.id}</td>
                  <td className={transaction.amountColor}><strong>{transaction.amount}</strong></td>
                  <td className="d-none d-lg-table-cell">{transaction.date}</td>
                  <td className="d-none d-xl-table-cell">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}