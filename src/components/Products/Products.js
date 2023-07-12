import Card from "../Card/Card";
import './products.css';

const Products = () => {
    const products = [
        {
        name: 'Iphone 14 Pro',
        category: 'Mobile',
        price: '1,19,999',
        description: '256 GB Storage , etc.'
    },
    {
        name: 'Iphone 14',
        category: 'Mobile',
        price: '71,999',
        description: '128 GB Storage , etc.'
    },
    {
        name: 'Redmi 5A',
        category: 'TV',
        price: '19,999'
    },
    {
        name: 'OnePlus TV',
        category: 'TV',
        price: '19,999',
        specification: '4K Full HD, 52 inch',
        offer: 'FLAT 20%'
    }];
    return (
        <div className="products-container">
            <h1>Products</h1>
            <div className='product-list'>
                {
                    products.length ? 

                    products.map((product, index) => 
                        <Card product={product} key={index} />
                    ) : 
                    <div className='noproducts-message'>
                        No products available.
                    </div>
                }
            </div>

            {/* {
                products.map((product, index) => {
                    return <Card product={product} />
                })
            } */}
            {/* <Card product={product} /> */}
        </div>
    )
}

export default Products;