import React from "react";
import styles from './Header.module.css';
import Logo from "./Logo";
import Button from "../Form/Button";

const Header = () => {
    return <header className={styles.header}>
        <Logo/>
        <Button id="btnAddComputer" 
        disabled={false} 
        disabledStyle={false} 
        >
          + Add Computer
      </Button>  
    </header>
};

export default Header;