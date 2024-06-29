import React from 'react';

const TopItems = () => {
  return (
    <div className="bg-white p-10">


      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Top <span className="text-purple-600">Restaurants</span>
        </h2>
        <div className="mb-4">
          <div className="flex gap-6 justify-around">
            <RestaurantCard 
              title="The Chicken King"
              time="24min"
              rating="4.8"
              image="src/components/narased1/Resturent Image.svg"
              tag="Healthy"
            />
            <RestaurantCard 
              title="The Burger King"
              time="24min"
              rating="4.9"
              image="src/components/narased1/Resturent Image (1).svg"
              tag="Trending"
            />
            <RestaurantCard 
              title="The Chicken King"
              time="24min"
              rating="4.8"
              image="src/components/narased1/Resturent Image (2).svg"
              tag="Healthy"
            />
          </div>
          <div className='w-[94%] flex justify-end mt-[50px]'>
          <button className="text-gray-600 text-sm">View All &rarr;</button>
          </div>
        </div>
      </div>

      <hr className="mb-10" />

      {/* Top Dishes Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Top <span className="text-purple-600">Dishes</span>
        </h2>
        <div className="mb-4">
          <div className="flex gap-6 justify-around">
            <DishCard 
              title="Chicken Hell"
              time="24min"
              rating="4.8"
              price="$12.99"
              image="src/components/narased1/Food Image.svg"
              tag="Healthy"
            />
            <DishCard 
              title="Swe Dish"
              time="34min"
              rating="4.9"
              price="$19.99"
              image="src/components/narased1/Food Image (1).svg"
              tag="Trending"
            />
            <DishCard 
              title="Swe Dish"
              time="34min"
              rating="4.9"
              price="$19.99"
              image="src/components/narased1/Food Image (2).svg"
              tag="Supreme"
            />
            <DishCard 
              title="Chicken Hell"
              time="24min"
              rating="4.8"
              price="$12.99"
              image="src/components/narased1/Food Image.svg"
              tag="Healthy"
            />
            <DishCard 
              title="Swe Dish"
              time="34min"
              rating="4.9"
              price="$19.99"
              image="src/components/narased1/Food Image (1).svg"
              tag="Trending"
            />
          </div>
          <div className='w-[97%] flex justify-end mt-[50px]'>
          <button className="text-gray-600 text-sm">View All &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = ({ title, time, rating, image, tag }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <span className={`text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-${tag === 'Healthy' ? 'green' : 'orange'}-500 uppercase last:mr-0 mr-1`}>
        {tag}
      </span>
      <h3 className="text-lg font-bold mt-[-70px]">{title}</h3>
      <div className="flex items-center justify-between mt-3">
        <span className="text-gray-600 text-sm">{time}</span>
        <div className="flex items-center">
          <span className="text-purple-600 text-sm mr-1">★</span>
          <span className="text-gray-600 text-sm">{rating}</span>
        </div>
      </div>
    </div>
  </div>
);

const DishCard = ({ title, time, rating, price, image, tag }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-48">
    <img src={image} alt={title} className="w-full h-45 object-cover" />
    <div className="p-4">
      <span className={`text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-${tag === 'Healthy' ? 'green' : tag === 'Trending' ? 'orange' : 'purple'}-500 uppercase last:mr-0 mr-1`}>
        {tag}
      </span>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <div className="flex items-center justify-between mt-3">
        <span className="text-gray-600 text-sm">{time}</span>
        <div className="flex items-center">
          <span className="text-purple-600 text-sm mr-1">★</span>
          <span className="text-gray-600 text-sm">{rating}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="text-lg font-bold">{price}</span>
        <button className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">+</button>
      </div>
    </div>
  </div>
);

export default TopItems;
