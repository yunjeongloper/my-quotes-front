import React from 'react';
import {withRouter} from 'react-router';
import './List.scss';

const ListItem = ({item, length = 'long', clickFn}) => {
  return (
    <div className={`quote ${length}`} onClick={() => clickFn(item)}>
      <span>
        {length === 'long'
          ? `${item.content.substring(0, 270)} ...`
          : item.content}
      </span>
      <div className="author">{item?.author || '익명의 누군가'}</div>
    </div>
  );
};

export default withRouter(ListItem);
