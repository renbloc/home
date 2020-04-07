import React from 'react'
import CookieConsent from "react-cookie-consent";

export default function test() {
    return (
        <div>
            <CookieConsent
                debug={true}
            >
                This website uses cookies to enhance the user experience.
</CookieConsent>
        </div>
    )
}
