import React from 'react'

import { Header, HeaderOptions, Todos } from '../components'

const LoggedInHome = () => {
    return (
        <>
            <Header />
            <HeaderOptions />

            <Todos />
        </>
    )
}

export default LoggedInHome