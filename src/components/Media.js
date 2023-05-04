import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";
import Wrapper from "./Wrapper";


function Media() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getArticlesByTag('media/media');
        setArticles(data.data.response.results);
    }


    return (
        <Wrapper apiRequest={'media/media'} setArticles={setArticles}>
            <h1>Media</h1>
            {articles.map(article => {
                return <NewsInfo article={article} />
            })}
        </Wrapper>

    )
}

export default Media;