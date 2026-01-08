import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const AuthPage: React.FC = () => {
	const { login } = useAuth();
	const [isLoginView, setIsLoginView] = useState(true);

	// Form State
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState(""); // Only for signup
	const [error, setError] = useState("");

	// Mock API Call function
	const handleAuth = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			// --- SIMULATING API CALL ---
			// Replace this with your actual fetch/axios call
			// const response = await fetch(isLoginView ? '/api/login' : '/api/signup', { ... });

			console.log(`Submitting to ${isLoginView ? "Login" : "Signup"} API...`);

			// Simulating a successful response delay
			await new Promise((resolve) => setTimeout(resolve, 800));

			// Mock Response Data
			const mockResponse = {
				token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
				expiresIn: 3600, // 1 hour in seconds
				userId: "user_12345_unique",
			};
			// ---------------------------

			// Use the login function from Context
			login(mockResponse.token, mockResponse.expiresIn, mockResponse.userId);
		} catch (err) {
			setError("Authentication failed. Please try again.");
		}
	};

	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div
				className="card shadow p-4"
				style={{ maxWidth: "400px", width: "100%" }}
			>
				<h3 className="text-center mb-4">
					{isLoginView ? "Login" : "Sign Up"}
				</h3>

				{error && <div className="alert alert-danger">{error}</div>}

				<form onSubmit={handleAuth}>
					{/* Name Field - Only for Signup */}
					{!isLoginView && (
						<div className="mb-3">
							<label className="form-label">Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="John Doe"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required={!isLoginView}
							/>
						</div>
					)}

					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input
							type="email"
							className="form-control"
							placeholder="name@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="mb-3">
						<label className="form-label">Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="******"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary w-100"
					>
						{isLoginView ? "Login" : "Sign Up"}
					</button>
				</form>

				<div className="text-center mt-3">
					<small>
						{isLoginView
							? "Don't have an account? "
							: "Already have an account? "}
						<span
							className="text-primary"
							style={{ cursor: "pointer", fontWeight: "bold" }}
							onClick={() => setIsLoginView(!isLoginView)}
						>
							{isLoginView ? "Sign Up" : "Login"}
						</span>
					</small>
				</div>
			</div>
		</div>
	);
};
