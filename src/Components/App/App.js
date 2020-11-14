import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
      {
        name: 'name_1',
        artist: 'artist_1',
        album: 'album_1',
        id: 1
      },
      {
        name: 'name_2',
        artist: 'artist_2',
        album: 'album_2',
        id: 2
      },
      {
        name: 'name_3',
        artist: 'artist_3',
        album: 'album_3',
        id: 3
      }
    ]};
  }

  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          //<Playlist />
        </div>
      </div>
    </div>
  );
}
}
export default App;
