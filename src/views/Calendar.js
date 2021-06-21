import React from "react"
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


const Calendar = () => {
    const localizer = momentLocalizer(moment)
    const myEventsList = [
        {
            id: 0,
            title: "hey",
            start: new Date(2021, 6,15),
            end: new Date(2021, 6,19),
        }
    ]
    const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
        backgroundColor: 'lightblue',
        },
    })
    return(
        <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card>
                             <CardHeader>
                                 <labe>
                                     Task list
                                 </labe>
                             </CardHeader>
                             <CardBody style={{height: 810}}>
                                <C
                                events={myEventsList}
                                step={60}
                                showMultiDayTimes
                                defaultDate={new Date(2021,6,17)}
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