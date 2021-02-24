import React, { useState } from 'react'
import { Hamburger, Sidebar } from '..'

const FullSidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  return (
    <>
      <Hamburger sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
      <Sidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
    </>
  )
}

export default FullSidebar
