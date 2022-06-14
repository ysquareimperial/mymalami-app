import React, {useState} from "react";
import Autosuggest from "react-autosuggest";
import studentList from './Student/StudentList.js'

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : languages.filter(lang => 
        lang.name.toLowerCase().slice(0, inputLength) === inputValue)
}

const getSuggestionValue = suggestion => suggestion.name
const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
)
export default function SearchBar(props) {
    const [stuList, setStuList] = useState({
        value: '',
        suggestions: []
    })
    
    return(
        <Autosuggest 
            />
    )
}