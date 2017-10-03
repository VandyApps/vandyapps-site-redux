import React from 'react';
import { withRouter } from 'next/router'
import Link from 'next/link'
import ActiveLink from './activelink'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.router = this.props.router;
        this.state = {
            menuOpen: false
        };
    }

    render() {
        const menuOpen = this.state.menuOpen;
        const className = 'header ' +
            (this.router.pathname === '/' ? 'landing ' : '') +
            (menuOpen ? 'menu-open' : '');
        const toggleMenuOpen = () => this.setState({ menuOpen: !menuOpen });

        return <div className={className}>
            <style jsx global>{`
                .header {
                    padding: 1.5em 2.5em 1.5em;
                    box-sizing: border-box;
                    width: 100%;
                    font-family: 'Nunito', sans-serif;
                    position: fixed;
                    background: #fff;
                    z-index: 9999;
                    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
                    top: 0;
                }

                .header > * {
                    display: inline-block;
                }

                .header .va-logo {
                    height: 2em;
                    display: inline-block;
                    margin-right: .75em;
                    vertical-align: bottom;
                }

                .header.landing .va-logo {
                    display: none;
                }

                .header .va-text {
                    font-weight: bold;
                    font-size: 1.5em;
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: top;
                }

                .header .nav {
                    display: block;
                    width: 100%;
                    padding: 1em 0 .75em;
                    text-align: center;
                    display: none;
                }

                .header .nav a {
                    display: block;
                    width: 100%;
                    font-size: 1.25em;
                    padding: 0.25em 0;
                }

                .header .menu-toggle {
                    float: right;
                    cursor: pointer;
                }

                .header .menu {
                    height: .7em;
                    margin: 0.75em 0 0.5em;
                    transition: transform 0.15s;
                    transform: rotate(0deg);
                }

                .header.menu-open .menu {
                    transform: rotate(180deg);
                }

                .header.menu-open .nav {
                    display: block;
                }

                @media (min-width: 640px) {
                    .header {
                        margin: 2.5em 0 0;
                        padding: 0 4em;
                        position: static;
                        background: transparent;
                        box-shadow: none;
                    }

                    .header.landing {
                        padding-bottom: 0;
                    }

                    .header .menu-toggle {
                        display: none;
                    }

                    .header .nav {
                        display: inline;
                        float: right;
                        width: auto;
                        padding: 0;
                        text-align: initial;
                    }

                    .header .nav a {
                        display: inline;
                        width: auto;
                        font-size: .85em;
                        padding: 0;
                    }

                    .header .nav-item:last-child {
                        margin-right: 0;
                    }
                }
            `}
            </style>
            <Link href='/'>
                <div className='va-logo-wrapper'>
                    <img className='va-logo' src='/static/vandyapps.svg' />
                    <div className='va-text'>VandyApps</div>
                </div>
            </Link>
            <div className='menu-toggle' onClick={toggleMenuOpen}>
                <img className='menu' src='/static/menu-dropdown.svg' />
            </div>
            <div className='nav'>
                <ActiveLink className='nav-item' href='/'>Home</ActiveLink>
                <ActiveLink className='nav-item' href='/schedule'>Schedule</ActiveLink>
                <ActiveLink className='nav-item' href='/resources'>Resources</ActiveLink>
                <ActiveLink className='nav-item' href='/about'>About</ActiveLink>
            </div>
        </div>
    }
}

export default withRouter(Header)