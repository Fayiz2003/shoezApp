import React from 'react';


const Parallax = () => {
  return (
   <>
  <div>
      <div className="bgimg-2">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: 'transparent',
              fontSize: '25px',
              color: '#828282',
            }}
          >
            <b className='textt fw-bolder'>SHOEZTORE</b>
          </span>
        </div>
      </div>

      {/* First bar section */}
      <div style={{ position: 'relative' }}>
        <div className="dbar ">
          <p><b>New Arrivals</b></p>
        </div>
      </div>

      <div className="bgimg-3">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: 'transparent',
              fontSize: '25px',
              color: '#c5e9b3',
            }}
          >
            <b className='textt fw-bolder'>EXPLORE!!</b>
          </span>
        </div>
      </div>

      {/* Second bar section */}
      <div style={{ position: 'relative' }}>
        <div className="dbar">
          <p><b>Limitted Offers</b></p>
        </div>
      </div>
    </div>
   </>
  );
};

export default Parallax;