import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import needle from 'needle'
import ContextProvider, { Context } from '../../../context/Context'
import recipes from '../../../data/recipes'
import FullRecepie from '../../../components/recepies/FullRecipe'
import Header from '../../../components/header/Header'

export default function index() {
    const router = useRouter()
    const { id } = router.query
    // const { serverUrl } = useContext(Context)
    const [recipe, setRecipe] = useState()

    // useEffect(async() => {
    //   // const recipeFromServer = await needle('get', serverUrl, {id})

    // }, [])
    


  return (
      <ContextProvider>
        <Header />
        <FullRecepie recipe={recipes[0]}/>
      </ContextProvider>
  )
}
