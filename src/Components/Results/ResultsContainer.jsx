import React from "react";
import style from "./ResultsContainer.module.css";
import ResultsContainerItem from "./ResultContainerItem";
import Button from "../Form/Button";
import ResultContainerInfo from "./ResultContainerInfo";

const ResultsContainer = ({ results, searching }) => {
    const infoLabel = searching ? 'Searching...' : `There are zer matches.\nUse the form to search for People or Movies.`
    const itemsCount = results.length;

    return <div className={style.resultsContainer}>
        <ResultsContainerItem text="Results" fontSize="18px" />  

        <div className={style.resultsItemsContainer} style={{justifyContent: itemsCount > 0 ? "flex-start" : "center"}}> 
            {itemsCount === 0 && <ResultContainerInfo >{infoLabel}</ResultContainerInfo>}     

            {itemsCount > 0 && results.map((result) => (
                <ResultsContainerItem
                key={result.url}
                text={result.name ? result.name : result.title }
                extraItem={
                    <Button id="viewDetails" disabled={false} disabledStyle={false}> 
                    View Details
                    </Button>
                }
                />
            ))}
        </div>
    </div>
};

export default ResultsContainer;
