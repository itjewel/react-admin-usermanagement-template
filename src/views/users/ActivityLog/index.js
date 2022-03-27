import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPopover,
  CButton,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
function ActivityLog() {
  return (
    <CTable>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell scope="col">Users</CTableHeaderCell>
          <CTableHeaderCell scope="col">IP Address</CTableHeaderCell>
          <CTableHeaderCell scope="col">Message</CTableHeaderCell>
          <CTableHeaderCell scope="col">Log Time</CTableHeaderCell>
          <CTableHeaderCell scope="col">logged map</CTableHeaderCell>
          <CTableHeaderCell scope="col">More Info</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">Admin 123</CTableHeaderCell>
          <CTableDataCell>192.168.0.125</CTableDataCell>
          <CTableDataCell>User Updated.</CTableDataCell>
          <CTableDataCell>2022-01-16 17:08:27</CTableDataCell>
          <CTableDataCell>Not Found</CTableDataCell>
          <CTableDataCell>
            <CPopover content="dsdsdsd dfdfdf fdfdf" placement="top">
              <CButton color="primary" size="sm">
                <CIcon icon={icon.cilInfo} size="xl" />
              </CButton>
            </CPopover>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">Admin 123</CTableHeaderCell>
          <CTableDataCell>192.168.0.125</CTableDataCell>
          <CTableDataCell>User Updated.</CTableDataCell>
          <CTableDataCell>2022-01-16 17:08:27</CTableDataCell>
          <CTableDataCell>Not Found</CTableDataCell>
          <CTableDataCell>
            <CPopover content="dsdsdsd dfdfdf fdfdf" placement="top">
              <CButton color="primary" size="sm">
                <CIcon icon={icon.cilInfo} size="xl" />
              </CButton>
            </CPopover>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">Admin 123</CTableHeaderCell>
          <CTableDataCell>192.168.0.125</CTableDataCell>
          <CTableDataCell>User Updated.</CTableDataCell>
          <CTableDataCell>2022-01-16 17:08:27</CTableDataCell>
          <CTableDataCell>Not Found</CTableDataCell>
          <CTableDataCell>
            <CPopover content="dsdsdsd dfdfdf fdfdf" placement="top">
              <CButton color="primary" size="sm">
                <CIcon icon={icon.cilInfo} size="xl" />
              </CButton>
            </CPopover>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
      <CTableBody>
        <CPagination align="end" aria-label="Page navigation example">
          <CPaginationItem disabled>Previous</CPaginationItem>
          <CPaginationItem>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>Next</CPaginationItem>
        </CPagination>
      </CTableBody>
    </CTable>
  )
}

export default ActivityLog
