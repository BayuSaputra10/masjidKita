import featuredata from "../data/Featuredata"
const CardFeature = () => {
    
  return (
    <>
    <ul className="flex justify-center items-center flex-wrap mt-14 gap-6">
      {featuredata.map((data) => (
        <li
          key={data.id}
          className="bg-white shadow-lg flex justify-center items-center 
          flex-col w-64 mx-auto
           transation duration-300 ease-in-out hover:scale-105 "
        >
          <img
            src={data.img}
            alt={data.title}
            className="h-auto w-auto hover:hue-rotate-15"
          />
            <div className="flex justify-center items-center h-full">
              <h2 className="text-xs font-semibold text-greenCustom text-center my-5 mx-3">
                {data.title}
              </h2>
            </div>
        </li>
        
      ))}
    </ul>
    </>
  )
}

export default CardFeature
