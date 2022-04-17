import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'

const urlReadAll = 'http://localhost:3333/log/'

const ReadAll = () => {
  const [log, setLog] = useState();

  const api = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setLog(result)
        }
      )
  }
  useEffect(() => {
    setLog(api(urlReadAll))
  }, []);


  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>date</th>
            <th>ip</th>
            <th>type</th>
            <th>idtype</th>
            <th>message</th>
          </tr>
        </thead>

        <tbody>
          {
            log === undefined ?
              <tr>
                <td>Carregando</td>
                <td>Carregando</td>
                <td>Carregando</td>
                <td>Carregando</td>
                <td>Carregando</td>
              </tr>
              :
              log.map(
                (row, index) => {
                  return (
                    <tr>
                      <td>{row.date}</td>
                      <td>{row.ip}</td>
                      <td>{row.type}</td>
                      <td>{row.idType}</td>
                      <td>{row.message}</td>
                    </tr>
                  )
                }
              )
          }
        </tbody>
      </Table>
    </>
  );
};
export default ReadAll;


