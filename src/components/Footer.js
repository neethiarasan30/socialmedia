import React from 'react'

export const Footer = () => {

  let date = new Date();

  return (
        <footer className='Footer'>
            <h1>Copyright &copy;{date.getFullYear()} </h1>
        </footer>
  )
}
