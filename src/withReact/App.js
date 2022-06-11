import React, {useState} from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'

const App = () => {

    const songs = [
      {
        name: "Goons mi",
        duration: "03:12",
      },
      {
        name: "Picture Perfect",
        duration: "02:34",
      },
      {
        name: "Magic",
        duration: "03:45",
      },
      {
        name: "Loving You",
        duration: "03:01",
      },
      {
        name: "Eni Duro",
        duration: "03:33",
      },
    ];

    const [selected, setSelected] = useState(songs[0])
    
    return (
      <div className="full">
        <div className="half">
          <SongList songs={songs} select={setSelected}/>
        </div>
        <div className="detail">
          <SongDetail selected={selected}/>
        </div>
      </div>
    );
}

export default App