import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ActionFiguresPage from './pages/ActionFiguresPage';
import AnimeReviewsPage from './pages/AnimeReviewsPage';
import GamesReviewsPage from './pages/GamesReviewsPage';
import TierListsPage from './pages/TierListsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/action-figures" component={ActionFiguresPage} />
          <Route path="/anime-reviews" component={AnimeReviewsPage} />
          <Route path="/games-reviews" component={GamesReviewsPage} />
          <Route path="/tier-lists" component={TierListsPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;