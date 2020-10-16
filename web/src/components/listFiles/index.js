import React from "react"
import FileExplorer from "../fileExplorer"
import { Logout } from "../session"
import { useCurrentUser } from "../../hooks"
import TopBar from "../topBar"

const ListFiles = () => {
  const user = useCurrentUser()
  console.log(user)
  return (
    <div>
      <TopBar button={<Logout />} />
      <FileExplorer />
    </div>
  )
}

export default ListFiles
