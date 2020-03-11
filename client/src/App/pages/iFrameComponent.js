import React from 'react';

const Iframe = ({ src, height, width, style, scrolling, frameborder, marginheight, marginwidth}) => {
       
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe src={src} height={height} width={width} style={style} scrolling={scrolling} frameborder={frameborder} marginheight={marginheight} marginwidth={marginwidth}/>
            </div>
        </div>
    );
};

export default Iframe;