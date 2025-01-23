import React from "react";
import style from "./ResultsContainerItem.module.css";

const ResultsContainerItem = ({ text, fontSize = '16px', extraItem }) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <span className={style.text} style={{ fontSize }}>
                    {text}
                </span>
                {extraItem && <div className={style.extraItem}>{extraItem}</div>}
            </div>
            <hr className={style.line} />
        </div>
    );
};

export default ResultsContainerItem;
