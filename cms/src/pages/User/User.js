import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { loadTableActions } from 'stores';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import Detail from './Detail';
import { DefaultTable } from 'components';
import { dateToString } from 'helpers';

const columns = [
  {
   name: 'No',
   selector: 'index',
   sortable: true,
   width: '100px'
  },
  {
    name: 'Utilisateur',
    selector: 'username',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true
  },
  {
    name: 'Date de création',
    selector: 'created_at',
    sortable: true,
    format: row => dateToString(row.createdAt)
  },
]


const API_URL = process.env.REACT_APP_API_URL;
let now     = new Date(),
  token     = localStorage.getItem("token"),
  jsonToken = JSON.parse(token);
  now.setHours(now.getHours())
  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
          // 'x-access-token': jsonToken.accessToken
          }
  };
  if(token && jsonToken['status'] === true && new Date(jsonToken['expire']) > now){
 fetch(API_URL+'/user', requestOptions ).then();
}


class User extends React.Component {

  componentDidMount() {
    this.props.getAll('/user')
  }

  render(){
    
    const { data, theme } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className={ 'card-' + theme }>
              <CardHeader>
                <h5>
                <i className="fa fa-user"></i> Utilisateur(s)
                </h5>
              </CardHeader>
              <CardBody>
                <DefaultTable
                  columns={ columns }
                  actionButton={ true }
                  data={ data }
                  loading={ data.loading }
                  context="Utilisateur"
                  filteredColumns={["username", "email", "role"]}
                  actionContent={["add", "delete", "detail", "edit"]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Add />
        <Detail />
        <Delete />
        <Edit />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.loadTable,
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  getAll: loadTableActions.getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
