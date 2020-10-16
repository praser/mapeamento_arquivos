import React from "react"
import FileExplorer from "../fileExplorer"
import { Logout } from "../session"
import TopBar from "../topBar"
import { Content } from "./styles"

const ListFiles = () => {
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
