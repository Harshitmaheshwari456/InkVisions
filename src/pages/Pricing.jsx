import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Limited chapter access",
        "No downloads",
        "Ad-supported experience",
      ],
      buttonText: "Start Reading",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Full eBook access",
        "Offline downloads",
        "No ads",
        "Bookmark & highlight features",
      ],
      buttonText: "Get Pro",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$14.99/month",
      features: [
        "Everything in Pro",
        "Exclusive bonus content",
        "Audiobook version included",
        "Early access to new releases",
      ],
      buttonText: "Go Premium",
      highlight: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose the perfect plan to enjoy InkVisions to the fullest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 ${
              plan.highlight
                ? "bg-yellow-500 text-white"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-3xl font-semibold mb-6">{plan.price}</p>
            <ul className="space-y-3 text-lg">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${
                plan.highlight
                  ? "bg-white text-yellow-600 hover:bg-gray-200"
                  : "bg-yellow-600 text-white hover:bg-yellow-700"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
