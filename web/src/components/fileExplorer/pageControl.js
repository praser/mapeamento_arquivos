import React from "react"

const PageControl = ({ currentPage, pagesCount, handler }) => {
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)
  const buttons = pages.map((page) => {
    if (page === currentPage) {
      return (
        <button
          key={page}
          type='button'
          active='active'
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      )
    } else {
      return (
        <button key={page} type='button' onClick={() => handlePageChange(page)}>
          {page}
        </button>
      )
    }
  })

  const handleBack = () => {
    const page = currentPage > 1 ? currentPage - 1 : currentPage
    handler(page)
  }

  const handleFoward = () => {
    const page = currentPage < pagesCount ? currentPage + 1 : pagesCount
    handler(page)
  }

  const handleFirst = () => {
    const page = 1
    handler(page)
  }

  const handleLast = () => {
    const page = pagesCount
    handler(page)
  }

  const handlePageChange = (page) => {
    handler(page)
  }

  return (
    <>
      <button type='button' onClick={handleFirst}>
        {"<<"}
      </button>
      <button type='button' onClick={handleBack}>
        {"<"}
      </button>
      {buttons}
      <button type='button' onClick={handleFoward}>
        {">"}
      </button>
      <button type='button' onClick={handleLast}>
        {">>"}
      </button>
    </>
  )
}

export default PageControl
