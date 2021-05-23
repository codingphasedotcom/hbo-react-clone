import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from '../components/AuthCheck'

export default function Home() {
	const globalState = useStateContext();
	const router = useRouter();
	useEffect(() => {}, []);
	return AuthCheck(
		<MainLayout>
			<FeaturedMedia />
      <MediaRow title="Movies" type="large-v" endpoin='api/movies/234' />
      {/* <MediaRow title="Series" type="small-h" endpoin='api/movies/234' />
      <MediaRow title="Action" type="small-v" endpoin='api/movies/234' />
      <MediaRow title="Horror" type="small-v" endpoin='api/movies/234' />
      <MediaRow title="Animations" type="large-h" endpoin='api/movies/234' />
      <MediaRow title="Sci-fi" type="small-v" endpoin='api/movies/234' /> */}
			
		</MainLayout>
	);
}
