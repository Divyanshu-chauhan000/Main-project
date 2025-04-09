import {lazy } from 'react'
import AdminLayout from '../../layouts/admin'
import ProtectedRoute from '../ProtectedRoute'

const AdminLanding = lazy(() => import('../../views/admin/index'))
const AdminRoute ={
 path : '/admin',
 element: <ProtectedRoute layout = {<AdminLayout/>} role="admin"/>,
 children : [
  {
    path : '/admin',
    element : <AdminLanding/>,
  },
 ],
};

export default AdminRoute;