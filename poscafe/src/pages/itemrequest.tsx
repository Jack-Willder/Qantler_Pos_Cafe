import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { IconPosCafe } from "../icons";
import { FormAction } from "../App";


type datetype = {
  date: {
    date: string,
    day: string,
    time: string;
  };
}
export default function Inventory({date}:datetype) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();
  function handleChangeContent(path: string, item?: object) {
    navigate(path, { state: item });
  }  const {setFormAction} = useContext(FormAction);

    function* generatepages(totalpages: number, currentpage: number) {
      const maxpages = 5;
      let start = Math.max(1, currentpage - Math.floor(maxpages / 2));
      let end = Math.min(totalpages, start + maxpages - 1);
      if (end - start < maxpages - 1) {
        start = Math.max(1, end - maxpages + 1);
      }
      if (start > 1) {
        yield 1;
        if (start > 2) yield '...';
      }
      for (let i = start; i <= end; i++) {
        yield i;
      }
      if (end < totalpages) {
        if (end < totalpages - 1) yield '...';
        yield totalpages;
      }
    }

type Request = {
  requestid: string,
  subject: string,
  requestedby: string,
  requestdate: string,
  expectingdelivery: string,
  status: string
}


const requestlist: Request[] = [
];
  const [allRequest, setAllRequest] = useState<Request[]>(requestlist);
  const [request, setRequest] = useState<Request[]>(requestlist);

  useEffect(() => {
    const data = localStorage.getItem("requestlist");
    const requests = data ? JSON.parse(data) : requestlist;
    setAllRequest(requests);
    setRequest(requests);
  }, []);

  const totalPages = Math.ceil(request.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedRequest = request.slice(startIndex, endIndex);
  const pageNumbers = Array.from(generatepages(totalPages, currentPage));

  function handlePageChange(page: number | string) {
    if (typeof page === 'number') {
      setCurrentPage(page);
    }
  }
  function handlePreviousPage() { if (currentPage > 1) { setCurrentPage(currentPage - 1); } }
  function handleNextPage() { if (currentPage < totalPages) { setCurrentPage(currentPage + 1); } }
  function handleFirstPage() { setCurrentPage(1); }
  function handleLastPage() { setCurrentPage(totalPages); }

  const [filterData, setFilterData] = useState({
    requestid: "",
    subject: "",
    requestedby: "",
    status: "",
    dateFrom: "",
    dateTo: ""
  });

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function filter() {
    const filteredlist = allRequest.filter((item: Request) => {
      const itemDate = item.requestdate ? new Date(item.requestdate) : null;
      return (
        (!filterData.requestid || item.requestid === filterData.requestid) &&
        (!filterData.subject || item.subject.toLowerCase().includes(filterData.subject.toLowerCase())) &&
        (!filterData.requestedby || item.requestedby === filterData.requestedby) &&
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



  return (
    <div className="flex grow relative">
      <div className="flex flex-col gap-2 p-4 h-full w-full font-bold">
        <div className="flex">
          <div className="flex items-center justify-center gap-3">
            <IconPosCafe color="black" icon="menu" size={24} />
            <div className="text-md text-md">Item Request</div>
          </div>
          <div className="two p-0 grow flex justify-end">
            <div className="flex bg-white h-full w-max p-2 gap-2 rounded-sm items-center justify-center">
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="calendar" size={18} />
                <div className="">
                  <div className="flex flex-col ">
                    <span className="text-ss-50">{date.date}</span>
                    <span className="text-ss-40 text-gray-500">{date.day}</span>
                  </div>
                </div>
              </div>
              <div className="w-px h-full bg-gray-100 "></div>
              <div className="flex items-center justify-center gap-1">
                <IconPosCafe color="purple" icon="schedule" size={18} />
                <span className="text-ss-60">{date.time}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-2 justify-between gap-2">
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Request ID</div>
            <div className="flex items-center text-nowrap border rounded-sm justify-evenly p-2 grow w-full h-full border-gray-200">
              <select name="requestid" id="opg-select-category" className="opg-select w-full text-ss-50 lg:text-ss-55" value={filterData.requestid} onChange={handleFilterChange} required>
                <option value="">Select Request ID</option>
                {Array.from(new Set(Array.from(allRequest, item => item.requestid))).map((item, index) => (<option key={index} value={item}>{item}</option>))}
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
                {Array.from(new Set(Array.from(allRequest, item => item.requestedby))).map((item, index) => (<option key={index} value={item}>{item}</option>))}
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
          <table className="border-collapse w-full m-2.5 border border-gray-200 rounded-sm">
            <thead>
              <tr>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Request ID</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Subject</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Requested By</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Requested Date</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Expecting Delivery</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Status</th>
                <th className="bg-gray-100 p-2 text-ss-50 min-[780px]:text-ss-55 font-bold text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRequest.map((item, index) => (
                <tr className="border border-gray-100" key={index} onClick={() => { setFormAction("edit"), handleChangeContent("/requestitem", item) }}>
                  <td><div className="p-2 text-ss-50 text-center min-[780px]:text-ss-55">{item.requestid}</div></td>
                  <td><div className="p-2 text-left text-gray-500 text-ss-50 min-[780px]:text-ss-55">{item.subject}</div></td>
                  <td><div className="p-2 text-left  text-ss-50 min-[780px]:text-ss-55">{item.requestedby}</div></td>
                  <td><div className="p-2 text-left text-gray-500 text-ss-50 min-[780px]:text-ss-55">{item.requestdate}</div></td>
                  <td><div className="p-2 text-left  text-ss-50 min-[780px]:text-ss-55">{item.expectingdelivery}</div></td>
                  <td><div className={`p-1 px-2 text-left text-ss-50 min-[780px]:text-ss-55 ${(item.status == "Received") ? "text-green-500 bg-green-100" : (item.status == "Pending") ? "text-yellow-500 bg-yellow-100" : (item.status == "Canceled") ? "text-red-500 bg-red-100" : "text-blue-500 bg-blue-100"} rounded-sm flex items-center w-fit`}>{item.status}</div></td>
                  <td><div className="p-2 flex justify-center"><IconPosCafe icon="eye" color="purple" size={14}/></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="text-ss-55">show</div>
                <select id="entriescount" className="border border-gray-200 text-ss-65 p-1 rounded-sm mx-2" value={itemsPerPage} onChange={(e) => { setItemsPerPage(parseInt(e.target.value)); setCurrentPage(1); }}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <div className="text-ss-55">entries</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleFirstPage}><IconPosCafe icon="dleft" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handlePreviousPage}><IconPosCafe icon="left" color="black" size={12} /></div>
                {pageNumbers.map((page, index) => (
                  <div 
                    key={index} 
                    className={`p-2.5 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer ${
                      page === currentPage ? 'bg-gpurple text-white' : ''
                    } ${
                      page === '...' ? 'cursor-default' : ''
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </div>
                ))}
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleNextPage}><IconPosCafe icon="right" color="black" size={12} /></div>
                <div className="p-2 text-ss-65 border border-gray-200 rounded-sm aspect-square h-3/5 text-center flex items-center justify-center cursor-pointer" onClick={handleLastPage}><IconPosCafe icon="dright" color="black" size={12} /></div>
              </div>
            </div>
            <div className="align-tshow">
              <div className="flex items-center">
                <div className="text-ss-55">showing {startIndex + 1} to {Math.min(endIndex, request.length)} of {request.length} requests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}