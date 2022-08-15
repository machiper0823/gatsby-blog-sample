// src/components/pagenation.jsx
import React from "react"
import { Link } from "gatsby"
import "../styles/pagination.css"

const Paging = ({ prevPath, nextPath }) => {
  return (
    <div className="pagination-frame">
      {prevPath && (
        <Link to={prevPath} className="btn pagination-pager">
          前のぺージ
        </Link>
      )}
      {nextPath && (
        <Link to={nextPath} className="btn pagination-pager">
          次のページ
        </Link>
      )}
    </div>
  )
}

export default Paging
