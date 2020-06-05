import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import './List.scss';
import ListItem from './ListItem';
import QuotesBackround from './QuotesBackground';
import sampleQuotes from './sampleQuotes';
import DetailModal from '../Detail';
import WriteModal from '../Write';

const List = (props) => {
  const [isDetailShow, setIsDetailShow] = useState(false);
  const [isWriteShow, setIsWriteShow] = useState(false);
  const [modalObject, setModalObject] = useState({});

  useEffect(() => {}, []);

  const handleClickQuote = (item) => {
    setModalObject(item);
    setIsDetailShow(true);
  };

  const handleClickWrite = () => {
    setIsWriteShow(true);
  };

  const handleCloseDetail = () => {
    setIsDetailShow(false);
  };

  const handleCloseWrite = () => {
    setIsWriteShow(false);
  };

  return (
    <div className="list container">
      <QuotesBackround />
      <header>
        <span className="logo-text">ㄱㅡㄹ</span>
        <div className="write-button" onClick={handleClickWrite}>
          <span>ㅆㅡㅁ</span>
        </div>
      </header>
      <div className="main">
        <DetailModal
          isShow={isDetailShow}
          object={modalObject}
          closeFn={handleCloseDetail}
        />
        <WriteModal isShow={isWriteShow} closeFn={handleCloseWrite} />
        <div className="player-container">
          <audio className="audio-element" controls autoPlay loop>
            <source src="https://my-quotes-yjj.s3.ap-northeast-2.amazonaws.com/seemeagain.mp3" />
          </audio>
        </div>
        <div className="quotes-container">
          <div className="quotes">
            {sampleQuotes.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  key={index}
                  clickFn={handleClickQuote}
                  length={
                    item?.content?.length < 100
                      ? 'short'
                      : item?.content?.length < 300
                      ? 'medium'
                      : 'long'
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(List);
