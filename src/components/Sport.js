import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";
import Wrapper from "./Wrapper";



function Sport(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await getArticlesByTag('sport/sport');
        setArticles(data.data.response.results);
    }



    return(
        <Wrapper apiRequest={'sport/sport'} setArticles={setArticles}>
            <h1>Sport</h1>
            {articles.map(article => {
                return(
                    <NewsInfo article={article} />
                );
            })}
        </Wrapper>
        
    )
}

export default Sport;