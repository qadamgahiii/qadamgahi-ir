import Tag from "../UI/Tag";

const intro = () => {
  return (
    <section className="w-auto h-full flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center mt-5 mb-16 md:mb-12 ">
      <div className="h-full lg:w-3/5 md:w-full sm:w-full bg-gray-100 border-green-400 border-r-4 shadow-sm">
        <div className="max-w-lg overflow-hidden sm:w-full block left-0 bottom-0 mt-4 lg:ml-20 md:ml-32 lg:text-left sm:text-center sm:mx-auto">
          <div className="px-0 py-0">
            <div className="text-md font-bold m-2 w-48">
              <p className="font-sans font-semibold py-1 px-2 bg-blue-800 text-white">
                Hi! I'm Mohammadreza.
              </p>
            </div>
            <div className="font-sans font-semibold text-blue-800 text-3xl lg:text-6xl md:text-4xl sm:text-2xl whitespace-no-wrap m-2">
              A Developer
            </div>
            <p className="text-gray-700 text-base font-mono m-2">
              // Interested in creation of digital products, movies, games,
              musics and blah blah blah. Also a spotifier.
            </p>
          </div>
          <div className="px-3 py-4 flex flex-col">
            <p className="inline-block px-3 py-1 text-sm font-thin text-gray-500">
              Familiar with:{" "}
            </p>
            <div className="m-3 flex flex-col md:flex-row">
              <Tag tag={"#reactjs"} />
              <Tag tag={"#typescript"} />
              <Tag tag={"#django"} />
              <Tag tag={"#docker"} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-48 flex flex-col lg:w-2/5  sm:w-full md:w-full bg-fixed bg-gray-200 lg:block sm:block mb-2 shadow-sm lg:mt-4 md:mt-2"
        style={{
          backgroundColor: "#e2e8f0",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23cbd5e0' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      >
        <div className="overflow-hidden flex flex-col md:w-full mt-12 sm:text-center lg:mx-auto">
          <p className="text-3xl font-mono font-semibold text-blue-800 mx-auto">
            GET STARTED
          </p>
          <div>
            <a href="/suggest">
              <button className="bg-blue-500 hover:bg-blue-700 border border-blue-500 hover:border-transparent font-thin text-white md:ml-2 sm:mx-auto py-2 px-4 rounded-full">
                SUGGEST ME A JOB
              </button>
            </a>
          </div>

          <span className="inline-flex font-mono text-gray-600 mt-2 mx-auto">
            > MAIL ME: <p className="select-all ml-1"> Qadamgahiii@gmail.com</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default intro;
