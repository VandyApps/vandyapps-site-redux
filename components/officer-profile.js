const PHOTO_WIDTH = '100px';

export default ({photoSrc: photo, name: name, position: position}) => <div className="officer-profile">
    <style jsx>{`
        .officer-profile {
            width: 150px;
            text-align: center;
            margin: 1.5em -15px 0;
        }

        .photo {
            height: ${PHOTO_WIDTH};
            width: ${PHOTO_WIDTH};
            border-radius: 75px;
        }

        .name {
            padding-top: .75em;
            font-weight: bold;
            font-size: .9em;
        }

        .position {
            color: #a1a1a1;
            font-size: .85em;
            line-height: 1.25em;
        }
    `}</style>
    <img className="photo" src={photo}></img>
    <div className="name">{name}</div>
    <div className="position">{position}</div>
</div>