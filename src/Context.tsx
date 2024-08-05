import React, { useState } from 'react'


export const Context = React.createContext({} as any)

const initialState = {
   user: {},
   usersProjects: [],
   selectedProject: [],
   themeColor: ''
}

interface Props {
   children: React.ReactElement
}


export const Provider = (props: Props) => { 
    const { children } = props
    const [state, setState] = useState(initialState)
    return (
        <Context.Provider value={{ state, setState }}>
            { children}
        </Context.Provider>
    )

}