import { useEffect, useState } from 'react';
import useGetPhonesData from '../hooks/useGetPhonesData';
import { getItemsFromLS } from '../utility/localstorage';
import PhoneCard from '../components/PhoneCard/PhoneCard';
import swal from 'sweetalert';

const Favorites = () => {
  const [favoritePhones, setFavoritePhones] = useState([]);
  const [phones] = useGetPhonesData();
  const [price, setPrice] = useState(0);
  const [allShown, setAllShown] = useState(false);
  // console.log(phones);

  useEffect(() => {
    const savedIds = getItemsFromLS();
    // console.log(savedIds);
    const savedPhones = [];
    if (phones.length) {
      for (const id of savedIds) {
        const phone = phones.find(phone => phone.id === id);
        if (phone) {
          savedPhones.push(phone);
        }
      }
    }
    setFavoritePhones(savedPhones);
    if (favoritePhones) {
      const totalPrice = favoritePhones.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );
      console.log(totalPrice);
      setPrice(totalPrice);
    }
  }, [phones]);

  // useEffect(() => {
  //   if (favoritePhones) {
  //     const totalPrice = favoritePhones.reduce(
  //       (preValue, currentItem) => preValue + currentItem.price,
  //       0
  //     );
  //     console.log(totalPrice);
  //     setPrice(totalPrice);
  //   }
  // }, [favoritePhones]);

  console.log('favorites', favoritePhones);

  const handleDeleteAll = () => {
    localStorage.removeItem('phones');
    setFavoritePhones([]);
    setPrice(0);
    swal('Success!', 'Deleted All Phones!', 'success');
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">
        Favorited Phones: {favoritePhones.length}
      </h1>
      {favoritePhones.length ? (
        <div>
          <div className="flex gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 gap-4">
              {allShown
                ? favoritePhones.map(phone => (
                    <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                  ))
                : favoritePhones
                    .slice(0, 2)
                    .map(phone => (
                      <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                    ))}
            </div>
            <div className="p-10 border-2 border-green-400 h-60 rounded-lg shadow-xl">
              <h3>Total Price of Items:</h3>
              <p className="text-center text-5xl">${price.toFixed(2)}</p>
              <button
                onClick={handleDeleteAll}
                className="w-full p-2 my-10 bg-green-500 rounded-lg text-white font-medium text-lg"
              >
                Delete All Favorites
              </button>
            </div>
          </div>
          <div>
            {favoritePhones.length > 2 && (
              <div>
                {!allShown ? (
                  <button
                    onClick={() => setAllShown(!allShown)}
                    className="w-[490px] ml-[25%] p-2 my-10 bg-green-500 rounded-lg text-white font-bold text-xl"
                  >
                    See More
                  </button>
                ) : (
                  <button
                    onClick={() => setAllShown(!allShown)}
                    className="w-[490px] ml-[25%] p-2 my-10 bg-green-500 rounded-lg text-white font-bold text-xl"
                  >
                    See Less
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center mt-56 text-2xl font-medium text-green-400">
          No Data Found
        </div>
      )}
    </div>
  );
};

export default Favorites;
