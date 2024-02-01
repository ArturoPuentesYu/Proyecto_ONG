import { Media, MediaContextProvider } from '../../media/breakpoints'
import {Movil} from './movil/movil_index'
import {Ordenador} from "./ordenador/tablet_ordenador_index";

export const Index = () => {
  return (
    <MediaContextProvider>
      <Media lessThan='md'>
        <Movil />
      </Media>
      <Media greaterThanOrEqual="md">
        <Ordenador />
      </Media>
    </MediaContextProvider>
  );
};