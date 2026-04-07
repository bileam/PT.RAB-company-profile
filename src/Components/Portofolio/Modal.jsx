import home from "../../assets/image/home.jpg";
const Modal = ({ isOpen, oncloce }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="flex animate-zoomIn flex-col p-5 bg-white rounded-md relative">
        {/* <div className="absolute top-0  right-1">
          <button className="p-2 mt-2  border rounded-full" onClick={oncloce}>
            X
          </button>
        </div> */}
        <div className="w-full flex justify-end top-4  right-4 z-10 absolute">
          <button
            onClick={oncloce}
            className="w-10 h-10 rounded-full shadow-md bg-black/40"
          >
            X
          </button>
        </div>
        <div className="flex flex-col  gap-2 md:py-2 md:px-6">
          <div className="flex gap-2 md:flex-row flex-col">
            <div className="flex flex-col gap-2">
              <div className="relative ">
                <img
                  src={home}
                  alt=""
                  className="w-100 md:50 object-cover h-50 rounded-md shadow"
                />
                <button className="absolute top-[40%] left-2 p-2 bg-white text-black w-10 h-10 rounded-full font-extrabold">
                  {"<"}
                </button>
                <button className="absolute top-[40%] right-2 p-2 bg-white text-black w-10 h-10 rounded-full font-extrabold">
                  {">"}
                </button>
              </div>
              <div className="flex gap-4">
                <button>
                  <img
                    src={home}
                    alt=""
                    className="w-15 h-15 shadow-md object-cover border-2 border-rab-navy rounded-md"
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src={home}
                    alt=""
                    className="w-15 h-15 shadow-md object-cover  rounded-md "
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src={home}
                    alt=""
                    className="w-15 h-15 shadow-md object-cover  rounded-md "
                  />
                </button>
                <button>
                  {" "}
                  <img
                    src={home}
                    alt=""
                    className="w-15 h-15 shadow-md object-cover  rounded-md "
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Rumah Modern Minimalis</h1>
            <div className="flex gap-2">
              <img src="" alt="" />
              <p className="text-[0.8rem]">jakarta selatan, 2024</p>
            </div>
            <p className="text-[0.8rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque molestias laboriosam fuga nesciunt numquam eveniet
              adipisci velit dolores, voluptates esse neque ex qui soluta
              consectetur fugit quaerat delectus. A, voluptate.
            </p>
            <div>
              <h2 className="flex flex-col gap-2 text-[1rem]">Fitur Utama</h2>
              <div className="flex gap-2">
                <img src="" alt="" />
                <p className="text-[0.8rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  quae?
                </p>
              </div>
              <div className="flex gap-2">
                <img src="" alt="" />
                <p className="text-[0.8rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  quae?
                </p>
              </div>
              <div className="flex gap-2">
                <img src="" alt="" />
                <p className="text-[0.8rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  quae?
                </p>
              </div>
            </div>
            <button className="bg-rab-navy p-2 rounded-md text-white">
              Konsultasi sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
