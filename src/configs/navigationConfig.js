import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    type: "groupHeader",
    groupTitle: "APPS"
  },
  {
    id: "email",
    title: "Email",
    type: "item",
    icon: <Icon.Mail size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/email/:filter",
    filterBase: "/email/inbox"
  },
  {
    id: "chat",
    title: "Chat",
    type: "item",
    icon: <Icon.MessageSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/chat"
  },
  {
    id: "todo",
    title: "Todo",
    type: "item",
    icon: <Icon.CheckSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/todo/:filter",
    filterBase: "/todo/all"
  },
  {
    id: "calendar",
    title: "Calendar",
    type: "item",
    icon: <Icon.Calendar size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/calendar"
  },
  {
    id: "users",
    title: "User",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/list"
      },
      {
        id: "view",
        title: "View",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/view"
      },
      {
        id: "edit",
        title: "Edit",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/edit"
      }
    ]
  },

  {
    type: "groupHeader",
    groupTitle: "PAGES"
  },
  {
    id: "accountSettings",
    title: "Account Settings",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/account-settings"
  },
  {
    id: "faq",
    title: "FAQ",
    type: "item",
    icon: <Icon.HelpCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/faq"
  },

  {
    id: "knowledgeBase",
    title: "Knowledge Base",
    type: "item",
    icon: <Icon.Info size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/knowledge-base",
    parentOf: [
      "/pages/knowledge-base/category/questions",
      "/pages/knowledge-base/category"
    ]
  },


  {
    id: "invoice",
    title: "Invoice",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/invoice"
  },

  {
    id: "authentication",
    title: "Authentication",
    type: "collapse",
    icon: <Icon.Unlock size={20} />,
    children: [
      {
        id: "login",
        title: "Login",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/login",
        newTab: true
      },
      {
        id: "register",
        title: "Register",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/register",
        newTab: true
      },
      {
        id: "forgotPassword",
        title: "Forgot Password",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/forgot-password",
        newTab: true
      },
      {
        id: "resetPassword",
        title: "Reset Password",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/reset-password",
        newTab: true
      },
      {
        id: "lockScreen",
        title: "Lock Screen",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/lock-screen",
        newTab: true
      }
    ]
  },
  {
    type: "groupHeader",
    groupTitle: "EXTENSIONS"
  },
  
  {
    id: "fileUploader",
    title: "File Uploader",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/file-uploader"
  },
  {
    id: "wysiwygEditor",
    title: "Wysiwyg Editor",
    icon: <Icon.Edit size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/wysiwyg-editor"
  },
  {
    id: "drag_&_drop",
    title: "Drag & Drop",
    icon: <Icon.Droplet size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/drag-and-drop"
  },
  {
    id: "tour",
    title: "Tour",
    icon: <Icon.Info size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/tour"
  },
  {
    id: "extImport",
    title: "Import",
    icon: <Icon.DownloadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/import"
  },
  {
    id: "extExport",
    title: "Export",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/export"
  },
  {
    id: "extExportSelected",
    title: "Export Selected",
    icon: <Icon.CheckSquare size={20} />,
    type: "item",
    navLink: "/extensions/export-selected",
    permissions: ["admin", "editor"]
  },
  
]

export default navigationConfig
