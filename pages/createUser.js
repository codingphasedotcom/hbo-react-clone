import Head from 'next/head'


export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo"/>
          <span className="create-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="create-user__form">
          <img className="create-user__user-img" src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" />
            <div className="create-user__input-group">
              <label>Name</label>
              <input type="text" className="create-user__inputText"/>
              <div className="create-user__colors">
                <div className="create-user__color create-user__color--active" style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(238,255,18,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(135,30,66,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(18,51,255,1) 100%)'
                }} />
                <div className="create-user__color " style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(30,129,135,1) 100%)'
                }} />
              </div>
            </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  )
}
