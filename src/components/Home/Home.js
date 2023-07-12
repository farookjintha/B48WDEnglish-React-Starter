import Card from "../Card/Card";

const Home = () => {
    const content = 'Card in Home';
    const products = [
        {
            name: 'Iphone 14',
            category: 'Mobile',
            price: '71,999',
            description: ''
        },
        {
            name: 'Iphone 14 Pro',
            category: 'Mobile',
            price: '1,19,999',
            description: ''
        },
        {
            name: 'Iphone 14 Pro Max',
            category: 'Mobile',
            price: '1,39,999',
            description: ''
        }
    ]
    return (

       <div>
            <div>Home</div>
            <Card content={content}  products={products}/>
       </div>
    )
}


export default Home;