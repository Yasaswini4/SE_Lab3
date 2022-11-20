import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    console.log(news);
    return (
        <div>
            <div className='container'>
                <div className='description'>
                    <h2 className='text-center mt-5 mb-5'>Products</h2>
                    <div className="row g-3">
                        {
                            news?.slice(9,17).map(singleNews => <NewsCard
                            key={singleNews.id}
                            singleNews={singleNews}
                            ></NewsCard>)
                        }
                        </div>
                
            </div>
        </div>
        </div>
    );
};

export default News;