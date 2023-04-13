import React from 'react'

import './withspiner.styles.scss'

const WithSpiner = WrappedComponent => {
    const Spiner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <div className='loadingDiv'>
                <div className='loading'></div>        
         </div>
        ): (
            <WrappedComponent {...otherProps} />
        );
    };
  return Spiner;
  };

export default WithSpiner