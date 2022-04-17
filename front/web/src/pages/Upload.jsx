import React, { useState } from 'react'

function Upload() {
  const [fileData, setFileData] = useState();
  const [message, setMessage] = useState('');

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    setMessage('');
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("file", fileData);

    fetch("http://localhost:3333/import", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        setMessage('Arquivo enviado com sucesso!')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <h1>React App File Uploading</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Submit File to Backend</button>
        <br />
        <h1>{message}</h1>
      </form>
    </div>
  );
}


export default Upload