import { Helmet } from "react-helmet";

import React from "react";
//import { useLocation } from "react-router";

function CustomHelmet({ title, description, metaOG = [], metaTwitter = [] }) {
    //let location = useLocation().pathname.substring(1);
    //location = location === "" ? "home" : location;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {metaOG.map((element, index) => (
                <meta
                    property={element.property}
                    content={element.content}
                    key={index}
                />
            ))}
            {metaTwitter.map((element, index) => (
                <meta
                    name={element.name}
                    content={element.content}
                    key={index}
                />
            ))}
            <meta
                name="keywords"
                content="games, card, cards, play online, multi games, online games"
            />
        </Helmet>
    );
}

export default CustomHelmet;
