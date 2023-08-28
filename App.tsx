import AppNavigation from './navigation/appNavigation';
import {PaperProvider} from 'react-native-paper';
import { theme } from './constants';


export default function App() {  
  return (
    <PaperProvider theme={theme}>
      <AppNavigation/>
    </PaperProvider>
  );
}

