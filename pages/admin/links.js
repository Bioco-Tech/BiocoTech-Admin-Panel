/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
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
  const [companyConditions, setCompanyConditions] = useState("");
  const [companyPolicy, setCompanyPolicy] = useState("");
  const [companyFaqs, setCompanyFaqs] = useState("");
  const [staffPolicy, setStaffPolicy] = useState("");
  const [staffConditions, setStaffConditions] = useState("");
  const [ staffFaqs, setStaffFaqs] = useState("");
  const [links, setLinks] = useState({});

  

  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
   // Company edit Check
   {/*const [check_cpolicy_edit, set_check_cpolicy_edit] = useState({
    companyPolicy: null,
    edit: false,
});
const [check_cconditions_edit, set_check_cconditions_edit] = useState({
    companyConditions: null,
    edit: false,
});
const [check_cfaq_edit, set_check_cfaq_edit] = useState({
    companyFaqs: null,
    edit: false,
});*/}
const [check_spolicy_edit, set_check_spolicy_edit] = useState({
    staffPolicy: null,
    edit: false,
});
const [check_sconditions_edit, set_check_sconditions_edit] = useState({
    staffConditions: null,
    edit: false,
});
const [check_sfaq_edit, set_check_sfaq_edit] = useState({
  staffFaqs: null,
  edit: false,
});
// links edit fields
{/*const [get_cpolicy_after_edit, set_cpolicy_after_edit] = useState();
const [get_cconditions_after_edit, set_cconditions_after_edit] = useState();
const [get_cfaq_after_edit, set_cfaq_after_edit] = useState();*/}
const [get_spolicy_after_edit, set_spolicy_after_edit] = useState();
const [get_sconditions_after_edit, set_sconditions_after_edit] = useState();
const [get_sfaq_after_edit, set_sfaq_after_edit] = useState();
 //Post Request

 axios.post(`${apiUrl}/api/links`, { companyPolicy:companyPolicy, companyConditions:companyConditions, companyFaqs:companyFaqs,staffPolicy:staffPolicy,staffConditions:staffConditions,staffFaqs:staffFaqs }).then((res) => {

  console.log(res);

});

//Get Request
const fetchLink = async () => {
  console.log('hi rfresh')
  await axios.get(`${apiUrl}/api/links`).then((res) => {
    console.log(res.data);
    setLinks(res.data);
    console.log(`data: ${links}`);
   
  });
};

