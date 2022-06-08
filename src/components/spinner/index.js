import { useState } from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: 'absolute';
  left: 0;
  right: 0;
  bottom: 0;
  align-items: 'center';
  justify-content: 'center'

`;


const Spinner = ({ size }) => {
    const style = { position: 'fixed', top: '50%', left: "50%", transform: "translate(-50%, -50%)" };
let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#ffffff");
  return (
    <div style={style}>
        {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
        <PacmanLoader color={'blue'} loading={loading} css={override} size={25} style={{flex:1}} />

    </div>
  )
}

export default Spinner