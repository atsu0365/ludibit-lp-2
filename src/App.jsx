import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1>Welcome to Ludibit</h1>
      </header>
      <main className="p-4">
        <section className="my-4">
          <h2 className="text-xl font-bold">About Ludibit</h2>
          <p className="mt-2">Ludibit is an innovative platform designed to help children develop good habits through gamification.</p>
        </section>
        <section className="my-4">
          <h2 className="text-xl font-bold">Features</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Task Management</li>
            <li>Points System</li>
            <li>Achievements</li>
            <li>Leaderboard</li>
          </ul>
        </section>
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>© 2024 Ludibit. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
