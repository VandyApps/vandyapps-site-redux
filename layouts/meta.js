import Head from 'next/head'

export default () => (
    <div>
        <Head>
            <title>VandyApps</title>
            <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                height: 100%;
                margin: 0;
            }

            .container {
                font-family: 'Nunito', sans-serif;
                height: inherit;
            }

            .content {
                margin: 8em auto 4em;
            }

            @media (min-width: 640px) {
                .content {
                    margin-top: 4em;
                }
            }
        `}</style>
    </div>)