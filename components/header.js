import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import ActiveLink from './activelink'
import classNames from 'classnames'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.router = this.props.router;
        this.state = {
            menuOpen: false,
            scrolledDown: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrolledDown = (window.pageYOffset || document.documentElement.scrollTop) > 0;
        if (scrolledDown !== this.state.scrolledDown) {
            this.setState({ scrolledDown });
        }
    }

    render() {
        const menuOpen = this.state.menuOpen;
        const scrolledDown = this.state.scrolledDown;
        const className = classNames({
            header: true,
            scrolled: scrolledDown,
            landing: this.router.pathname === '/',
            'menu-open': menuOpen
        });
        const toggleMenuOpen = () => this.setState({ menuOpen: !menuOpen });

        return <div className={className}>
            <style jsx global>{`
                .header {
                    padding: 1.5em 2.5em 1.5em;
                    box-sizing: border-box;
                    width: 100%;
                    font-family: 'Nunito', sans-serif;
                    position: fixed;
                    z-index: 9999;
                    top: 0;
                }

                .header.landing, .header.landing.scrolled {
                    background: none;
                    box-shadow: none;
                }

                .header.scrolled, .header.menu-open, .header.landing.menu-open {
                    background: #fff;
                    box-shadow: 0 0 0 .5px rgba(0,0,0,0.075), 0px 0px 20px rgba(0,0,0,0.15);
                }

                .header > * {
                    display: inline-block;
                }

                .header .va-logo-wrapper {
                    cursor: pointer;
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
                    display: inline-block;
                    vertical-align: top;
                }

                .header .nav {
                    display: block;
                    width: 100%;
                    padding: 1.5em 0 .75em;
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
                    -webkit-tap-highlight-color: transparent;
                }

                .header .menu {
                    height: .7em;
                    margin: 0.6em 0 0.4em;
                    transition: transform 0.15s;
                    transform: rotate(0deg);
                }

                .header.menu-open .menu {
                    transform: rotate(180deg);
                }

                .header.menu-open .nav {
                    display: block;
                }

                @media (min-width: 680px) {
                    .header, .header.scrolled, .header.menu-open, .header.landing.menu-open {
                        padding: 2.5em 4em 0;
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