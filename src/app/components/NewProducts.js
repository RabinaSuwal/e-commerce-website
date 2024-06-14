import ProductCard from './ProductCard';

const productsData = [
    {
        img:"https://images.pexels.com/photos/20497442/pexels-photo-20497442/free-photo-of-man-in-shirt-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"t-shirt",
        desc:"MEN COTTON T-SHIRT",
        rating:4,
        price:"Rs.1000",
    },
    {
        img:"https://images.pexels.com/photos/6160421/pexels-photo-6160421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"skirt",
        desc:"WOOLEN SKIRT",
        rating:5,
        price:"Rs.1400",
    },
    {
        img:"https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"party wear",
        desc:"WOMEN PARTY WEAR DRESS",
        rating:4.5,
        price:"Rs.3000",
    },
    {
        img:"https://images.pexels.com/photos/4959849/pexels-photo-4959849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"sandle",
        desc:"HIGH HEEL SANDLES",
        rating:4,
        price:"Rs.2000",
    },
    {
        img:"https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"sport shoe",
        desc:"HIGH HEEL SANDLES",
        rating:4,
        price:"Rs.2000",
    },

    
]

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>

            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
            {productsData.map((item, index) => 
            (<ProductCard 
                key={index}
                img={item.img}
                title={item.title}
                decs={item.desc}
                rating={item.rating}
                price={item.price}
            />))}
            </div>

        </div>
    </div>
  )
}

export default NewProducts