import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import RecipeInfo from './RecipeInfo'
import RecipeScore from './RecipeScore'
import TimeInfo from './TimeInfo'

export default function DescriptionArea({recipe}) {

    const router = useRouter()
    const [className, setClassName] = useState('')

    useEffect(() => {
        if (router.pathname.includes('recipe') || true) {
            setClassName('full-recipe__section ')
        }
    }, [])


    return (
        <>
            <div className={`${className}recipe__description-area`}>
                <div className='recipe-description__left'>
                    <h1>{recipe?.title}</h1>
                    <p>{recipe?.subTitle}</p>
                    <div style={{width: '80%'}}>
                        <RecipeScore stars={recipe.recipeScore }/>
                        <RecipeInfo servings={recipe.servings} calories={recipe.calories} difficulty={recipe.difficulty}/>
                    </div>
                </div>
                <div className='recipe-description__right'>
                    <img src={recipe?.mainImage} />
                </div>

            </div>
            <div className={`${className}full-recipe__section recipe__time-info`}>
                <TimeInfo time={recipe?.recipeTime?.prep}/>
                <TimeInfo time={recipe?.recipeTime?.cook}/>
                <TimeInfo time={{name: 'Total', amount: recipe?.recipeTime?.prep?.amount + recipe?.recipeTime?.cook?.amount}} className={'no-border-right'} />
            </div>
        </>
    )
}
