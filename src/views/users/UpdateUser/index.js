import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
const UpdateUser = () => {
  return (
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
                  <CIcon icon={icon.cilSync} /> Update an account
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

// function AddUser() {
//   return ()
// }

export default UpdateUser
