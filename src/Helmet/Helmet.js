import React from 'react';
import Helmet from 'react-helmet';

const Helmeted = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title} -Walton Customer Service Point</title>
            </Helmet>
        </div>
    );
};

export default Helmeted;