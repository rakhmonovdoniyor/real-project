import React from 'react'
import { BTN, BTNWrap, BigInput, InputContainer, InputWrapCon, TExtWrap } from './q$aStyle'

export const Inputs = () => {
  return (
    <BigInput>
        <InputContainer >
                <TExtWrap><h1>Send a question</h1>
                </TExtWrap>
                <InputWrapCon>
                    <input   type="text"  placeholder ='Your name' />
                    <input   type="email" placeholder = 'Your email' />
                    <input style={{height: 120}}   type="text" placeholder='Your question'/>
                   <BTNWrap>
                   <BTN>Send question</BTN>
                    </BTNWrap> 
                </InputWrapCon>
                
            </InputContainer>

    </BigInput>
  )
}
