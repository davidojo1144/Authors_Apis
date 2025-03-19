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

  const submitNewAuthor = async () => {
    const authorData = 
      {
        "name": "Chimamanda Ngozi Adichie",
        "picture": "/adichie.jpeg",
        "age": 46
      }

      const response = await fetch("http://localhost:5000/api/authors",{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(authorData)
      })
      const result = await response.json()
      setAuthors(prev=> [...prev, result])
      
    
  }

  


  return (
    <>
      <div className='container space-y-5 mb-10 mt-10 shadow-2xl p-5 rounded-xl'>
      <button onClick={submitNewAuthor} className='bg-gray-600 w-40 h-10 rounded-full text-white hover:bg-gray-300 hover:text-black shadow-xl '>Add New Author</button>
      <h1 className='text-xl font-semibold'>AUTHORS</h1>
          {
            authors.map((author)=> (
              <div className='items-center justify-center shadow-2xl bg-gray-200 p-5 rounded-2xl w-52' key={author.id}>
                <div>
                  <h2 className='text-sm'>Name: {author.name}</h2>
                  <p className='text-xs'>Age: {author.age}</p>
                </div>
                <img className='w-32 rounded-xl' src={author.picture} alt="" />
              </div>
            ))
          }
      </div>
    </>
  )
}

export default Authors
