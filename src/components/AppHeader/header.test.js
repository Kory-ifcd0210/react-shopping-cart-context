import React from 'react'
import {render, screen} from '../../utils/test-utils-redux'
import AppHeader from './AppHeader'

describe('Given a Cart component', ()=> {
    describe('When the component is rendered', ()=>{
        test('Then should be a cart html tag', ()=>{
            render(<AppHeader />);
            expect(screen.getByTestId("header")).toBeInTheDocument();
        });
    });
});