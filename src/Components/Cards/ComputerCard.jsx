import React from "react";
import Styles from "./ComputerCard.module.css";

import ActionButtons from "./ActionButtons";
import ComputerInfo from "./ComputerInfo";
import ComputerImage from "./ComputerImage";

export const ComputerCard = () => {
    return <div className={Styles.computerCard}>
        <ComputerImage/>
        <ComputerInfo data={[]}/>
        <ActionButtons />
    </div>;
};

export default ComputerCard