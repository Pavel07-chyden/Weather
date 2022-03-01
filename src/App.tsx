import React, { FC } from 'react';
import { RootState } from './store'
import Alert from './store/components/Alert';
import './App.css';
import Search from './store/components/Search';
import Weather from './store/components/Weather';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';
import { useSelector, useDispatch } from 'react-redux';
//import { useSelector, useDispatch } from 'react-redux';



const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title='Enter city name and press seach button' />
      {loading ? <h2 className='is-size-3 py-2' >Loading...</h2> : weatherData && <Weather data={weatherData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
