import { PencilIcon } from '@heroicons/react/outline';
import React from 'react';
import {
    Button,
    Label,
    FormGroup,
    Input,
    UncontrolledTooltip,
  } from "reactstrap";
  

const Task = (props) => {
        return(
            <tr>
                <td>
                    <FormGroup check>
                        <Label check>
                            <Input
                            defaultChecked={props.defaultChecked}
                            defaultValue={props.defaultValue}
                            type="checkbox"
                            onClick={props.onCheck}
                            />
                            <span className="form-check-sign" />
                        </Label>
                    </FormGroup>
                </td>
                <td>
                    <p className="title">{props.title}</p>
                    <p className="text-muted">
                        {props.description}
                    </p>
                </td>
                <td>
                    <p className={"text-neutral"}>
                        {props.date}
                    </p>
                </td>
                <td className="td-actions text-right">
                    <Button
                        color="link"
                        id="tooltip636901683"
                        title=""
                        type="button"
                        onClick={props.onEdit}
                    >
                        <PencilIcon style={{width: 25, color: "rgb(115,115,115)"}} />
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


export default Task;