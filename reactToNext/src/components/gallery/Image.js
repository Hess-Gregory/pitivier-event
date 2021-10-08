import React from "react";
import imageUrl from 'constants/imageUrl';
import { Col } from 'reactstrap';
import { Lightbox } from "react-modal-image";

class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			image : '',
			alt : '',
			display : 'vissible'
		};
	}
  	
	// function open picture

	handlePictureClick(id, image, alt) {
		this.setState({isOpen: true});
		this.setState({photoIndex: id});
		this.setState({image: image});
		this.setState({alt: alt});
		this.setState({display: 'none'});
	}

	
	// function close picture

	handlePictureClose() {
		this.setState({isOpen: false});
		this.setState({photoIndex: 0});
		this.setState({image: ''});
		this.setState({alt: ''});
		this.setState({display: 'vissible'});
		window.location.reload(false);
	}

  render() {

	// construction of gallerie

	const whatIsGallerieActive = this.props.returnName
	const createGallerieItem = ({ index, alt, classNames, image, name,isVissible, isGallerie }) => 
	(isGallerie ==='all')?	
		<Col key={index} className={classNames} md="6" lg="4">
			<div className="gallery-item">

			<img src={image} alt={alt} />
				<div className="gallery-img-overlay">
					<div className="gallery-content">
						<div className="info">
							<h6>{name}</h6>
						</div>
						<a  
						className="popimg" 
						onClick={this.handlePictureClick.bind(this, index, image, alt)}
						>	
							<span className="icon">
								<i className="icofont-picture" />
								
							</span>
						</a>
							{this.state.isOpen && (				
								<Lightbox
								medium={this.state.image}
								large={this.state.image}
								alt={this.state.alt}
								showRotate
								hideDownload
								onClose={this.handlePictureClose.bind(this)}
								/>
								)
							}
					</div>
				</div>
			</div>
		</Col>  
	: 
	(isVissible)?
		
		<Col key={index} className={classNames} md="6" lg="4">
			<div className="gallery-item">
			<img src={image} alt={alt} />
				<div className="gallery-img-overlay">
				<div className="gallery-content">
					<div className="info">
					<h6>{name}</h6>
					</div>
					<a  
					className="popimg" 
					onClick={this.handlePictureClick.bind(this, index, image, alt)}
					>	
						<span className="icon">
							<i className="icofont-picture" />
							
						</span>
					</a>
						{this.state.isOpen && (				
							<Lightbox
							medium={this.state.image}
							large={this.state.image}
							alt={this.state.alt}
							showRotate
							hideDownload
							onClose={this.handlePictureClose.bind(this)}
							/>
							)
						}
				</div>
				</div>
			</div>
		</Col> 
	:''


// ---------------------------------
// --Construction of picture array--
// ---------------------------------

  const cardsDefault  = 
    this.props.items.map(function(val, index){

      const gallery = 
        val.Galleries.map(function(gallerie){
            const name_gallerie = gallerie.name
            const name_lowerCase = name_gallerie.toLowerCase()
            return name_lowerCase
        })				
      const GalleryVissible = 
        val.Galleries.map(function(gallerie){
            const name_gallerie = gallerie.name
            const name_lowerCase = name_gallerie.toLowerCase()
            const vissible = (whatIsGallerieActive === name_lowerCase)? true : false
            return vissible
          })
      const classCat  = 'gallery-grid-item all ' + gallery.join(" "); 
      const imageURL  = imageUrl.Galerie + val.image;
      const vissible = GalleryVissible.includes(true);
      const name = gallery.join(" ")
  return {index : index, id : val.id, image:imageURL, alt: val.alt, filter: gallery, classNames:classCat, name: name, isVissible: vissible, isGallerie : whatIsGallerieActive };
  
})


const { photoIndex, isOpen } = this.state;

// construction of style (hide navbar if modal is open ; full size if image is large )

const mystyle = '.vegan-nav {display :'+ this.state.display +';} .gallery-grid-item .__react_modal_image__large_img{width: 100%;max-width: auto;max-height: 90%;}';


    return (<div className="gallery-container">
            <style dangerouslySetInnerHTML={{__html: mystyle }} />
              {cardsDefault.map(createGallerieItem)}
            </div>
    )
  }
}

export default Image;