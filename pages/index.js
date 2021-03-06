import React from 'react';
import Meta from '../layouts/meta';

import Header from '../components/header';
import Link from 'next/link';
import LogoSMIL from '../components/logo-smil';
import LogoAnime from '../components/logo-anime';

import isSMILSupported from '../resources/smil-supported';
import runOnLoad from '../resources/run-on-load';

export default class extends React.Component {
    state = { loaded: false };

    componentDidMount() {
        this.setState({ smil: isSMILSupported() });
        runOnLoad(() => this.setState({ loaded: true }));
    }

    render() {
        const { loaded, smil } = this.state;
        return (
            <div className="container home">
                <Meta title="VandyApps" />
                <Header />
                <div className="logo-wrapper">
                    <div className="logo">
                        {loaded && (smil ? <LogoSMIL /> : <LogoAnime />)}
                    </div>
                    <div
                        className="logo-content"
                        style={{
                            opacity: loaded ? 1 : 0,
                            transform: `scale(${loaded ? 1 : 1.05})`
                        }}
                    >
                        <div className="logo-title">
                            We are Vanderbilt's<br />student-run CS club.
                        </div>
                        <div className="logo-buttons">
                            <Link href="/schedule">
                                <a className="logo-btn primary">Schedule</a>
                            </Link>
                            <Link href="/about">
                                <a className="logo-btn">About</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <style jsx global>{`
                    body {
                        background-image: url('/static/va-bg.jpg');
                        background-size: cover;
                    }

                    .container {
                        display: flex;
                        flex-direction: column;
                    }
                `}</style>
                <style jsx>{`
                    .home {
                        align-items: flex-start;
                    }

                    .logo-wrapper {
                        margin: auto auto;
                        padding-bottom: 2.5em;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .logo,
                    .logo-content {
                        display: inline-block;
                    }

                    .logo {
                        width: 130px;
                        transition: opacity 0.15s;
                        box-sizing: border-box;
                    }

                    .logo-content {
                        transition: opacity 1s, transform 0.75s;
                        position: relative;
                        text-align: center;
                    }

                    .logo-title {
                        color: #5d5b66;
                        font-size: 1.75em;
                        margin: 1em 0;
                    }

                    .logo-subtitle {
                        font-size: 26px;
                        color: #888;
                    }

                    @media (min-width: 680px) {
                        .logo-wrapper {
                            text-align: initial;
                            flex-direction: row;
                            align-items: initial;
                        }

                        .logo {
                            width: 232px;
                            height: 166px;
                        }

                        .logo-content {
                            margin-left: 3.75em;
                            text-align: initial;
                        }

                        .logo-title {
                            font-size: 2.15em;
                            padding-right: 1em;
                            margin: 0;
                            margin-top: -10px;
                        }

                        .logo-buttons {
                            position: absolute;
                            bottom: 1px;
                        }
                    }

                    .logo-btn {
                        display: inline-block;
                        padding: 1em 1.75em;
                        border-radius: 2em;
                        font-weight: bold;
                        font-size: 14px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        text-decoration: none;
                        border: 1px solid #f05854;
                        color: #f05854;
                        background-color: rgba(255, 255, 255, 0.6);
                        transition: all 0.25s;
                        -webkit-tap-highlight-color: transparent;
                    }

                    .logo-btn.primary {
                        background-color: #f05854;
                    }

                    .logo-btn.primary,
                    .logo-btn.primary:hover,
                    .logo-btn.primary:active {
                        color: #fff;
                    }

                    .logo-btn:hover {
                        border: 1px solid #f47671;
                        color: #f47671;
                    }

                    .logo-btn.primary:hover {
                        background-color: #f47671;
                    }

                    .logo-btn:active {
                        border: 1px solid #e3403b;
                        color: #e3403b;
                    }

                    .logo-btn.primary:active {
                        background-color: #e3403b;
                    }

                    .logo-btn:first-child {
                        margin-right: 1em;
                    }
                `}</style>
            </div>
        );
    }
}
