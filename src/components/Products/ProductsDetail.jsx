
import { IoIosHeart } from "react-icons/io";
import { useLoaderData, useParams, } from 'react-router-dom';
import { addToStoredCartList, addToStoredWishList } from '../Utility/AddToListDb';




const ProductsDetail = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const id = parseInt(productId);



    const product = data.find(product => product.productId === id);

    const { productId: currenProductId, product_image, product_title, price, availability, description, specification, rating } = product;

    const handleCartList = () => {
        addToStoredCartList(id);

    }

    const handleWishList = () => {
        addToStoredWishList(id)
    }
    // console.log(product)
    return (
        <div>
            <div className="flex flex-col items-center py-20 h-72 bg-[#9538E2] text-white rounded-lg"> 
                <h1 className='text-4xl font-bold '>Product Details</h1>
                <br />
                <p className='text-xl text-center'>Explore the latest gadgets that will take your experience to the next level.
                    <br /> From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="hero bg-gray-300 min-h-screen ">

                <div className="hero-content flex-col lg:flex-row gap-16">
                    {/* <h1>Details: {productId}</h1> */}
                    <img
                        src={product_image}
                        className="w-[400px] h-[500px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{product_title}</h1>
                        <p className="py-6 text-xl font-bold">
                          Price:  {price} $
                        </p>

                        <h2>{description}</h2>
                        <div>
                            <h3 className='font-bold'>Specification:</h3>

                            {
                                specification.map((spec, index) => <li key={index}>{spec}</li>)
                            }

                        </div>

                        <div className='flex gap-4'>
                            <p className='font-bold'>Rating:  </p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>{rating}</div>
                        </div>

                        <div className='flex gap-4 mt-8'>
                            <button onClick={() => handleCartList(productId)} className='btn bg-[#9538E2]'>Add to card</button>
                            
                            <div className='btn bg-[#9538E2]'>
                                <IoIosHeart onClick={() => handleWishList(productId)}  />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default ProductsDetail;