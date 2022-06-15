import React, { useState } from "react";
import { Card, Col, Modal, ModalBody, Row, Table } from "reactstrap";
// import './student.css'
import edit from "../../images/edit.png";
import dlt from "../../images/delete.png";
import sum from "../../images/sum.png";
import view from "../../images/view.png";
import book from "../../images/book.png";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { Search } from "react-feather";

export default function Student() {
  
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };
  // const student = [
  //   {
  //     sn: "1",
  //     name: "Quavo Huncho",
  //     className: "JSS 1",
  //     subject: "Mathddnndn kk ",
  //     teacherName: "Future Hndrxx",
  //   },
  //   {
  //     sn: "2",
  //     name: "Quavo Huncho",
  //     className: "JSS 1",
  //     subject: "Math",
  //     teacherName: "Future Hndrxx",
  //   },
  //   {
  //     sn: "3",
  //     name: "Quavo Huncho",
  //     className: "JSS 1",
  //     subject: "Math",
  //     teacherName: "Future Hndrxx",
  //   }
  // ];

  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 2000);

    return (
      <span>
        <div style={{ position: "relative" }}>
          <Search
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              color: "grey",
            }}
          />
          <input
            className=""
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            placeholder={`search students`}
            type="search"
            style={{ paddingLeft: 45 }}
          />
        </div>
      </span>
    );
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "S/N",
        accessor: "col1",
      },
      {
        Header: "Student Name",
        accessor: "col2",
      },
      {
        Header: "Class",
        accessor: "col3",
      },
      {
        Header: "Subjects",
        accessor: "col4",
      },
      {
        Header: <p style={{ margin: 0, float: "right" }}>Action</p>,
        accessor: "col5",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        col1: "1",
        col2: "Adamu Abdullahi",
        col3: "JSS 1A",
        col4: (
          <img
            src={view}
            alt=""
            className="action-img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="view subjects/courses"
            onClick={toggle1}
          />
        ),
        col5: (
          <div style={{ float: "right" }}>
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="edit student"
              src={edit}
              alt="s"
              onClick={() => navigate("/edit-student")}
            />
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="delete student"
              src={dlt}
              alt="s"
              onClick={toggle}
            />
          </div>
        ),
      },
      {
        col1: "2",
        col2: "Aisha Hassan",
        col3: "JSS 1A",
        col4: (
          <img
            src={view}
            alt=""
            className="action-img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="view subjects/courses"
            onClick={toggle1}
          />
        ),
        col5: (
          <div style={{ float: "right" }}>
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="edit student"
              src={edit}
              alt="s"
              onClick={() => navigate("/edit-student")}
            />
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="delete student"
              src={dlt}
              alt="s"
              onClick={toggle}
            />
          </div>
        ),
      },
      {
        col1: "3",
        col2: "Bob Javobs",
        col3: "JSS 1A",
        col4: (
          <img
            src={view}
            alt=""
            className="action-img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="view subjects/courses"
            onClick={toggle1}
          />
        ),
        col5: (
          <div style={{ float: "right" }}>
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="edit student"
              src={edit}
              alt="s"
              onClick={() => navigate("/edit-student")}
            />
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="delete student"
              src={dlt}
              alt="s"
              onClick={toggle}
            />
          </div>
        ),
      },
      {
        col1: "4",
        col2: "Malam Malam",
        col3: "JSS 1A",
        col4: (
          <img
            src={view}
            alt=""
            className="action-img"
            data-toggle="tooltip"
            data-placement="bottom"
            title="view subjects/courses"
            onClick={toggle1}
          />
        ),
        col5: (
          <div style={{ float: "right" }}>
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="edit student"
              src={edit}
              alt="s"
              onClick={() => navigate("/edit-student")}
            />
            <img
              className="action-img"
              data-toggle="tooltip"
              data-placement="bottom"
              title="delete student"
              src={dlt}
              alt="s"
              onClick={toggle}
            />
          </div>
        ),
      },
    ],
    []
  );

  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        className="form-control"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  }
  const defaultColumn = React.useMemo(
    () => ({
      // Default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, data, defaultColumn }, useGlobalFilter);

  const handleDeleteModal = () => {
    toggle();
  };

  return (
    <div>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Card className="table-card shadow py-3 px-4 mt-3">
        <Row>
          <Col md={6}>
            <h3>Students</h3>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              <img
                className="action-img"
                data-toggle="tooltip"
                data-placement="bottom"
                title="add student"
                src={sum}
                alt="s"
                onClick={() => navigate("/create-student")}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <Table className="table" striped size="sm" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {/* <div className="mt-4">
          <Table size="sm" className="table" striped>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Student Name</th>
                <th>Class Name</th>
                {/* <th>Class Teacher Name</th> */}
        {/* <th>Subjects/Courses</th> */}
        {/* <th className="d-flex justify-content-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {student.map((item, index) => (
                <tr>
                  <th className="" scope="row">
                    {item.sn}
                  </th>
                  <td className="">{item.name}</td>
                  <td className="">{item.className}</td> */}
        {/* <td className=''>{item.teacherName}</td> */}
        {/* <td className="">
                    <img
                      src={view}
                      alt=""
                      className="action-img"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="view subjects/courses"
                      onClick={toggle1}
                    />
                  </td> */}
        {/* <td className=''>20</td> */}
        {/* <td className="d-flex justify-content-end">
                    <img
                      className="action-img"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="edit student"
                      src={edit}
                      alt="s"
                      onClick={() => navigate("/edit-student")}
                    />
                    <img
                      className="action-img"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="delete student"
                      src={dlt}
                      alt="s"
                      onClick={toggle}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table> */}
        {/* </div> */}
      </Card>
      <Modal isOpen={open} toggle={toggle} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={dlt} />
          <p className="dlt-warning">
            Are you sure you want to delete this Student?
          </p>
          <div>
            <p className="dlt-details">
              Student Name: <span>JSS One</span>
            </p>
            <p className="dlt-details">
              Class Name: <span>Quavo Hunchox</span>
            </p>
            <p className="dlt-details">
              Class Teacher Name: <span>30</span>
            </p>
          </div>
          <div className="dlt-modal-action-div">
            <button className="action-btn" onClick={toggle}>
              Cancel
            </button>
            <button
              className="action-cancel-btn"
              onClick={() => {
                toggle();
              }}
            >
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={open1} toggle={toggle1} className="dlt-modal">
        <ModalBody className="modal-body">
          <img src={book} alt="" />
          <p className="students">Subjects/Courses</p>
          <div>
            <p className="std-details">
              Student Name: <span>Quavo Huncho</span>
            </p>
            <br></br>
            <p className="dlt-details">Mathematics</p>
            <p className="dlt-details">English</p>
          </div>
          <div className="">
            <button className="action-btn" onClick={toggle1}>
              Close
            </button>
          </div>
        </ModalBody>
      </Modal>
     
    </div>
  );
}
