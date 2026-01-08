import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Logic Imports
import { AuthProvider } from "./context/AuthContext";
import { RequireAuth } from "./components/RequireAuth";

// Page Imports
import { AuthPage } from "./components/AuthPage";
import { Dashboard } from "./components/Dashboard";

export default function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes>
					{/* Public Login Route */}
					<Route
						path="/login"
						element={<AuthPage />}
					/>

					{/* Protected Dashboard Route */}
					<Route
						path="/"
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/>
				</Routes>
			</AuthProvider>
		</Router>
	);
}
