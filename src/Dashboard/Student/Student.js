import React, { useState, useMemo } from "react";
import { Card, Col, Modal, ModalBody, Row, Table } from "reactstrap";
// import './student.css'
import edit from "../../images/edit.png";
import dlt from "../../images/delete.png";
import sum from "../../images/sum.png";
import view from "../../images/view.png";
import book from "../../images/book.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
} from "react-table";
import { Search } from "react-feather";

export default function Student() {
  const notify = () =>
    toast.error(`1 student(s) deleted`, {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };

  const [loading, setLoading] = useState(false)
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setLoading(true)
      setGlobalFilter(value || undefined);
      // setLoading(false);
    }, 2000)

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
            placeholder={`Search ${count} students`}
            type="search"
            style={{ paddingLeft: 45 }}
          />
        </div>
      </span>
    );
  }

  const columns = useMemo(
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

  const data = useMemo(
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
              onClick={() => {
                toggle();
              }}
            />
          </div>
        ),
      },
    ],
    []
  );

  function Tabular ({ columns, data, loading }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize}
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 2} }, useGlobalFilter, usePagination);

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
            { loading ? (
              <tbody>
                <tr>
                  <td style={{fontSize: 22}} colSpan="10000">Searching...</td>
                </tr>
              </tbody>
            ) : (  
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
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
             )
            } 
          </Table>
          <ul className="pagination">
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <span className="page-link" style={{color: 'black'}}>First</span>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <span className="page-link" style={{color: 'black'}}>{'<'}</span>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <span className="page-link" style={{color: 'black'}}>{'>'}</span>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <span className="page-link" style={{color: 'black'}}>Last</span>
                </li>
                <li>
                    <a className="page-link" style={{color: 'black'}}>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                <li>
                    <a className="page-link">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                            style={{ width: '100px', height: '20px' }}
                        />
                    </a>
                </li>{' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[1, 2, 5].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>
        </div>
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
                notify();
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
      {/* <button onClick={notify}>Fasdf</button> */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
 }

 return (
      <Tabular columns={columns} data={data} loading={loading} />
    )
}