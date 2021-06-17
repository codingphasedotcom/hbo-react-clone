import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav';
import PropTypes from "prop-types";


const MainLayout = (props) => {
  return(<div style={{
    background: 'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,1) 100%)', minHeight: '100vh', backgroundAttachment: 'fixed'
  }}>
    <Header />
    <section className="content-container">
      {props.children}
    </section>
  </div>)
}



// Card.propTypes = {
// 	title: PropTypes.string,
// 	imageUrl: PropTypes.string,
// 	roundCorner: PropTypes.bool,
// 	bg: PropTypes.string,
// 	type: PropTypes.oneOf(["small", "medium", "large"]),
// };

// Card.defaultProps = {
// 	title: "Goku",
// 	imageUrl:
// 		"https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/09/Dragon-Ball-Goku-Naive-Silly.jpg",
// 	roundCorner: false,
// 	bg: "#fff",
// 	type: "medium",
// };



export default MainLayout;