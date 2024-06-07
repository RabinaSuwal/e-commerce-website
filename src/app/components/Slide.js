
const Slide = ({img, title, mainTitle, price}) => {
  return (
    <div className='outline-none border-none relative'>
       {/* <img src={img} alt={title} className='w-full h-auto' /> */}
        <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%]
        -translate-y-[50%] space-y-2 lg:space-y-4 bg-white sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
        <h2 className='text-primary text-[28px] lg:text-[32px]'>{mainTitle}</h2>
        <h3 className='text-accent text-[24px] lg:text-[28px]'>{title}</h3>
        <p className='text-secondary text-[20px] lg:text-[24px]'>{price}</p>
        
        <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block
        cursor-pointer hover:bg-blacklish">Shop Now</div>
        </div>
           <img className="w-[100%] h-[500px] md:object-left-bottom"
           src={img}
           alt="image"
           width={2000}
           height={3000}
          />
    </div>
  )
}

export default Slide