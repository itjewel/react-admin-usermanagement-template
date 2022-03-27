import React from 'react'
// import { useParams } from 'react-router-dom'

// Working On
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const AddNewProducts = React.lazy(() => import('./views/Products/AddNewProducts'))
const AllProducts = React.lazy(() => import('./views/Products/AllProducts'))

const AddUser = React.lazy(() => import('./views/users/AddUser/AddUser'))
const ActivityLog = React.lazy(() => import('./views/users/ActivityLog'))
const Userslist = React.lazy(() => import('./views/users/Userslist'))
const UsersDetails = React.lazy(() => import('./views/users/UsersDetails'))
const UpdateUser = React.lazy(() => import('./views/users/UpdateUser'))

const Roles = React.lazy(() => import('./views/roles-permission/Roles'))
const Permissions = React.lazy(() => import('./views/roles-permission/Permissions'))

const AuthSetting = React.lazy(() => import('./views/settings/AuthSetting'))
const GeneralSetting = React.lazy(() => import('./views/settings/GeneralSetting'))
const PaymentSetting = React.lazy(() => import('./views/settings/PaymentSetting'))
const ProfileSetting = React.lazy(() => import('./views/settings/ProfileSetting'))

const EmailCategory = React.lazy(() => import('./views/email-templates/Category'))
const EmailTemplates = React.lazy(() => import('./views/email-templates/EmailTemplates'))
const EmailGroup = React.lazy(() => import('./views/email-templates/EmailGroup'))
const SendEmail = React.lazy(() => import('./views/email-templates/SendEmail'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/addnewproducts', name: 'AddNewProducts', component: AddNewProducts },
  { path: '/allproduct', name: 'AllProducts', component: AllProducts },
  { path: '/users', name: 'Users', component: Userslist, exact: true },
  { path: '/users/userslist', name: 'Users', component: Userslist },
  { path: '/users/adduser', name: 'AddUser', component: AddUser },
  { path: '/users/activitylog', name: 'Activity Log', component: ActivityLog },
  { path: '/users/details/:id', name: 'Users Details', component: UsersDetails },
  { path: '/users/edit/:id', name: 'Update', component: UpdateUser },
  { path: '/roles-permission', name: 'Roles Permission', component: Roles, exact: true },
  { path: '/roles-permission/roles', name: 'Roles', component: Roles },
  { path: '/roles-permission/permissions', name: 'Permissions', component: Permissions },
  { path: '/settings', name: 'Settings', component: GeneralSetting, exact: true },
  { path: '/settings/general-setting', name: 'General Setting', component: GeneralSetting },
  { path: '/settings/payment-setting', name: 'Payment Setting', component: PaymentSetting },
  { path: '/settings/profile-setting', name: 'Profile Setting', component: ProfileSetting },
  { path: '/settings/auth-setting', name: 'Auth Setting', component: AuthSetting },
  { path: '/emailtemplate', name: 'Email Templates', component: EmailTemplates, exact: true },
  { path: '/emailtemplate/email-category', name: 'Email Category', component: EmailCategory },
  { path: '/emailtemplate/email-templates', name: 'Email Templates', component: EmailTemplates },
  { path: '/emailtemplate/email-group', name: 'Email Group', component: EmailGroup },
  { path: '/emailtemplate/email-send', name: 'Send Email', component: SendEmail },
]

export default routes
