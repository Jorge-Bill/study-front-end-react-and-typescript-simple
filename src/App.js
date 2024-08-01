import 'h8k-components';
import React, { useEffect, useState } from 'react';
import './App.css';
import Articles from './components/Articles';
import { sortByDate, sortByUpvotes } from './utils';

const title = "Sorting Articles";

function App({articles}) {
    const [content, setOrderContent] = useState(articles)

    const orderByDate = () => {
        setOrderContent(articles.concat().sort(sortByDate))
    }

    const orderByUpvote = () => {
        setOrderContent(articles.concat().sort(sortByUpvotes))
    }

    useEffect(() => {
        orderByUpvote()
    
      return () => {
        setOrderContent(articles)
      }
    }, [])
    

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" onClick={orderByUpvote} className="small">Most Upvoted</button>
                <button data-testid="most-recent-link" onClick={orderByDate} className="small">Most Recent</button>
            </div>
            <Articles articles={content} />
        </div>
    );

}

export default App;
