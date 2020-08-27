import React from 'react'
import FileList from './fileList';
import Filter from './filter';

const FileExplorer = ({ fileList, ...rest }) => <FileList files={fileList} {...rest} />

export default FileExplorer;
export { Filter };