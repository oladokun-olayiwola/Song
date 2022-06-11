import React from 'react'

const SongDetail = ({selected}) => {
    return (
        <div className='detail ui list'>
            <div className='item'>
                <h1>Details Of selected song</h1>
                <h1>Title: {selected.name}</h1>
                <h3>Duration: {selected.duration}</h3>
            </div>
        </div>
    )
}

export default SongDetail