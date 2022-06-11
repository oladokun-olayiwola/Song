import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'
import '../withReact/SongList.css'

const App = () => {
    return (
      <div className="full">
        <div className="half">
          <SongList />
        </div>
        <div className="detail">
          <SongDetail />
        </div>
      </div>
    );
}

export default App