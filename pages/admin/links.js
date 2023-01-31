/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TbCheckbox } from "react-icons/tb";
import { ImLink } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { apiUrl } from "../../constants";

function links() {
  const router = useRouter();
  const sideBarRef = useRef();
  const { logout } = useAuth();

  const [links, setLinks] = useState({
    companyConditions: { editing: false, data: "" },
    companyFaqs: { editing: false, data: "" },
    companyPolicy: { editing: false, data: "" },
    staffConditions: { editing: false, data: "" },
    staffFaqs: { editing: false, data: "" },
    staffPolicy: { editing: false, data: "" },
  });

  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }

<<<<<<< HEAD
  

  //Get Request
  const fetchLink = async () => {
    console.log("hi rfresh");
    await axios.get(`${apiUrl}/api/links`).then((res) => {
      console.log(res.data);
      setLinks({
        companyPolicy: { data: res.data.companyPolicy },
        companyConditions: { data: res.data.companyConditions },
        companyFaqs: { data: res.data.companyFaqs },
        staffPolicy: { data: res.data.staffPolicy },
        staffConditions: { data: res.data.staffConditions },
        staffFaqs: { data: res.data.staffFaqs },
        
      });
      //console.log(`data: ${links}`);
    });
  };

  //Put Request link
  
    const sendPutRequest = () => {
  axios.put(`${apiUrl}/api/links`, {  companyPolicy: { data: links.companyPolicy.data} }).then((res)=>{
    console.log(res)
    fetchLink();
  });
};
  