//Put Request link
{/*const sendPutRequest = () => {
  axios.put(`${apiUrl}/api/links`, { companyPolicy: get_cpolicy_after_edit, companyConditions: get_cconditions_after_edit, companyFaqs: get_cfaq_after_edit, staffPolicy: get_spolicy_after_edit, staffConditions: get_sconditions_after_edit, staffFaqs: get_sfaq_after_edit }).then((res)=>{
    console.log(res)
    fetchLink();
  });
};*/}

 //Delete Request link
 const DeleteRequest = () => {
  axios.delete(`${apiUrl}/api/links`).then((res) => {
      console.log(res)
      fetchLink();
  })



}

  useEffect(() => {
    fetchLink();
  },[]);

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
             
                  <dd  className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">  
                  
                  
                    <label className="flex font-abc ">Privacy Policy</label>
                    <ul
                      role="list"
                      className="divide-y mt-2 divide-white p-0 rounded-md border bg-white border-white"
                    >
                      <li className="flex items-center justify-between p-2 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                       
                       <input
                            className="px-5 outline-none"
                            value={companyPolicy}
                            //defaultValue={links.companyPolicy}
                            onChange={(e) => setCompanyPolicy(e.target.value)}
                          />
                        
                         </div>
                      
                          
                          
                        
                      
                        <div className="ml-4 flex-shrink-0">
                        <button  className="rounded-md bg-white ml-1 font-abc font-thin text-sm text-cyan-600 hover:text-cyan-500 ">
                        
                       Update
                      </button>
                          <span
                            className="text-gray-300 ml-1 font-abc"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                          onClick={()=>DeleteRequest(links)}
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
                            className="px-5 outline-none"
                            value={companyConditions}
                            onChange={(e) => setCompanyConditions(e.target.value)}
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
                           onClick={()=>DeleteRequest(links._id)}
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
                       
                       <input
                            className="px-5 outline-none"
                            value={companyFaqs}
                            onChange={(e) => setCompanyFaqs(e.target.value)}
                          />
                      
                           
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                       
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                         Update
                        </div>
                      </button>
                          <span
                            className="text-gray-300 ml-1"
                            aria-hidden="true"
                          >
                            |
                          </span>
                          <button
                           onClick={()=>DeleteRequest(links._id)}
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
                      {check_spolicy_edit.staffPolicy === null ? (
                        `${links.staffPolicy}`
                      ) : check_spolicy_edit.staffPolicy !== links.staffPolicy ? (
                        `${links.staffPolicy}`
                      ) : check_spolicy_edit.staffPolicy === links.staffPolicy &&
                        !check_spolicy_edit.edit ? (
                        `${links.staffPolicy}`
                      ) : (
                       <input
                            className="px-5 outline-none"
                            value={get_spolicy_after_edit}
                            onChange={(e) => set_spolicy_after_edit(e.target.value)}
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
                          } else if (check_spolicy_edit.staffPolicy === links.staffPolicy) {
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
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                          {check_spolicy_edit.staffPolicy=== null ? (
                            "Update"
                          ) : check_spolicy_edit.staffPolicy === links.staffPolicy &&
                            check_spolicy_edit.edit ? (
                            <button
                              type="button"
                              onClick={() => sendPutRequest()}
                            >
                              Update
                            </button>
                          ) : (
                            "Update"
                          )}
                        </div>
                      </button>
                        <span className="text-gray-300 ml-1" aria-hidden="true">
                          |
                        </span>
                        <button
                         onClick={()=>DeleteRequest(links._id)}
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
                       
                      {check_sconditions_edit.staffConditions === null ? (
                        `${links.staffConditions}`
                      ) : check_sconditions_edit.staffConditions !== links.staffConditions ? (
                        `${links.companyPolicy}`
                      ) : check_sconditions_edit.staffConditions === links.staffConditions &&
                        !check_sconditions_edit.edit ? (
                        `${links.staffConditions}`
                      ) : (
                       <input
                            className="px-5 outline-none"
                            value={get_sconditions_after_edit}
                            onChange={(e) => set_sconditions_after_edit(e.target.value)}
                          />
                      )}
                      </div>
                      <div className="ml-4 flex-shrink-0">
                      <button
                        id={links.staffConditions}
                        key={links.staffConditions}
                        onClick={(s) => {
                         
                          if (check_sconditions_edit.staffConditions == null) {
                            // console.log("1");
                            // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                            set_check_sconditions_edit({
                              staffConditions: links.staffConditions,
                              edit: true,
                            });
                          } else if (check_sconditions_edit.staffConditions === links.staffConditions) {
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
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                          {check_sconditions_edit.staffConditions=== null ? (
                            "Update"
                          ) : check_sconditions_edit.staffConditions === links.staffConditions &&
                            check_sconditions_edit.edit ? (
                            <button
                              type="button"
                              onClick={() => sendPutRequest()}
                            >
                              Update
                            </button>
                          ) : (
                            "Update"
                          )}
                        </div>
                      </button>
                        <span className="text-gray-300 ml-1" aria-hidden="true">
                          |
                        </span>
                        <button
                         onClick={()=>DeleteRequest(links._id)}
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
                            onChange={(e) => set_sfaq_after_edit(e.target.value)}
                          />
                      )}
                      </div>
                      <div className="ml-4 flex-shrink-0">
                      <button
                        id={links.staffFaqs}
                        key={links.staffFaqs}
                        onClick={(s) => {
                         
                          if (check_sfaq_edit.staffFaqs == null) {
                            // console.log("1");
                            // If the unitId is null, set the unitId to the current unit's id and set the edit mode to true
                            set_check_sfaq_edit({
                              staffFaqs: links.staffFaqs,
                              edit: true,
                            });
                          } else if (check_sfaq_edit.staffFaqs === links.staffFaqs) {
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
                        type="button"
                        className="rounded-md bg-white font-thin text-sm text-cyan-600 hover:text-cyan-500 font-abc"
                      >
                        <div>
                          {check_sfaq_edit.staffFaqs=== null ? (
                            "Update"
                          ) : check_sfaq_edit.staffFaqs === links.staffFaqs &&
                            check_sfaq_edit.edit ? (
                            <button
                              type="button"
                              onClick={() => sendPutRequest()}
                            >
                              Update
                            </button>
                          ) : (
                            "Update"
                          )}
                        </div>
                      </button>
                        <span className="text-gray-300 ml-1" aria-hidden="true">
                          |
                        </span>
                        <button
                         onClick={()=>DeleteRequest()}
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
      </div></div>
    </>
  );
}

export default links;
