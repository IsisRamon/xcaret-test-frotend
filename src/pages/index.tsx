import { connect } from "react-redux";
import { IInitialState } from "~/interfaces";
import HomeDesktop from "~/components/home";
const Home = (props) => {
  const { textContent } = props;
  const { navbar, legals, promotions, header } = textContent;
  if (navbar === undefined) {
    return <></>;
  } else {
    return <HomeDesktop />;
  }
};

const mapStateToProps = (state: IInitialState) => {
  return {
    language: state.language,
    textContent: state.textContent,
  };
};

export default connect(mapStateToProps)(Home);
