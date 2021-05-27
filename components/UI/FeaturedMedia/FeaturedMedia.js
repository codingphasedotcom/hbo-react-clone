

const FeaturedMedia = (props) => {
  const clickedPlay = () => {

    console.log('send user to media page ' + props.mediaUrl)
  }
  return(
    <div className="featured-media">
      <iframe 
        className="featured-media__video"
        width="100%"
        height="100%"
        src={props.videoUrl}
        allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />

      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title" onClick={clickedPlay}>{props.title}</div>
          <div className="featured-media__playing">NOW PLAYING</div>
          <div className="featured-media__location">{props.location}</div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={clickedPlay}>
              <i className="fas fa-play"/>
            </div>
            <div className="featured-media__info-btn" onClick={clickedPlay}>MORE INFO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMedia;