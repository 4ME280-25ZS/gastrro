import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';
import logo from '../assets/logo2.png';
import { supabase } from '../services/supabaseClient';

export default function Login({ onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const run = async () => {
      try {
        if (supabase) {
          const { data, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password
          });
          if (authError || !data?.session?.user) {
            setError('Neplatný email nebo heslo');
            return;
          }
          login(data.session.user, data.session.access_token);
          setError('');
          return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
          setError('Neplatný email nebo heslo');
          return;
        }
        const mockToken = 'mock_token_' + Date.now();
        login({ email: user.email, username: user.username }, mockToken);
        setError('');
      } catch (err) {
        setError('Přihlášení se nezdařilo');
      }
    };

    run();
  };

  return (
    <div className="auth-container">
      <div className="auth-layout">
        <div className="auth-benefits">
          <h3>Proč se přihlásit?</h3>
          <div className="benefit-item">
            <span className="benefit-icon">✅</span>
            <div>
              <h4>Sleduj expiraci jídla</h4>
              <p>Už nikdy nezapomeň na potraviny v lednici</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🍳</span>
            <div>
              <h4>Personalizované recepty</h4>
              <p>Doporučení na míru tvým surovinám</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💰</span>
            <div>
              <h4>Přehled o úsporách</h4>
              <p>Sleduj, kolik ušetříš nevyhazováním jídla</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📱</span>
            <div>
              <h4>Kdykoliv a kdekoliv</h4>
              <p>Přístup z jakéhokoliv zařízení</p>
            </div>
          </div>
        </div>
        <div className="auth-box">
          <img src={logo} alt="Zlatá Lednice" className="auth-logo" />
          <h1 className="app-title">Zlatá Lednice</h1>
          <h2>Přihlášení</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Přihlásit se</button>
        </form>
        <p>Nemáš účet? <button onClick={onSwitchToRegister} className="link-btn">Registruj se</button></p>
      </div>
      </div>
    </div>
  );
}
