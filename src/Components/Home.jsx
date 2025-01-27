import React, {useState, useEffect } from "react";
import styles from './Home.module.css';
import ComputerCard from "./Cards/ComputerCard";
import { GlobalContext } from "../GlobalContext";
import FlatList from "flatlist-react/lib";
import {fetchComputers } from "./API/Api";

const Home = () => {
  const [computers, setComputers] = useState([]); // Dados dos computadores
  const [isLoading, setIsLoading] = useState(true); // Status de carregamento
  const [error, setError] = useState(null); // Mensagens de erro
  const [pagination, setPagination] = useState({}); // Dados de paginação

  const fetchInitialData = async () => {
    try {
      const data = await fetchComputers(10, 0);
      setComputers(data.data);
      setPagination(data.pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  // Renderização condicional
  if (isLoading) {
    return <div className={styles.home}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.home}>Error: {error}</div>;
  }

    const response = {
      "data": [
        {
          "id": 1,
          "manufacturerId": 2,
          "serialNumber": "1ON9S3H",
          "statusId": 4,
          "userId": 1,
          "specifications": "Name: Dell XPS 13 Plus<br>CPU: Intel Core i7-1260P<br>RAM: 16GB<br>Display: 13.4 OLED 4K novo",
          "imageUrl": "https://netdna.coolthings.com/wp-content/uploads/2024/02/the-best-laptops-for-photo-editing-08-Dell-XPS-15-9530.jpg",
          "purchaseDate": "2023-08-19T20:24:35",
          "warrantyExpirationDate": "2024-02-15T20:24:35"
        },
        {
          "id": 2,
          "manufacturerId": 3,
          "serialNumber": "R2Z8134R9W",
          "statusId": 2,
          "userId": 2,
          "specifications": "Name: HP Elite Dragonfly G4<br><br>CPU: Intel Core i7-1365U<br>GPU: Intel Iris Xe<br>RAM: 16GB<br>Storage: 512GB SSD<br>Display: 13.5 - inch, 1920 x 1280<br>Weight: 2.2 lbs<br>Best for: Executives on the go.",
          "imageUrl": "https://photographylife.com/wp-content/uploads/2023/02/XPS15.jpg",
          "purchaseDate": "2023-08-20T04:14:26",
          "warrantyExpirationDate": "2024-02-16T04:14:26"
        },
      ],
      "pagination": {
        "totalItems": 81,
        "pageSize": 2,
        "currentPage": 1,
        "totalPages": 41,
        "hasNextPage": true,
        "hasPreviousPage": false
      }
    };
    
    return <div className={styles.home}>
      <FlatList
        list={computers}
        renderItem={(computerData) => (
          <ComputerCard key={computerData.id} data={computerData} />
        )}
        renderWhenEmpty={() => <p>No computers found.</p>}
      />
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