import React from 'react';
import Meta from '../layouts/meta';

import Header from '../components/header';
import Link from 'next/link';
import VandyAppsAnim from '../static/va-logo-home.svg';
import isSMILSupported from '../util/smil-supported.js';

export default class extends React.Component {
  constructor() {
    super();
    this.state = { mounted: false, SMIL: true };
  }

  componentDidMount() {
    this.setState({ mounted: true, SMIL: isSMILSupported() });
  }

  render() {
    const mounted = this.state.mounted;
    const SMIL = this.state.SMIL;
    return (
      <div className="container home">
        <Meta title="VandyApps" />
        <Header />
        <div className="logo-wrapper">
          <div className="logo" style={{ opacity: mounted ? 1 : 0 }}>
            {SMIL ? (
              <VandyAppsAnim />
            ) : (
              <img src="/static/va-logo-static.svg" />
            )}
          </div>
          <div className="logo-content" style={{ opacity: mounted ? 1 : 0, transform: `scale(${mounted ? 1 : 1.05})` }}>
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

          html,
          body,
          body > div:first-child,
          #__next,
          #__next > div:first-child {
            height: 100%;
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
            transition: all 1s;
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
