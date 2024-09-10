import activityData from "../data/Activitydata"

const CardActivity = () => {
  return (
    <>
<section className="bg-activity-content">
  <div className="flex justify-center items-center flex-wrap gap-10 p-8 mx-16 rounded-lg shadow-lg">
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {activityData.map((data) => (
        <li
          key={data.id}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center font-Hanken"
        >
          <div className="flex flex-col flex-grow mb-4">
            <h1 className="font-extrabold text-xl mb-2 ">{data.title}</h1>
            <p className="text-gray-600">{data.content}</p>
          </div>
          <img
            src={data.img}
            alt={data.title}
            className="w-52 h-32 object-contain rounded-lg "
          />
        </li>
      ))}
    </ul>
  </div>
</section>

    </>
  )
}

export default CardActivity
