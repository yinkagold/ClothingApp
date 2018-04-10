import { Collection } from '../collection.model';
import { Design } from '../../shared/design.model';
import * as CollectionActions from './collection.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  collections: State
}

export interface State {
  collections: Collection[];
}

const initialState: State = {
  collections: [
    new Collection(
	 
        'T-Shirt',
          'Repping your Hero in Style',
          '/assets/images/tshirt5.jpg',
          []
      ),
    
      new Collection(
          'Polo',
            'Three color simple Polo',
            '/assets/images/polo1.jpg',
            []
        ),
        new Collection(
          'Polo',
            'Plain female Polo design',
            'https://tse3.mm.bing.net/th?id=OIP.rzNcNz_dlwJ1JlAvj6EJBAHaHa&pid=15.1&P=0&w=300&h=300',
            []
        ),

        new Collection(
          'Sweatshirt',
            'Coloured sleeve sweatshirt',
            '/assets/images/sweatshirt.jpg',
            []
        ),
        new Collection(
          'Birthday',
            'September 25 rocks with me',
            '/assets/images/bday.jpg',
            []
        ),
        new Collection(
          'Couples Wear',
            'Celebrate love in a grand style',
            '/assets/images/couple2.jpg',
            []
        ),
  
      ] 
    
};

export function collectionReducer(state = initialState, action: CollectionActions.CollectionActions) {
  switch (action.type) {
    case (CollectionActions.SET_COLLECTIONS):
      return {
        ...state,
        collections: [...action.payload]
      };
    case (CollectionActions.ADD_COLLECTION):
      return {
        ...state,
        collections: [...state.collections, action.payload]
      };
    case (CollectionActions.UPDATE_COLLECTION):
      const collection = state.collections[action.payload.index];
      const updatedCollection = {
        ...collection,
        ...action.payload.updatedCollection
      };
      const collections = [...state.collections];
      collections[action.payload.index] = updatedCollection;
      return {
        ...state,
        collections: collections
      };
    case (CollectionActions.DELETE_COLLECTION):
      const oldCollections = [...state.collections];
      oldCollections.splice(action.payload, 1);
      return {
        ...state,
        collections: oldCollections
      };
    default:
      return state;
  }
}
