import React, {useEffect, useState} from 'react';
import './index.scss';

const WriteModal = ({isShow, object, closeFn}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={`write-modal ${isShow ? 'show' : ''}`}>
      <button className="close" onClick={() => closeFn()}>
        X
      </button>
      <div className="input-container">
        <textarea className="letter-input" />
      </div>
    </div>
  );
};

export default WriteModal;
