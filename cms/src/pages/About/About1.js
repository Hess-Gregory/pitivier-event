import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loadTableActions, submitFormActions } from 'stores';
import { DefaultInput, DefaultSubmit, FileInput, TextEditor } from 'components';
import { toastr } from 'react-redux-toastr';
import { imageUrl } from 'helpers';

const About = (props) => {
  const { data, theme, getAll } = props;
  React.useLayoutEffect(() => { getAll('/about') }, [getAll]);

  let image = FileInput({
    default: data && imageUrl.about + data[0].image,
    maxSize: "2MB",
    accepted: ['image/png', 'image/jpeg', 'image/jpg'],
    minWidth: "500",
    maxWidth: "2000",
    minHeight: "500",
    maxHeight: "2000",
  });

  const title = DefaultInput({
    default: data ? data[0].title : '',
    type: "text",
    required: false,
    name:"title",
    placeholder:"Title",
    autoComplete:"title",
    errorMessage: "Invalid Title",
  });

  const desc = TextEditor({
    default: data ? data[0].desc : '',
  });

  const handleSubmit = (event) => {
    let errContext = '';
    const pondError = 8;

    if ( (image.upload && image.value === undefined) || (image.pond && image.pond.status === pondError) ) {
      errContext = 'Image'
    }else if (title.value === '') {
      errContext = 'Title'
    } else if (desc.value === '' || desc.value === '<p><br></p>') {
      errContext = 'Description'
    }

    if (errContext !== '') {
      toastr.error('', errContext+' is required')
      return;
    }

    let id = data ? data[0].id : '';
    const body = new FormData()
      image.value !== undefined && body.append('image', image.value[0]) // first image only
      body.append('title', title.value)
      body.append('desc', desc.value)

    Promise.resolve( props.update(`/about/${id}`, body, true /* third param for status form data */) )
      .then(save => save.status && props.getAll('/about'))
      .catch(err => console.log(err))
  }
    return (
      data ?
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
              <CardHeader>
                <h5>
                <i className="fa fa-info"></i> About
                </h5>
              </CardHeader>
              <CardBody>
              <AvForm id="addCarousel" method="post" onValidSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Image</Label>
                  <div className="controls">
                      { image.input }
                    <small className="help-block form-text text-muted">allowed type: jpg, jpeg, png; max: 2mb; dimension: min 500px max 2000px</small>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label>Title</Label>
                  <div className="controls">
                      { title.input }
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  <div className="controls">
                      { desc.input }
                  </div>
                </FormGroup>
                <br />
                <DefaultSubmit submitText="Submit" />
              </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      :
      <div>
        <center><Spinner color="primary" style={{ width: '3rem', height: '3rem' }}  /></center>
      </div>
    );
  }

const mapStateToProps = state => {
  return {
    data: state.loadTable.data,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll: loadTableActions.getAll,
  update: submitFormActions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
