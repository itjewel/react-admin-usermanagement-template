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
  CFormSelect,
  CFormTextarea,
  CButton,
  CFormCheck,
  CButtonGroup,
  CImage,
} from '@coreui/react'

import profileImage from './../../../assets/images/avatars/001-profile.png'

function ProfileSetting() {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
            <CIcon icon={icon.cilUser} size="lg" /> Personal Info
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
            <CIcon icon={icon.cilLockLocked} size="lg" /> Auth Info
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" active={activeKey === 3} onClick={() => setActiveKey(3)}>
            <CIcon icon={icon.cilIndustry} size="lg" /> Social Network
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" active={activeKey === 4} onClick={() => setActiveKey(4)}>
            <CIcon icon={icon.cilContact} size="lg" /> Profile Picture
          </CNavLink>
        </CNavItem>
      </CNav>

      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardBody>
                  <CForm className="row g-3">
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail8">First Name</CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">Last Name</CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">Phone</CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">Date of birth</CFormLabel>
                      <CFormInput type="date" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputCity">Country</CFormLabel>
                      <CFormSelect id="inputState">
                        <option>Choose...</option>
                        <option>...</option>
                      </CFormSelect>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail8">Genger</CFormLabel> <br />
                      <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                        <CFormCheck
                          type="radio"
                          button={{ color: 'primary', variant: 'outline' }}
                          name="gender"
                          id="gender1"
                          autoComplete="off"
                          label="Male"
                          defaultChecked
                        />
                        <CFormCheck
                          type="radio"
                          button={{ color: 'danger', variant: 'outline' }}
                          name="gender"
                          id="gender"
                          autoComplete="off"
                          label="Female"
                        />
                      </CButtonGroup>
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                      <CFormTextarea id="exampleFormControlTextarea1" rows="2"></CFormTextarea>
                    </CCol>
                    <CCol md={12}>
                      <CButton type="submit">
                        <CIcon icon={icon.cilSync} /> Update Profile info
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
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail8">
                        <CIcon icon={icon.cibMinutemailer} size="xl" /> Email Address
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cibSuperuser} size="xl" /> Username
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cilLockLocked} size="xl" /> Password
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cilLockLocked} size="xl" /> Confirm Password
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={12}>
                      <CButton type="submit">
                        <CIcon icon={icon.cilSync} /> Update Auth info
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
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail8">
                        <CIcon icon={icon.cibGoogle} size="xl" /> Google
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cibFacebookF} size="xl" /> Facebook
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cibTwitter} size="xl" /> Twitter
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" size="xl" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cibDribbble} size="xl" /> Dribbble
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cibLinkedinIn} size="xl" /> Linkedin
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="inputEmail4">
                        <CIcon icon={icon.cibSkype} size="xl" /> Skype
                      </CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={12}>
                      <CButton type="submit">
                        <CIcon icon={icon.cilSync} /> Update Social Network Info
                      </CButton>
                    </CCol>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CTabPane>
      </CTabContent>
      <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 4}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardBody>
                <CImage rounded thumbnail src={profileImage} width={200} height={200} />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CTabPane>
    </>
  )
}

export default ProfileSetting
