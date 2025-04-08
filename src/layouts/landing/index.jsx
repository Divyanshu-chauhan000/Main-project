import React from 'react'

const LandingLayout = () => {
  return (
    <div>
      <div>Navbar</div>
      <div>
        <Outlet/>
      </div>
      <div className='spacer py-10'></div>
      <div>
        footer
      </div>
    </div>
  )
}

export default LandingLayout