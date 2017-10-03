import React from 'react';
import Meta from '../layouts/meta';
import apngDetect from '../util/apng-detect';
import resetGif from '../util/reset-gif';

import Header from '../components/header';
import Link from 'next/link';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      logoSrc: '/static/vandyapps-anim.png',
      logoLoaded: false,
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
    apngDetect(apng => {
      this.setState({ logoLoaded: true });
      if (apng) {
        resetGif(this.imgEl);
      } else {
        this.setState({ logoSrc: '/static/vandyapps-static.png' });
      }
    });
  }

  render() {
    let logoSrc = this.state.logoSrc;
    let logoLoaded = this.state.logoLoaded;
    let mounted = this.state.mounted;
    return <div className='container home'>
      <Meta />
      <Header />
      <div className='logo-wrapper'>
        <img className='logo' src={logoSrc} style={{ opacity: logoLoaded ? 1 : 0 }} ref={img => this.imgEl = img} />
        <div className='logo-content' style={{ opacity: mounted ? 1 : 0 }}>
          <div className='logo-title'>We are Vanderbilt's<br />student-run CS club.</div>
          <div className='logo-buttons'>
            <div className='logo-btn primary'>See events</div>
            <Link href="/about"><a className='logo-btn'>About</a></Link>
          </div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background-image: url('/static/va-bg.jpg');
          background-size: cover;
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
      }

      .logo, .logo-content {
        display: inline-block;
      }

      .logo {
        width: 217px;
        height: 162px;
        padding-top: 11px;
        transition: opacity .15s;
        vertical-align: bottom;
      }

      .logo-content {
        margin-left: 4em;
        transition: opacity 1s;
        position: relative;
      }

      .logo-title {
        font-size: 2.15em;
        color: #5d5b66;
        padding-right: 1em;
      }

      .logo-subtitle {
        font-size: 26px;
        color: #888;
      }

      .logo-buttons {
        position: absolute;
        bottom: 0;
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
        background-color: rgba(255, 255, 255, 0.8);
      }

      .logo-btn.primary {
        color: #fff;
        background-color: #f05854;
      }

      .logo-btn:first-child {
        margin-right: 1em;
      }
    `}</style>
    <style jsx global>{`
    .container {
      display: flex;
      flex-direction: column;
    }
    `}</style>
    </div>
  }
}
