import React, {useEffect} from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/Topnav' 
import Routes from '../Routes'

import {BrowserRouter, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/Theme/ThemeActions'

const Layout = ({userName}) => {

    const themeReducer = useSelector(state => state.themeRedux)
    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass =  localStorage.getItem('themeMode', 'theme-mode-light')
        const colorClass =  localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode}  ${themeReducer.color}`}>
                    <Sidebar {...props}/>
                    <div className='layout__content'>
                        <Topnav userName={userName} />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )} />
        </BrowserRouter>
    )
}

export default Layout

