// Главная страница
import { useGetProductsQuery } from "../../store/product";
import Discounts from "./Sections/Discounts/Discounts";
import FirtstBlock from "./Sections/FirstSection/FirtstBlock";
import InStockProducts from "./Sections/InStockProducts/InStockProducts";
import PopularCategories from "./Sections/PopularCategories/PopularCategories";
import "@styles/pages/Home/home.scss"
import PopularProducts from "./Sections/PopularProducts/PopularProducts";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <main>
      <div className="home">
        <FirtstBlock />
        <PopularCategories/> 
        <Discounts/>
        <InStockProducts/>
        <PopularProducts/>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : (
          data.map((item) => (
            <div key={item.id}>
              <h3>{item.model}</h3>
              <img src={item.image} alt={item.title} />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
