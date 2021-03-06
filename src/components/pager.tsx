import React, { useEffect, useState } from "react";

interface Props {
  items: any;
  initialPage: number;
  pageSize: number;
  onChangePage: (item) => void;
}
interface IPager {
  totalPages?: number;
  startIndex?: number;
  endIndex?: number;
  currentPage?: number;
  pages?: any[];
}
export const Pagination = (props: Props) => {
  const { items, initialPage, pageSize, onChangePage } = props;
  const [state_pager, setPager] = useState<IPager>();
  useEffect(() => {
    setPage(initialPage);
  }, [items, items.length]);

  const getPager = (totalItems, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  const setPage = (page: number) => {
    var pager = state_pager;

    if (page < 1 || page > pager?.totalPages) {
      return;
    }
    // get new pager object for specified page
    pager = getPager(items.length, page, pageSize);
    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    // update state
    setPager(pager);
    // setState({ pager: pager });

    // call change page function in parent component
    onChangePage(pageOfItems);
  };
  if (!state_pager?.pages || state_pager?.pages.length <= 1) {
    // don't display pager if there is only 1 page
    return null;
  }
  return (
    <div className="flex flex-col justify-center items-center  w-[50px] mb-4">
      <div
        className="w-[30px] h-[30px] bg-slate-400"
        onClick={() => setPage(state_pager.currentPage - 1)}
      >
        {"<"}
        <i className="fa-solid fa-angle-left"></i>
      </div>

      <div
        className="w-[30px] h-[30px] bg-red-300" 
        onClick={() => setPage(state_pager.currentPage + 1)}
      >
        {">"}
        <i className="w-[30px] h-[30px] fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};
