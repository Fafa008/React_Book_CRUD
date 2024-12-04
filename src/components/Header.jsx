import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Gestion Bibliotheque</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" style={{ color: '#000' }} exact>
        Liste des Livres
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active" style={{ color: '#000' }}>
        Ajouter un Livre
        </NavLink>
      </div>
    </header>
  );
};

export default Header;