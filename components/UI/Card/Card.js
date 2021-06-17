import React from "react";
import PropTypes from "prop-types";


export default function Card(props) {
	return (
		<div
			className={["card", `card--${props.type}`].join(" ")}
			style={{
				borderRadius: props.roundCorner ? "5px" : "0",
				backgroundColor: props.bg,
			}}>
			<img className="card__img" src={props.imageUrl} style={{
					marginBottom:
						props.title == undefined || props.title.length < 1
							? "0"
							: "1.2rem",
				}} />
			<span
				className="card__title"
				style={{
					display:
						props.title == undefined || props.title.length < 1
							? "none"
							: "block",
				}}>
				{props.title} <i className="fab fa-facebook"></i>
			</span>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	roundCorner: PropTypes.bool,
	bg: PropTypes.string,
	type: PropTypes.oneOf(["small", "medium", "large"]),
};

Card.defaultProps = {
	title: "Goku",
	imageUrl:
		"https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/09/Dragon-Ball-Goku-Naive-Silly.jpg",
	roundCorner: false,
	bg: "#fff",
	type: "medium",
};
