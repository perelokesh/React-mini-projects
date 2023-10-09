// // import React from 'react'

// function SearchBar({onSearch}){
//   const search = (e) => {
//     onSearch(e.target.value);
//   }
//   return (
//     <input
//     type="text"
//     placeholder='Search'
//     onChange={search}
//     />
//   )
// }

// export default SearchBar

import React, { useState } from "react"

const ButtonClick = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(data => {
        console.log("data:", data);
        setUsers(data)
      })
  }

  // const search = (e) => {
  //       onSearch(e.target.value);
  //     }
      return (
        <input
        type="text"
        placeholder='Search'
        onClick={fetchData}
        />
      )
}

export default ButtonClick

