var React = require('react');

var NavTabs = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <li className="active"><a href="#threefour" aria-controls="threefour" data-toggle="tab">3's/4's</a></li>
            <li><a href="#fivek" aria-controls="fivek" data-toggle="tab">5's/K's</a></li>
            <li><a href="#firstsecond" aria-controls="firstsecond" data-toggle="tab">1st/2nd</a></li>
            <li><a href="#thirdfourth" aria-controls="thirdfourth" data-toggle="tab">3rd/4th</a></li>
            <li><a href="#fifthsixth" aria-controls="fifthsixth" data-toggle="tab">5th/6th</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = NavTabs;
