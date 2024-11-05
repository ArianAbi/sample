import AdvanceSearch from "@/app/Components/AdvanceSearch";
import SignleMovie from "./Components/SignleMovile";
import Image from "next/image";

export default function Home() {
  const movies = [
    {
      img: "/posters/after.jpg",
      title: "After",
      year: "2019",
    },
    {
      img: "/posters/avenger.jpg",
      title: "Avengers",
      year: "2018",
    },
    {
      img: "/posters/fightclub.jpg",
      title: "Fight Club",
      year: "1999",
    },
    {
      img: "/posters/harrypotter.jpg",
      title: "Harry Potter",
      year: "2004",
    },
    {
      img: "/posters/jaws.jpg",
      title: "Jaws",
      year: "1970",
    },
    {
      img: "/posters/moonlight.jpg",
      title: "Moonlight",
      year: "2019",
    },
    {
      img: "/posters/silence.jpg",
      title: "Silence of The Lambs",
      year: "1991",
    },
    {
      img: "/posters/titanic.jpg",
      title: "Titanic",
      year: "1997",
    },
    {
      img: "/posters/us.webp",
      title: "Us",
      year: "2019",
    },
  ];

  return (
    <>
      <div className="container mx-auto pt-8 pb-10">
        <AdvanceSearch />

        <div className="flex items-start mt-10 mb-5">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">فیلم های پیشنهادی</h2>
            <span>12000+ فیلم</span>
          </div>

          <button className="flex items-center py-1 mx-4 text-fuchsia-600 stroke-fuchsia-600 font-bold">
            <span>مشاهده همه</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="inherit"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>

        {/* movies */}
        <div className="grid grid-cols-6 gap-4">
          {movies.map((movie, _i) => {
            return (
              <SignleMovie
                img={movie.img}
                title={movie.title}
                year={movie.year}
                key={_i}
              />
            );
          })}
        </div>

        {/* second section */}
        <hr className="w-11/12 mx-auto h-[2px] bg-gray-700 my-10" />

        <div className="flex items-start mt-10 mb-5">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">فیلم های بروزشده</h2>
          </div>

          <button className="flex items-center py-1 mx-4 text-fuchsia-600 stroke-fuchsia-600 font-bold">
            <span>مشاهده همه</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="inherit"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <div className="w-full flex items-start gap-6 h-72 py-2 px-12 rounded-xl overflow-hidden relative fade">
          {/* bg image */}
          <Image
            src={"/scene.avif"}
            width={500}
            height={200}
            alt=""
            className="object-cover absolute size-full left-0 top-0 -z-[2]"
          />

          <div className="relative rounded-xl overflow-hidden h-full aspect-[9/14]">
            <Image
              src={"/posters/silence.jpg"}
              width={200}
              height={200}
              alt=""
              className="absolute size-full object-cover"
            />
          </div>

          {/* content */}
          <div className="text-white h-full z-10 flex flex-col gap-2 max-w-screen-sm">
            <h3 className="text-xl">Silence of The Lambs</h3>

            {/* release date */}
            <div className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </span>
              <span>سال پخش : </span>
              <span>1991</span>
            </div>

            {/* time */}
            <div className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </span>
              <span>زمان : </span>
              <span>94 دقیقه</span>
            </div>

            {/* cast */}
            <div className="flex gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </span>
              <span>ستارگان : </span>
              <span>جودی فاستر, آنتونی هاپکینگز</span>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 border-2 border-white rounded-xl text-white font-semibold">
                ترس
              </button>
              <button className="px-3 py-1 border-2 border-white rounded-xl text-white font-semibold">
                درام
              </button>
              <button className="px-3 py-1 border-2 border-white rounded-xl text-white font-semibold">
                جنایی
              </button>
            </div>

            <div className="w-full mt-auto mb-1">
              <h3 className="text-lg font-semibold">خلاصه داستان</h3>
              <p className="line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                quas praesentium quaerat dolorem, aperiam eligendi adipisci vel,
                iste quis obcaecati nisi a, quam minus modi ipsa ab neque rerum
                recusandae in atque totam veritatis officiis et? Sapiente rem
                magni distinctio expedita provident quod molestiae, deserunt
                delectus reprehenderit tempora maiores nihil alias cupiditate
                numquam id, amet harum asperiores! Doloribus, deserunt ad
                dolorum maxime praesentium eius. Sit, at! Accusantium rem,
              </p>
            </div>
          </div>

          <div className="mr-auto flex flex-col h-full">
            {/* IMDB */}
            <div className="text-left" style={{ direction: "ltr" }}>
              <div className="size-14">
                <Image
                  alt=""
                  src={"/imdb.png"}
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="fill-yellow-400 text-white font-semibold mt-2">
                <span className="text-yellow-400 text-lg">9.6</span>
                <span>/10</span>
              </div>
            </div>

            {/* download */}
            <div className="mt-auto">
              <button className="bg-fuchsia-600 py-2 mb-2 text-white font-semibold w-full rounded-xl border-2 border-fuchsia-600">
                ادامه و دانلود
              </button>
              <button className="bg-transparent py-2 text-white font-semibold w-full rounded-xl border-2 border-fuchsia-600">
                مشاهده تریلر
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
