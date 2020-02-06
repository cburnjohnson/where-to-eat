import React, { useContext } from 'react';

import RestaurantButtons from './RestaurantButtons';

import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurant = () => {
    const restaurantContext = useContext(RestaurantContext);

    const { restaurants, photoRefs } = restaurantContext;

    return (
        <div className='container card mt-5 py-2'>
            {restaurants.length > 0 && (
                <>
                    <h1 className='text-center'>{restaurants[0].name}</h1>
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRefs[0]}&key=${process.env.REACT_APP_API_KEY}`}
                        className='mx-auto d-block'
                    />

                    <div className='my-2'>
                        <div className='text-center font-weight-bold'>
                            Address
                        </div>
                        <p className='text-center'>{restaurants[0].vicinity}</p>
                    </div>

                    <div className='row row-cols-3'>
                        <div className='col text-center font-weight-bold'>
                            Price
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Rating
                        </div>
                        <div className='col text-center font-weight-bold'>
                            Total Reviews
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].price_level === 2 && '$$'}
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].rating} / 5
                        </div>
                        <div className='col text-center'>
                            {restaurants[0].user_ratings_total}
                        </div>
                    </div>
                </>
            )}
            <RestaurantButtons />
        </div>
    );
};

export default Restaurant;
