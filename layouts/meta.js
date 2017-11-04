import Head from 'next/head'

export default ({ title: title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/static/favicon.png" rel="icon" type="image/png" />
            <meta content="VandyApps is dedicated to teaching software development, preparing our members for internships and jobs, and building apps on the web, mobile platforms, and more." name="description" />
            <meta name="theme-color" content="#000000" />
        </Head>
        <style jsx global>{`
            html { 
                font-size: 16px;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
                box-sizing: border-box; 
            }

            html, body, body > div:first-child, #__next, #__next > div:first-child  {
                margin: 0;
            }

            a {
                text-decoration: none;
                color: #5c91d6;
            }

            a:hover {
                text-decoration: underline;
            }

            .container {
                font-family: 'Nunito', sans-serif;
                height: inherit;
            }

            .container.content-page .content {
                 max-width: 900px;
                 line-height: 1.66em;
                 padding: 0 2.5em;
            }

            @media (min-width: 680px) {
                .container.content-page .content {
                    padding: 0 4em;
                }
            }

            .content {
                margin: 7em auto 4em;
            }

            .content h1, .content h2, .content h3, .content h4 , .content h5 {
                    font-weight: normal;
                    margin-top: 1.25em;
            }

            @media (min-width: 680px) {
                .content {
                    margin-top: 4em;
                }
            }

            .shadow-layer {
                border-radius: 4px;
                box-shadow: 0 1px 4px rgba(0,0,0,0.05), 0 12.5px 40px rgba(0,0,0,0.07);
                background: #fff;
            }
        `}</style>
    </div>)