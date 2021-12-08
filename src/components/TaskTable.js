import { CollectionIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline';
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
  

const SVGwidth = 25;
const spanStyle = {stroke: "black", color: "black"};

class TaskCard extends React.Component{
    render(){
        return(
            <Card className="" style={{overflowY: "hidden"}} className="rbc-body card-tasks" >
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
                      <span
                       style= {spanStyle}
                      >
                        <PlusIcon style={{width: SVGwidth}}/> &nbsp;Add task
                      </span>
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span
                       style= {spanStyle}
                      >
                        <TrashIcon  style={{width: SVGwidth}}/> &nbsp;Remove task
                      </span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={this.props.onShowAll}
                    >
                      <span
                       style= {spanStyle}
                      >
                        <CollectionIcon  style={{width: SVGwidth}}/> &nbsp;Show all tasks
                      </span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
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


