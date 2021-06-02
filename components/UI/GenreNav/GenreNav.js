import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from "next/link";

const GenreNav = (props) => {
	const [activeNav, setActiveNav] = useState(false);

	setTimeout(() => setActiveNav(true), 100)
	return (
		<ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ''}`}>
			<GenreList genresData={props.genresData} mediaType={props.mediaType} />
		</ul>
	);
};

const GenreList = (props) => {
	console.log('props', props)
	// return <h1>test</h1>
	return props.genresData.map((item) => {
		return (
			<li class="--active" key={item.id}>
					<Link href="/">
						<a >{item.name}</a>
					</Link>
				</li>
		)
	})
}

export default GenreNav;
