import { Trophy, Star, Award } from "lucide-react"

const Prizes = () => {
  const mainPrizes = [
    {
      title: "Winner",
      amount: "₹1,00,000",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      description: "Grand Prize + Incubation Support",
    },
    {
      title: "Runner Up",
      amount: "₹50,000",
      icon: Star,
      color: "text-gray-600",
      bgColor: "bg-gradient-to-br from-gray-400 to-gray-600",
      description: "Second Prize + Mentorship",
    },
    {
      title: "Second Runner Up",
      amount: "₹25,000",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      description: "Third Prize + Industry Connect",
    },
  ]

  const day1Stats = [
    { label: "Applied Students", value: "160" },
    { label: "Participated Students", value: "58" },
    { label: "Master Class", value: "300" },
    { label: "Workshop", value: "13" },
  ]

  const day2Stats = [
    { label: "Applied Students", value: "160" },
    { label: "Participated Students", value: "50" },
    { label: "Master Class", value: "5" },
    { label: "Workshop", value: "13" },
  ]

  const day3Stats = [
    { label: "aster Class", value: "10" },
    { label: "Workshop", value: "11" },
  ]

  return (
    <section id="prizes" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Reward and Benefits</h2>
          <p className="text-xl text-gray-600 mb-8">
            Compete for substantial prizes and exclusive opportunities to accelerate your innovation journey.
          </p>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 inline-block shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Total Prize Pool</h3>
            <p className="text-5xl font-bold">₹10,00,000</p>
            <p className="text-lg opacity-90 mt-2">+ Incubation & Mentorship Worth ₹10L</p>
          </div>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-20 h-20 ${prize.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <prize.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{prize.title}</h3>
              <p className="text-3xl font-bold text-orange-600 mb-3">{prize.amount}</p>
              <p className="text-gray-600">{prize.description}</p>
            </div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">2024</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Day 1</h4>
              <div className="space-y-3">
                {day1Stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="font-semibold text-orange-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Day 2</h4>
              <div className="space-y-3">
                {day2Stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="font-semibold text-orange-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Day 3</h4>
              <div className="space-y-3">
                {day3Stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="font-semibold text-orange-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
