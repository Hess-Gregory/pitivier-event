import React from 'react';
import imageUrl from 'constants/imageUrl';

class Parralax extends React.Component {

    render() {
        const page = this.props.page;
        const cssAttribut = "." + page + "-half-area::before";
        let folderImage = String;
        folderImage = this.props.folderImage;

        const items = this.props.items;

        const styleParralax = items.map(function(item, index){
            let imageURL = imageUrl[folderImage] + item.image;
            let proprietyCss = 
            'position: absolute;'+
            'content: "";'+
            'top: 0;'+
            'left: 0;'+
            'width: 100%;'+
            'height: 100%;'+
            'z-index: -1;'+
            'width: 100%;'+
            'height: 400px;'+
            'background: url(' + imageURL + ');' +
            'background-repeat: no-repeat;' +
            'background-size: cover;'+
            'background-position: center;'+
            'background-attachment: fixed;';
            let cssConstructor =  cssAttribut + "{" + proprietyCss + "}"
              
           return   <style key={index} type="text/css">
                        {cssConstructor}
                    </style>

        })    

        return (<div>
                    {styleParralax}
                    <div className={ page + "-half-area"}></div>
                </div>
        );
      }
}

export default Parralax;