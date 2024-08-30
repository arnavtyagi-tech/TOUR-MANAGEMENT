// import React from 'react'


// const Contact = () => {
//     return (
//         <>
//             <div>Contact</div>
//             <div class="visme_d" data-title="Contact_Form" data-url="8r1ddn0v-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="90015"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>

//         </>
//     )
// }

// export default Contact

import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        // Dynamically create and append the script tag to the document head
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script tag on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* <div>Contact</div> */}
            <div
                className="visme_d"
                data-title="Contact_Form"
                data-url="8r1ddn0v-contact-form"
                data-domain="forms"
                data-full-page="false"
                data-min-height="500px"
                data-form-id="90015"
            ></div>
        </div>
    );
};

export default Contact;
