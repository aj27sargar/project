import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg' alt='amazon banner' />
      
        <div className='home__row'>
          <Product id='2346578'
                   title='The Lean Start Up'
                   img='https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg'
                   price= {199.99}
                   rating= {4}
          />
          <Product id='4903850'
                   title='Samsung curved 49" LED Gaming Monitor'
                   img='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                   price= {19.99}
                   rating= {4}
          />
        </div>

        <div className='home__row'>
          <Product id='4903850'
                   title='Samsung curved 49" LED Gaming Monitor'
                   img='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                   price= {19.99}
                   rating= {4}
          />

          <Product id='4903850'
                   title='Samsung curved 49" LED Gaming Monitor'
                   img='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                   price= {19.99}
                   rating= {4}
          />

          <Product id='4903850'
                   title='Samsung curved 49" LED Gaming Monitor'
                   img='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                   price= {19.99}
                   rating= {4}
          />
        </div>

        <div className='home__row'>
          <Product id='4903850'
                   title='Samsung curved 49" LED Gaming Monitor'
                   img='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                   price= {19.99}
                   rating= {4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
