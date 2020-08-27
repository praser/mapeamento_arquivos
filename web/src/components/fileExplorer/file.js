import React from 'react';
import { formatDistance, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import filesize from 'filesize'
import { Col, Row } from './styles';

const File = ({ file }) => {
  const { Directory ,directoryName, name, length, creationTime, lastWriteTime, lastAccessTime} = file;
  const formatDate = (dateISO) => formatDistance(parseISO(dateISO), new Date(), {locale: ptBR});
  
  return (
    <Row>
      <Col>{Directory.path}</Col>
      <Col>{directoryName}</Col>
      <Col>{name}</Col>
      <Col>{filesize(length)}</Col>
      <Col>{formatDate(creationTime)}</Col>
      <Col>{formatDate(lastWriteTime)}</Col>
      <Col>{formatDate(lastAccessTime)}</Col>
    </Row>
  )
};

export default File;