import Meta from '../layouts/meta'
import Header from '../components/header'

export default () =>
    <div className='container about'>
        <style jsx>{`
            .about .content {
                 max-width: 900px;
                 line-height: 1.66em;
                 padding: 0 4em;
            }            

            h1 {
                font-weight: normal;
            }
        `}</style>
        <Meta />
        <Header />
        <div className="content">
            <h1>About Us</h1>
            <p>In 2009 as the Vanderbilt Mobile Applications Team, VMAT began as a group highly committed to developing quality, practical
        applications in a timely manner. The open source and interconnected nature of our development process allows an advancement
        in one application to produce positive effects in many others.</p>
            <p>VandyApps' mission has evolved as the Computer Science department has grown at Vanderbilt. Our mission is to teach software
        engineering skills, prepare students for technical job interviews, and foster a welcoming and diverse environment
        for collaboration. Through various multi-week sessions, we teach our members what they want to learn. We have led
        iOS, Android, Linux Command Line, and Advanced Programming sessions. In addition, we bring in speakers from within
        the Vanderbilt community and also the greater Nashville community to give Tech Talks on special topics in Software
        Development. Our members go on to work at some of the best companies in the technology industry.</p>
        </div>
    </div>