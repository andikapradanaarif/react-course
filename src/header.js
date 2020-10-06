import React, { useState } from 'react';

const Header = (props) => {
  const { headerName } = props;
  const [name, setName] = useState(headerName);
  const listName = ['upin', 'ipin', 'kak ross'];
  const [nameIndex, setNameIndex] = useState(0);
  return (
    <>
      {/* <h1>My First Header</h1>
      <h2>My Second Header</h2> */}
      <h3>{`hello my name is ${name}`}</h3>
      <button
        type="submit"
        onClick={() => {
          setName(listName[nameIndex]);
          if (nameIndex === 2) {
            setNameIndex(0);
          } else {
            setNameIndex(nameIndex + 1);
          }
        }}
      >
        Ganti Nama
      </button>
    </>
  );
};
export default Header;
