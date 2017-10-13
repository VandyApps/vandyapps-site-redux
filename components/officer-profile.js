const PHOTO_WIDTH = '100px';

export default ({ photoSrc: photo, name: name, position: position }) => <div className="officer-profile">
    <style jsx>{`
        .officer-profile {
            flex: 1 1 0;
            min-width: 150px;
            text-align: center;
            box-shadow: inset 0 0 0 .5px rgba(0,0,0,0.125), 0 12.5px 30px rgba(0,0,0,0.07);
            padding: 1.5em .5em;
            margin: 2em 1em 0;
        }

        .photo {
            height: ${PHOTO_WIDTH};
            width: ${PHOTO_WIDTH};
            border-radius: 75px;
        }

        .name {
            padding-top: .75em;
            font-weight: bold;
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