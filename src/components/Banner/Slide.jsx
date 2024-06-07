const Slide = ({ image, text, description }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[24rem] lg:h-[36rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/50'>
        <div className='text-center'>
          <h1 className='text-2xl lg:text-6xl font-bold text-white font-jura'>
            {text}
          </h1>
          <br />
          <p className="text-white font-jura text-2xl font-bold">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Slide