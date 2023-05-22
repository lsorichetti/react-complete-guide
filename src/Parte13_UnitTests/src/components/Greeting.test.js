import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', ()=>{

    test('renders Hello World as text', () => {
        //Arrange
        render(<Greeting />);
        
        //Act
        // ... nothing

        // Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
    
        expect(helloWorldElement).toBeInTheDocument();
    });
    
    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);
        const outputElement = screen.getByText('It\'s good to see you', {exact: false});
    
        expect(outputElement).toBeInTheDocument();

    });
    test('renders "Changed" if the button WAS clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const sucessElement = screen.getByText('Changed', {exact: false});
        expect(sucessElement).toBeInTheDocument();
        
        const errorElement = screen.queryByText('good to see you', {exact: false});
    
        expect(errorElement).not.toBeInTheDocument();
        expect(errorElement).toBeNull();
    
    });

})
