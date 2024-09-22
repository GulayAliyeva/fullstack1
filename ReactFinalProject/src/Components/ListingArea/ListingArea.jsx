import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Select from 'react-select';
import './ListingArea.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListingArea = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: null, type: null, size: null, color: null });
  const [wishlist, setWishlist] = useState([]);
  const url = "http://localhost:5000/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const toggleWishlist = (product) => {
    let updatedWishlist;
    if (wishlist.some((item) => item.id === product.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const FilterSection = () => {
    return (
      <div className="category-listing mb-50">
        <SelectCategory title="Category" options={["Men", "Women", "Baby"]} setFilters={setFilters} />
        <SelectCategory title="Type" options={["Backpack", "T-Shirt", "Jacket", "Tank Top", "Romper"]} setFilters={setFilters} />
        <SelectCategory title="Size" options={["M", "L", "S", "6-12 months"]} setFilters={setFilters} />
        <SelectCategory title="Color" options={["Black", "White", "Green", "Blue", "Pink"]} setFilters={setFilters} />
        <PriceFilter setFilters={setFilters} />
      </div>
    );
  };

  const SelectCategory = ({ title, options, setFilters }) => {
    const formattedOptions = options.map((option) => ({ value: option, label: option }));

    const handleChange = (selectedOption) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [title.toLowerCase()]: selectedOption ? selectedOption.value : null,
      }));
    };

    return (
      <div className="select-Categories pb-30">
        <div className="select-job-items2 mb-30">
          <div className="col-xl-12">
            <Select
              placeholder={title}
              options={formattedOptions}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    );
  };

  const PriceFilter = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);

    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.value);
    };

    return (
      <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow mb-40">
        <div className="small-tittle">
          <h4>Filter by Price</h4>
        </div>
        <div className="widgets_inner">
          <div className="range_item">
            <input
              type="range"
              min="0"
              max="500"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <span>to</span>
            <input
              type="range"
              min="0"
              max="500"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
          <div>
            <p>
              Price Range: {minPrice} to {maxPrice}
            </p>
          </div>
        </div>
      </aside>
    );
  };

  const ProductListing = () => {
    const filteredProducts = products.filter((product) => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesType = !filters.type || product.type === filters.type;
      const matchesSize = !filters.size || product.size === filters.size;
      const matchesColor = !filters.color || product.color === filters.color;

      return matchesCategory && matchesType && matchesSize && matchesColor;
    });

    return (
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="imageContainer2">
              <img src={product.image} className="item-img" alt={product.title} />
              <div className="icons">
                <div className="icon"><AddShoppingCartIcon sx={{ fontSize: 24 }} /></div>
                <div className="icon" onClick={() => toggleWishlist(product)}>
                  {wishlist.some((item) => item.id === product.id) ? (
                    <FavoriteIcon sx={{ color: 'red' }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </div>
                <div className="icon"><ZoomInIcon /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="listing-area pt-50 pb-50" style={{ marginTop: '50px' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-4">
            <FilterSection />
          </div>
          <div className="col-xl-9">
            <ProductListing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingArea;



// const FilterByGenre = () => {
//     const genres = ["History", "Horror - Thriller", "Love Stories", "Science Fiction", "Biography"];
//     return (
//       <div className="select-Categories pb-30">
//         <div className="small-tittle mb-20">
//           <h4>Filter by Genres</h4>
//         </div>
//         {genres.map((genre, index) => (
//           <label className="container" key={index}>
//             {genre}
//             <input type="checkbox" />
//             <span className="checkmark"></span>
//           </label>
//         ))}
//       </div>
//     );
//   };

//   const FilterByBrand = () => {
//     const brands = ["Green Publications", "Anondo Publications", "Rinku Publications", "Sheba Publications", "Red Publications"];
//     return (
//       <div className="select-Categories pb-20">
//         <div className="small-tittle mb-20">
//           <h4>Filter by Brand</h4>
//         </div>
//         {brands.map((brand, index) => (
//           <label className="container" key={index}>
//             {brand}
//             <input type="checkbox" />
//             <span className="checkmark"></span>
//           </label>
//         ))}
//       </div>
//     );
//   };