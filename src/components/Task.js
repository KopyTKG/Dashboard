import { PencilIcon } from '@heroicons/react/outline';
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
        const date = new Date();
        let Today = date.getDate() + "." +date.getMonth() +"." + date.getFullYear();
        Today = Today.toString();
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
                            <span className="form-check-sign" />
                        </Label>
                    </FormGroup>
                </td>
                <td>
                    <p className="title">{this.props.title}</p>
                    <p className="text-muted">
                        {this.props.description}
                    </p>
                </td>
                <td>
                    <p className={"text-neutral"}>
                        {this.props.date}
                    </p>
                </td>
                <td className="td-actions text-right">
                    <Button
                        color="link"
                        id="tooltip636901683"
                        title=""
                        type="button"
                    >
                        <PencilIcon style={{width: 25}} />
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