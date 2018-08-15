import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import BoardList from '../components/BoardList';
import TrendingBoards from '../components/TrendingBoards';
import ActiveThreads from '../components/ActiveThreads';
import Footer from '../components/Footer';

class BoardsListPage extends Component {
  componentDidMount() {
    document.title = "Subscribe Boards | Elmer"
  }

  render() {
    return (
      <React.Fragment>
        <div className="container content_block">
          <div className="row">

            <div className="col-lg-8 col-md-8">
              <PageHeading text="Subscribe Boards" />
              <BoardList url="http://127.0.0.1:8000/api/frontboard/boards/" />
            </div>

            <div class="col-lg-4 col-md-4">
              <Link to="/new_post" className="btn btn-primary btn-block mt-4" role="button" title="Create new post" style={{fontWeight: 'bold', letterSpacing: '0.8px'}}>CREATE NEW POST</Link>
              <ActiveThreads />
              <TrendingBoards />
              <Footer />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BoardsListPage;