import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTooltip,
} from '@coreui/react'

function EmailTemplates() {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
            <CIcon icon={icon.cilViewModule} /> Email Template
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
            <CIcon icon={icon.cilPlus} /> Add Email Templates
          </CNavLink>
        </CNavItem>
      </CNav>

      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          <CTable>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">Admin</CTableHeaderCell>
                <CTableDataCell>Admin</CTableDataCell>
                <CTableDataCell>Admin</CTableDataCell>
                <CTableDataCell>
                  <CTooltip content="Update role">
                    <CButton color="info" variant="ghost" size="sm">
                      <CIcon icon={icon.cilPencil} size="xl" />
                    </CButton>
                  </CTooltip>
                  <CTooltip content="Delete role">
                    <CButton color="danger" variant="ghost" size="sm">
                      <CIcon icon={icon.cilTrash} size="xl" />
                    </CButton>
                  </CTooltip>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">User</CTableHeaderCell>
                <CTableDataCell>User</CTableDataCell>
                <CTableDataCell>User</CTableDataCell>
                <CTableDataCell>
                  <CTooltip content="Update role">
                    <CButton color="info" variant="ghost" size="sm">
                      <CIcon icon={icon.cilPencil} size="xl" />
                    </CButton>
                  </CTooltip>
                  <CTooltip content="Delete role">
                    <CButton color="danger" variant="ghost" size="sm">
                      <CIcon icon={icon.cilTrash} size="xl" />
                    </CButton>
                  </CTooltip>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardBody>
                  <CForm className="row g-3">
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail8">Category</CFormLabel>
                      <CFormSelect id="inputState">
                        <option>Choose...</option>
                        <option>...</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail4">Title Name</CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputAddress">Email Body</CFormLabel>
                      <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                    </CCol>
                    <CCol md={12}>
                      <CButton type="submit">
                        <CIcon icon={icon.cilNoteAdd} /> Create Template
                      </CButton>
                    </CCol>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CTabPane>
      </CTabContent>
    </>
  )
}

export default EmailTemplates
