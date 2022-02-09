import React from 'react'
import beers from '../../data/beer'
import CardList from "../CardList/CardList"
import "./Main.scss"
import Card from '../Card/Card'

const Main = (props) => {
  const { beersArr, beerImagesArr } = props
  // const imagesJSX = beerImagesArr.map((image) => {
  //   return <CardList
  //     picture={image.image_url}/>
  // })
  const beerJSX = beersArr.map((beer) => {
    return <Card 
    name={beer.name}
    tagline={beer.tagline}
    description={beer.description}
    abv={beer.abv}
    />
  })
  return (
    <div className='mainContainer'>
    {beerJSX}
    </div>
  )
}

export default Main