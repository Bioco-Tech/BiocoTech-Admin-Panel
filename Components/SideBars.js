/* eslint-disable @next/next/no-img-element */
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
import Chart from './Chart'
import {RiPhoneFill} from 'react-icons/ri'
import {BsEnvelopeFill} from 'react-icons/bs'
import Stats from "./Stats";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { withProtected } from "../context/Route";
import { apiUrl } from "../constants";



function SideBars({ auth }) {
  const router = useRouter();
  const sideBarRef = useRef();
  const { logout } = auth;
  const [company, setCompany] = useState([]);
  const [staff, setStaff] = useState([]);
  const [data, setData] = useState([]);

  function toogleSideBar() {
    sideBarRef.current.classList.toggle("-translate-x-full");
  }

  async function signOut() {
    try {
      await logout();
      router.push("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  }

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else {
      return "";
    }
  }
  //fetch data

  useEffect(() => {
     const fetchCompany = async () => {
    await axios.get(`${apiUrl}/api/companies`).then((res) => {
      setCompany(res.data.companies);
      // setChange(res.data.reverse())
    });
    await axios.get(`${apiUrl}/api/staff`).then((res) => {
      setStaff(res.data.staff);
      // setChange(res.data.reverse())
    });
  };
  fetchCompany();
  }, []);

  useEffect(()=>{
    const arr=[];
    if(company.length>0&&staff.length>0){
      staff.map((item,index)=>{
        company.map((s,i)=>{
          let obj={};
         
            obj["companyName"] = s.companyName
            obj["staffName"] = item.staffName
            
          arr.push(obj)
        })

            
      })
      setData(arr)
    }

  },[staff,company])

 

  {
    /*const fetchStaff = async () => {
    await axios.get("${apiUrl}/api/companies/staff").then((res) => {
      setStaff(res.data.reverse());
      // setChange(res.data.reverse())
      
    });
  };*/
  }

 
  

  return (
    <>
      <div   className="max-h-screen  md:absolute md:top-0 z-50 text-white ">
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
                 
                </Link></div>*/}<div
                  className={` ${isActive(
                    "/admin/dashboard"
                  )} bg-lime-500  hover:bg-lime-500 group flex items-center px-2 py-2 text-sm font-medium rounded-md `}
                >
                  <MdHome className="mr-1 text-white" />
                  <h3 className="text-base text-white group-hover:text-white ">
                    <Link href="/">Dashboard</Link>
                  </h3>
                </div>
                <Link href="/admin/companies" legacyBehavior>
                  <a className="text-white font-abc font-Cocogoose hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <HiBuildingOffice2 className="mr-1 text-white" />
                   Companies
                  </a>
                </Link>
                

                <Link href="/admin/checklist" legacyBehavior>
                  <a className="text-white  hover:text-white font-abc group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <TbCheckbox className="mr-1 text-white" />
                    Check list
                  </a>
                </Link>
                <Link href="/admin/links" legacyBehavior>
                  <a className="text-white  hover:text-white font-abc group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <ImLink className="mr-1 text-white" />
                    Links
                  </a>
                </Link>
              </nav>

              <div className="flex flex-shrink-0 border-t border-lime-500 p-4">
                <div className="flex items-center font-abc">
                  <div className="bg-lime-500 h-9 w-9 rounded-full">
                    <button onClick={signOut}>
                      <CiLogout className=" ml-2 mt-3 font-abc text-white " />
                    </button>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white group-hover:text-white ">
                      Log Out
                    </p>
                    {/*<p className="text-xs font-medium text-white group-hover:text-gray-700">(you will be loged out of your account)</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-1 flex-col md:pl-64 ">
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/*<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>*/}
              </div >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className='flex'>
                  <div className=" w-32 ">
                    {/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>*/}
                    <Chart />
                  </div>
                  <div className="  ml-5  mt-5">
                    <p className='text-black font-medium'>600</p>

                    <p className="text-gray-500 font-thin">units operating worldwide</p>

                  
                    <p className='text-black md:mt-2 font-medium'>24,000</p>

                    <p className="text-gray-500 font-thin ">Orgainc waste processed</p>
                    <p className='text-black md:mt-2 font-medium'>900</p>

                    <p className="text-gray-500 font-thin">MTCO,Diverted</p>

                  </div>
                </div>
                <div className="px-4 sm:px-6 py-4 justify-center sm:py-6 mt-5 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                  <Stats />
                </div>
                <div className="px-4 sm:px-6 py-4 sm:py-6 mt-5 lg:px-8 lg:py-8 rounded-lg bg-gray-100">
                  <div className="sm:flex sm:items-center  ">
                    <div className="sm:flex-auto ">
                      <h1 className="text-xl font-semibold text-gray-900 font-abc">
                        Redeem Points
                      </h1>
                      <p className="mt-2 text-sm text-gray-700 font-abc ">
                        These are the staff people who have hightest redeem
                        points
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-lime-500">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  text-white sm:pl-6 font-abc"
                                >
                                  Staff Member
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 font-abc text-left text-sm font-semibold text-white"
                                >
                                  Company
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 font-abc text-left text-sm font-semibold text-white"
                                >
                                  Redeem Points
                                </th>

                                <th
                                  scope="col"
                                  className="relative font-abc py-3.5 pl-3 pr-4 sm:pr-6 text-right text-white"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-lime-50">
                            
                              {data.map((person) => (
                                <tr key={person.member}>
                                  
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-light font-abc  text-gray-500 sm:pl-6">
                                    <div className="flex ">
                                       <RiPhoneFill className="ml-2 text-cyan-600"/>
                                       <BsEnvelopeFill className="ml-2 text-cyan-600"/>
                                       <div className="ml-2">
                                    {person.staffName}</div>
                                    </div>
                                   
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-light text-gray-500 font-abc ">
                                    {person.companyName}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm font-normal w-[560] h-[55] text-gray-900 font-abc ">
                                    {person.id}
                                  </td>
                                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-cyan-600 text-right text-sm font-thin sm:pr-6 font-abc ">
                                    {person.action}
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
          </main>
        </div>
      </div>
    </>
  );
}
export default withProtected(SideBars);

{/*export async function getServerSideProps() {
  
  const staff = await fetch(`${apiUrl}/api/staff`);
  
 
  console.log(units);
  const staffData = await staff.json();
  return {
      props: {
          staff: staffData,
        
          // data:{}
      },
  };
}*/}
