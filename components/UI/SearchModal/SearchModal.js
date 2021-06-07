import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import axios from 'axios';

const SearchModal = (props) => {
	const globalState = useStateContext();
	const [popData, setPopData] = useState([]);
	const [searchData, setSearchData] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [text, setText] = useState('');

	useEffect(async () => {
		try {
			let popData = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
			);
			setPopData(popData.data.results.filter((item,i)=>i<14))
			
			setShowResults(false)
			console.log('popdata', popData.data.results)
		} catch (error) {
			console.log("error");
			console.log(error);
		}
	}, [])


	useEffect(() => {
		if(globalState.searchOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
  }, [globalState.searchOpen])
	

	const handleInput = async (e) => {
		try {
			setText(e.target.value)
			let popData = await axios.get(
				`https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
			);
			setSearchData(popData.data.results.filter((item, i) => item.media_type === 'tv' || item.media_type === 'movie'))
			setShowResults(true)
		} catch (error) {
			setShowResults(false)
		}
		
		// console.log('searchResult', popData.data.results.filter((item, i) => item.media_type === 'tv' || item.media_type === 'movie'))
		// setSearchData()
	}

	return (
		<div
			className={`search-modal ${
				globalState.searchOpen ? "search-modal--active" : ""
			}`}>
			<div className="search-modal__input-group ">
				<input
					className="search-modal__input"
					type="text"
					placeholder="search for a title"
					value={text}
					onChange={handleInput}
				/>
				<div
					className="search-modal__close-btn"
					onClick={() =>
						globalState.setSearchOpenAction(!globalState.searchOpen)
					}>
					<i className="fas fa-times" />
				</div>
			</div>

			<h3 className="search-modal__title">Popular Searches</h3>

			<div className="search-modal__thumbnails">
					{showResults && searchData.length > 1 ? <SearchResults searchData={searchData} /> : <PopularResults popData={popData}  /> }
			</div>
		</div>
	);
};

const PopularResults = (props) => {
	return props.popData.map((item, index) => {
		return(
			<a href={`/movie/${item.id}`} className="search-modal__thumbnail" key={index}>
				<img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
				<div className="search-modal__top-layer">
					<i className="fas fa-play" />
				</div>
			</a>
		)
	})
}

const SearchResults = (props) => {
	console.log(props.searchData)
	// return(<h1>test</h1>)
	
	return props.searchData.map((item, index) => {
		return (
			<a href={`/${item.media_type}/${item.id}`} className="search-modal__thumbnail" key={index}>
				<img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
				<div className="search-modal__top-layer">
					<i className="fas fa-play" />
				</div>
			</a>
		)
	}) 
	
}

export default SearchModal;
