import { createContext, useState } from "react";
import { translation } from "./languages"


const initialLanguage = 'ES';

const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
        // languages
        const [texts, setTexts] = useState(translation[initialLanguage])
        const handleLanguange = (stateVar) => {
            if(stateVar == "ES"){
                setTexts(translation["ES"])
            } 
            if(stateVar == "EN"){
                setTexts(translation["EN"])
            }
        }

    const value = { texts, handleLanguange };
    
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export {LanguageProvider}
export default LanguageContext