

const FeaturedMedia = (props) => {
  return(
    <div className="featured-media">
      <iframe 
        className="featured-media__video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16"
        allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />

      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">Mortal Kombat</div>
          <div className="featured-media__playing">NOW PLAYING</div>
          <div className="featured-media__location">In theaters and on HBO MAX. Streaming throughout May 23.</div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn">
              <i className="fas fa-play"/>
            </div>
            <div className="featured-media__info-btn">MORE INFO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMedia;