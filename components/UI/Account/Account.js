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

	return (
		<div
			className={`account ${
				globalState.accountModalOpen ? "account--active" : ""
			}`}>
			<div className="account__details">
				<div className="account__title">My List</div>
				<div className="account__watch-list">
					<div className="account__watch-video">
							<img src="https://cdn.shopify.com/s/files/1/0013/2874/2466/products/rick-and-morty-tv-invasion-poster-24-x-36-581_1024x.jpg?v=1616627934" />
							<div className="account__watch-overlay">
								<div className="account__watch-buttons">
									<div className="account__watch-circle">
										<i className="fas fa-play" />
									</div>
									<div className="account__watch-circle">
										<i className="fas fa-times" />
									</div>
								</div>
							</div>
						</div>
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
