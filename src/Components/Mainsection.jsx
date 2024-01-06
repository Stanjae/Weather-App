import React, { useEffect, useRef, useState } from 'react'
import { GetWeather } from '../Hooks/UseGetWeather';
import Card from './Card';
import { BgArray } from '../helper/bg';


const arrlength = BgArray.length;

const Mainsection = () => {
    const [search, setSearch] = useState(null)
    const [image, setImage] = useState(BgArray[0]);
    const [hanimate, setHanimate] = useState('animate-none')
    const [isloading, setIsloading] = useState(false);

    const titleref = useRef();

    async function HandleSubmit(e) {
        e.preventDefault();
        setIsloading(true);
        const {weather} = await GetWeather(titleref?.current?.value.toLowerCase());
        setSearch(weather);
        setIsloading(false);
        titleref.current.value = '';
    }

    /* bg change effect */
    const ChangeImage =()=>{
        const randNumber = Math.floor(Math.random() * arrlength)
        setHanimate('animate-custom-pulse')
        setImage(BgArray.at(randNumber))
        
    }

    const ChangeAnimation =()=>{
        setHanimate('animate-none')
    }

    useEffect(() => {
      setInterval(() => ChangeImage(), 32000)
      
      return () => {
        clearInterval()
      }
    }, [])

    useEffect(()=>{
        setInterval(() => ChangeAnimation(), 32150)

        return () => {
            clearInterval()
          }
    }, []);


    console.log(search);

  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={` ${hanimate} bg-center py-2 bg-no-repeat bg-cover h-screen`}
    >
      <div className=" bg-white rounded-md bg-opacity-50 py-8 px-4 mx-auto max-w-screen-lg lg:py-10 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">
            Weather Search
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">
            Get the current weather for any City in the world
          </p>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="search"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Enter a City
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  name="search"
                  ref={titleref}
                  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Input any city"
                  type="search"
                  id="search"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={` flex bg-blue-500 items-center justify-center py-4 px-8 w-full text-sm  font-medium text-center text-white rounded-lg border cursor-pointer  sm:rounded-none sm:rounded-r-lg focus:ring-4 focus:ring-blue-300 `}
                >
                  {isloading && (
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                  )}
                 <span> Go!</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* card component */}
      <div className=" flex flex-1 justify-center p-2">
        {isloading ? (
          <h2 className=" text-center text-2xl font-bold italic text-white">Loading...</h2>
        ) : search ? (
          <Card data={search} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Mainsection