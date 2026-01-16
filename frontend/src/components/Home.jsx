import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo2.png';

export default function Home({ onEnter }) {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-wrapper">
            <img src={logo} alt="Zlatá Lednice" className="home-logo" />
          </div>
          
          <h1 className="hero-title">ZLATÁ LEDNICE</h1>
          <p className="hero-subtitle">Tvůj chytrý asistent pro správu lednice</p>
          <p className="hero-description">Nikdy už nevyhazuj zkažené jídlo. Ušetři tisíce korun ročně a objevuj úžasné recepty přímo z ingrediencí, které už máš doma.</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">Méně odpadu</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Kč ušetříš ročně</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Zkažených potravin</span>
            </div>
          </div>
          
          <button onClick={onEnter} className="enter-btn">
            <span>PROZKOUMAT</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧊</div>
            <h3>Spravuj svou lednici</h3>
            <p>Sleduj ingredience a jejich expiraci</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🍳</div>
            <h3>Objevuj recepty</h3>
            <p>Doporučení na míru tvým surovinám</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Spořej peníze</h3>
            <p>Méně odpadu, více úspor</p>
          </div>
        </div>
      </section>
    </div>
  );
}
