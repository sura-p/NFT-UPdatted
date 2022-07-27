import React from 'react'
import CategoryItems from './CategoryItems'
import './categoryCard.css'
function CategoryCard() {
  return (
    <div className='category'>
      <h1>Browse by category !</h1>
      <div className='category__container'>
        <div className='category__wrapper'>
          <ul className='category__items'>
            <CategoryItems 
              src='https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
              text='Art'
              label='Adventure'
              path='/Art'
            
            />
            <CategoryItems 
              src='https://thumbs.dreamstime.com/z/bee-flower-27533578.jpg'
              text='Photography'
              label='Luxury'
              path='/Photography'
            />
          </ul>
          <ul className='category__items'>
            <CategoryItems 
              src='https://thumbs.dreamstime.com/z/landscape-nature-mountan-alps-rainbow-76824355.jpg'
              text='Music'
              label='Mystery'
              path='/Music'
            />

            <CategoryItems 
              src='https://thumbs.dreamstime.com/z/landscape-nature-mountan-alps-rainbow-76824355.jpg'
              text='Sport'
              label='Mystery'
              path='/Sport'
            />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard