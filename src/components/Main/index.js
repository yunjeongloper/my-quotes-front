import React from 'react';
import {quotes} from '../../quotes_background';
import {withRouter} from 'react-router';
import './Main.scss';

const Main = ({history}) => {
  return (
    <div className="main">
      <header>
        <title>내가 좋아하는 글귀</title>
      </header>
      <div className="quotes-background">{quotes}</div>
      <div className="letter">
        <header>
          <p className="p-1">
            <span className="font-3 font-italic font-white-back">좋아하는</span>
            <br />
            <span className="font-1">
              위로를
              <span className="font-italic">받는</span>
            </span>
            <br />
            <span className="font-2">응원이 되는</span>
            <br />
          </p>
          <p className="p-2">
            <span className="font-8 font-weight-600">
              <span className="font-black-back">글귀를</span>
            </span>
            <span className="font-5 font-italic">알려주세요</span>
          </p>
        </header>
        <div className="input-container">
          <textarea className="letter-input" />
        </div>
        <div className="button-container">
          <button onClick={() => history.push('/list')}>
            누군가에게 <sub>혹은</sub>{' '}
            <span className="font-italic">나에게</span>{' '}
            <span className="font-weight-bold">보내기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Main);
