import newsImage from './../assets/news.jpg'

function NewsInfo( {article, isSearchPage, searchWord} ) {
    return (
        <div className='News-info'>
            {isSearchPage
                ?<>
                    <h2><a href={article.webUrl}>
                            {article.webTitle.split(searchWord)[0]}
                            <span style={{ backgroundColor: 'yellow' }}>{searchWord}</span>
                            {article.webTitle.split(searchWord)[1]}
                        </a></h2>
                    <img src={newsImage} alt="News" />
                    <p id='date-info'>{article.webPublicationDate.split('T')[0]}</p>
                    <hr />
                    <p>Expert opinion is settled and public opinion united on the urgency of climate action. If our politics or our discourse were in any way functional, there would be no confusion, no debate. We would simply be proceeding from one bold practical action to the next, following the blueprints laid out by the Climate Change Committee.</p>
                </>
                : <>
                    <h2><a href={article.webUrl}>{article.webTitle}</a></h2>
                    <img src={newsImage} alt="News" />
                    <p id='date-info'>{article.webPublicationDate.split('T')[0]}</p>
                    <hr />
                    <p>xpert opinion is settled and public opinion united on the urgency of climate action. If our politics or our discourse were in any way functional, there would be no confusion, no debate. We would simply be proceeding from one bold practical action to the next, following the blueprints laid out by the Climate Change Committee.</p>
                </>
            }

           
            
        </div>
    )
}

export default NewsInfo;