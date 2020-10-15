import React from 'react';
import { Body, Header, HeaderCol, Row, Table } from './styles';
import File from './file';

const FileList = ({files}) => {
  return (
    <Table>
      <Header>
        <Row>
          <HeaderCol>Servidor</HeaderCol>
          <HeaderCol>Pasta</HeaderCol>
          <HeaderCol>Arquivo</HeaderCol>
          <HeaderCol>Tamanho</HeaderCol>
          <HeaderCol>Criação</HeaderCol>
          <HeaderCol>Modificação mais recente</HeaderCol>
          <HeaderCol>Acessado pela últma vez</HeaderCol>
          <HeaderCol>Ação</HeaderCol>
        </Row>
      </Header>
      <Body>
        { files.map(file => <File key={file.id} file={file} />) }
      </Body>
    </Table>
  )
}

export default FileList;
