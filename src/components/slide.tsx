import React, { useEffect, useState } from "react";
import { Pagination } from "./pager";
import { TImg, IInitialState } from "~/interfaces";
import { connect } from "react-redux";

const Slide = (props) => {
  const [isMobile, setIsMobile] = useState(false)
  // const { textContent } = props;
  // const { carousel } = textContent;
  useEffect(() => {
    if (screen.width < 800) setIsMobile(true)
  }, []);
  const [carousel, setCarousel] = useState([
    {
      src: "https://via.placeholder.com/380x480",
      alt: "Image 1 desktop alt",
    },
    {
      src: "https://via.placeholder.com/380x480",
      alt: "Image 2 desktop alt",
    },
    {
      src: "https://via.placeholder.com/380x480",
      alt: "Image 3 desktop alt",
    },
    {
      src: "https://via.placeholder.com/380x480",
      alt: "Image 4 desktop alt",
    },
    {
      src: "https://via.placeholder.com/380x480",
      alt: "Image 5 desktop alt",
    },
    {
      src: "https://via.placeholder.com/380x480",
      alt: "Image 6 desktop alt",
    },
  ]);

  const [pageOfItems, setPageOfItems] = useState<TImg[]>();

  const onChangePage = (pageOfItems) => {
    setPageOfItems(pageOfItems);
  };

  return (
    <div className="flex flex-row items-center">
      {pageOfItems?.length >= 1
        ? pageOfItems.map((order, index) => {
            return (

              <div className="mx-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
                <img alt={order.alt} src={order.src}></img>
              </div>
            );
          })
        : null}

      <Pagination
        // items={carousel.desktop}
        items={carousel}
        initialPage={1}
        pageSize={isMobile ? 1:3}
        onChangePage={onChangePage}
      />
    </div>
  );
};
const mapStateToProps = (state: IInitialState) => {
  return {
    language: state.language,
    textContent: state.textContent,
  };
};

export default connect(mapStateToProps)(Slide);
