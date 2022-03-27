import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CTabContent,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react'

function SendEmail() {
  return (
    <>
      <CTabContent>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardBody>
                <CForm className="row g-3">
                  <CCol md={8}>
                    <CFormLabel htmlFor="inputEmail8">Email Address</CFormLabel>
                    <CFormInput type="text" id="inputEmail4" />
                  </CCol>
                  <CCol md={8}>
                    <CFormLabel htmlFor="inputEmail8">Email Template</CFormLabel>
                    <CFormSelect id="inputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={12}>
                    <CButton type="submit">
                      <CIcon icon={icon.cilNoteAdd} /> Send Mail
                    </CButton>
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CTabContent>
    </>
  )
}

export default SendEmail
