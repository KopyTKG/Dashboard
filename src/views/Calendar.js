import React, { useState } from "react"
import { Calendar as C, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 
{
    Row,
    Col,
    CardHeader,
    CardBody,
    Card,
    NavbarText
}
from "reactstrap";

import "../assets/css/styles.scss"
import Cookies from "js-cookie";


const Calendar = () => {
    const localizer = momentLocalizer(moment);

    const [list, setList] = useState(null);

    function OnLoad() { 
        fetch(
            process.env.REACT_APP_API_TYPE+
            process.env.REACT_APP_API_IP+':'+
            process.env.REACT_APP_API_PORT+
            '/getCalendar',
            {
            method: 'POST',
            headers: 
            { 
                'Content-Type': 'application/json', 
                'token': "Bearer "+Cookies.get("token")
            }
        })
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(res => {
            if(res[0].error != 404)
                setList(res)
            else {
                Cookies.remove("token");
                window.location.href = "/";
            } 
        })
        .catch((e)=> {
            console.log(e)
            Cookies.remove("token");
            window.location.href = "/";
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
                <Row style={{overflowY: "hidden"}} className="rbc-body" >
                    <Col xs="12">
                        <Card style={{height: "100%"}}>
                             <CardHeader>
                                 <label>
                                     Task list
                                 </label>
                             </CardHeader>
                             <CardBody style={{height: "100%"}}>
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