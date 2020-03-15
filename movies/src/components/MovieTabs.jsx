import React from 'react';

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = value => () => {
      updateSortBy(value);
    }

    const getClassLink = value => {
      return `nav-link ${sort_by === value ? "active" : ""}`
    }

    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item" style={{ cursor: "pointer" }}>
          <div className={getClassLink("popularity.desc")}
            onClick={handleClick("popularity.desc")}>
            Popularity
          </div>
        </li>
        <li className="nav-item" style={{ cursor: "pointer" }}>
          <div className={getClassLink("revenue.desc")}
            onClick={handleClick("revenue.desc")}>
            Revenue
          </div>
        </li>
        <li className="nav-item" style={{ cursor: "pointer" }}>
          <div className={getClassLink("vote_average.desc")}
            onClick={handleClick("vote_average.desc")}>
            Vote average
          </div>
        </li>
      </ul>
    )
  }
}

export default MovieTabs;