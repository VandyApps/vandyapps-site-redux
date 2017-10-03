import { withRouter } from 'next/router'
import React from 'react';
import Link from 'next/link'
import ActiveLink from './activelink'

const Header = ({ router }) => {
    const className = 'header ' + (router.pathname === '/' ? 'landing' : '');

    return <div className={className}>
        <style jsx global>{`
                .header {
                    margin: 2.5em 0 0;
                    padding: 0 4em;
                    box-sizing: border-box;
                    width: 100%;
                    font-family: 'Nunito', sans-serif;
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
                }

                .header .nav a {
                    display: block;
                    width: 100%;
                }

                @media (min-width: 768px) {
                    .header .nav {
                        display: inline;
                        float: right;
                        width: auto;
                    }

                    .header .nav a {
                        display: inline;
                        width: auto;
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
        <div className='nav'>
            <ActiveLink className='nav-item' href='/'>Home</ActiveLink>
            <ActiveLink className='nav-item' href='/schedule'>Schedule</ActiveLink>
            <ActiveLink className='nav-item' href='/resources'>Resources</ActiveLink>
            <ActiveLink className='nav-item' href='/about'>About</ActiveLink>
        </div>
    </div>
}

export default withRouter(Header)