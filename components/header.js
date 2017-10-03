import { withRouter } from 'next/router'
import React from 'react';
import Link from 'next/link'
import ActiveLink from './activelink'

const Header = ({ router }) => {
    const className = 'header ' + (router.pathname === '/' ? 'landing' : '');

    return <div className={className}>
        <style jsx>{`
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

                .va-logo-wrapper {
                }

                .va-logo {
                    height: 2em;
                    display: inline;
                    margin-right: .75em;
                }

                .header.landing .va-logo {
                    display: none;
                }

                .va-text {
                    font-weight: bold;
                    font-size: 1.5em;
                    cursor: pointer;
                    display: inline;
                    vertical-align: top;
                }

                .nav {
                    float: right;
                }

                .nav-item {
                    margin-right: 2em;
                }

                .nav-item:last-child {
                    margin-right: 0;
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