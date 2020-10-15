import React from 'react';
import { formatDistance, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import filesize from 'filesize'
import { Col, Row } from './styles';
import { useMutation } from '@apollo/client';
import { CREATE_FILE } from '../../services/filesGraphql';
import userCurrentUser from '../../hooks/useCurrentUser';

const File = ({ file }) => {
  const { Directory ,directoryName, name, length, creationTime, lastWriteTime, lastAccessTime} = file;
  const formatDate = (dateISO) => formatDistance(parseISO(dateISO), new Date(), {locale: ptBR});
  const [createFile] = useMutation(CREATE_FILE)
  const user = userCurrentUser()

  const handleClick = file => {
    const {id: fileId} = file;
    const {id: userId} = user;
    createFile({variables: { userId, fileId}})
  }
  
  return (
    <Row>
      <Col>{Directory.path}</Col>
      <Col>{directoryName}</Col>
      <Col>{name}</Col>
      <Col>{filesize(length)}</Col>
      <Col>{formatDate(creationTime)}</Col>
      <Col>{formatDate(lastWriteTime)}</Col>
      <Col>{formatDate(lastAccessTime)}</Col>
      <Col>
      <button type="button" onClick={() => handleClick(file)}>Reinvindicar arquivo</button>
      </Col>
    </Row>
  )
};

export default File;