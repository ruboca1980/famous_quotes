import React from 'react'

const QuoteBox = ({quoteRandom, handleClick}) => {
  return (
    <article className='box'>
      <p className='box__quote'>{quoteRandom.quote}</p>
      <h2 className='box__author'>{quoteRandom.author}</h2>
      <button className='box__btn' onClick={handleClick}>Next...</button>
      
    </article>
  )
}

export default QuoteBox