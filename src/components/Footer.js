const Footer = (props) => {
  return(
    <div className="col-12 mt-5">
      <div className="align-items-center bg-light border d-flex flex-column justify-content-center p-5 rounded">
        {props.children}
      </div>
    </div>
  );
};
export default Footer;
