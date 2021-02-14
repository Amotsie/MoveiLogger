import React from 'react'
import TMBD from "../Resources/tmdb.svg";

const footer = {
    position: "relative",
    left: '0',
    bottom: '0',
    width: '100%',
    height: '50px',
    backgroundColor: '#032541',
    color: 'white',
    fontSize: "20px",
    marginTop: '10px',
    paddingBottom: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}
const image = {
    height: "20px",
    objectFit: 'cover',
    
}

export const Footer = () => {
    return (
       <section style={footer}>
       <p>&copy; A.Motsie 2020</p>
        <img src={TMBD} alt="Logo of the movie database" style={image}/>
       </section>
    )
}
