import React, { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import { ceil } from "lodash"

import {
  COUNT_FILES_QUERY,
  LIST_FILES_QUERY,
} from "../../services/filesGraphql"
import FileList from "./fileList"
import Filter from "./filter"
import PageControl from "./pageControl"
import { useSearchParams } from "../../hooks/"
import PageSize from "./pageSize"
import { Top } from "./styles"

const FileExplorer = ({ location }) => {
  const searchParams = useSearchParams()
  const [files, setFiles] = useState([])
  const [pagination, setPagination] = useState({
    page: parseInt(searchParams.get("page")) || 1,
    pagesCount: 1,
    pageSize: parseInt(searchParams.get("pageSize")) || 10,
  })
  const [filesCount, setFilesCount] = useState(1)
  const [query, setQuery] = useState(null)
  const { loading, error, data } = useQuery(LIST_FILES_QUERY, {
    variables: { ...pagination, query },
  })
  const { data: countData } = useQuery(COUNT_FILES_QUERY)

  useEffect(() => {
    if (data) setFiles(data.files)
  }, [data, query])

  useEffect(() => {
    if (countData) setFilesCount(countData)
  }, [countData, query])

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase()
    const query = value.length > 0 ? value : null

    setQuery(query)
  }

  const handlePageSizeChange = (event) => {
    const pageSize = parseInt(event.target.value)
    const pagesCount = ceil(filesCount / pageSize)
    setPagination((prev) => ({ ...prev, pageSize, pagesCount }))
  }

  const handlePageChange = (page) =>
    setPagination((prev) => ({ ...prev, page }))

  if (parseInt(searchParams.get("page")) > pagination.pagesCount)
    return <p>Ops... Parece que você encontrou um buraco na Matrix</p>
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <Top>
        <PageSize sizes={[10, 25, 50, 100]} onChange={handlePageSizeChange} />
        <Filter placeholder='Pesquisar...' onBlur={handleFilter} />
      </Top>
      <FileList files={files} />
      <PageControl
        currentPage={pagination.page}
        pagesCount={pagination.pagesCount}
        handler={handlePageChange}
      />
    </>
  )
}

export default FileExplorer
