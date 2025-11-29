import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
function Section() {
  const [pageno, SetPageno] = useState(1);
  const [user, SetUser] = useState([]);

  useEffect(
    function () {
     getdata();
    },
    [pageno]
  );
  async function getdata() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageno}&limit=18`
    );

    const data = response.data;
    SetUser([...data]);
    console.log(data);
  }
  let print = <h3 className="text-amber-50 text-4xl">Loading...</h3>;
  if (user.length > 0) {
    print = user.map(function (item, idx) {
      return <Card key={idx} link={item.download_url} imgname={item.author} />;
    });
  }
  return (
    <div className="bg-black h-screen w-screen p-5 flex flex-col items-center">
      <div
        id="gallerybg"
        className="bg-black h-11/12 max-w-11/12  flex flex-wrap justify-center items-center gap-4"
      >
        {print}
      </div>
      <div className="  flex justify-center align-middle">
        <button style={{opacity:pageno==1?0.5:1}}
          onClick={function () {
            if (pageno > 1) {
              SetPageno(pageno - 1);
              SetUser([]);
            }
          }}
          className="bg-yellow-300 m-1 px-4 py-3 rounded active:scale-95"
        >
          Prev
        </button>
        <h3 className="h-fit m-1 w-fit font-bold text-amber-50 my-auto">
          Page{pageno}
        </h3>
        <button
          onClick={function () {
            SetPageno(pageno + 1);
            SetUser([]);
            print;
          }}
          className=" m-1 bg-yellow-300 px-4 py-3 rounded  active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Section;

