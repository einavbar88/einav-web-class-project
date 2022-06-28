import React, { useRef, useState, useEffect } from 'react'
import useOnScreen from '../../../hooks/useOnScreen'
import PageSection from '../PageSection'
import Icon from './Icon'
import { CSSTransition } from 'react-transition-group'

export default function IconsSection() {
    const componentRef = useRef()
    const visible = useOnScreen(componentRef, '-100px')
    const [course, setCourse] = useState('')
    const hourOfTheDay = new Date().getHours();

    useEffect(() => {
        let text = ' midnight munch '
        if (hourOfTheDay >= 5 && hourOfTheDay < 10)
            text = ' breakfast '
        else if (hourOfTheDay >= 10 && hourOfTheDay < 12)
            text = ' brunch '
        else if (hourOfTheDay >= 12 && hourOfTheDay < 16)
            text = ' lunch '
        else if (hourOfTheDay >= 15 && hourOfTheDay < 18)
            text = ' mid-day snack '
        else if (hourOfTheDay >= 18 && hourOfTheDay < 23)
            text = ' dinner '

        setCourse(text)
    }, [])


    return (
        <>
            <h1 className='icons-section__title beatiful-font'>What's for <span>{course}</span> {hourOfTheDay < 5 || hourOfTheDay > 18 ? 'tonight' : 'today'}?</h1>
            <PageSection>
                <div style={{ width: '100%' }} ref={componentRef}>
                    <CSSTransition in={visible} timeout={2000} classNames={'floating-icons'} children>
                        <ul className={`icons-section`} >
                            {visible && <>
                                <Icon key='Junk Food' src='/svg/hamburger.svg' text='Junk Food' href={''} />
                                <Icon key='Asian' src='/svg/sushi.svg' text='Asian' href={''} />
                                <Icon key='Comfort Food' src='/svg/hotpot.svg' text='Comfort Food' href={''} />
                                <Icon key='Healthy Food' src='/svg/salad.svg' text='Healthy Food' href={''} />
                                <Icon key='Sweets' src='/svg/cake.svg' text='Sweets' href={''} />
                            </>
                            }
                        </ul>
                    </CSSTransition>
                </div>
            </PageSection>
        </>
    )
}
