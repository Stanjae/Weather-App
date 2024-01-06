import React from 'react'
import { GetFormattedDate } from '../helper/getDate';

const Card = ({data}) => {
    const {location, current } = data || {};

    const currentDate = GetFormattedDate(location?.localtime)

    console.log('location', location, currentDate)
  return (
      <div className="flex shadow flex-col bg-white rounded p-4 w-full max-w-xs">
        <div className="flex flex-1 justify-between flex-row">
        <h1 className='font-bold text-xl '>{location?.name}</h1>
        <h1 className=' font-medium text-sm text-right text-green-800'>{location?.country}</h1>
        </div>
        <div className="text-sm text-gray-500">{currentDate}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          {/* <svg
            className="w-32 h-32"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            ></path>
          </svg> */}
          <img className=' w-full' src={current?.condition.icon}/>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{((current?.temp_c + current?.feelslike_c)/2).toFixed(2)}°</div>
          <div className="flex flex-col items-center ml-6">
            <div>{current?.condition.text}</div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="text-sm font-light text-gray-500">{current?.temp_c}°C</span>
            </div>
            <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="text-sm font-light text-gray-500">{current?.feelslike_c}°C</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{current?.wind_kph}k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{current?.humidity}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Pressure</div>
            <div className="text-sm text-gray-500">{current?.pressure_in} psi</div>
          </div>
        </div>
      </div>
  );
}

export default Card