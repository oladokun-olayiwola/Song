import React, { Component } from "react";
import { connect } from 'react-redux'

class SongDetail extends Component {

    render () {
      const name =  prompt('What is you name')
      console.log(name)
        if (!this.props.selected) {
            return (
              <div className="detail ui list">
                <div className="item">
                  <center><h2>{name} please select a song</h2></center>
                </div>
              </div>
            );
        }
        return (
          <div className="detail ui list">
            <div className="item">

              <h1>Title: {this.props.selected.name}</h1>
              <h3>Duration: {this.props.selected.duration}</h3>
            </div>
          </div>
        );

    }
}

const mapStateToProps = state => {
    return { selected: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)