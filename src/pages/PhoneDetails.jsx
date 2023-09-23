import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useGetPhonesData from '../hooks/useGetPhonesData';
import { addToLS } from '../utility/localstorage';

const PhoneDetails = () => {
  const [phoneDetail, setPhoneDetail] = useState({});
  const { id } = useParams();
  console.log(id);
  const [phones] = useGetPhonesData();
  console.log(phones);

  useEffect(() => {
    const findPhone = phones?.find(phone => phone.id === id);
    setPhoneDetail(findPhone);
  }, [id, phones]);

  console.log(phoneDetail);
  const {
    id: phonId,
    brand_name,
    image,
    phone_name,
    price,
  } = phoneDetail || {};

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToFav = id => {
    addToLS(id);
  };

  return (
    <div>
      <div className="h-[10vh] bg-green-100 flex justify-center items-center">
        <h2 className="text-4xl text-center font-semibold">Phone Details</h2>
      </div>
      <div className="flex justify-center items-center mt-32">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={image}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              {brand_name}
            </h6>
            <div className="flex w-[400px] items-center justify-between mb-10">
              <div>
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {phone_name}
                </h4>
              </div>
              <div>
                <p className="mb-2 block font-sans text-5xl font-normal leading-relaxed text-gray-700 antialiased">
                  <span className="text-sm">only</span> ${price}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleAddToFav(phonId)}
                className="flex bg-green-200 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add to Favorites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>

              <button
                onClick={handleGoBack}
                className="flex bg-green-200 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Go Back to Phones
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
