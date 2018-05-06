import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    // Updates Playlist name to value user inputs
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return(
          <div className="Playlist">
  <input defaultValue={this.props.name} onChange={this.handleNameChange}/>
  <TrackList onRemove={this.props.onRemove}  tracks={this.props.tracks} />
  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
        );
    }
}

export default Playlist;
