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

  const [istoggled, setIstoggled] = useState(false);
  const [unitid, setUnitid] = useState('')
  const [unitdetails, setUnitdetails] = useState('')
  const [showform, setShowform] = useState(false)


  const router = useRouter();
 

  //////--->useStates
  {/*const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(false);
  const [editPin, setEditPin] = useState(false);
  const [editAbout, setEditAbout] = useState(false);
  const [editAttach, setEditAttach] = useState(false);
  const [editValue, setEditValue] = useState(company.name);
  const [editVid, setEditVid] = useState(company.id);
  const [editVpin, setEditVpin] = useState(company.pin);
  const [editVabout, setEditVabout] = useState(company.about);
const [editVattach, setEditVattach] = useState("");*/}

  // Unit edit Check
  const [check_unit_edit, set_check_unit_edit] = useState({
    unitId: null,
    edit: false,
  });
  // New unit
  const [new_unit, set_new_unit] = useState({
    unit: "M1",
    unitId: "",
    details: "",
  });
  // Company edit Check
  const [check_name_edit, set_check_name_edit] = useState({
    name: null,
    edit: false,
  });
  const [check_id_edit, set_check_id_edit] = useState({
    id: null,
    edit: false,
  });
  const [check_pin_edit, set_check_pin_edit] = useState({
    pin: null,
    edit: false,
  });
  const [check_web_edit, set_check_web_edit] = useState({
    web: null,
    edit: false,
  });
  const [check_about_edit, set_check_about_edit] = useState({
    about: null,
    edit: false,
  });


  function handleEdit(unitId) {
    set_check_unit_edit({ unitId: unitId, edit: true });
  }

  function handleCancel(unitId) {
    set_check_unit_edit({ unitId: unitId, edit: false });
  }

  // Unit edit fields
  const [get_unit_id_after_edit, set_unit_id_after_edit] = useState(units.id);
  const [get_unit_details_after_edit, set_unit_details_after_edit] = useState(
    units.unit_details
  );
  // Company edit fields
  const [get_name_after_edit, set_name_after_edit] = useState(company.name);
  const [get_id_after_edit, set_id_after_edit] = useState(company.id);
  const [get_pin_after_edit, set_pin_after_edit] = useState(company.pin);
  const [get_web_after_edit, set_web_after_edit] = useState(company.web);
  const [get_about_after_edit, set_about_after_edit] = useState(company.about);
 


  /////--->useRefs
  //const inputElement_0 = useRef();
  //const inputElement_1 = useRef();
  //const inputElement_2 = useRef();
  //const inputElement_3 = useRef();
  // const inputElement_4 = useRef();
  //const inputElement_5 = useRef();
  //const inputElement_6 = useRef();
  // const saveOrEdit = useRef()
  ////---->functions
  {/*const focusInput = () => {
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
  };*/}
  // const focusUid = () => {
  //   if (check_unit_edit == false) inputElement_5.current.focus();
  // };
  // const focusUd = () => {
  //   if (check_unit_details == false) inputElement_6.current.focus();
  // };


  //Post Request
 
    const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${apiUrl}/api/companies/units`, {"unit": new_unit.unit, "id": unitid, "unit_details": unitdetails, "company": company._id }).then((res) => {

      console.log(res);
     
    });
  };
   
  
  

  //Delete Request
  const deleteUnit = (id) => {
    axios.delete(`${apiUrl}/api/companies/units/${id}`).then((res) => {

      //setItems(res.data);
      console.log("-- res.data --", res.data);
    });
  };



//Put Request
  const sendPutRequest = () => {
    // console.log(saveOrEdit)
   
      axios.put(`${apiUrl}/api/companies/${company._id}`, { name: get_name_after_edit});


    
  };
  
 
  
  // edit unit
  const unit_type_change = (event) => {
    console.log(event.target.innerHTML);
    
    
  };

  function unit_type_change_value(value) {
    console.log(value);
  }

  // new unity
  const unit_type_change_new = (event) => {
    console.log("changenew ", event.target.innerHTML);
    set_new_unit({unit: event.target.innerHTML})
  };

  function unit_type_change_value_new(value) {
    console.log('Change ', value);
  }

  const sendPostAttach = () => {
    // console.log(saveOrEdit)
    if (editAttach == true) {
      console.log("hello4");
      axios.put(`${apiUrl}/api/companies/${company._id}`, {
        attach: editVattach,
      });
    }
  };



  ////////////////////////////////////////////////////////////////////

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



  return (
    <>
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

                        {check_name_edit.name === null ? (
                          `${company.name}`
                        ) : check_name_edit.name !== company.name ? (
                          `${company.name}`
                        ) : check_name_edit.name === company.name &&
                          !check_name_edit.edit ? (
                          `${company.name}`
                        ) : (
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                           
                            value={get_name_after_edit}
                            onChange={(e)=>set_name_after_edit(e.target.value)}
                          />
                        )}

                        {/*<input
                         
                          ref={inputElement_0}
                          value={edit ? editValue  : company.name}
                          onChange={(e) => {
                            setEditValue(e.target.value);
                          }}
                        />*/}
                      </span>
                      <span className="ml-4 flex-shrink-0">
                        <button

                          id={company.name}
                          key={company.name}
                          onClick={(s) => {
                            // console.log(s);

                            // setOpenMenu(!openMenu);
                            // console.log(check_unit_edit);
                            // if (check_unit_edit.unitId == null) {
                            //   handleEdit(unit.id)
                            // } else if (check) { }
                            // set_check_unit_edit({
                            //   unitId:
                            //     // s.target.innerHTML == "Edit" ? unit.id : null,
                            //     unit.id,
                            //   edit: !check_unit_edit.edit,
                            // });

                            console.log(company.name);
                            if (check_name_edit.name == null) {
                              console.log("1");
                              // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                              set_check_name_edit({
                                name: company.name,
                                edit: true,
                              });
                            } else if (check_name_edit.name === company.name) {
                              console.log("2");
                              // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                              set_check_name_edit({
                                name: null,
                                edit: false,
                              });
                            } else {
                              console.log("3");
                              set_check_name_edit({
                                name: null,
                                edit: false,
                              });
                            }

                            // focusUid();
                          }}
                          type="button"
                          className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                        >
                          <div>
                            {check_name_edit.name === null
                              ? "Edit"
                              : check_name_edit.name === company.name &&
                                check_name_edit.edit
                                ?<button type="button" onClick={()=>sendPutRequest()}>Update</button>
                                : "Edit"}
                          </div>
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
                      {check_id_edit.id === null ? (
                        `${company.id}`
                      ) : check_id_edit.id !== company.id ? (
                        `${company.id}`
                      ) : check_id_edit.id === company.id &&
                        !check_id_edit.edit ? (
                        `${company.id}`
                      ) : (
                        <input
                          type="email"

                          className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                          defaultValue={company.id}
                          onChange={set_id_after_edit}
                        />
                      )}


                    </span>
                    <span className="ml-4 flex-shrink-0">
                      <button

                        id={company.id}
                        key={company.id}
                        onClick={(s) => {
                          // console.log(s);

                          // setOpenMenu(!openMenu);
                          // console.log(check_unit_edit);
                          // if (check_unit_edit.unitId == null) {
                          //   handleEdit(unit.id)
                          // } else if (check) { }
                          // set_check_unit_edit({
                          //   unitId:
                          //     // s.target.innerHTML == "Edit" ? unit.id : null,
                          //     unit.id,
                          //   edit: !check_unit_edit.edit,
                          // });

                          console.log(company.id);
                          if (check_id_edit.id == null) {
                            console.log("1");
                            // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                            set_check_id_edit({
                              id: company.id,
                              edit: true,
                            });
                          } else if (check_id_edit.id === company.id) {
                            console.log("2");
                            // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                            set_check_id_edit({
                              id: null,
                              edit: false,
                            });
                          } else {
                            console.log("3");
                            set_check_id_edit({
                              id: null,
                              edit: false,
                            });
                          }

                          // focusUid();
                        }}
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                          {check_id_edit.id === null
                            ? "Edit"
                            : check_id_edit.id === company.id &&
                              check_id_edit.edit
                              ? "Update"
                              : "Edit"}
                        </div>
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
                      {check_pin_edit.pin === null ? (
                        `${company.pin}`
                      ) : check_pin_edit.pin !== company.pin ? (
                        `${company.pin}`
                      ) : check_pin_edit.pin === company.pin &&
                        !check_pin_edit.edit ? (
                        `${company.pin}`
                      ) : (
                        <input
                          type="email"

                          className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                          defaultValue={company.pin}
                          onChange={set_pin_after_edit}
                        />
                      )}
                    </span>
                    <span className="ml-4 flex-shrink-0">
                      <button

                        id={company.pin}
                        key={company.pin}
                        onClick={(s) => {
                          // console.log(s);

                          // setOpenMenu(!openMenu);
                          // console.log(check_unit_edit);
                          // if (check_unit_edit.unitId == null) {
                          //   handleEdit(unit.id)
                          // } else if (check) { }
                          // set_check_unit_edit({
                          //   unitId:
                          //     // s.target.innerHTML == "Edit" ? unit.id : null,
                          //     unit.id,
                          //   edit: !check_unit_edit.edit,
                          // });

                          console.log(company.pin);
                          if (check_pin_edit.pin == null) {
                            console.log("1");
                            // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                            set_check_pin_edit({
                              pin: company.pin,
                              edit: true,
                            });
                          } else if (check_pin_edit.pin === company.pin) {
                            console.log("2");
                            // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                            set_check_pin_edit({
                              pin: null,
                              edit: false,
                            });
                          } else {
                            console.log("3");
                            set_check_pin_edit({
                              pin: null,
                              edit: false,
                            });
                          }

                          // focusUid();
                        }}
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                          {check_pin_edit.pin === null
                            ? "Edit"
                            : check_pin_edit.pin === company.pin &&
                              check_pin_edit.edit
                              ? "Update"
                              : "Edit"}
                        </div>
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium font-abc  text-gray-500">
                    Status
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {istoggled && <span className="flex-grow font-abc ">Active</span>}
                    {!istoggled && <span className="flex-grow font-abc ">In Active</span>}
                    <span className="ml-4 flex-shrink-0">
                      <Switch
                        istoggled={istoggled}
                        onClick={() => setIstoggled(!istoggled)}
                        className={classNames(
                          istoggled ? "bg-lime-600" : "bg-gray-200",
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                        )}
                      >

                        <span
                          aria-hidden="true"
                          className={classNames(
                            istoggled ? "translate-x-5" : "translate-x-0",
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
                      {check_web_edit.web === null ? (
                        `${company.website}`
                      ) : check_web_edit.web !== company.website ? (
                        `${company.website}`
                      ) : check_web_edit.web === company.website &&
                        !check_web_edit.edit ? (
                        `${company.website}`
                      ) : (
                        <input
                          type="email"

                          className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                          defaultValue={company.website}
                          onChange={set_web_after_edit}
                        />
                      )}
                    </span>

                    <span className="ml-4 flex-shrink-0">
                      <button

                        id={company.website}
                        key={company.website}
                        onClick={(s) => {
                          // console.log(s);

                          // setOpenMenu(!openMenu);
                          // console.log(check_unit_edit);
                          // if (check_unit_edit.unitId == null) {
                          //   handleEdit(unit.id)
                          // } else if (check) { }
                          // set_check_unit_edit({
                          //   unitId:
                          //     // s.target.innerHTML == "Edit" ? unit.id : null,
                          //     unit.id,
                          //   edit: !check_unit_edit.edit,
                          // });

                          console.log(company.website);
                          if (check_web_edit.web == null) {
                            console.log("1");
                            // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                            set_check_web_edit({
                              web: company.website,
                              edit: true,
                            });
                          } else if (check_web_edit.web === company.website) {
                            console.log("2");
                            // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                            set_check_web_edit({
                              web: null,
                              edit: false,
                            });
                          } else {
                            console.log("3");
                            set_check_web_edit({
                              web: null,
                              edit: false,
                            });
                          }

                          // focusUid();
                        }}
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                          {check_web_edit.web === null
                            ? "Edit"
                            : check_web_edit.web === company.website &&
                              check_web_edit.edit
                              ? "Update"
                              : "Edit"}
                        </div>
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium font-abc  text-gray-500">
                    About/Other details
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow font-abc ">
                      {check_about_edit.about === null ? (
                        `${company.about}`
                      ) : check_about_edit.about !== company.about ? (
                        `${company.about}`
                      ) : check_about_edit.about === company.about &&
                        !check_about_edit.edit ? (
                        `${company.about}`
                      ) : (
                        <input
                          type="email"

                          className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                          defaultValue={company.about}
                          onChange={set_about_after_edit}
                        />
                      )}
                    </span>
                    <span className="ml-4 flex-shrink-0">
                      <button

                        id={company.about}
                        key={company.about}
                        onClick={(s) => {
                          // console.log(s);

                          // setOpenMenu(!openMenu);
                          // console.log(check_unit_edit);
                          // if (check_unit_edit.unitId == null) {
                          //   handleEdit(unit.id)
                          // } else if (check) { }
                          // set_check_unit_edit({
                          //   unitId:
                          //     // s.target.innerHTML == "Edit" ? unit.id : null,
                          //     unit.id,
                          //   edit: !check_unit_edit.edit,
                          // });

                          console.log(company.about);
                          if (check_about_edit.about == null) {
                            console.log("1");
                            // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                            set_check_about_edit({
                              about: company.about,
                              edit: true,
                            });
                          } else if (check_about_edit.about === company.about) {
                            console.log("2");
                            // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                            set_check_about_edit({
                              about: null,
                              edit: false,
                            });
                          } else {
                            console.log("3");
                            set_check_about_edit({
                              about: null,
                              edit: false,
                            });
                          }

                          // focusUid();
                        }}
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                          {check_about_edit.about === null
                            ? "Edit"
                            : check_about_edit.about === company.about &&
                              check_about_edit.edit
                              ? "Update"
                              : "Edit"}
                        </div>
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

                            coverletter_back_end_developer.pdf


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

                <div className="py-4 sm:grid sm:grid-cols-3 border-b border-gray-200 sm:gap-4 sm:py-5 ">
                  {units.map((unit) => (
                    <>
                      <dt className="text-sm font-medium text-gray-500 font-abc pt-2.5">
                        Unit
                      </dt>
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <span className="flex-grow font-abc ">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button
                                disabled={
                                  unit.id === check_unit_edit.unitId &&
                                    check_unit_edit.unitId != null &&
                                    check_unit_edit.edit
                                    ? false
                                    : true
                                }
                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100 font-abc "
                              >
                                {unit.unit}
                                <ChevronDownIcon
                                  className={classNames(
                                    check_unit_edit.unitId === null
                                      ? "hidden"
                                      : unit.id === check_unit_edit.unitId &&
                                        check_unit_edit.edit
                                        ? "-mr-1 ml-2 h-5 w-5"
                                        : "hidden"
                                  )}
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
                              <Menu.Items
                                defaultValue={"123123"}
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                <div className="py-1">
                                  {["M1", "M2", "M6", "M8"].map((item) => {
                                    return (
                                      <Menu.Item key={item}>
                                        <a
                                          // href="#"
                                          // key={unit.id}
                                          onClick={unit_type_change}
                                          onChange={unit_type_change_value}
                                          className={classNames(
                                            "text-gray-700 block px-4 font-abc  py-2 text-sm hover:cursor-pointer"
                                          )}
                                        >
                                          {item}
                                        </a>
                                      </Menu.Item>
                                    );
                                  })}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </span>
                        <span className="flex flex-shrink-0 space-x-4">
                          <button
                            // id={unit.id}
                            // key={unit.id}
                            onClick={(s) => {
                              // console.log(s);

                              // setOpenMenu(!openMenu);
                              // console.log(check_unit_edit);
                              // if (check_unit_edit.unitId == null) {
                              //   handleEdit(unit.id)
                              // } else if (check) { }
                              // set_check_unit_edit({
                              //   unitId:
                              //     // s.target.innerHTML == "Edit" ? unit.id : null,
                              //     unit.id,
                              //   edit: !check_unit_edit.edit,
                              // });

                              console.log(unit.id);
                              if (check_unit_edit.unitId == null) {
                                console.log("1");
                                // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                                set_check_unit_edit({
                                  unitId: unit.id,
                                  edit: true,
                                });
                              } else if (check_unit_edit.unitId === unit.id) {
                                console.log("2");
                                // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                                set_check_unit_edit({
                                  unitId: null,
                                  edit: false,
                                });
                              } else {
                                console.log("3");
                                set_check_unit_edit({
                                  unitId: null,
                                  edit: false,
                                });
                              }

                              // focusUid();
                            }}
                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                          >
                            <div>
                              {check_unit_edit.unitId === null
                                ? "Edit"
                                : check_unit_edit.unitId === unit.id &&
                                  check_unit_edit.edit
                                  ? "Update"
                                  : "Edit"}
                            </div>
                          </button>
                          <span
                            className="text-gray-300 mt-2"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-abc  focus:ring-offset-2"
                            onClick={() => {
                              deleteUnit(unit._id),notify()
                            }}
                          >

                            Remove
                          </button>
                          <ToastContainer/>
                        </span>
                      </dd>

                      <dt className="text-sm font-medium text-gray-500 font-abc ">
                        Unit ID
                      </dt>

                      {/* <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-abc">
                        <input
                          disabled={!check_unit_edit}
                          className="outline-none w-full disabled:bg-white"
                          ref={inputElement_5}
                          value={
                            check_unit_edit ? get_unit_id_after_edit : unit.id
                          }
                          onChange={(e) => {
                            set_unit_id_after_edit(e.target.value);
                          }}
                        />
                      </dd> */}
                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-abc">
                        {/* <input
                          disabled={!check_unit_edit}
                          className="outline-none w-full disabled:bg-white"
                          ref={inputElement_6}
                          value={
                            check_unit_edit
                              ? get_unit_details_after_edit
                              : unit.unit_details
                          }
                          onChange={(e) => {
                            set_unit_details_after_edit(e.target.value);
                          }}
                        /> */}

                        {check_unit_edit.unitId === null ? (
                          `${unit.id}`
                        ) : check_unit_edit.unitId !== unit.id ? (
                          `${unit.id}`
                        ) : check_unit_edit.unitId === unit.id &&
                          !check_unit_edit.edit ? (
                          `${unit.id}`
                        ) : (
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"
                            defaultValue={unit.id}
                            onChange={set_unit_id_after_edit}
                          />
                        )}
                      </dd>

                      <dt className="text-sm font-medium text-gray-500 font-abc divide-y">
                        Unit Details
                      </dt>

                      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-abc">
                        {/* <input
                          disabled={!check_unit_edit}
                          className="outline-none w-full disabled:bg-white"
                          ref={inputElement_6}
                          value={
                            check_unit_edit
                              ? get_unit_details_after_edit
                              : unit.unit_details
                          }
                          onChange={(e) => {
                            set_unit_details_after_edit(e.target.value);
                          }}
                        /> */}
                        {check_unit_edit.unitId === null ? (
                          `${unit.unit_details}`
                        ) : check_unit_edit.unitId !== unit.id ? (
                          `${unit.unit_details}`
                        ) : check_unit_edit.unitId === unit.id &&
                          !check_unit_edit.edit ? (
                          `${unit.unit_details}`
                        ) : (
                          <textarea
                          rows={4}
                          name="comment"
                          defaultValue={unit.unit_details}
                            onChange={set_unit_details_after_edit}
                          id="comment"
                          placeholder="  Add unit details"
                          className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                         
                        )}
                      </dd>
                    </>
                  ))}
                </div>{/*unit form*/}
                {
                  showform ? (
                    <div className="py-4 sm:grid sm:grid-cols-3 border-b border-gray-200 sm:gap-4 sm:py-5">
                      {" "}
                      <>
                        <dt className="text-sm font-medium text-gray-500 font-abc ">
                          Unit
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span className="flex-grow font-abc ">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button
                                // disabled={
                                //   unit.id === check_unit_edit.unitId &&
                                //     check_unit_edit.unitId != null &&
                                //     check_unit_edit.edit
                                //     ? false
                                //     : true
                                // }
                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100 font-abc "
                              >
                              {new_unit.unit}
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
                              <Menu.Items
                                // defaultValue={"123123"}
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                <div className="py-1">
                                  {["M1", "M2", "M6", "M8"].map((item) => {
                                    return (
                                      <Menu.Item key={item}>
                                        <a
                                          // href="#"
                                        
                                          // key={unit.id}
                                          onClick={unit_type_change_new}
                                          onChange={unit_type_change_value_new}
                                          className={classNames(
                                            "text-gray-700 block px-4 font-abc  py-2 text-sm hover:cursor-pointer"
                                          )}
                                        >
                                          {item}
                                        </a>
                                      </Menu.Item>
                                    );
                                  })}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>



                          </span>
                          <span className="  flex flex-shrink-0 space-x-4">
                            <button
                              onClick={(e) => { setShowform(false), handleSubmit(e) }}
                              type="button"
                              className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                            >

                              Save


                            </button>
                          
                          </span>
                        </dd>

                        <dt className="text-sm font-medium text-gray-500 font-abc ">
                          Unit ID
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-abc ">
                          
                           <input
                            type="text"
                            name="number"
                            value={unitid}
                            onChange={(e) => setUnitid(e.target.value)}
                            className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           placeholder="Type ID"
                            
                          />

                        </dd>
                        <dt className="text-sm font-medium text-gray-500 font-abc ">
                          Unit Details
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0 font-abc ">
                          <textarea
                            rows={4}
                            name="comment"
                            value={unitdetails}
                            onChange={(e) => setUnitdetails(e.target.value)}
                            id="comment"
                            placeholder="  Add unit details"
                            className="block w-full rounded-md -mt-2.5 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
                          />

                        </dd>
                      </>

                    </div>) : (<div>
                      <button
                        type="button"
                        onClick={() => setShowform(true)}
                        className="inline-flex font-abc  mt-2 items-center float-right mb-3 rounded-md border border-transparent bg-cyan-600 px-2 py-2 text-xs font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      >
                        Add New Unit
                      </button>
                    </div>)
                }



              </dl>
            </div>
          </div>
          <div className="px-4 sm:px-6 -mt-10  lg:px-8 w-3/4 float-right">
            <div className=" z-10 flex h-16 flex-shrink-0  mb-5 border-b border-cyan-400 bg-white">
              <div className="flex flex-1 border border-transparent  justify-between mt-0 sm:px-2 px-4 md:px-0">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
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
            </div>
          </div>
        </div>
      </div>
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