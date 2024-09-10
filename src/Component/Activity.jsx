import CardActivity from "./CardActivity"

const Activity = () => {
  return (
<>
  <section className="activity-section py-10 bg-gray-100">
    <div className="card-activity-feature h-screen flex items-center justify-center">
      <div className="bg-greenCustom min-h-[80vh] w-11/12 rounded-lg flex flex-col items-center pt-10 px-6 mt-10">
        <h4 className="font-medium font-Hanken text-white mb-4">
          Kegiatan
        </h4>
        <h1 className="text-4xl font-bold font-Hanken text-white text-center mb-6">
          Tersedia Berbagai Kegiatan Menarik Yang Tersedia Di Masjid
        </h1>

        <div className="flex-grow overflow-y-auto">
          <CardActivity />
        </div>
      </div>
    </div>
  </section>
</>


  )
}

export default Activity
