import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'

const AddUser = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    email_address: '',
    username: '',
    password: '',
    passwordConfirmation: '',
    date_of_birth: '',
    address: '',
  }
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Please Enter First Name'),
    last_name: Yup.string().required('Please Enter Last Name'),
    mobile_number: Yup.string().min(3).max(15).required('Please Enter Phone Number'),
    email_address: Yup.string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    username: Yup.string().min(3).max(15).required('Please Enter Username'),
    password: Yup.string().min(8).required('Password Required'),
    passwordConfirmation: Yup.string().test(
      'passwords-match',
      'Passwords must match',
      function (value) {
        return this.parent.password === value
      },
    ),
    date_of_birth: Yup.string().min(3).max(15).required('Please Enter date of birth'),
    address: Yup.string().required('Please Enter Address'),
  })
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then((response) => {
      console.log(234)
    })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <CCard className="mb-4">
            <CCardBody>
              <Form className="row g-3">
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">
                    First Name <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field name="first_name" type="text" id="inputEmail4" className="form-control" />
                  <ErrorMessage name="first_name" className="text-danger" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">
                    <CIcon className="text-danger" icon={icon.cilAsterisk} /> Last Name
                  </CFormLabel>
                  <Field name="last_name" type="text" id="inputEmail4" className="form-control" />
                  <ErrorMessage name="last_name" className="text-danger" component="span" />
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
                  <CFormLabel htmlFor="inputZip">
                    Mobile <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field name="mobile_number" id="inputZip" className="form-control" />
                  <ErrorMessage className="text-danger" name="mobile_number" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">
                    E-Mail Address <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field
                    type="email"
                    name="email_address"
                    id="inputEmail4"
                    className="form-control"
                  />
                  <ErrorMessage className="text-danger" name="email_address" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">
                    Username <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field type="text" name="username" id="inputEmail4" className="form-control" />
                  <ErrorMessage className="text-danger" name="username" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">
                    Password <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field
                    type="password"
                    name="password"
                    id="inputEmail4"
                    className="form-control"
                  />
                  <ErrorMessage className="text-danger" name="password" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">
                    Confirm Password <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    id="inputEmail4"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    className="text-danger"
                    component="span"
                  />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">
                    Date Of Birth <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field
                    type="date"
                    name="date_of_birth"
                    id="inputPassword4"
                    className="form-control"
                  />
                  <ErrorMessage name="date_of_birth" className="text-danger" component="span" />
                </CCol>
                <CCol md={8}>
                  <CFormLabel htmlFor="inputAddress">
                    Address <CIcon className="text-danger" icon={icon.cilAsterisk} />
                  </CFormLabel>
                  <Field
                    name="address"
                    as="textarea"
                    className="form-control"
                    placeholder="Address"
                  />
                  <ErrorMessage name="address" className="text-danger" component="span" />
                </CCol>
                <CCol md={12}>
                  <CButton type="submit">
                    <CIcon icon={icon.cilNoteAdd} /> Create an account
                  </CButton>
                </CCol>
              </Form>
            </CCardBody>
          </CCard>
        </Formik>
      </CCol>
    </CRow>
  )
}

// function AddUser() {
//   return ()
// }

export default AddUser
