import React from 'react'

export default function TravelCard(props) {

    return (
        <div className='container'>
            <img className='picture' src={props.imageUrl}></img>
            <section className='card'>
                <p className='location'>
                    {props.location} 
                    <a className='mapLink' href={props.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1 className='title'>{props.title}</h1>
                <p className='description'>{props.description}</p>
            </section>
        </div>
    )
}