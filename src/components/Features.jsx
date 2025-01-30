import style from "../styles/Features.module.css";

function Feature({mainText, addText}){
    return(
        <div className={style["feature-container"]}>
            <div className={style["main-text"]}>
                {mainText}
            </div>
            <div className={style["add-text"]}>
                {addText}
            </div>
        </div>
    );
}

function Features(){
    return(
        <div className = {style["features-block"]}>
            <Feature 
                mainText= "10K"
                addText = "Довольных покупателей"
            />
            
            <Feature 
                mainText= "130+"
                addText = "Позиций товаров"
            />
            
            <Feature 
                mainText= "5"
                addText = "Лет на рынке"
            />
            
        </div>
    )
}

export default Features;