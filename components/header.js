import React from 'react';
import Link from 'next/link'
import ActiveLink from './activelink'

export default class extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className='header'>
            <style jsx>{`
                .header {
                    margin-top: 2.5em;
                    padding: 0 4em;
                    box-sizing: border-box;
                    width: 100%;
                    font-family: 'Nunito', sans-serif;
                }

                .header > * {
                    display: inline-block;
                }

                .va-text {
                    font-weight: bold;
                    font-size: 1.5em;
                    cursor: pointer;
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
            <Link href='/'><div className='va-text'>VandyApps</div></Link>
            <div className='nav'>
                <ActiveLink className='nav-item' href='/'>Home</ActiveLink>
                <ActiveLink className='nav-item' href='/schedule'>Schedule</ActiveLink>
                <ActiveLink className='nav-item' href='/resources'>Resources</ActiveLink>
                <ActiveLink className='nav-item' href='/about'>About</ActiveLink>
                </div>
        </div>
    }
}