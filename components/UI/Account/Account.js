import ls from "local-storage";
import { useEffect } from "react";
import { useStateContext } from "../../HBOProvider";


const Account = (props) => {
	const globalState = useStateContext();


	useEffect(() =>{
		if(globalState.accountModalOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [globalState.accountModalOpen])

	const watchMedia = (url) => {
			router.push(url)
			console.log('send user to media page ' + props.mediaUrl)
	}

	const showWatchList = () => {
		
		return globalState.watchList.map((item, index) => {
			console.log(item)
			console.log(item.mediaId)
			return(
				<div className="account__watch-video" key={index}>
					<img src={item.mediaUrl} />
					<div className="account__watch-overlay">
						<div className="account__watch-buttons">
							<div className="account__watch-circle" onClick={watchMedia}>
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
	return (
		<div
			className={`account ${
				globalState.accountModalOpen ? "account--active" : ""
			}`}>
			<div className="account__details">
				<div className="account__title">My List</div>
				<div className="account__watch-list">
					{globalState.watchList !== null ? showWatchList() : ''}
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
					<li>
						<a href="/">Account</a>
					</li>
					<li>
						<a href="/">Sign Out</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Account;
