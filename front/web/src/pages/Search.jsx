import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import "../styles/table.css"

const urlReadAll = 'http://localhost:3333/log/'
const urlSearch = 'http://localhost:3333/log/search/'

const Search = () => {
  const [log, setLog] = useState();
  const [search, setSearch] = useState();

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
    if (search !== undefined && search !== "") {
      setLog(api(urlSearch + search))
    } else {
      setLog(api(urlReadAll))
    }
  }, [search]);

  useEffect(() => {
    setLog(api(urlReadAll))
  }, []);

  return (
    <>
      <br />
      <input
        type="text"
        value={search}
        onChange={(ev => setSearch(ev.target.value)
        )}
      />
      <br />
      <br />
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
export default Search;


