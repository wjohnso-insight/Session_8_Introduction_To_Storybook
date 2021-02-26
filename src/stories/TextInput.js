import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const ComponentWrapper = styled.div`
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    flex: 1;
`

export const TextInput = ({ placeholderText, hasInputFunction }) => {
    
    const inputRef = useRef(null);
    const [ inputVal, setInputVal ] = useState();
    const [ hasInput, setHasInput ] = useState(false);
    
    useEffect(() => {
        if(inputVal){
            setHasInput(true);
        }else{
            setHasInput(false)
        }
    },[inputVal])

    useEffect(() => {
        if(hasInput){
            hasInputFunction(inputVal)
        }else{
            console.log('No input detected...')
        }
    }, [hasInput, hasInputFunction, inputVal])

    return (
        <ComponentWrapper>
            <Input 
                type="text"
                placeholder={placeholderText}
                ref={inputRef}
                onChange={() => setInputVal(inputRef.current.value)}
            >
            </Input>
        </ComponentWrapper>
    )
}

TextInput.propTypes = {
    placeholderText: PropTypes.string,
    hasInputFunction: PropTypes.func.isRequired,
    startColor: PropTypes.string
}

TextInput.defaultProps = {
    placeholderText: "Placeholder",
    hasInputFunction: () => console.log('Input detected...'), //WHOA!
}