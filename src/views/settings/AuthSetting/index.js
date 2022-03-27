import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CRow,
  CCol,
  CButton,
  CCardBody,
  CForm,
  CFormLabel,
  CFormCheck,
  CButtonGroup,
} from '@coreui/react'

function AuthSetting() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail8">Stripe Payment</CFormLabel> <br />
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="stripe_payment_status"
                  id="stripe_payment_status1"
                  autoComplete="off"
                  label="YES"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="stripe_payment_status"
                  id="stripe_payment_status2"
                  autoComplete="off"
                  label="OFF"
                />
              </CButtonGroup>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail8">SSLCOMMERZ Payment</CFormLabel> <br />
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="sslcommerz_payment_status"
                  id="sslcommerz_payment_status1"
                  autoComplete="off"
                  label="YES"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="sslcommerz_payment_status"
                  id="sslcommerz_payment_status2"
                  autoComplete="off"
                  label="OFF"
                  defaultChecked
                />
              </CButtonGroup>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail8">Paypal Payment</CFormLabel> <br />
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="paypal_payment_status"
                  id="paypal_payment_status1"
                  autoComplete="off"
                  label="YES"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="paypal_payment_status"
                  id="paypal_payment_status2"
                  autoComplete="off"
                  label="OFF"
                  defaultChecked
                />
              </CButtonGroup>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail8">Allow "Remember Me"?</CFormLabel> <br />
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="remember_me"
                  id="remember_me1"
                  autoComplete="off"
                  label="YES"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="remember_me"
                  id="remember_me2"
                  autoComplete="off"
                  label="OFF"
                  defaultChecked
                />
              </CButtonGroup>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail8">Forgot Password</CFormLabel> <br />
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="forget_password"
                  id="forget_password1"
                  autoComplete="off"
                  label="YES"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="forget_password"
                  id="forget_password2"
                  autoComplete="off"
                  label="OFF"
                  defaultChecked
                />
              </CButtonGroup>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail8">
                {`Notify Administrators when user signs up?`}
              </CFormLabel>
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="notify_signup"
                  id="notify_signup1"
                  autoComplete="off"
                  label="YES"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="notify_signup"
                  id="notify_signup2"
                  autoComplete="off"
                  label="OFF"
                  defaultChecked
                />
              </CButtonGroup>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail8">Google reCAPTCHA</CFormLabel> <br />
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="re_capcha"
                  id="re_capcha1"
                  autoComplete="off"
                  label="YES"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="re_capcha"
                  id="re_capcha2"
                  autoComplete="off"
                  label="OFF"
                />
              </CButtonGroup>
            </CCol>
            <CCol md={12}>
              <hr />
              <CButton type="submit">
                <CIcon icon={icon.cilSync} /> Update Auth
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCol>
    </CRow>
  )
}

export default AuthSetting
