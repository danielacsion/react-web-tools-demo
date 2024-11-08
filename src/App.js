import React from "react";
import './App.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1>React Web Tools & Frameworks</h1>
      <p>Exploring the Basics of React for Scalable and Maintainable Web Pages</p>
    </header>
  );
};


const MainContent = () => {
  return (
    <main className="App-main">
      <section className="intro-section">
        <h2>Why React?</h2>
        <p>
          React is a powerful JavaScript framework for building user interfaces. It’s particularly useful for building
          large-scale, interactive web applications because of its component-based structure and flexibility.
        </p>
      </section>

      <section className="tools-section">
        <h2>Essential Web Tools for React</h2>
        <ul>
          <li>Webpack: Bundles JavaScript and other assets.</li>
          <li>Babel: Transpiles modern JavaScript to ensure cross-browser compatibility.</li>
          <li>ESLint: Ensures code quality and consistency across projects.</li>
          <li>npm/yarn: Manages dependencies for React projects.</li>
        </ul>
      </section>
    </main>
  );
};


const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 React Web Tools.</p>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
