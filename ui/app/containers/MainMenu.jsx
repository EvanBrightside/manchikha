import React from 'react';
import { Link } from 'react-router';
import Icon from 'react-fa';
import './MainMenu.css';
import '../images/logo.png';

export default class MainMenu extends React.Component {
    render() {
        const pathName = this.props.location.pathname;
        const newsClass = (pathName === '/' || pathName.match(/^\/news/)) ? ' active' : '';
        const productsClass = pathName.match(/^\/products/) ? ' active' : '';

        return (
            <div className='page'>
                <section className='section-left'>
                    <header className='logo'>
                        <h1 className='logo-header'><Link to='/' className='logo-header-link'>Manchikha</Link></h1>
                        <div className='logo-div'>
                            <Link to='/' title='Manchikha'><img className='logo-div-img' src='images/logo.png' alt='Manchikha!' /></Link>
                        </div>
                        <div className='moto'>Dark woods</div>
                        <div className='location'>Zhiguli region</div>
                    </header>
                    <aside>
                        <ul className='social'>
                            <li><a href='https://www.facebook.com/Manchikha' target='_blank' title='Facebook!' className='social-a'><Icon name='facebook' size='2x'/></a></li>
                            <li><a href='https://vk.com/manchikha' target='_blank' title='VK!' className='social-a'><Icon name='vk' size='2x'/></a></li>
                            <li><a href='https://instagram.com/manchikha' target='_blank' title='Instagram!' className='social-a'><Icon name='instagram' size='2x'/></a></li>
                        </ul>
                    </aside>
                </section>
                <section className='section-right'>
                    <header className='section-right-header'>
                        <nav>
                            <ul className='nav'>
                                <li className='nav-li'><Link to='/news' className={'nav-a nav-a-first' + newsClass}>Новости</Link></li>
                                <li className='nav-li'><Link to='/products' className={'nav-a' + productsClass}>Вещи</Link></li>
                                <li className='nav-li'><Link to='/about' className='nav-a' activeClassName='active'>О нас</Link></li>
                            </ul> 
                        </nav>
                    </header>
                    <section className='container'>
                        <div className='content'>
                            {this.props.children}
                        </div>
                    </section>
                    <footer>
                        <div className='contact'>
                            <p className='contact-p'>Наш телефон 8-987-654-321-0</p>
                            <p className='contact-p'>Адрес: г. Самара, ... </p>
                        </div>
                    </footer>
                </section> 
            </div>
        );
    }
}
