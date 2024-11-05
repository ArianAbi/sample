import Image from "next/image";

interface SingleMovie {
  img: string;
  title: string;
  year: string;
}

export default function SignleMovie({ img, title, year }: SingleMovie) {
  return (
    <>
      <a href="#">
        <div className="bg-slate-500 w-full aspect-[9/12] relative rounded-xl overflow-hidden">
          <Image
            src={img}
            alt="test"
            width={500}
            height={500}
            className="absolute left-0 top-0 size-full object-cover"
          />

          <div className="absolute left-2/4 bottom-0 -translate-x-2/4 w-full h-10">
            <div className="size-full">
              <img
                src="/Triangle.svg"
                className="absolute left-2/4 -translate-x-2/4 -bottom-0.5 w-3/5 h-full object-fill"
              />

              <span className="absolute left-2/4 -translate-x-2/4 bottom-0 font-semibold">
                {year}
              </span>
            </div>
          </div>
        </div>

        <p className="w-full mt-1 text-center bold">{title}</p>
      </a>
    </>
  );
}
