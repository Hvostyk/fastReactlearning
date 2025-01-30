import style from '../styles/Firstpage.module.css'

function Firstpage(){
    return(

        <div className = {style["home-page"]}>

            <div className = {style["image-container"]}>
                <img  className = {style["home-page-image"]} 
                    src="./public/images/home-page-image.png"
                    alt = "1234"/>
            </div>

            <div className = {style["hero-text"]}>
                <div className = {style.over1000}> 0 точек по всей Москве </div>

                <div className = {style.content}>
                    <div className = {style.heading}> Попробуйте Энергетики Со Всего <span className={style["marked-word"]}>Мира</span> </div>
                    <div className = {style["help-info"]}> StopYourHeart предоставляет огромную коллекцию энергетиков более чем из 0 стран на любой вкус и цвет</div>
                </div>

                <div className = {style["hero-buttons"]}>
                    <button className = {style["to-drinks-button"]}> К энергетикам </button>
                    <button className = {style["second-button"]}>Заглушечка </button>
                </div>
            </div>
            
        </div>

    );
}

export default Firstpage;