import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';

import { LIST_FILES_QUERY } from '../../services/filesGraphql';
import FileList from './fileList';
import Filter from './filter';


const FileExplorer = () => {
  const [files, setFiles] = useState([])
  const { loading, error, data } = useQuery(LIST_FILES_QUERY);

  useEffect(() => {
    if (data) setFiles(data.files)
  }, [data])

  const handleFilter = event => {
    const files = data.files;
    const query = event.target.value.toLowerCase();

    setFiles(files.filter(file => file.fullName.toLowerCase().includes(query)))
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Filter placeholder= "Pesquisar..." onChange={handleFilter} />
      <FileList files={files} />
    </div>
  )

}

export default FileExplorer;