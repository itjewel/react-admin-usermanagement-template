import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import './style.scss'
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
  CButton,
} from '@coreui/react'

function PaymentSetting() {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <CRow>
      <CCol md={4}>
        <CNav variant="tabs" role="tablist" className="flex-column">
          <CNavItem>
            <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
              <h5>
                <CIcon icon={icon.cibCcPaypal} size="xxl" /> Paypal Configration
              </h5>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
              <h5>
                <CIcon icon={icon.cibCcStripe} size="xxl" /> Stripe Configration
              </h5>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 3} onClick={() => setActiveKey(3)}>
              <h5>
                <CIcon icon={icon.cibAdobeTypekit} size="xxl" /> SSL Commrz Configration
              </h5>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 4} onClick={() => setActiveKey(4)}>
              <h5>
                <CIcon icon={icon.cibCpanel} size="xxl" /> Setup Install Software
              </h5>
            </CNavLink>
          </CNavItem>
        </CNav>
      </CCol>
      <CCol md={8}>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
            <CRow>
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardBody>
                    <CForm className="row g-3">
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail8">PAYPAL_CLIENT_ID</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">PAYPAL_SECRET</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">PAYPAL_MODE</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CButton type="submit">
                          <CIcon icon={icon.cilSync} size="lg" /> Update Paypal Info
                        </CButton>
                      </CCol>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
            <CRow>
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardBody>
                    <CForm className="row g-3">
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail8">STRIPE_KEY</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">STRIPE_SECRET</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CButton type="submit">
                          <CIcon icon={icon.cilSync} size="lg" /> Update Stripe Payment
                        </CButton>
                      </CCol>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 3}>
            <CRow>
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardBody>
                    <CForm className="row g-3">
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail8">STORE_ID</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">STORE_PASSWORD</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">STORE_PASSWORD</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CButton type="submit">
                          <CIcon icon={icon.cilSync} size="lg" /> Update SSL Commrz
                        </CButton>
                      </CCol>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 4}>
            <CRow>
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardBody>
                    <CForm className="row g-3">
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail8">Web URL</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">Cpanel Username</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">Cpanel Password</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CFormLabel htmlFor="inputEmail4">DB HOST</CFormLabel>
                        <CFormInput type="text" id="inputEmail4" />
                      </CCol>
                      <CCol md={12}>
                        <CButton type="submit">
                          <CIcon icon={icon.cilSync} size="lg" /> Update Soft Info
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

export default PaymentSetting
