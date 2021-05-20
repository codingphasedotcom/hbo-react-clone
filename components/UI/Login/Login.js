import Head from 'next/head'
import { useStateContext } from '../../HBOProvider';

const Login = () => {
  const globalState = useStateContext();


  return (
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo"/>
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form">
          <div className="login-user__user-box">
            <img className="login-user__user-img" src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" />
            <div className="login-user__user-name">{globalState.test}</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
  )
}
export default Login;