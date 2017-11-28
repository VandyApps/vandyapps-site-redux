const PHOTO_WIDTH = '100px';

export default ({ photoSrc: photo, name: name, position: position }) => (
    <div className="officer-profile shadow-layer">
        <style jsx>{`
            .officer-profile {
                flex: 1 1 0;
                min-width: 150px;
                text-align: center;
                padding: 1.5em 0.5em;
                margin: 2em 1em 0;
            }

            .photo {
                height: ${PHOTO_WIDTH};
                width: ${PHOTO_WIDTH};
                border-radius: 50%;
            }

            .name {
                padding-top: 0.75em;
                font-weight: bold;
            }

            .position {
                color: #a1a1a1;
                font-size: 0.85em;
                line-height: 1.25em;
            }
        `}</style>
        <img className="photo" src={photo} />
        <div className="name">{name}</div>
        <div className="position">{position}</div>
    </div>
);
