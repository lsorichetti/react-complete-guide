
import { render, screen } from "@testing-library/react"
import Async from "./Async"
describe('Async component', ()=>{

    test('renders post if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [
                    {
                        id: 'p1',
                        title: 'asdf'
                    }
                ]
            }
        });
        render(<Async></Async>);

        // https://www.w3.org/TR/html-aria/#docconformance -> role names
        //const outputElements = screen.getAllByRole('listitem'); //getAll searches immediately
        const outputElements = await screen.findAllByRole('listitem'); //promieses re-evaluate
        expect(outputElements).not.toHaveLength(0);
    })
})