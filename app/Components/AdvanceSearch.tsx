import { Switch } from "@/components/ui/switch";

export default function AdvanceSearch() {
  return (
    <>
      <div className="w-full bg-fuchsia-200 rounded-xl overflow-hidden">
        {/* header */}
        <div className="bg-fuchsia-500 font-bold px-4 py-4 rounded-xl text-white">
          جستجو پیشرفته
        </div>
        <div className="px-6 py-3">
          <div className="flex items-center gap-2 font-semibold">
            <span className="min-w-max ">جستجو نام</span>
            <input className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg" />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            {/* row 1 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">نوع</div>
                <div className="bg-fuchsia-400 w-full flex text-center font-semibold rounded-full overflow-hidden">
                  <div className="w-full bg-fuchsia-600 text-white py-2 rounded-full">
                    فیلم
                  </div>
                  <div className="w-full rounded-full py-2 transition-colors hover:bg-fuchsia-600 hover:text-white">
                    سریال
                  </div>
                  <div className="w-full rounded-full py-2 transition-colors hover:bg-fuchsia-600 hover:text-white">
                    انیمه
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">بازیگر</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">همه</option>
                  <option className="bg-fuchsia-500">گزینه 2</option>
                  <option className="bg-fuchsia-500">گزینه 3</option>
                </select>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">سال انتشار</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">همه</option>
                  <option className="bg-fuchsia-500">گزینه 2</option>
                  <option className="bg-fuchsia-500">گزینه 3</option>
                </select>
              </div>
            </div>

            {/* row 2 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">کشور</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">همه</option>
                  <option className="bg-fuchsia-500">ایران</option>
                  <option className="bg-fuchsia-500">آمریکا</option>
                </select>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">کارگردان</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">همه</option>
                  <option className="bg-fuchsia-500">گزینه 2</option>
                  <option className="bg-fuchsia-500">گزینه 3</option>
                </select>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">امتیاز IMDB</div>
                <input className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg" />
              </div>
            </div>
            {/* row 3 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">ژانر</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">همه</option>
                  <option className="bg-fuchsia-500">گزینه 2</option>
                  <option className="bg-fuchsia-500">گزینه 3</option>
                </select>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">رده سنی</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">همه</option>
                  <option className="bg-fuchsia-500">گزینه 2</option>
                  <option className="bg-fuchsia-500">گزینه 3</option>
                </select>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">ترتیب</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">
                    بر اساس رده بندی IMDB
                  </option>
                  <option className="bg-fuchsia-500">گزینه 2</option>
                  <option className="bg-fuchsia-500">گزینه 3</option>
                </select>
              </div>
            </div>
            {/* row 4 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-[60px]">کیفیت</div>
                <select className="w-full bg-fuchsia-400 text-white text-lg py-1 px-2 rounded-lg ">
                  <option className="bg-fuchsia-500">همه</option>
                  <option className="bg-fuchsia-500">گزینه 2</option>
                  <option className="bg-fuchsia-500">گزینه 3</option>
                </select>
              </div>

              <div className="flex items-center gap-2 justify-around">
                <label
                  className="flex items-center gap-2 font-semibold"
                  style={{ direction: "ltr" }}
                >
                  <Switch />
                  <span>زیرنویس</span>
                </label>

                <label
                  className="flex items-center gap-2 font-semibold"
                  style={{ direction: "ltr" }}
                >
                  <Switch />
                  <span>دوبله</span>
                </label>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <button className="flex gap-2 items-center justify-center bg-fuchsia-700 text-white w-full py-2 rounded-xl">
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
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>

                  <span>جستجو کن</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
