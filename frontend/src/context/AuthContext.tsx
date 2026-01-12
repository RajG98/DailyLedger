import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
	const location = useLocation();

	// 1. Initialize State
	const [token, setToken] = useState<string | null>(() =>
		sessionStorage.getItem("jwt_token")
	);
	const [userId, setUserId] = useState<string | null>(() =>
		sessionStorage.getItem("user_id")
	);
	const [isReady, setIsReady] = useState(false); // New: Wait for checks to complete

	// 2. Login Action
	const login = (newToken: string, expiresIn: number, newUserId: string) => {
		setToken(newToken);
		setUserId(newUserId);
		sessionStorage.setItem("jwt_token", newToken);
		sessionStorage.setItem("user_id", newUserId);

		const expiryTime = new Date().getTime() + expiresIn;
		sessionStorage.setItem("token_expiry", expiryTime.toString());

		navigate("/");
	};

	// 3. Logout Action
	const logout = () => {
		setToken(null);
		setUserId(null);
		sessionStorage.clear();
		navigate("/login");
	};

	// 4. Effect: Check Token Expiry on Mount and Route Change
	useEffect(() => {
		const checkAuth = () => {
			const storedToken = sessionStorage.getItem("jwt_token");
			const expiry = sessionStorage.getItem("token_expiry");
			// console.log("Now:", new Date(Date.now()));
			// console.log("Expiry:", new Date(parseInt(expiry)));
			// If no token, we are not authenticated.
			if (!storedToken) {
				setIsReady(true);
				return;
			}

			// If token exists but expired, force logout
			if (expiry && new Date().getTime() > parseInt(expiry)) {
				logout();
			}

			setIsReady(true);
		};

		checkAuth();
		// We rely on location.pathname to re-check on route changes if needed
	}, [location.pathname]);

	// 5. Derived State (No side effects here!)
	const isAuthenticated = !!token;

	return (
		<AuthContext.Provider
			value={{ token, userId, login, logout, isAuthenticated }}
		>
			{/* Only render children when we have finished checking auth state */}
			{isReady ? children : null}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
};
