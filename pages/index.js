import React from 'react'
//import PrivateRoute from '../Components/PrivateRoute'
//import SideBar from '../../Components/SideBar'
import SideBars from '../Components/SideBars'
//import { useRouter } from 'next/router';
//import { AuthContext } from '../context/Route';
//import {isUserAuthenticated} from 'next-auth'




function Index() {

 {/*} const router = useRouter();
  const authContext = React.useContext(AuthContext);

React.useEffect(() => {
  // checks if the user is authenticated
  authContext.isUserAuthenticated()
  ? router.push("/")
  : router.push("/login");
}, []);*/}
  return (
 
      <SideBars />

    

  )
}

export default Index