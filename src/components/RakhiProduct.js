import React, { useEffect, useState } from "react";
import "../assets/css/Product.css";
import { Link, useLocation } from "react-router-dom";

const RakhiProduct = () => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [maxLength, setMaxLength] = useState(30);

    const { state } = useLocation();
    const product = state?.product;

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch related products
        const fetchRelatedProducts = async () => {
            try {
                const response = await fetch("https://gemstore-backend.onrender.com/api/trees/all");
                const data = await response.json();
                const filteredProducts = data.filter(p => p.Category === "rakhi").slice(0, 8);
                setRelatedProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching related products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedProducts();
        const handleResize = () => {
            if (window.innerWidth > 1023) {
                setMaxLength(30);
            } else {
                setMaxLength(20);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [product]);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <>
            <div className="product_container">
                <div className="product">
                    <div className="images">
                        <div className="sm_images">
                            {product.Images.map((img, index) => (
                                <div
                                    className={`img ${selectedImageIndex === index ? 'selected' : ''}`}
                                    key={index}
                                    onClick={() => handleImageClick(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="lg_image">
                            <img src={product.Images[selectedImageIndex]} alt={product.Name} />
                        </div>
                    </div>
                    <div className="details">
                        <h2>{product.Name}</h2>
                        <p>
                            <span className="sp">₹ {product.SP}</span>
                            <span className="mrp"> <del>₹ {product.Mrp}</del> </span>
                        </p>

                        <div className="qty-buttons">
                            <button onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>

                        <div className="buttons">
                            <Link to={`/addtocart/${product._id}`} state={{ productId: product._id }}>
                                <button>Add to Cart</button>
                            </Link>
                            <Link to="/buynow">
                                <button>buy now</button>
                            </Link>
                        </div>

                        <div className="about-product">
                            <p>{product.About}</p>
                        </div>

                        <div className="benefits">
                            <p><strong>Benefits :</strong></p>
                            <ul>
                                {product.Benefits.map((step, index) => (
                                    <li key={index}> <p>{step}</p></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="related_products">
                    <h2>Related Products</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="cards">
                            {relatedProducts.map((p) => (
                                <Link key={p._id} to={`/rakhi/product/${p._id}`}>
                                    <div className="card">
                                        <div className="img">
                                            <img src={p.Images[0]} alt={p.Name} />
                                        </div>
                                        <div className="details">
                                            <p>{truncateText(p.Name, maxLength)}</p>
                                            <p>
                                                <span>₹ {p.SP} </span>
                                                <span>
                                                    <del>₹ {p.Mrp}</del>
                                                </span>
                                            </p>
                                            <p>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                                <i className="ri-star-s-fill"></i>
                                            </p>
                                            <Link to='/addtocart'>
                                                <button>add to cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RakhiProduct;
