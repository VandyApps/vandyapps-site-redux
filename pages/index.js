import React from 'react';
import Meta from '../layouts/meta';
import apngDetect from '../util/apng-detect';
import resetGif from '../util/reset-gif';

import Header from '../components/header';
import Link from 'next/link';

let firstLoad = true;

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
    this.setState({ mounted: true, logoLoaded: false });
    const setLogoLoaded = () => this.setState({ logoLoaded: true });
    const useStaticLogo = () => this.setState({ logoSrc: '/static/vandyapps-static.png' });
    if (firstLoad) {
      firstLoad = false;
      apngDetect(apng => {
        setLogoLoaded();
        if (apng) {
          resetGif(this.imgEl);
        } else {
          useStaticLogo();
        }
        setTimeout(useStaticLogo, 1000);
      });
    } else {
      setLogoLoaded();
      useStaticLogo();
    }
  }

  render() {
    let logoSrc = this.state.logoSrc;
    let logoLoaded = this.state.logoLoaded;
    let mounted = this.state.mounted;
    return <div className='container home'>
      <Meta title="VandyApps" />
      <Header />
      <div className='logo-wrapper'>
        <img className='logo' src={logoSrc} style={{ opacity: logoLoaded ? 1 : 0 }} ref={img => this.imgEl = img} />
        <div className='logo-content' style={{ opacity: mounted ? 1 : 0 }}>
          <div className='logo-title'>We are Vanderbilt's<br />student-run CS club.</div>
          <div className='logo-buttons'>
            <Link href="/schedule"><a className='logo-btn primary'>Schedule</a></Link>
            <Link href="/about"><a className='logo-btn'>About</a></Link>
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

        html, body, body > div:first-child, #__next, #__next > div:first-child  {
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

      /* Force preload */
      .logo-wrapper::before {
        height: 0;
        width: 0;
        content: "";
        background-image: url('/static/vandyapps-static.png');
      }

      .logo, .logo-content {
        display: inline-block;
      }

      .logo {
        width: 130px;
        padding-top: 11px;
        transition: ${firstLoad ? 'opacity .15s' : 'none'};
        vertical-align: bottom;
        opacity: 0;
      }

      .logo-content {
        transition: ${firstLoad ? 'opacity 1s' : 'none'};
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
          width: 217px;
          height: 166px;
          image-rendering: -webkit-optimize-contrast;
        }

        .logo-content {
          margin-left: 3.75em;
          text-align: initial;
        }

        .logo-title {
          font-size: 2.15em;
          padding-right: 1em;
          margin: 0;
        }

        .logo-buttons {
          position: absolute;
          bottom: 0;
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

      .logo-btn.primary, .logo-btn.primary:hover, .logo-btn.primary:active {
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
  }
}
