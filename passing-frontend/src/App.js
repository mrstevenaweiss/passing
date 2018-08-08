import React, { Component } from 'react';
import NavContainer from './containers/NavContainer'
import SearchContainer from './containers/SearchContainer'
import PassingListContainer from './containers/PassingListContainer'
import PostContainer from './containers/PostContainer'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="app-header">
          <nav>
            <NavContainer />
          </nav>
        </header>

        <main>
          <p className="app-container">
            <PostContainer />
            <PassingListContainer />
            <SearchContainer />
          </p>
        </main>

        <footer className="app-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
