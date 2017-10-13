import Meta from '../layouts/meta'
import Header from '../components/header'
import OfficerProfile from '../components/officer-profile'

export default () =>
    <div className='container content-page about'>
    <Meta title="About | VandyApps" />
    <Header />
        <style jsx>{`
            .officers {
                margin-top: -1em;
                display: flex;
                flex-wrap: wrap;
                align-items: stretch;
                margin: -1.5em -1em 0;
            }

            .dummy-item {
                flex: 1 1 0;
                min-width: 150px;
                margin: 0 1.5em;
            }
        `}</style>
        <div className="content">
            <h1>About Us</h1>
            <p>Founded in 2009 as the Vanderbilt Mobile Applications Team, VandyApps started as a group highly committed to developing quality, practical
        applications in a timely manner. The open source and interconnected nature of our development process allows an advancement
        in one application to produce positive effects in many others.</p>
            <p>VandyApps' mission has evolved as the Computer Science department has grown at Vanderbilt. Our mission is to teach software
        engineering skills, prepare students for technical job interviews, and foster a welcoming and diverse environment
        for collaboration. Through various multi-week sessions, we teach our members what they want to learn. We have led
        iOS, Android, Linux Command Line, and Advanced Programming sessions. In addition, we bring in speakers from within
        the Vanderbilt community and also the greater Nashville community to give Tech Talks on special topics in Software
        Development. Our members go on to work at some of the best companies in the technology industry.</p>
            <h1>Officers</h1>
            <div className="officers">
                <OfficerProfile photoSrc="/static/officers/varun-arora.jpg" name="Varun Arora" position="Co-President" />
                <OfficerProfile photoSrc="/static/officers/patrick-pei.jpg" name="Patrick Pei" position="Co-President" />
                <OfficerProfile photoSrc="/static/officers/john-valin.jpg" name="John Valin" position="Vice President" />
                <OfficerProfile photoSrc="/static/officers/yunyu-lin.jpg" name="Yunyu Lin" position="Treasurer" />
                <OfficerProfile photoSrc="/static/officers/sachit-bhat.jpg" name="Sachit Bhat" position="Secretary" />
                <OfficerProfile photoSrc="/static/officers/omayow-adebanjo.jpg" name="Omayow Adebanjo" position="Liaison" />
                <div className="dummy-item"/>
                <div className="dummy-item"/>
                <div className="dummy-item"/>
                <div className="dummy-item"/>
            </div>
        </div>
    </div>