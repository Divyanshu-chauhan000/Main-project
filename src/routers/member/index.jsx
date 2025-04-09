import {lazy } from 'react'
import MemberLayout from '../../views/member'
import ProtectedRoute from '../ProtectedRoute'

const MemberLanding = lazy(()=> import ('../../layouts/member'))

const MemberRoute ={
  peth:'/member',
  element : <ProtectedRoute layout={<MemberLayout/>} role="member"/>,
  children :[
    {
      path:'/member',
      element : <MemberLanding/>,
    },
  ],
};

export default MemberRoute