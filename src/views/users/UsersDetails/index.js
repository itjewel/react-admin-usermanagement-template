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
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormSelect,
  CImage,
} from '@coreui/react'

// import { useParams } from 'react-router-dom'
import profileImage from './../../../assets/images/avatars/001-profile.png'

function UsersDetails() {
  // let { id } = useParams()
  const [activeKey, setActiveKey] = useState(1)
  return (
    <CRow>
      <CCol md={2}>
        <CCard className="mb-4">
          <CCardBody>
            <CImage rounded thumbnail src={profileImage} width={200} height={200} />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={10}>
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
              <CIcon icon={icon.cilViewModule} /> Activites
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
              <CIcon icon={icon.cilPlus} /> Profile
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">IP Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Message</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Log Time</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">192.168.0.123</CTableHeaderCell>
                  <CTableDataCell>Loged in 12/09/2022</CTableDataCell>
                  <CTableDataCell>12/09/2023</CTableDataCell>
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
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">First Name </CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">Last Name</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">Select Role</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputAddress2">Gender</CFormLabel>
                        <CFormSelect id="inputState">
                          <option>Choose...</option>
                          <option>...</option>
                        </CFormSelect>
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputCity">Country</CFormLabel>
                        <CFormSelect id="inputState">
                          <option>Choose...</option>
                          <option>...</option>
                        </CFormSelect>
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputZip">Phone</CFormLabel>
                        <CFormInput id="inputZip" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">E-Mail Address</CFormLabel>
                        <CFormInput type="email" id="inputEmail4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">Username</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">Password</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">Confirm Password</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputPassword4">Password</CFormLabel>
                        <CFormInput type="password" id="inputPassword4" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel htmlFor="inputEmail4">Date Of Birth</CFormLabel>
                        <CFormInput type="date" id="inputPassword4" />
                      </CCol>
                      <CCol md={8}>
                        <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                      </CCol>
                      <CCol md={12}>
                        <CButton type="submit">
                          <CIcon icon={icon.cilNoteAdd} /> Create an account
                        </CButton>
                      </CCol>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CTabPane>
        </CTabContent>
      </CCol>
    </CRow>
  )
}

export default UsersDetails
