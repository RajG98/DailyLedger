import React from 'react';

export function StatsCards() {
  return (
    <div className="row g-3">
      {/* Total Money */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card stat-card shadow">
          <div className="card-body">
            <p className="stat-label">Total Money</p>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <h3 className="stat-value mb-0">₹20,000</h3>
            </div>
          </div>
        </div>
      </div>

      {/* This Month's Income */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card stat-card stat-card-income shadow">
          <div className="card-body">
            <p className="stat-label text-white">This Month's income</p>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <h3 className="stat-value text-white mb-0">₹50,000</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Expenses this month */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card stat-card shadow">
          <div className="card-body">
            <p className="stat-label">Expenses this month</p>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <h3 className="stat-value mb-0">₹10,000</h3>
              <span className="badge-percentage">50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}