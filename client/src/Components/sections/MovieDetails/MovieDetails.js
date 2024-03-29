import React from 'react'
import "./MovieDetails.scss";
import Views from '../../../Assets/Icons/views.svg';
import Likes from '../../../Assets/Icons/likes.svg';
import {formatDate, formatMomentDate} from '../../../utilities/utilities';


function MovieDetails({videoDetails}) {




    let formattedVideoDate = formatDate(videoDetails.timestamp);



    return (
        <section className='movie-details'>
            <h1 className="movie-details__title">{videoDetails.title}</h1>
            <div className="movie-metadata">
                <div className="meta-data-wrapper--creator-info">
                    <span className="movie-metadata__creator">By {videoDetails.channel}</span><span className="movie-metadata__date">{formattedVideoDate} | {formatMomentDate(videoDetails.timestamp)}</span>
                </div>
                <div className="meta-data-wrapper--public-info">
                    <div className="meta-data-wrapper--views">
                        <img src={Views} alt="views icon" />
                        <span className="movie-metadata__views">{videoDetails.views}</span>
                    </div>
                    <div className="meta-data-wrapper--likes">
                        <img src={Likes} alt="likes icon" />
                        <span className="movie-metadata__likes">{videoDetails.likes}</span>
                    </div>
                </div>
            </div>
            <p className="movie-details__description">{videoDetails.description}</p>
        </section>
    )
}

export default MovieDetails