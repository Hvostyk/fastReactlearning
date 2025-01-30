import React from 'react';
import style from '../styles/Market.module.css';
import { EnergyInfo } from '../../scripts/energyinfo';
import { Fragment } from 'react';

function Product({ energyInfo }) {
    const ProductList=energyInfo.map((item) => (
        <Fragment key={item.id}>

        <div className={style.product}>
            <div className={style.container}>
                <div className={style["drink-image_container"]}>
                    <img src={item.source} alt="" className={style.drinkimg} />
                </div>
                <div className={style.info}>
                    <div className={style.title}>
                        <span>{item.title}</span>
                    </div>
                    <div className={style.structure}>
                        <div className={style.component}>
                            <div className={style.comptitle}>
                                <span>callories</span>
                            </div>
                            <div className={style.compinfo}>
                                <span>{item.callories}</span>
                            </div>
                        </div>
                        <div className={style.component}>
                            <div className={style.comptitle}>
                                <span>taurine</span>
                            </div>
                            <div className={style.compinfo}>
                                <span>{item.taurine}</span>
                            </div>
                        </div>
                        <div className={style.component}>
                            <div className={style.comptitle}>
                                <span>caffeine</span>
                            </div>
                            <div className={style.compinfo}>
                                <span>{item.coffeine}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.priceCon}>
                    <button className={style.price}>
                        {item.cost} Rub
                    </button>
                </div>
            </div>
        </div>
        </Fragment>
        ));
        return (ProductList);
    }

function Market() {
    return (
        <div className={style.market}>
            <div className={style["product-cells"]}>
                <Product energyInfo={EnergyInfo} />
            </div>
        </div>
    );
}

export default Market;
