import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Link } from 'react-router-dom'
import {
  CRow,
  CButton,
  CForm,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTooltip,
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'

function Userslist() {
  const [visible, setVisible] = useState(false)
  const handleDelete = (id) => {
    setVisible(id)
    // alert(id)
  }
  return (
    <CRow>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          I will not close if you click outside me. Don't even try to press escape key.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
      <CForm className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/users/adduser">
          <CTooltip content="Add user">
            <CButton color="dark" variant="outline">
              <CIcon icon={icon.cilUserPlus} size="lg" /> Add User
            </CButton>
          </CTooltip>
        </Link>
        <CTooltip content="Print Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cilPrint} size="lg" /> Print
          </CButton>
        </CTooltip>
        <CTooltip content="Import Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cilArrowThickToBottom} size="lg" /> Import
          </CButton>
        </CTooltip>
        <CTooltip content="PDF Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cibAdobeAcrobatReader} size="lg" /> PDF
          </CButton>
        </CTooltip>
        <CTooltip content="Export Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cilArrowThickToTop} size="lg" /> Export
          </CButton>
        </CTooltip>
        <CForm className="d-flex">
          <CFormInput type="search" className="me-2" placeholder="Search" />
          <CTooltip content="Search Users">
            <CButton type="submit" color="dark" variant="outline">
              <CIcon icon={icon.cilSearch} />
            </CButton>
          </CTooltip>
        </CForm>
      </CForm>
      <CTable>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Username</CTableHeaderCell>
            <CTableHeaderCell scope="col">E-Mail Address</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
            <CTableDataCell>admin1233</CTableDataCell>
            <CTableDataCell>admin@cmsn.com</CTableDataCell>
            <CTableDataCell>
              <CTooltip content="Active user">
                <CButton color="success" shape="rounded-pill" variant="ghost" size="sm">
                  <CIcon icon={icon.cilCheckCircle} size="xl" />
                </CButton>
              </CTooltip>
            </CTableDataCell>
            <CTableDataCell>
              <CTooltip content="User Details">
                <Link to="/users/details/1">
                  <CButton color="success" variant="ghost" size="sm">
                    <CIcon icon={icon.cilLowVision} size="xl" />
                  </CButton>
                </Link>
              </CTooltip>
              <CTooltip content="Update user">
                <Link to="/users/edit/2">
                  <CButton color="info" variant="ghost" size="sm">
                    <CIcon icon={icon.cilPencil} size="xl" />
                  </CButton>
                </Link>
              </CTooltip>
              <CTooltip content="Delete user">
                <CButton
                  color="danger"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(!visible)}
                >
                  <CIcon icon={icon.cilTrash} size="xl" />
                </CButton>
              </CTooltip>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
            <CTableDataCell>admin1233</CTableDataCell>
            <CTableDataCell>admin@cmsn.com</CTableDataCell>
            <CTableDataCell>
              <CTooltip content="Deactive user">
                <CButton color="danger" shape="rounded-pill" variant="ghost" size="sm">
                  <CIcon icon={icon.cilBan} size="xl" />
                </CButton>
              </CTooltip>
            </CTableDataCell>
            <CTableDataCell>
              <CTooltip content="User Details">
                <CButton color="success" variant="ghost" size="sm">
                  <CIcon icon={icon.cilLowVision} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Update user">
                <CButton color="info" variant="ghost" size="sm">
                  <CIcon icon={icon.cilPencil} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Delete user">
                <CButton color="danger" variant="ghost" size="sm">
                  <CIcon icon={icon.cilTrash} size="xl" />
                </CButton>
              </CTooltip>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
            <CTableDataCell>admin1233</CTableDataCell>
            <CTableDataCell>admin@cmsn.com</CTableDataCell>
            <CTableDataCell>
              <CTooltip content="Deactive user">
                <CButton color="danger" shape="rounded-pill" variant="ghost" size="sm">
                  <CIcon icon={icon.cilBan} size="xl" />
                </CButton>
              </CTooltip>
            </CTableDataCell>
            <CTableDataCell>
              <CTooltip content="User Details">
                <CButton color="success" variant="ghost" size="sm">
                  <CIcon icon={icon.cilLowVision} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Update user">
                <CButton color="info" variant="ghost" size="sm">
                  <CIcon icon={icon.cilPencil} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Delete user">
                <CButton color="danger" variant="ghost" size="sm">
                  <CIcon icon={icon.cilTrash} size="xl" />
                </CButton>
              </CTooltip>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CRow>
  )
}

export default Userslist
