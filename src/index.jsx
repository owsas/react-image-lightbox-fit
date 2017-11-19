import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

export default class ReactImageLightboxFit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      photoIndex: 0,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const toggled = !this.state.isModalOpen;
    this.setState({ isModalOpen: toggled });
  }

  render() {
    const { images } = this.props;
    const { photoIndex } = this.state;

    return (
      <div>

        <div
          className="img"
          role="button"
          onClick={this.toggleModal}
          onKeyPress={this.handleKeyDown}
          style={{
            height: this.props.height,
            backgroundColor: 'black',
            textAlign: 'center',
            width: '100%',
            backgroundImage: `url(${images[photoIndex]})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />

        <div style={{ padding: 10 }}>
          {images.map((img, index) => {
            const onImgClick = () => {
              this.setState({ photoIndex: index });
              this.toggleModal();
            };

            return (
              <div
                className="relatedImg"
                key={`img-${index}`}
                onClick={onImgClick}
                role="button"
                onKeyPress={this.handleKeyDown}
                style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundColor: 'black',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'inline-block',
                width: 60,
                height: 60,
                marginRight: 5,
                marginBottom: 5,
              }}
              />
            );
          })}
        </div>


        {this.state.isModalOpen && <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + (images.length - 1)) % images.length]}

          onCloseRequest={() => this.setState({ isModalOpen: false })}
          onMovePrevRequest={() => this.setState({
            photoIndex: (photoIndex + (images.length - 1)) % images.length,
          })}
          onMoveNextRequest={() => this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })}
        />}

      </div>
    );
  }
}


ReactImageLightboxFit.defaultProps = {
};


ReactImageLightboxFit.propTypes = {
  height: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
