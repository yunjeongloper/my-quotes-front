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
        <textarea className="letter-input" id="letter-write" />
        <div className="author-container">
          <span>From</span>
          <input
            type="text"
            className="author-input"
            placeholder="익명의 누군가"
          />
        </div>
        <div className="button-container">
          <button
          // onClick={() => history.push('/list')}
          >
            <span className="font-weight-bold">보내기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteModal;
