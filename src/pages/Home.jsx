import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Header/Banner';
import PhoneCard from '../components/PhoneCard/PhoneCard';

const Home = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-4xl font-semibold mt-14 text-center">
        Our Phones Collection
      </h2>
      <h3 className="text-2xl font-semibold mt-4 mb-14 text-center">
        {phones.length} phones
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
