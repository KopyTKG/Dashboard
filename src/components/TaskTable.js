import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Table
  } from "reactstrap";
  

class TaskCard extends React.Component{
    render(){
        return(
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">{this.props.title}</h6>
                <p className="card-category d-inline">{this.props.subtitle}</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
{/*                                                     

                Task body 

*/}
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                        {this.props.children}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
        );
    }
}

export default TaskCard;


