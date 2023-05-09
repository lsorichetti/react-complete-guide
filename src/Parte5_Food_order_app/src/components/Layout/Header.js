
import { Fragment } from 'react';
import mealsImage from '../../../public/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props =>{

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!"></img>
            </div>
        </Fragment>
    )
}

export default Header;