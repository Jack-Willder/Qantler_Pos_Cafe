import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { IconPosCafe } from "../Helper/icons";
import { FormAction } from "../Context/Context";
import { Pagination } from "../Helper/Pagination";
import { getPaginatedItems } from "../Helper/PaginationUtils";
import type { Request } from "../Types/Types";
import { GetAllRequests } from "../api/api";
import TableComponent, { type Column } from "../shared/Table";


export default function Inventory() {
  const {setFormAction} = useContext(FormAction);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [allRequest, setAllRequest] = useState<Request[]>([]);
  const [request, setRequest] = useState<Request[]>([]);

  useEffect(() => {
    GetAllRequests()
    .then((response) => {
      setAllRequest(response);
      setRequest(response);
    })
    .catch();
  }, []);


  function handleChangeContent(path: string, item?: object) {
    navigate(path, { state: item });
  }

  const paginatedRequest = getPaginatedItems(request, currentPage, itemsPerPage);

  const [filterData, setFilterData] = useState({
    requestid: "",
    subject: "",
    requestedby: "",
    status: "",
    dateFrom: "",
    dateTo: ""
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function filter() {
    const filteredlist = allRequest.filter((item: Request) => {
      const itemDate = item.requestedDate ? new Date(item.requestedDate) : null;
      return (
        (!filterData.requestid || item.requestId === filterData.requestid) &&
        (!filterData.subject || item.subject.toLowerCase().includes(filterData.subject.toLowerCase())) &&
        (!filterData.requestedby || item.requestedBy === filterData.requestedby) &&
        (!filterData.status || item.status === filterData.status) &&
        (!filterData.dateFrom || !itemDate || itemDate >= new Date(filterData.dateFrom)) &&
        (!filterData.dateTo || !itemDate || itemDate <= new Date(filterData.dateTo))
      );
    });

    setRequest(filteredlist);
  }

  function reset() {
    setFilterData({
      requestid: "",
      subject: "",
      requestedby: "",
      status: "",
      dateFrom: "",
      dateTo: ""
    });
    setRequest(allRequest);
  }
  const columns: Column<Request>[] = [
    {
      header: "Request ID",
      key: "requestId",
      sortable: true,
      className: "text-center",
      render: (item) => <div className="p-1">{item.requestId}</div>,
    },
    {
      header: "Subject",
      key: "subject",
      sortable: true,
      className: "text-left text-gray-500",
      render: (item) => <div className="p-1">{item.subject}</div>,
    },
    {
      header: "Requested By",
      key: "requestedBy",
      sortable: true,
      className: "text-left",
      render: (item) => <div className="p-1">{item.requestedBy}</div>,
    },
    {
      header: "Requested Date",
      key: "requestedDate",
      sortable: true,
      className: "text-left text-gray-500",
      render: (item) => <div className="p-1">{item.requestedDate}</div>,
    },
    {
      header: "Expecting Delivery",
      key: "expectingDate",
      sortable: true,
      className: "text-left",
      render: (item) => <div className="p-1">{item.expectingDate}</div>,
    },
    {
      header: "Status",
      key: "status",
      sortable: true,
      className: "text-left",
      render: (item) => (
        <div className={`p-1 px-2 ${(item.status == "Received") ? "text-green-500 bg-green-100" : (item.status == "Pending") ? "text-yellow-500 bg-yellow-100" : (item.status == "Canceled") ? "text-red-500 bg-red-100" : "text-blue-500 bg-blue-100"} rounded-sm flex items-center w-fit`}>
          {item.status}
        </div>
      ),
    },
    {
      header: "Action",
      align: "center",
      render: () => (
        <div className="p-1 flex justify-center">
          <IconPosCafe icon="eye" color="purple" size={14} />
        </div>
      ),
    },
  ];

  return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-0 h-full w-full font-bold">
        <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-2 justify-between gap-2">
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Request ID</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="requestid" id="opg-select-category" className="opg-select w-full text-ss-50 lg:text-ss-55" value={filterData.requestid} onChange={handleFilterChange} required>
                <option value="">Select Request ID</option>
                {Array.from(new Set(Array.from(allRequest, item => item.requestId))).map((item, index) => (<option key={index} value={item}>{item}</option>))}
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Subject</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="subject" id="opg-select-items" className="opg-select w-full text-ss-50 lg:text-ss-55" value={filterData.subject} onChange={handleFilterChange}>
                <option value="">Enter Subject</option>
                {Array.from(new Set(Array.from(allRequest, item => item.subject))).map((item, index) => (<option key={index} value={item}>{item}</option>))}
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Requested By</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="requestedby" id="opg-select-status" className="opg-select w-full text-ss-50 lg:text-ss-55" value={filterData.requestedby} onChange={handleFilterChange}>
                <option value="">Select requested by</option>
                {Array.from(new Set(Array.from(allRequest, item => item.requestedBy))).map((item, index) => (<option key={index} value={item}>{item}</option>))}
              </select>
            </div>
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Status</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="status" id="opg-select-status" className="opg-select w-full text-ss-50 lg:text-ss-55" value={filterData.status} onChange={handleFilterChange}>
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="On the Way">On the Way</option>
                <option value="Received">Received</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500">Requested Date From</div>
            <input className="border border-gray-200 rounded-md p-2 w-full text-ss-50 lg:text-ss-55" type="date" id="opg-select-dfrom" name="dateFrom" value={filterData.dateFrom} onChange={handleFilterChange} placeholder="Select date"></input>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="text-ss-50 text-gray-500">Requested Date To</div>
            <input className="border border-gray-200 rounded-md p-2 w-full text-ss-50 lg:text-ss-55" type="date" id="opg-select-dto" name="dateTo" value={filterData.dateTo} onChange={handleFilterChange} placeholder="Select date"></input>
          </div>
          <div className="flex h-full items-end gap-2">
            <div className="bg-gpurple flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200" id="inventory-action-filter" onClick={() => { filter(); }}>
              <IconPosCafe color="white" icon="filter" />
              <span className="text-white">Filter</span>
            </div>
            <div className="flex p-4 rounded-md aspect-16/8 h-1/2 items-center justify-center border border-gray-200" id="inventory-action-reset" onClick={() => { reset(); }}>
              <IconPosCafe color="black" icon="reset" />
              <span className="text-black">Reset</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-3 overflow-hidden h-full flex-col">
          <div className="flex items-center justify-between w-full">
            <div className="align-ttitle">
              <div className="text-ss-70 font-bold">Item Request List</div>
              <div className="text-gray-500 text-ss-45 lg:text-ss-50">Total { request.length || 0 } items found</div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-3 bg-gpurple gap-2 text-white" id="additem" onClick={() => {
                  setFormAction("add");
                  handleChangeContent("/requestitem");
                  }}>
                  <IconPosCafe color="white" icon="plus" />
                  <span className="text-white">New Item Request</span>
                </div>
                <div className="flex items-center justify-center text-ss-55 rounded-sm p-1.5 px-5 border border-gray-200">
                  <IconPosCafe color="black" icon="book" />
                  <span className="text-black">Export to Excel</span>
                </div>
              </div>
            </div>
          </div>
          <TableComponent
            columns={columns}
            data={paginatedRequest}
            onRowClick={(item) => {
              setFormAction("edit");
              handleChangeContent("/requestitem", item);
            }}
            className="w-full mt-2.5"
          />
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={request.length}
            itemLabel="requests"
            setCurrentPage={setCurrentPage}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
      </div>
    </div>
  );
}
