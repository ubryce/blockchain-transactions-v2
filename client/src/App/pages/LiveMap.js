import React from 'react'
import Iframe from 'react-iframe'

export default function LiveMap() {
    
    return (
        <div>
            <iframe src="https://whale-alert.io/transaction-map-embed.shtml" height="100%" width="100%" style="border:0px #ffffff none;" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" allowfullscreen></iframe>
        </div>
    )
}
