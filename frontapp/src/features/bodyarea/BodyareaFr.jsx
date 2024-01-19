import React from 'react'
import { useSelector } from 'react-redux';


function BodyareaFr() {
  const { allSubtabs , activeSubTab } = useSelector((store) => store.subtabbar);
  const { allTabs, activeTab } = useSelector((store) => store.navbars);
  console.log("allTabs --------------", allTabs)
  console.log("activeTab --------------", activeTab)
  console.log("allSubtabs --------------", allSubtabs)
  console.log("activeSubTab --------------", activeSubTab)
  return (
    <div>BodyareaFr</div>
  )
}

export default BodyareaFr