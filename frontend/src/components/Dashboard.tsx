import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Import Auth to use Logout
// Note: Imports changed to go up one level (../)
import { Sidebar } from "../components/Sidebar";
import { StatsCards } from "../components/StatsCards";
import { SpendingReport } from "../components/SpendingReport";
import { TransactionHistory } from "../components/TransactionHistory";
import { CardSection } from "../components/CardSection";
import "../styles/custom.css"; // Adjust path if needed

export const Dashboard = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { logout } = useAuth(); // Hook up logout

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="dashboard-container">
			{/* Mobile Header with Hamburger AND Logout */}
			<div className="d-flex d-lg-none justify-content-between align-items-center p-3">
				<button
					className="hamburger-btn"
					onClick={toggleSidebar}
					aria-label="Toggle menu"
					style={{ background: "none", border: "none" }}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M3 12h18M3 6h18M3 18h18"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</button>
				<button
					onClick={logout}
					className="btn btn-sm btn-outline-danger"
				>
					Logout
				</button>
			</div>

			{/* Overlay for mobile */}
			{sidebarOpen && (
				<div
					className="sidebar-overlay d-lg-none"
					onClick={toggleSidebar}
				></div>
			)}

			<div className="row g-0 h-100">
				{/* Sidebar */}
				<div
					className={`col-auto sidebar-wrapper ${sidebarOpen ? "show" : ""}`}
				>
					{/* You might want to pass 'logout' into Sidebar later */}
					<Sidebar onClose={() => setSidebarOpen(false)} />

					{/* Temporary Desktop Logout Button (if not inside Sidebar) */}
					<div className="d-none d-lg-block p-3">
						<button
							onClick={logout}
							className="btn btn-danger w-100"
						>
							Logout
						</button>
					</div>
				</div>

				{/* Main Content */}
				<div className="col main-content">
					<div className="container-fluid p-3 p-md-4">
						<StatsCards />

						<div className="mt-3 mt-md-4">
							<SpendingReport />
						</div>

						<div className="mt-3 mt-md-4">
							<TransactionHistory />
						</div>
					</div>
				</div>

				{/* Right Sidebar - Card Section */}
				<div className="col-auto right-sidebar d-none d-xl-block">
					<CardSection />
				</div>
			</div>
		</div>
	);
};
