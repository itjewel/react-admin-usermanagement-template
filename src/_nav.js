import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={icon.cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={icon.cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add User',
        to: '/users/adduser',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/users/userslist',
      },
      {
        component: CNavItem,
        name: 'Activity Log',
        to: '/users/activitylog',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Email',
    icon: <CIcon icon={icon.cibMinutemailer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Email Category',
        to: '/emailtemplate/email-category',
      },
      {
        component: CNavItem,
        name: 'Create Template',
        to: '/emailtemplate/email-templates',
      },
      {
        component: CNavItem,
        name: 'Email lists',
        to: '/emailtemplate/email-group',
      },
      {
        component: CNavItem,
        name: 'Send Email',
        to: '/emailtemplate/email-send',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Roles & Permissions',
    icon: <CIcon icon={icon.cilHttps} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Roles',
        to: '/roles-permission/roles',
      },
      {
        component: CNavItem,
        name: 'Permissions',
        to: '/roles-permission/permissions',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={icon.cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'General Setting',
        to: '/settings/general-setting',
      },
      {
        component: CNavItem,
        name: 'Payment Setting',
        to: '/settings/payment-setting',
      },
      {
        component: CNavItem,
        name: 'Authentication',
        to: '/settings/auth-setting',
      },
      {
        component: CNavItem,
        name: 'Profile Setting',
        to: '/settings/profile-setting',
      },
    ],
  },
]

export default _nav
