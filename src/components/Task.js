import React from 'react';
import {
    Button,
    Label,
    FormGroup,
    Input,
    UncontrolledTooltip,
  } from "reactstrap";
  

class Task extends React.Component{
    render(){
        return(
            <tr>
                <td>
                    <FormGroup check>
                        <Label check>
                            <Input
                            defaultChecked={this.props.defaultChecked}
                            defaultValue={this.props.defaultValue}
                            type="checkbox"
                            />
                            <span className="form-check-sign">
                            <span className="check" />
                            </span>
                        </Label>
                    </FormGroup>
                </td>
                <td>
                    <p className="title">{this.props.title}</p>
                    <p className="text-muted">
                        {this.props.description}
                    </p>
                </td>
                <td className="td-actions text-right">
                    <Button
                        color="link"
                        id="tooltip636901683"
                        title=""
                        type="button"
                    >
                        <i className="tim-icons icon-pencil" />
                    </Button>
                    <UncontrolledTooltip
                        delay={0}
                        target="tooltip636901683"
                        placement="right"
                    >
                        Edit Task
                    </UncontrolledTooltip>
                </td>
            </tr>
        );
    }
}

export default Task;