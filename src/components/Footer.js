const Footer = (props) => {
  return(
    <div className="col-12 mt-5">
      <div
        className="bg-light border d-flex justify-content-center m-auto rounded"
        style={{ maxWidth: "20rem" }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Footer;
