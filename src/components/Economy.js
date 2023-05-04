import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";
import Wrapper from "./Wrapper";

function Economy() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getArticlesByTag('enterprise/enterprise');
        setArticles(data.data.response.results);
    }

    
    return (
        <Wrapper apiRequest={'enterprise/enterprise'} setArticles={setArticles}>
            <h1>Economy</h1>
            {articles.map(article => {
                return (
                    <NewsInfo article = {article} />
                );
            })}
        </Wrapper>

    )
}

export default Economy;