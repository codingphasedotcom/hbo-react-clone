import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../../components/Layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholders from "../../components/UI/Placeholders/PlaceHolders";
import GenreNav from "../../components/UI/GenreNav/GenreNav";
import axios from 'axios';
import { shuffleArray } from "../../components/utilities";


export default function MediaTypePage(props) {
	const globalState = useStateContext();
	const router = useRouter();
	useEffect(() => {}, []);
	return AuthCheck(
		<MainLayout>
			<FeaturedMedia
				mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
				title={props.query.mediaType === 'movie' ? props.featuredData.title : props.featuredData.name}
				
				linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
				type="single"
			/>
      <GenreNav mediaType={props.query.MediaType} genresData={props.genresData} />
			<LazyLoad
				offset={-400}
				placeholder={<Placeholders title="Movies" type="large-v" />}>
				<MediaRow
					title="Movies"
					type="large-v"
					endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
				/>
			</LazyLoad>

			
		</MainLayout>,
	);
}

export async function getServerSideProps(context) {
	let genresData;
	let featuredData;
	try {
		genresData = await axios.get(
			`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
		);
		featuredData = await axios.get(
			`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
		);
		console.log("genresData");
		console.log(genresData.data);
	} catch (error) {
		console.log("error");
		console.log(error);
	}
	return {
		props: {
			genresData: genresData.data.genres,
			featuredData: shuffleArray(featuredData.data.results)[0],
			query: context.query,
		}, // will be passed to the page component as props
	};
}

