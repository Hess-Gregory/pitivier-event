import React, { useState, useEffect } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import ReactTooltip from 'react-tooltip';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateSize, FilePondPluginFileValidateType, FilePondPluginImageValidateSize);

const FileInput = (props) => {
  const [file, setFile] = useState();
  const [pond, setPond] = useState();
  const [upload, setUpload] = useState(true);

  useEffect(() => {
    
    if(props.default){ // if in edit mode make image empty and upload status FALSE
      setUpload(false)
    }
  }, [props.default]);
  
  const uploadActive = () => {
    setUpload(true)
    setFile()
  }

  const input = 
    <div>
        { upload === false ? 
          <div className="overlay-container">
            <img src={ props.default } alt="Avatar" className="overlay-image" />
            <div className="overlay-icon-container">
              <div className="overlay-icon" data-tip="Change Image" onClick={ uploadActive }>
                <i className="fa fa-picture-o"></i>
              </div>
              <ReactTooltip />
            </div>
          </div>
        :
          <FilePond 
            required={true}
            files={file}
            maxFileSize={props.maxSize}
            acceptedFileTypes={props.accepted}
            imageValidateSizeMinWidth={props.minWidth}
            imageValidateSizeMaxWidth={props.maxWidth}
            imageValidateSizeMinHeight={props.minHeight}
            imageValidateSizeMaxHeight={props.maxHeight}
            onupdatefiles={fileItems => {
                setPond(fileItems[0]);
                // Set currently active file objects to this.state
                setFile(fileItems.map(fileItem => fileItem.file));
            }}>
          </FilePond>
        }
    </div>;

  return { value: file, setValue: setFile,input: input, pond: pond, upload: upload };
  
}

export default FileInput;