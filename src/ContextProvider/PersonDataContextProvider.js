import React, { useReducer} from "react";

import PersonDataContext from "../Context/PersonDataContext";

const SAVE_NEW_PERSON_DATA = "saveNewPersonData";

function personDataReducer(state,action){
    switch (action.type) {
        case SAVE_NEW_PERSON_DATA :
            {
                return action.newData;
            }

        default:
            {
                return state;
            }
    }
}


function PersonDataContextProvider({children}){
    // initial state like App const

    const [personDataState, setPersonDataState] = useReducer(personDataReducer,{});

    function savePersonData(newData){
        setPersonDataState({type: SAVE_NEW_PERSON_DATA,
            newData: newData });
    }

    return (
        <PersonDataContext.Provider value={{
            data: personDataState,
            savePersonData: savePersonData
        }}>
            {children}
        </PersonDataContext.Provider>
    )
}

export default PersonDataContextProvider;