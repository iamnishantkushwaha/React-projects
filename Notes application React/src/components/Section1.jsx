import { useState } from "react";
// import Section2 from './Section2'
import Card from "./Card";
function Section1() {
  let a = 100;
  const [title, setTitle] = useState("");
  const [detail, enterdetail] = useState("");
  const [tasks, setTask] = useState([]);
  const changes = (e) => {
    setTitle(e.target.value);
  };
  const changedetail = (e) => {
    enterdetail(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const copy = [...tasks];
    copy.push({ title, detail });
    setTask(copy);
    // console.log(copy);

    setTitle("");
    enterdetail("");
  };

  const deleted = (idx) => {
    const copyTask = [...tasks];

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <>
      <div className="h-full w-1/2 border-r-4 bg-black border-white flex justify-center p-3 font-mono">
        <div className=" h-3/12 w-10/12 flex  align-middle flex-col ">
          <h1 className="text-white text-6xl font-bold flex self-center ">
            Add Notes
          </h1>
          <form
            onSubmit={function (e) {
              SubmitHandler(e);
            }}
          >
            <input
              required
              className="bg-midnight h-10 w-3/4  text-white rounded-md indent-3 flex justify-self-center mt-3  border-2 border-gray-400"
              id="heading"
              type="text"
              placeholder="Enter Note Heading"
              value={title}
              onChange={function (e) {
                changes(e);
              }}
            />
            <textarea
              required
              rows="1"
              cols="7"
              className="bg-midnight text-white h-29 w-3/4 resize-none  border-2 rounded-md indent-3 border-neutral-400 flex justify-self-center mt-3"
              id="detail"
              placeholder="Enter Details Here"
              value={detail}
              onChange={function (e) {
                changedetail(e);
              }}
            ></textarea>
            <button
              type="Submit"
              className="h-10 w-3/4 bg-white text-black  py-2 align-middle justify-center rounded-md flex justify-self-center mt-3 "
            >
              Add Notes
            </button>
          </form>
        </div>
      </div>
      <div
        id="Notes"
        className="h-full  overflow-y-scroll w-1/2 p-4 flex flex-wrap m-auto gap-6"
      >
        {tasks.map(function (a, idx) {
          return (
            <div key={a + 300} className=" h-65 ">
              <Card key={idx} title={a.title} detail={a.detail} />
              <button
                key={a++}
                onClick={function () {
                  deleted(idx);
                }}
                className=" mx-3.5 active:scale-75  bg-red-500 text-white px-10 py-1.5  rounded "
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Section1;
