import React from 'react'
import {render, screen } from '@testing-library/react'
import Cart from './Cart'

describe('Given a Cart component', ()=> {
    describe('When the component is rendered', ()=>{
        test('Then should be a cart html tag', ()=>{
            render(<Cart cartItems={[]} />);
            expect(screen.getByTestId("cart")).toBeInTheDocument();
        });
    });
});