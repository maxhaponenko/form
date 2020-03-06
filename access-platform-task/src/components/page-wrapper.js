import React from 'react'
import './page-wrapper.scss'

const PageWrapper = (props) => {
   return (
      <React.Fragment>
         <nav></nav>
         <div className="page-frame">
            {props.children}
         </div>
      </React.Fragment>
   )
}

export default PageWrapper