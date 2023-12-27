import React  from "react";
import { ColorRing } from 'react-loader-spinner'

const Loading = () => {
    return (
      <div className="row p-3">
        <div className="d-flex align-items-center justify-content-center" style={{top: '10rem'}}>
          <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#2f78d6', '#2f78d6', '#2f78d6', '#2f78d6', '#2f78d6']}
            /> 
        </div>
      </div>
     );
}
 
export default Loading;