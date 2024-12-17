import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>Cool Landing Page</h1>
        <nav>
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#footer">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <h2>Welcome to Our Amazing Website</h2>
        <p>Your one-stop solution for all your needs</p>
        <button>Get Started</button>
      </section>

      {/* Columns Section */}
      <section className="columns">
        <div className="column">
          <h3>Column 1</h3>
          <p>Some interesting content goes here.</p>
        </div>
        <div className="column">
          <h3>Column 2</h3>
          <p>More cool stuff in this column.</p>
        </div>
        <div className="column">
          <h3>Column 3</h3>
          <p>Don't forget about this section!</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Feature 1</h3>
            <p>Details about feature 1.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 2</h3>
            <p>Details about feature 2.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 3</h3>
            <p>Details about feature 3.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer">
        <p>
          &copy; 2024 Cool Landing Page. All rights reserved. <a href="#hero">Back to
          top</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

