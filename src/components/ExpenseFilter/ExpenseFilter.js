import './ExpenseFilter.css'

import Card from '../UI/Card'

const ExpenseFilter = (props) =>{

    const yearChangeHandler = ({target:{value}}) =>{
        const filters = {
            year: value
        }
        props.onFilterChange(filters);
    }

    return (
        <Card className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </Card>
    )
}

export default ExpenseFilter;