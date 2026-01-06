import React from "react";

// label,
// amount,
// onAmtChange,
// onExchangeChange,
// exchangeOption = [],
// selectExchange = 'inr'

export default function Input() {
    let amount, selectExchange = 'USD',

    onAmtChange,
    onExchangeChange
    
  
  return (
    <div className=" h-screen flex justify-center items-center  font-mono">
      <div className="w-full  max-w-2xl h-96 p-4">
        <h1 className="text-3xl text-slate-600 font-mono underline bg-white shadow-lg">
          Exchange Rates
        </h1>

        {/* Container for desktop and mobile layout */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg  p-6 space-y-4 md:space-y-0 md:space-x-4">

          {/* Input Box */}
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
          <label
              htmlFor="inputAmt"
              className="text-sm font-medium text-gray-700"
            >
              From
            </label>
            <input
              id="inputAmt"
              type="number"
              placeholder="Enter amount"
            //   disabled 
              value={amount}

              onChange={(e) => onAmtChange(Number(e.target.value))}

              className="border rounded-lg p-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="fromCurrency"
              className="text-sm font-medium text-gray-700"
            >
              
            </label>
            <select
              id="fromCurrency"
              value={selectExchange}
              onChange={(e) => onExchangeChange && onExchangeChange(e.target.value) }

              className="border rounded-lg p-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* {exchangeOptions.map((exchange) => (
              <option key={{exchange}} value={exchange}>USD</option>
              ))} */}
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex items-center justify-center my-4 md:my-0">
            <button className="bg-blue-500 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/swap.png"
                alt="Swap"
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Output Box */}
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
          <label
              htmlFor="convertedAmount"
              className="text-sm font-medium text-gray-700"
            >
              To
            </label>
            <input
              id="convertedAmount"
              type="text"
              disabled
              placeholder="Result"
              className="border rounded-lg p-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="toCurrency"
              className="text-sm font-medium text-gray-700"
            >
              
            </label>
            <select
              id="toCurrency"
              className="border rounded-lg p-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            
          </div>
        </div>
      </div>
    </div>
  );
}
