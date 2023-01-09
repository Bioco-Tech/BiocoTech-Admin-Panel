/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";

import { Switch } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { RiDeleteBin5Line } from "react-icons/ri";
import staff from "../../Components/StaffData";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";

//react-icon imports
import { IoIosArrowBack } from "react-icons/io";
import { apiUrl } from "../../constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Singlecompany({ company, units }) {
  // console.log(company)

  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [id, setId] = useState("");
  const [unit_details, setUnit_details] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  //////--->useStates
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(false);
  const [editPin, setEditPin] = useState(false);
  const [editAbout, setEditAbout] = useState(false);
  const [editAttach, setEditAttach] = useState(false);
  const [editValue, setEditValue] = useState(company.name);
  const [editVid, setEditVid] = useState(company.id);
  const [editVpin, setEditVpin] = useState(company.pin);
  const [editVabout, setEditVabout] = useState(company.about);
  const [editVattach, setEditVattach] = useState("");
  /////--->useRefs
  const inputElement_0 = useRef();
  const inputElement_1 = useRef();
  const inputElement_2 = useRef();
  const inputElement_3 = useRef();
  const inputElement_4 = useRef();
  // const saveOrEdit = useRef()
  ////---->functions
  const focusInput = () => {
    if (edit == false) inputElement_0.current.focus();
  };
  const focusId = () => {
    if (editId == false) inputElement_1.current.focus();
  };
  const focusPin = () => {
    if (editPin == false) inputElement_2.current.focus();
  };
  const focusAbout = () => {
    if (editAbout == false) inputElement_3.current.focus();
  };
  const focusAttach = () => {
    if (editAttach == false) inputElement_4.current.focus();
  };

  const sendPostRequest = () => {
    // console.log(saveOrEdit)
    if (edit == true) {
      console.log("hello1");
      axios.put(`${apiUrl}/api/companies/${company._id}`, { name: editValue });
      {
        company.name;
      }
    }
  };
  const sendPostId = () => {
    // console.log(saveOrEdit)
    if (editId == true) {
      console.log("hello2");
      axios.put(`${apiUrl}/api/companies/${company._id}`, { id: editVid });
    }
  };
  const sendPostPin = () => {
    // console.log(saveOrEdit)
    if (editPin == true) {
      console.log("hello3");
      axios.put(`${apiUrl}/api/companies/${company._id}`, { pin: editVpin });
    }
  };
  const sendPostAbout = () => {
    // console.log(saveOrEdit)
    if (editAbout == true) {
      console.log("hello4");
      axios.put(`${apiUrl}/api/companies/${company._id}`, {
        about: editVabout,
      });
    }
  };
  const sendPostAttach = () => {
    // console.log(saveOrEdit)
    if (editAttach == true) {
      console.log("hello4");
      axios.put(`${apiUrl}/api/companies/${company._id}`, {
        attach: editVattach,
      });
    }
  };

  useEffect(() => {
    console.log("in useEffect");
    sendPostRequest();
  }, [editValue, editVid, editVpin, editVabout, editVattach]);

  ////////////////////////////////////////////////////////////////////

  function closemodal() {
    setOpenModal(false);
  }
  const notify = () =>
    toast.success("checklist deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  {
    /*const fetchUnit = async (id) => {
        await axios.get(`${apiUrl}/api/companies/units/${id}`).then((res) => {
          setItems(res.company);
          // setChange(res.company.reverse())
          
        });
      };*/
  }

  {
    /*} const fetchCompany = async (context) => {
        const {id} =context.query._id;
       
        await axios.get(`${apiUrl}/api/companies/${id}`).then((res)=>{
            const values = res.company
         setCompany(values);
            
            // setChange(res.company.reverse())
       })
        

       
           

        
    };*/
  }

  useEffect(() => {
    //fetchUnit();
    //fetchCompany()

    console.log("fetchList ");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${apiUrl}/api/companies/units`, { id, unit_details })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    console.log(id, unit_details);
  };

  return (
    <>
      <Modal show={openModal} onHide={closemodal}>
        <Modal.Body closeModal>
          <button
            className="float-right -mt-8"
            onClick={() => closemodal(false)}
          >
            x
          </button>
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div className="py-4 sm:grid px-16 sm:grid-cols-3 border-b md:ml-32 md:mr-32 md:mt-32 lg:mr-64 lg:mt-32 border-gray-200 sm:gap-4    sm:py-5">
                <dt className="text-sm font-medium font-abc text-gray-500">
                  Unit
                </dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span className="flex-grow">
                    {" "}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100 font-abc ">
                          Select unit
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 font-abc  py-2 text-sm"
                                  )}
                                >
                                  M1
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 font-abc  text-sm"
                                  )}
                                >
                                  M6
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block font-abc  px-4 py-2 text-sm"
                                  )}
                                >
                                  M2
                                </a>
                              )}
                            </Menu.Item>
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full px-4 py-2 font-abc  text-left text-sm"
                                    )}
                                  >
                                    M8
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </span>
                  <span className="  flex flex-shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-abc  focus:ring-offset-2"
                    >
                      Update
                    </button>
                    <span
                      className="text-gray-300 font-abc  mt-2"
                      aria-hidden="true"
                    >
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-abc  focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </span>
                </dd>
                <dt className="text-sm font-medium mt-1 font-abc  text-gray-500">
                  Unit ID
                </dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <input
                    name="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="block w-full border p-2 rounded-md border-gray-300  shadow-sm  sm:text-sm"
                    placeholder="Type ID"
                    aria-describedby="email-description"
                  />
                </dd>
                <dt className="text-sm font-medium text-gray-500 font-abc ">
                  Unit Details
                </dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    value={unit_details}
                    onChange={(e) => setUnit_details(e.target.value)}
                    placeholder="  Add new unit..."
                    className="block w-full rounded-md border  p-2 border-gray-300 shadow-sm  sm:text-sm"
                  />
                </dd>
              </div>

              <div>
                <button
                  type="button"
                  onClick={closemodal}
                  className="inline-flex mt-2 lg:mr-64  md:mr-32 px-2 items-center float-right mb-3 rounded-md border border-transparent bg-cyan-600  py-2 text-xs font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 font-abc  focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Add New Unit
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {!openModal && (
        <div>
          <button className="text-lg ml-5 mt-5 font-medium leading-6 text-gray-900">
            <span className=" text-md">
              {" "}
              <Link
                className="flex font-abc  justify-center flex-row items-center"
                href="/admin/companies"
              >
                <IoIosArrowBack />
                Back
              </Link>
            </span>
          </button>

          <div className="flex p-4 px-4 py-4">
            <div className="ml-5 mr-5 mt-5 mb-5 w-1/2">
              <div></div>
              <div className="mt-5  border-gray-200">
                <dl className="divide-y divide-lime-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <>
                      <dt className="text-sm font-abc  font-medium text-gray-500">
                        Company Name
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 ">
                        <span className="flex-grow font-abc ">
                          <input
                            className="outline-none"
                            ref={inputElement_0}
                            value={edit ? editValue : company.name}
                            onChange={(e) => {
                              setEditValue(e.target.value);
                            }}
                          />
                        </span>
                        <span className="ml-4 flex-shrink-0">
                          <button
                            onClick={() => {
                              setEdit(!edit);
                              focusInput();
                              sendPostRequest();
                            }}
                            type="button"
                            className="rounded-md bg-white  text-sm font-thin text-cyan-600 hover:text-cyan-500 focus:outline-none  font-abc "
                          >
                            <div>{edit == false ? "Edit" : "Update"}</div>
                          </button>
                        </span>
                      </dd>
                    </>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium font-abc  text-gray-500">
                      Company ID
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow font-abc ">
                        <input
                          className="outline-none"
                          ref={inputElement_1}
                          value={editId ? editVid : company.id}
                          onChange={(e) => {
                            setEditVid(e.target.value);
                          }}
                        />
                      </span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          onClick={() => {
                            setEditId(!editId);
                            focusId();
                            sendPostId();
                          }}
                          type="button"
                          className="rounded-md font-abc  bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none "
                        >
                          <div>{editId == false ? "Edit" : "Update"}</div>
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium font-abc  text-gray-500">
                      Company Pin
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow font-abc ">
                        <input
                          className="outline-none"
                          ref={inputElement_2}
                          value={editPin ? editVpin : company.pin}
                          onChange={(e) => {
                            setEditVpin(e.target.value);
                          }}
                        />
                      </span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          onClick={() => {
                            setEditPin(!editPin);
                            focusPin();
                            sendPostPin();
                          }}
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500  font-abc  focus:ring-offset-2"
                        >
                          <div>{editPin == false ? "Edit" : "Update"}</div>
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium font-abc  text-gray-500">
                      Status
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow font-abc ">Action</span>
                      <span className="ml-4 flex-shrink-0">
                        <Switch
                          isToggled={isToggled}
                          onClick={() => setIsToggled(!isToggled)}
                          className={classNames(
                            isToggled ? "bg-lime-600" : "bg-gray-200",
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                          )}
                        >
                          <span className="sr-only font-abc ">Action</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              isToggled ? "translate-x-5" : "translate-x-0",
                              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium font-abc  text-gray-500">
                      Web/Link(options)
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow font-abc ">
                        {company.website}
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium font-abc  text-gray-500">
                      About/Other details
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow font-abc ">
                        <input
                          className="outline-none"
                          ref={inputElement_3}
                          value={editAbout ? editVabout : company.about}
                          onChange={(e) => {
                            setEditVabout(e.target.value);
                          }}
                        />
                      </span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          onClick={() => {
                            setEditAbout(!editAbout);
                            focusAbout();
                            sendPostAbout();
                          }}
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500  font-abc  focus:ring-offset-2"
                        >
                          <div>{editAbout == false ? "Edit" : "Update"}</div>
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 font-abc  sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium text-gray-500">
                      Attachments
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul
                        role="list"
                        className="divide-y divide-gray-200 rounded-md border border-gray-200"
                      >
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                          <div className="flex w-0 flex-1 items-center">
                            <span className="ml-2 font-abc w-0 flex-1 truncate">
                              resume_back_end_developer.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex flex-shrink-0 space-x-4">
                            <button
                              type="button"
                              className="rounded-md font-abc  bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">
                              |
                            </span>
                            <button
                              type="button"
                              className="rounded-md font-abc  bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                          <div className="flex w-0 flex-1 items-center">
                            <span className="ml-2 w-0 flex-1 font-abc  truncate">
                              <input
                                ref={inputElement_4}
                                value={
                                  editAttach
                                    ? editVattach
                                    : "coverletter_back_end_developer.pdf"
                                }
                                onChange={(e) => {
                                  setEditVattach(e.target.value);
                                }}
                              />
                            </span>
                          </div>
                          <div className="ml-4 flex flex-shrink-0 space-x-4">
                            <button
                              onClick={() => {
                                setEditAttach(!editAttach);
                                focusAttach();
                                sendPostAttach();
                              }}
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none  font-abc "
                            >
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">
                              |
                            </span>
                            <button
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 font-abc "
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>

                  <div className="py-4 sm:grid sm:grid-cols-3 border-b border-gray-200 sm:gap-4 sm:py-5">
                    {" "}
                    <dt className="text-sm font-medium text-gray-500 font-abc ">
                      Unit
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow font-abc ">
                        {" "}
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                              M1
                              <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ isActive }) => (
                                    <Link
                                      href="#"
                                      className={classNames(
                                        isActive
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      M1
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ isActive }) => (
                                    <Link
                                      href="#"
                                      className={classNames(
                                        isActive
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      M8
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      M2
                                    </a>
                                  )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        type="submit"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block w-full px-4 py-2 text-left text-sm"
                                        )}
                                      >
                                        M6
                                      </button>
                                    )}
                                  </Menu.Item>
                                </form>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </span>
                      <span className="  flex flex-shrink-0 space-x-4">
                        <button
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-abc  focus:ring-offset-2"
                        >
                          Update
                        </button>
                        <span className="text-gray-300 mt-2" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-abc  focus:ring-offset-2"
                        >
                          Remove
                        </button>
                      </span>
                    </dd>
                    {units.map((unit) => (
                      <>
                        <dt className="text-sm font-medium text-gray-500 font-abc ">
                          Unit ID
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-abc ">
                          {unit.id}
                        </dd>
                        <dt className="text-sm font-medium text-gray-500 font-abc ">
                          Unit Details
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-abc ">
                          {unit.unit_details}
                        </dd>
                      </>
                    ))}
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                      className="inline-flex font-abc  mt-2 items-center float-right mb-3 rounded-md border border-transparent bg-cyan-600 px-2 py-2 text-xs font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                      Add New Unit
                    </button>
                  </div>
                </dl>
              </div>
            </div>
            <div className="px-4 sm:px-6 -mt-10  lg:px-8 w-3/4 float-right">
              <div className=" z-10 flex h-16 flex-shrink-0  mb-5 border-b border-cyan-400 bg-white">
                <div className="flex flex-1 border border-transparent  justify-between mt-0 sm:px-2 px-4 md:px-0">
                  <div className="flex flex-1">
                    <form
                      className="flex w-full md:ml-0"
                      action="#"
                      method="GET"
                    >
                      <label
                        htmlFor="search-field"
                        className="sr-only text-cyan-400 font-abc "
                      >
                        Search Staff Member
                      </label>
                      <div className="relative w-full text-cyan-400  focus-within:text-cyan-600">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                          <MagnifyingGlassIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search-field"
                          className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                          placeholder="Search Staff Member"
                          type="search"
                          name="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-4 sm:py-6 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                <div className="sm:flex sm:items-center ">
                  <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900 font-abc ">
                      Pizza Hut
                    </h1>
                    <p className="mt-2 text-sm font-abc  text-gray-700">
                      Below the details of this company
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 font-abc  sm:ml-16 sm:flex-none">
                    <button>
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex flex-col">
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-lime-500 ">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 font-abc "
                              >
                                Staff (4)
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold font-abc text-white"
                              >
                                Registered Date & Time
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold font-abc text-white"
                              >
                                Ibs Processes (125,675)
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold font-abc text-white"
                              >
                                MTCO (5785)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-lime-50">
                            {staff.map((person) => (
                              <tr key={person.name}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 font-abc  sm:pl-6">
                                  {person.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm font-abc  text-gray-500">
                                  {person.date}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm font-abc  text-gray-500">
                                  {person.ibs}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm font-abc  text-gray-500">
                                  {person.mtco}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Singlecompany;

export async function getServerSideProps(context) {
  const { _id } = context.query;
  console.log(context.query._id);
  const company = await fetch(`${apiUrl}/api/companies/${_id}`);
  const units = await fetch(`${apiUrl}/api/companies/units/${_id}`);
  console.log(company);
  console.log(units);
  const companyData = await company.json();
  const unitsData = await units.json();

  return {
    props: {
      company: companyData,
      units: unitsData,
      // data:{}
    },
  };
}
{
  /*export async function getServerSideProps(context) {
    const { _id } = context.query;
    console.log(context.query._id)
    const res = await fetch(`${apiUrl}/api/companies/units/${_id}`)
    const data = await res.json();

    return {
        props: {
            data: data
            // data:{}
        }
    }
}*/
}
