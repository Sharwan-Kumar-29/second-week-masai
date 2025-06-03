function BottomMainRight({ name }) {
  return (
    <div >
      <h4 >Bottom Main Right Component</h4>
      <p >Hello, <span >{name||"guest"}</span>!</p>
    </div>
  );
}

export default BottomMainRight;