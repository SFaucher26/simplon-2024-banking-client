import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import "./Navbar.css";

export default function Navbar() {
    const { logout } = useAuth();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // État pour le menu burger

    const isActive = (path) => (location.pathname === path ? "active" : "");

    // Fonction pour fermer le menu après un clic sur un lien
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-brand">Finance Tracker</div>

            {/* Bouton menu burger */}
            <button className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            {/* Liens de navigation */}
            <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                <Link to="/payment-methods" className={isActive("/payment-methods")} onClick={closeMenu}>Payment Methods</Link>
                <Link to="/" className={isActive("/")} onClick={closeMenu}>Transactions</Link>
                <Link to="/categories" className={isActive("/categories")} onClick={closeMenu}>Categories</Link>
                <button className="logout-button" onClick={() => { logout(); closeMenu(); }}>Logout</button>
            </div>
        </nav>
    );
}
