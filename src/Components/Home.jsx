import React from "react";
import styles from './Home.module.css';
import SearchForm from "./Search/SearchForm";
import ResultsContainer from "./Results/ResultsContainer";
import ComputerCard from "./Cards/ComputerCard";
import { GlobalContext } from "../GlobalContext";

const Home = () => {
    const globalContext = React.useContext(GlobalContext);
    return <div className={styles.home}>
        
        <ComputerCard/> 
    </div>
};

// <SearchForm/>

// quantos computerCards forem necesarios 
// e depois aumentar 
// ou meter um searchResults igual aquele la 

//    <ResultsContainer results={globalContext.searchResult} searching={globalContext.searching}/>

export default Home;

// esse cara aqui, faze o fetch quando abrir 