import React from "react"
import { Controls, ControlButton as Button } from "./styles"
import { ceil } from "lodash"

const calcPages = (page, pages, size) => {
  const controls = Array.from(Array(size).keys(), (_, i) =>
    ceil(i + (page - size / 2))
  )
  const outFirst = controls.filter((i) => i > 0)
  const outLast = outFirst.filter((i) => i <= pages)
  return outLast
}

const PageControl = ({ currentPage, pagesCount, handler }) => {
  const pages = calcPages(currentPage, pagesCount, 5)
  const buttons = pages.map((page) => {
    if (page === currentPage) {
      return (
        <Button
          key={page}
          type='button'
          active='active'
          onClick={() => handlePageChange(page)}
          variant='info'
        >
          {page}
        </Button>
      )
    } else {
      return (
        <Button key={page} type='button' onClick={() => handlePageChange(page)}>
          {page}
        </Button>
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
    <Controls>
      <Button type='button' onClick={handleFirst} variant='info'>
        {"<<"}
      </Button>
      <Button type='button' onClick={handleBack} variant='info'>
        {"<"}
      </Button>
      {buttons}
      <Button type='button' onClick={handleFoward} variant='info'>
        {">"}
      </Button>
      <Button type='button' onClick={handleLast} variant='info'>
        {">>"}
      </Button>
    </Controls>
  )
}

export default PageControl
