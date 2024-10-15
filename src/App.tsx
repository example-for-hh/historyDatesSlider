import { FC } from 'react';
import GlobalStyles from './styles/globalStyles';
import Home from './components/Home';

const App: FC = () => {
    return (
        <>
            <GlobalStyles />
            <Home />
        </>
    );
};

export default App;