=======
  //Get Request
  const fetchLink = async () => {
    console.log("hi rfresh");
    await axios.get(`${apiUrl}/api/links`).then((res) => {
      console.log(res.data);
      setLinks({
        companyPolicy: { data: res.data.companyPolicy },
        companyConditions: { data: res.data.companyPolicy },
      });
      console.log(`data: ${links}`);
    });
  };

  //Put Request link
  {
    /*const sendPutRequest = () => {
  axios.put(`${apiUrl}/api/links`, { companyPolicy: get_cpolicy_after_edit, companyConditions: get_cconditions_after_edit, companyFaqs: get_cfaq_after_edit, staffPolicy: get_spolicy_after_edit, staffConditions: get_sconditions_after_edit, staffFaqs: get_sfaq_after_edit }).then((res)=>{
    console.log(res)
    fetchLink();
  });
};*/
  }
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf

  //Delete Request link
  const DeleteRequest = () => {
    axios.delete(`${apiUrl}/api/links`).then((res) => {
      console.log(res);
      fetchLink();
    });
  };

  useEffect(() => {
    fetchLink();
  }, []);

  function toogleSideBar() {
    sideBarRef.current.classList.toggle("-translate-x-full");
  }

  async function signOut() {
    try {
      await logout();
      router.push("/login");
    } catch {
      console.log("error occured");
    }
  }

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else {
      return "";
    }
  }
  return (
    <>
      <div className="max-h-screen md:sticky  md:top-0 z-50 text-white">
        {/* MOBILE SIDEBAR */}
        <div className="bg-cyan-600 md:hidden flex justify-between p-2 items-center sticky top-0 z-30">
          <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
          <button className="rounded focus:bg-cyan-600" onClick={toogleSideBar}>
            <RxHamburgerMenu size={32} />
          </button>
        </div>
        <div>
          {/* MAIN SIDEBAR */}
          <div
            ref={sideBarRef}
            className="bg-cyan-600  w-56 space-y-10 px-5 py-7  absolute inset-y-0 left-0 transform -translate-x-full
         md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen  md:top-0"
          >
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>

              <nav className="mt-5 flex-1 space-y-1 bg-cyan-600 px-2">
                {/*<div className={`${isActive('/admin/dashboard')} hover:bg-lime-500 text-white  group flex items-center px-2 py-2 text-sm font-medium rounded-md`}>
                <Link href='/admin/dashboard' >
                  
                    <MdHome className='mr-1 text-white' />
                    Dashboard
                 
                </Link></div>*/}
                <Link href="/" legacyBehavior>
                  <a className="text-white font-abc  hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <MdHome className="mr-1 text-white" />
                    Dashboard
                  </a>
                </Link>
                <Link href="/admin/companies" legacyBehavior>
                  <a className="text-white font-abc hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <HiBuildingOffice2 className="mr-1 text-white" />
                    Companies
                  </a>
                </Link>

                <Link href="/admin/checklist" legacyBehavior>
                  <a className="text-white font-abc  hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <TbCheckbox className="mr-1 text-white" />
                    Check list
                  </a>
                </Link>

                <div
                  className={` ${isActive(
                    "/admin/links"
                  )} bg-lime-500 hover:bg-lime-500 group flex items-center px-2 py-2 text-sm font-abc font-medium rounded-md `}
                >
                  <ImLink className="mr-1 text-white" />
                  <h3 className="text-base text-white group-hover:text-white ">
                    <Link href="/admin/links">Links</Link>
                  </h3>
                </div>
              </nav>

              <div className="flex flex-shrink-0 border-t border-lime-500 p-4">
                <div className="flex items-center">
                  <div className="bg-lime-500 h-9 w-9 font-abc rounded-full">
                    <button onClick={signOut}>
                      <CiLogout className=" ml-2 mt-3 text-white " />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-abc font-medium text-white group-hover:text-white ">
                      Log Out
                    </p>
                    {/*<p className="text-xs font-medium text-white group-hover:text-gray-700">(you will be loged out of your account)</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-1 flex-col md:pl-64 ">
          <div className="overflow-hidden bg-gray-100 ml-5 mt-5 mr-5 shadow sm:rounded-lg">
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-black font-abc">
                    Companies
                  </dt>

                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                    <label className="flex font-abc ">Privacy Policy</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
<<<<<<< HEAD
                        {links === '' ? (
                                    `${links.companyPolicy.data}`
                                  ) : links !== links.companyPolicy.data ? (
                                    `${links.companyPolicy.data}`
                                  ) : links === links.companyPolicy.data &&
                                    !links ? (
                                    `${links.companyPolicy.data}`
                                  ) : (
                                     <input
                            className="px-1 outline-none"
                            value={links.companyPolicy.data}
                            defaultValue={links.companyPolicy.data}
=======
                          <input
                            className="px-5 outline-none"
                            value={links.companyPolicy.data}
                            //defaultValue={links.companyPolicy}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            onChange={(e) =>
                              setLinks({
                                companyPolicy: {
                                  editing: true,
                                  data: e.target.value,
                                },
                              })
                            }
                          />
<<<<<<< HEAD
                                    
                                  )}
                         
                        </div>

                        <div className="ml-4 flex-shrink-0">
                           
                        <button
                            // id={unit.id}
                            // key={unit.id}
                            onClick={(e) => {
                           
                              if (links.companyPolicy.data == '') {
                                 console.log("1");
                                
                                 setLinks({
                                  companyPolicy: {
                                    editing: true,
                                    data: e.target.value,
                                  },
                                })
                              } else if (links.companyPolicy.data === links.companyPolicy.data) {
                                 console.log("2");
                              
                                 setLinks({
                                  companyPolicy: {
                                    editing: false,
                                    data: '',
                                  },
                                })
                              } else {
                                // console.log("3");
                                setLinks({
                                  companyPolicy: {
                                    editing: false,
                                    data: '',
                                  },
                                })
                              }

                              // focusUid();
                            }}
                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                          >
                            <div>
                              {links.companyPolicy.data === '' ? (
                                "Edit"
                              ) : links.companyPolicy.data === links.companyPolicy.data &&
                              links.companyPolicy.editing ? (
                                <button
                                  type="button"
                                  onClick={() => sendPutRequest()}
                                >
                                  Update
                                </button>
                              ) : (
                                "Edit"
                              )}
                            </div>
                          </button>
                          
                       
                          
                         
=======
                        </div>

                        <div className="ml-4 flex-shrink-0">
                          <button className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 ">
                            Update
                          </button>
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                          <span
                            className="text-gray-300 ml-1 font-abc"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                            onClick={() => DeleteRequest(links)}
                            type="button"
                            className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>

                    <label className="flex mt-4 font-abc">
                      Terms & Conditions
                    </label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                          <input
<<<<<<< HEAD
                            className="px-1 outline-none"
                            //value={links.companyConditions.data}
=======
                            className="px-5 outline-none"
                            value={links.companyConditions.data}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            onChange={(e) =>
                              setLinks({
                                companyConditions: {
                                  editing: true,
                                  data: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            // focusUid();

                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                          >
                            Update
                          </button>
                          <span
                            className="text-gray-300 ml-1 font-abc"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                            onClick={() => DeleteRequest(links._id)}
                            type="button"
                            className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>

                    <label className="flex mt-4 font-abc">FAQs</label>
                    <ul
                      role="list"
                      className="divide-y  divide-white mt-2 p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
<<<<<<< HEAD
                        <input
                            className="px-1 outline-none"
                            //value={links.companyFaqs.data}
                            onChange={(e) =>
                              setLinks({
                                companyFaqs: {
                                  editing: true,
                                  data: e.target.value,
                                },
                              })
                            }
=======
                          <input
                            className="px-5 outline-none"
                            value={companyFaqs}
                            onChange={(e) => setCompanyFaqs(e.target.value)}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                          />
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                          >
                            <div>Update</div>
                          </button>
                          <span
                            className="text-gray-300 ml-1"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                            onClick={() => DeleteRequest(links._id)}
                            type="button"
                            className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64 ">
          <div className="overflow-hidden bg-gray-100 ml-5 mt-5 mr-5 shadow sm:rounded-lg">
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-black font-abc">
                    Staff
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                    <label className="flex font-abc ">Privacy Policy</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
<<<<<<< HEAD
                        <input
                            className="px-1 outline-none"
                            //value={links.staffPolicy.data}
                            onChange={(e) =>
                              setLinks({
                                staffPolicy: {
                                  editing: true,
                                  data: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                           
=======
                          {check_spolicy_edit.staffPolicy === null ? (
                            `${links.staffPolicy}`
                          ) : check_spolicy_edit.staffPolicy !==
                            links.staffPolicy ? (
                            `${links.staffPolicy}`
                          ) : check_spolicy_edit.staffPolicy ===
                              links.staffPolicy && !check_spolicy_edit.edit ? (
                            `${links.staffPolicy}`
                          ) : (
                            <input
                              className="px-5 outline-none"
                              value={get_spolicy_after_edit}
                              onChange={(e) =>
                                set_spolicy_after_edit(e.target.value)
                              }
                            />
                          )}
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            id={links.staffPolicy}
                            key={links.staffPolicy}
                            onClick={(s) => {
                              if (check_spolicy_edit.staffPolicy == null) {
                                // console.log("1");
                                // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                                set_check_spolicy_edit({
                                  staffPolicy: links.staffPolicy,
                                  edit: true,
                                });
                              } else if (
                                check_spolicy_edit.staffPolicy ===
                                links.staffPolicy
                              ) {
                                // console.log("2");
                                // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                                set_check_spolicy_edit({
                                  staffPolicy: null,
                                  edit: false,
                                });
                              } else {
                                // console.log("3");
                                set_check_spolicy_edit({
                                  staffPolicy: null,
                                  edit: false,
                                });
                              }

                              // focusUid();
                            }}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                          >
                            <div>
<<<<<<< HEAD
                             
=======
                              {check_spolicy_edit.staffPolicy === null ? (
                                "Update"
                              ) : check_spolicy_edit.staffPolicy ===
                                  links.staffPolicy &&
                                check_spolicy_edit.edit ? (
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                                <button
                                  type="button"
                                  onClick={() => sendPutRequest()}
                                >
                                  Update
                                </button>
<<<<<<< HEAD
                             
=======
                              ) : (
                                "Update"
                              )}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            </div>
                          </button>
                          <span
                            className="text-gray-300 ml-1"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                            onClick={() => DeleteRequest(links._id)}
                            type="button"
                            className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>

                    <label className="flex mt-4 font-abc">
                      Terms & Conditions
                    </label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
<<<<<<< HEAD
                        <input
                            className="px-1 outline-none"
                            //value={links.staffConditions.data}
                            onChange={(e) =>
                              setLinks({
                                staffConditions: {
                                  editing: true,
                                  data: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                           

                             
=======
                          {check_sconditions_edit.staffConditions === null ? (
                            `${links.staffConditions}`
                          ) : check_sconditions_edit.staffConditions !==
                            links.staffConditions ? (
                            `${links.companyPolicy}`
                          ) : check_sconditions_edit.staffConditions ===
                              links.staffConditions &&
                            !check_sconditions_edit.edit ? (
                            `${links.staffConditions}`
                          ) : (
                            <input
                              className="px-5 outline-none"
                              value={get_sconditions_after_edit}
                              onChange={(e) =>
                                set_sconditions_after_edit(e.target.value)
                              }
                            />
                          )}
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            id={links.staffConditions}
                            key={links.staffConditions}
                            onClick={(s) => {
                              if (
                                check_sconditions_edit.staffConditions == null
                              ) {
                                // console.log("1");
                                // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                                set_check_sconditions_edit({
                                  staffConditions: links.staffConditions,
                                  edit: true,
                                });
                              } else if (
                                check_sconditions_edit.staffConditions ===
                                links.staffConditions
                              ) {
                                // console.log("2");
                                // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                                set_check_sconditions_edit({
                                  staffConditions: null,
                                  edit: false,
                                });
                              } else {
                                // console.log("3");
                                set_check_sconditions_edit({
                                  staffConditions: null,
                                  edit: false,
                                });
                              }

                              // focusUid();
                            }}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                          >
                            <div>
<<<<<<< HEAD
                           
=======
                              {check_sconditions_edit.staffConditions ===
                              null ? (
                                "Update"
                              ) : check_sconditions_edit.staffConditions ===
                                  links.staffConditions &&
                                check_sconditions_edit.edit ? (
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                                <button
                                  type="button"
                                  onClick={() => sendPutRequest()}
                                >
                                  Update
                                </button>
<<<<<<< HEAD
                            
=======
                              ) : (
                                "Update"
                              )}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            </div>
                          </button>
                          <span
                            className="text-gray-300 ml-1"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                            onClick={() => DeleteRequest(links._id)}
                            type="button"
                            className="rounded-md font-abc bg-white ml-1 font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none "
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>

                    <label className="flex mt-4 font-abc">FAQs</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
<<<<<<< HEAD
                        <input
                            className="px-1 outline-none"
                            //value={links.staffFaqs.data}
                            onChange={(e) =>
                              setLinks({
                                staffFaqs: {
                                  editing: true,
                                  data: e.target.value,
                                },
                              })
                            }
                          />
=======
                          {check_sfaq_edit.staffFaqs === null ? (
                            `${links.staffFaqs}`
                          ) : check_sfaq_edit.staffFaqs !== links.staffFaqs ? (
                            `${links.staffFaqs}`
                          ) : check_sfaq_edit.staffFaqs === links.staffFaqs &&
                            !check_sfaq_edit.edit ? (
                            `${links.staffFaqs}`
                          ) : (
                            <input
                              className="px-5 outline-none"
                              value={get_sfaq_after_edit}
                              onChange={(e) =>
                                set_sfaq_after_edit(e.target.value)
                              }
                            />
                          )}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            id={links.staffFaqs}
<<<<<<< HEAD
                         
                            
                            
=======
                            key={links.staffFaqs}
                            onClick={(s) => {
                              if (check_sfaq_edit.staffFaqs == null) {
                                // console.log("1");
                                // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                                set_check_sfaq_edit({
                                  staffFaqs: links.staffFaqs,
                                  edit: true,
                                });
                              } else if (
                                check_sfaq_edit.staffFaqs === links.staffFaqs
                              ) {
                                // console.log("2");
                                // If the unitId is not null and it matches the current unit's id, set the edit mode to false
                                set_check_sfaq_edit({
                                  staffFaqs: null,
                                  edit: false,
                                });
                              } else {
                                // console.log("3");
                                set_check_sfaq_edit({
                                  staffFaqs: null,
                                  edit: false,
                                });
                              }

                              // focusUid();
                            }}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            type="button"
                            className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                          >
                            <div>
<<<<<<< HEAD
                              
=======
                              {check_sfaq_edit.staffFaqs === null ? (
                                "Update"
                              ) : check_sfaq_edit.staffFaqs ===
                                  links.staffFaqs && check_sfaq_edit.edit ? (
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                                <button
                                  type="button"
                                  onClick={() => sendPutRequest()}
                                >
                                  Update
                                </button>
<<<<<<< HEAD
                              
=======
                              ) : (
                                "Update"
                              )}
>>>>>>> 0c6dec95603eb44fc47e5cb6c669bca4607510cf
                            </div>
                          </button>
                          <span
                            className="text-gray-300 ml-1"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                            onClick={() => DeleteRequest()}
                            type="button"
                            className="rounded-md bg-white font-abc ml-1 font-thin text-sm text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default links;
