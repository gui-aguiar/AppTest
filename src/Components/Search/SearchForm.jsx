import React,  { useEffect } from "react";
import Radio from "../Form/Radio";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from './SearchForm.module.css';
import API_URL from "../API/Api";
import { GlobalContext } from "../../GlobalContext";

const SearchForm = () => {
  const [searchKey, setSearchKey] = React.useState('people');  
  const [searchString, setSearchString] = React.useState('');''
  const [buttonDisabledStyle, setbuttonDisabledStyle] = React.useState(true);
  const [buttonDisabled, setbuttonDisabled] = React.useState(true); 
  
  const globalContext = React.useContext(GlobalContext);

  async function handleClick(event) {
    try
    {
      event.preventDefault();

      globalContext.setSearching(true);
      let data = await fetch(`${API_URL}/api/${searchKey}?search=${searchString}`);
      const json = await data.json();
      globalContext.setSearching(false);

      globalContext.setSearchResult(json.results ? json.results : []);

    } catch (error){
      globalContext.setSearching(false);
      console.error("Error fetching data", error);
      globalContext.setSearchResult([]);
    }
  }
  useEffect(() => {  
      setbuttonDisabledStyle(!searchString.trim());
  }, [searchString]);

  useEffect(() => {
    setbuttonDisabled(!searchString.trim() || globalContext.searching);
  }, [searchString, globalContext.searching]);

  useEffect(() => {
    if(globalContext.searching) {
      globalContext.setSearchResult([]);
    }
  }, [globalContext.searching]); 
  
  return <form className={styles.SearchForm}>          
    <label className={styles.label}>What are you searching for?</label>
      <div>            
          <Radio options={['People', 'Films']} value={searchKey} setValue={setSearchKey}/>
      </div>            
      <Input 
        id="searchString"
        placeholder={`e.g. ${searchKey === 'People' ? 'Chewbacca, Yoda, Boba Fett' : 'Star Wars, Rogue One'}`}
        value={searchString}
        setValue={setSearchString}
      />
      <Button id="buttonSearch" 
        disabled={buttonDisabled} 
        disabledStyle={buttonDisabledStyle} 
        handleClick={handleClick}>
          {globalContext.searching ? "SEARCHING..." : "SEARCH"}
      </Button>  
  </form>; 
};

export default SearchForm;