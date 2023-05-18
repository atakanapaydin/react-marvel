import React, {useState} from 'react';

//Router and Link
import {Route, Routes} from 'react-router-dom';

//Components
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Detail from './components/DetailPage/Detail';
import NotFound from './components/NotFoundPage/NotFound';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Cards loading={loading} setLoading={setLoading} />} />
          <Route path={`detail/:id`} exact={true} element={<Detail loading={loading} setLoading={setLoading} />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
