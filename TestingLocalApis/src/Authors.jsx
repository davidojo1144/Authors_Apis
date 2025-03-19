import React, { useEffect, useState } from 'react'

const Authors = () => {

  const [authors, setAuthors] = useState([])

  useEffect(()=> {
    const fetchAuthorsData = async ()=> {
      try {
        const responce = await fetch("http://localhost:5000/api/authors")
        const data = await responce.json()
        setAuthors(data)
      } catch (error) {
        console.error("Error: ", error)
      }
    }
    fetchAuthorsData()
  }, [])


  return (
    <>
      <div className='container'>
          {
            authors.map((author)=> {
              <div key={author.id}>
                <p>{author.name}</p>
                <p>{author.age}</p>
                <img src={author.picture} alt="" />
              </div>
            })
          }
      </div>
    </>
  )
}

export default Authors
