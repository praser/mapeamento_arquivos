import React from "react"
import FileExplorer from "../fileExplorer"
import { Logout } from "../session"
import { useCurrentUser } from "../../hooks"
import TopBar from "../topBar"
import { Content } from "./styles"

const ListFiles = () => {
  const user = useCurrentUser()
  return (
    <>
      <TopBar button={<Logout />} />
      <Content>
        <FileExplorer />
      </Content>
    </>
  )
}

export default ListFiles
