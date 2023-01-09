/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { apiUrl } from "../constants";
import { usama2, usama3 } from "./admin/checklist";

function update() {
  const [data, setData] = useState([]);
  console.log(usama2);
  const update = async () => {
    // console.log(props._id)
    let res = await fetch(`${apiUrl}/api/checklists/${usama2}`, {
      method: "PUT",
    });
    let result = await res.json();
    setData(result);
    console.log(result);
  };

  useEffect(() => {
    update();
  }, []);
  return (
    <div className="flex  flex-col justify-center md:px-56 md:text-center md:py-24 py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <button className="float-right -mt-8" onClick={() => close(false)}>
            x
          </button>
          <form className="space-y-6">
            <div>
              <div className="mt-1">
                <input
                  name="text"
                  type="text"
                  value={usama3}
                  onChange={(e) => {
                    e.target.value;
                  }}
                  placeholder="add checklist..."
                  className="block w-full appearance-none rounded-md border border-gray-300 px-8 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default update;
