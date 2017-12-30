import {StackNavigator} from 'react-navigation';
import AboutRoutes from './about.routes.js';
import HomePage from '../pages/Home.page';
import LoginPage from '../pages/Login.page';
import LoadingPage from '../pages/Loading.page';
import {translateHeaderText} from '../utils/language.utils';

const Router = StackNavigator({
    loading: {
        screen: LoadingPage,
        navigationOptions: {
            header: null
        }
    },
    login: {
        screen: LoginPage,
        navigationOptions: {
            header: null
        }
    },
    home: {
        screen: HomePage,
        navigationOptions: translateHeaderText('HOME_startTakingNotes')
    },
    about: {
        screen: AboutRoutes
    }
});

export default Router;
