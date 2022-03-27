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

function GeneralSetting() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={4}>
                <CFormLabel htmlFor="inputEmail4">App title</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputEmail4">App name</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputEmail4">App Email</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputEmail4">Phone</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputEmail4">Mobile</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputEmail4">Currency</CFormLabel>
                <CFormSelect id="inputState">
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EURO</option>
                  <option>RUPE</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputAddress2">Payment Type</CFormLabel>
                <CFormSelect id="inputState">
                  <option>SSL</option>
                  <option>STRIPE</option>
                </CFormSelect>
              </CCol>
              <CCol md={8}>
                <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
              </CCol>
              <CCol md={12}>
                <CButton type="submit">
                  <CIcon icon={icon.cilSync} /> Update Settings
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default GeneralSetting
