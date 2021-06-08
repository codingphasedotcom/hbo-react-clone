import { useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";

const Account = (props) => {
	const globalState = useStateContext();
	const router = useRouter();


	useEffect(() =>{
		if(globalState.accountModalOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [globalState.accountModalOpen])


	const watchMedia = (url) => {
		router.push(url);
		globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
	}

	const showWatchList = () => {
		return globalState.watchList.map((item, index) => {
			return(
				<div className="account__watch-video" key={index}>
					<img src={item.mediaUrl} />
					<div className="account__watch-overlay">
						<div className="account__watch-buttons">
							<div className="account__watch-circle" onClick={() => watchMedia(`/${item.mediaType}/${item.mediaId}`)}>
								<i className="fas fa-play" />
							</div>
							<div className="account__watch-circle" onClick={() => globalState.removeFromList(item.mediaId)}>
								<i className="fas fa-times" />
							</div>
						</div>
					</div>
				</div>
			)
		})
	}
	const signOut = () => {
		ls.remove('users')
		router.push(`/`);
	}
	return (
		<div
			className={`account ${
				globalState.accountModalOpen ? "account--active" : ""
			}`}>
			<div className="account__details">
				<div className="account__title">My List</div>
				<div className="account__watch-list">
					{globalState.watchList !== null ? showWatchList() : 'Sorry No Movies Added'}
				</div>
			</div>
			<div className="account__menu">
				<ul className="account__main">
					<li>
						<a href="/" className="active">
							My List
						</a>
					</li>
				</ul>
				<div className="side-nav__divider" />
				<ul className="account__main">
					<li onClick={signOut}>
						<a >Account</a>
					</li>
					<li onClick={signOut}>
						<a >Sign Out</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Account;
