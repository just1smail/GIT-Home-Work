import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-white p-10">
      {/* Control Purchases Section */}
      <div className="mb-10">
        <div className="flex justify-around items-center">
          <div className="space-y-4">
        <h2 className="text-[35px] font-bold mb-4 w-[340px]">
          Control <span className="text-purple-600">Purchases</span> Via Dashboard
        </h2>
            <PurchaseItem 
              title="Chicken Hell"
              status="On The Way"
              time="3:09 PM"
              image="src/components/narased1/Food Image.svg"
            />
            <PurchaseItem 
              title="Swe Dish"
              status="Delivered"
              time="Yesterday"
              image="src/components/narased1/Food Image (1).svg"
            />
            <PurchaseItem 
              title="Fish Hell Veg"
              status="Cancelled"
              time="Yesterday"
              image="src/components/narased1/Food Image (2).svg"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <img  src="src/components/narased2/savings.svg" alt="" />
          </div>
        </div>
      </div>

      <hr className="mb-10" />



      <div className='mt-[100px]'>
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-purple-600">Customer</span> Say
        </h2>
        <div className="flex justify-center space-x-6">
          <CustomerReview 
            name="Alexander R."
            duration="01 Year With Us"
            review="Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time."
            image="src/components/narased2/Pic.svg"
          />
          <CustomerReview 
            name="Customer B"
            duration="02 Years With Us"
            review="Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time."
            image="path_to_image5.png"
          />
          <CustomerReview 
            name="Customer C"
            duration="03 Years With Us"
            review="Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time."
            image="path_to_image6.png"
          />
        </div>
      </div>
    </div>
  );
};

const PurchaseItem = ({ title, status, time, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
    <img src={image} alt={title} className="w-12 h-12 rounded-full object-cover" />
    <div>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className={`text-sm ${status === 'Cancelled' ? 'text-red-600' : 'text-gray-600'}`}>{status}</p>
      <p className="text-gray-500 text-sm">{time}</p>
    </div>
  </div>
);


const CustomerReview = ({ name, duration, review, image }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-80">
    <div className="flex items-center space-x-4 mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-gray-500 text-sm">{duration}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-4">“ {review} ”</p>
    <div className="flex space-x-1">
      {Array(5).fill().map((_, i) => (
        <span key={i} className="text-yellow-500">★</span>
      ))}
    </div>
  </div>
);

export default Dashboard;
