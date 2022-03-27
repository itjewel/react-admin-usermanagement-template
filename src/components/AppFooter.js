import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://cmsnbd.com" target="_blank" rel="noopener noreferrer">
          CMSNBD
        </a>
        <span className="ms-1">&copy; 2021 cmsnnetwork.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://cmsnbd.com" target="_blank" rel="noopener noreferrer">
          CMSN BD
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
