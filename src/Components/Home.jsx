import React, { useEffect } from "react";
import styles from './Home.module.css';
import SearchForm from "./Search/SearchForm";
import ResultsContainer from "./Results/ResultsContainer";
import ComputerCard from "./Cards/ComputerCard";
import { GlobalContext } from "../GlobalContext";

const Home = () => {
    async function fetchInitialData(event) {
        try
        {          
          let data = await fetch(`http://localhost:5019/api/computer?limit=10&offset=0`);
          const json = await data.json();
        } catch (error){
          console.error("Error fetching data", error);
        }
        return;
    }

    useEffect(() => {  
        fetchInitialData();
    }, []);
    
    return <div className={styles.home}>
        <ComputerCard/> 
    </div>
};

// cardColection sera?
// quem vai receber todos os itens? eu quero abrir a pagina e ja faze o fetch



// <SearchForm/>

// quantos computerCards forem necesarios 
// e depois aumentar 
// ou meter um searchResults igual aquele la 

//    <ResultsContainer results={globalContext.searchResult} searching={globalContext.searching}/>

export default Home;

// esse cara aqui, faze o fetch quando abrir 