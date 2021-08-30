import React, { useState } from "react"
import { Calendar as C, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 
{
    Row,
    Col,
    CardHeader,
    CardBody,
    Card
}
from "reactstrap";

import "../assets/css/styles.scss"
import Cookies from "js-cookie";


const Calendar = () => {
    const localizer = momentLocalizer(moment);

    const [list, setList] = useState(null);

    function OnLoad() { 
        fetch('http://10.25.0.5:5454/getCalendar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': Cookies.get("token")}
        })
        .then(res => res.json())
        .then(res => {
            if(res[0].error != 404)
                setList(res)
            else {
                Cookies.remove("token");
                window.location.href = "/";
            } 
        })
      };

    const TimeElapsed = Date.now();
    const Today = new Date(TimeElapsed);
    const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
        backgroundColor: 'transparent',
        },
    })
        return(
        
            list == null?  
            <>
                {OnLoad()}
                Loading
            </>
            :
            <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card>
                             <CardHeader>
                                 <label>
                                     Task list
                                 </label>
                             </CardHeader>
                             <CardBody style={{height: 810}}>
                                <C
                                events={list}
                                step={60}
                                showMultiDayTimes
                                defaultDate={Today}
                                components={{
                                    timeSlotWrapper: ColoredDateCellWrapper,
                                }}
                                localizer={localizer}
                                />
                             </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Calendar;