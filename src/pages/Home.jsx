import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Header/Banner';
import PhoneCard from '../components/PhoneCard/PhoneCard';
import { useEffect, useState } from 'react';
// import useGetPhonesData from '../hooks/useGetPhonesData';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [phones, setPhones] = useState([]);
  const loadedPhones = useLoaderData();
  //   console.log(loadedPhones);
  const handleSearchTerm = e => {
    e.preventDefault();
    // console.log(e.target.searchTerm.value);
    const searchValue = e.target.searchTerm.value;
    console.log(searchValue);
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    if (loadedPhones) {
      if (searchTerm) {
        const searchedPhones = loadedPhones.filter(
          phone =>
            phone.phone_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            phone.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPhones(searchedPhones);
      } else {
        setPhones(loadedPhones);
      }
    }
  }, [searchTerm, loadedPhones]);

  return (
    <div>
      <Banner handleSearchTerm={handleSearchTerm}></Banner>
      <h2 className="text-4xl font-semibold mt-14 text-center">
        Our Phones Collection
      </h2>
      <h3 className="text-2xl font-semibold mt-4 mb-14 text-center">
        Showing {phones.length} phones
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
