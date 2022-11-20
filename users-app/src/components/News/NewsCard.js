import React from 'react';

const NewsCard = ({singleNews}) => {
    const {title, description, image}  = singleNews;
    return (
        <div className="col-sm-12 col-md-4 col-lg-3">
            <div class="card h-100">
              <div className='p-3'>
              <img src={image} height="220px" width="50px" class="card-img-top" alt="..." />
              </div>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description.length > 80 ? description.slice(0,80) : description}</p>
                    </div>
            </div>
        </div>
    );
};

export default NewsCard;