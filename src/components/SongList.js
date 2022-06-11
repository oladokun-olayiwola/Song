import React, { Component } from "react";
import { connect } from 'react-redux'
import { selectSong} from '../actions'

class SongList extends Component{
    render (){
        const renderedList = this.props.songs.map((song) => {
            return (
              <div key={song.name} className="ui list">
               
                <div className="item">
                <button 
                className="ui right floated button primary"
                onClick={() => {this.props.selectSong(song)}}
                >
                    Select
                  </button>
                  <h3>{song.name}</h3>
                  <p>{song.duration}</p>
                </div>
              </div>
            );
        })
        return (
            <div>{renderedList}</div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { songs: state.songs}
}

 export default connect(mapStateToProps, { selectSong })(SongList)