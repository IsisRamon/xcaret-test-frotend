import React, { useState } from "react";
import { Pagination } from "./pager";
import { ICarousel, TImg } from '~/interfaces'

export const Slide = (carousel) => {
  const [pageOfItems, setPageOfItems] = useState<TImg[]>();
  console.log("tamaño", carousel.desktop)

  const onChangePage=(pageOfItems)=>{
    setPageOfItems(pageOfItems)
  }
  return (
    <>
       { pageOfItems?.length >=1 ?
        pageOfItems.map((order, index) => {
          return (
            <div key={index}>
              <img alt={order.alt} src={order.src}></img>
            </div>
          );
        }):null
      }

      <Pagination
        items={carousel.desktop}
        initialPage={1}
        pageSize={5}
        onChangePage={onChangePage}
      />
    </>

  );
};
