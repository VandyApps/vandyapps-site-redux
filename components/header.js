import React from 'react';

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
                }

                .header > * {
                    display: inline-block;
                }

                .va-text {
                    font-weight: bold;
                    font-size: 1.5em;
                }

                .nav {
                    float: right;
                }

                .nav-item {
                    line-height: 2em;
                    display: inline-block;
                    margin-right: 2em;
                    text-transform: uppercase;
                    color: #5d5b66;
                }

                .nav-item:last-child {
                    margin-right: 0;
                }
            `}
            </style>
            <div className='va-text'>VandyApps</div>
            <div className='nav'>
                <div className='nav-item'>Home</div>
                <div className='nav-item'>Schedule</div>
                <div className='nav-item'>Resources</div>
                <div className='nav-item'>About</div>
            </div>
        </div>
    }
}