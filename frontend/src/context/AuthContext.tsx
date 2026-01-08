import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
	token: string | null;
	userId: string | null;
	login: (token: string, expiresIn: number, userId: string) => void;
	logout: () => void;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();

	// Initialize state from sessionStorage to persist login across refreshes
	const [token, setToken] = useState<string | null>(
		sessionStorage.getItem("jwt_token")
	);
	const [userId, setUserId] = useState<string | null>(
		sessionStorage.getItem("user_id")
	);

	const login = (newToken: string, expiresIn: number, newUserId: string) => {
		// 1. Update State
		setToken(newToken);
		setUserId(newUserId);

		// 2. Store in Session Storage
		sessionStorage.setItem("jwt_token", newToken);
		sessionStorage.setItem("user_id", newUserId);

		// Calculate absolute expiry time (current time + seconds to expire)
		const expiryTime = new Date().getTime() + expiresIn * 1000;
		sessionStorage.setItem("token_expiry", expiryTime.toString());

		// 3. Redirect to Dashboard
		navigate("/");
	};

	const logout = () => {
		setToken(null);
		setUserId(null);
		sessionStorage.clear();
		navigate("/login");
	};

	// Check if token is expired on load/render
	const checkTokenExpiry = () => {
		const expiry = sessionStorage.getItem("token_expiry");
		if (expiry && new Date().getTime() > parseInt(expiry)) {
			logout();
			return false;
		}
		return !!token;
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				userId,
				login,
				logout,
				isAuthenticated: checkTokenExpiry(),
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
};
