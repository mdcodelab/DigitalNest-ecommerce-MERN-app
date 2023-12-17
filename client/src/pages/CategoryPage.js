import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import ProductPreview from '../components/ProductPreview';
import Footer from '../components/Footer';

function CategoryPage() {
  const { category } = useParams();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/products/category/${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  console.log(products);

  const productsSearch = (products || []).filter((product) =>
    product.name.toLowerCase().includes(searchTerms.toLowerCase())
  );

  return (
    <Wrapper>
      <div className="categories__container">
        <h1 className="category__name">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      </div>
      <div className="filter__container">
        <input type="search" placeholder="Search..." className="search__category"
        onChange={(e) => setSearchTerms(e.target.value)} />
      </div>
      {productsSearch.length === 0 ? (
        <h2 style={{textAlign: "center", color: "#777", margin: "3rem 0rem"}}>No products to show.</h2>
      ) : (
        <div className="resulted__products">
          {productsSearch.map((product, index) => {
            return <ProductPreview key={index} {...product} />;
          })}
        </div>
      )}
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.5rem 0;

  .category__name {
    text-align: center;
    color: #777;
    letter-spacing: 0.08rem;
    margin-bottom: 1.5rem;
    background: #777;
    color: var(--yellow-color);
    padding: 0.5rem 0;
    width: 100%;
  }

  .search__category {
    display: block;
    margin: 0 auto;
    width: 50%;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    margin-bottom: 1.5rem;
    border: 0.08rem solid #777;
    box-shadow: var(--box-shadow3);
  }

  .resulted__products {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media (max-width: 750px) {
    .category__name {
      font-size: 1.5rem;
    }
  }
`;

export default CategoryPage;
