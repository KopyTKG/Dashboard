import React, {useState} from "react";

import Task from "../components/Task";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

import TaskTable from "components/TaskTable";
import Cookies from "js-cookie";

function Todo(props) {
  
  const [list, setList] = useState(null);

  function GetList(type) { 
    fetch(
      process.env.REACT_APP_API_TYPE+
      process.env.REACT_APP_API_IP+':'+
      process.env.REACT_APP_API_PORT+
      '/getList', 
      {
      method: 'POST',
      headers: 
      {
         'Content-Type': 'application/json', 
         'token': "Bearer "+Cookies.get("token"),
         'type': type
        }
    })
    .then(res => {
      if(!res.ok) throw new Error(res.status);
      else return res.json();
    })
    .then(res => {
      if(res[0].error !== 404) {
        // console.log(res);
        setTimeout(() => 
        {
          setList(res);
        }, 500)
      }
      else {
        Cookies.remove("token");
        window.location.href = "/";
      } 
    })
    .catch((e) => {
      // console.log(e)
      Cookies.remove("token");
      window.location.href = "/";
    })
  };

  function OnCheck(id, status) {
    fetch('http://10.25.0.5:5454/updateTask', {
      method: 'POST',
      headers: 
      { 
        'Content-Type': 'application/json',
        'token': Cookies.get("token"),
        'type': "check",
        'id': id,
        'status': status
      }
    })
    .then(res => res.json())
    .then(res => {
        window.location.reload();
        // window.location.href = "/";
      })
  };

  return (
    list == null ? 
    <>
      {
        list == null ?
        GetList("null") :
        null
      }
      Loading page please wait.
    </>
    :
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
              <TaskTable
                title="Tasks"
                subtitle="Today"
                onShowAll={() => {GetList("all")}}
              >
                  {
                     list && list.map((data, index) => {
                         return(
                             <>
                                <Task 
                                    key={index + data["defaultValue"]}
                                    defaultChecked={data["defaultChecked"]}
                                    defaultValue={data["defaultValue"]}
                                    title={data["title"]}
                                    description={data["description"]}
                                    date={data["date"]}
                                    onCheck={() => {OnCheck(data["sql"], data["defaultChecked"])}}
                                    onEdit={()=> {alert(data["sql"])}}
                                />
                             </>
                         )
                     })
                  }
              </TaskTable>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Todo;
