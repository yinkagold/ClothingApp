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
	 
        'Birthday shirt',
          'Repping your Hero in Style',
          'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bday.jpg?alt=media&token=da2c598e-61e6-4e7a-ac2a-238d31bd9080',
          false,
          []
      ),
      new Collection(
        'Birthday shirt',
          'Rocking your first birthday in style',
          'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bdays5.jpg?alt=media&token=9ab7aa61-f6e8-4100-9af6-1b53d712dc4b',
          false,
          []
      ),

      new Collection(
        'Birthday shirt',
          'Fun to be One !',
          'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bday1.jpg?alt=media&token=5902407b-13eb-42fa-afeb-8fc076104f08',
          false,
          []
      ),
      new Collection(
        'Birthday shirt',
          'Feels good to be TWO!',
          'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bday13.jpg?alt=media&token=1b93b726-c5af-4713-83f5-a8e7f0e01749',
          false,
          []
      ),
    
      new Collection(
          'Birthday shirt',
            'Its my birthday yiiipy!',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bday22.jpg?alt=media&token=b5ad54fb-769c-407d-b499-f3dba72c78fe',
            false,
            []
        ),
        new Collection(
          'Birthday shirt',
            'Just cute at TWO',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bday3.jpg?alt=media&token=ff1ccef8-fb51-450e-8545-8a50bec66517',
            false,
            []
        ),

        new Collection(
          'Birthday shirt',
            'My birthday it is !',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bday5.jpg?alt=media&token=df73b987-7cdb-4a33-ab81-24caa3b7b1e1',
            false,
            []
        ),
        new Collection(
          'Birthday shirt',
            'One rocks for me !',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bday9.jpg?alt=media&token=4a773097-6ae5-4a87-a6d5-d49fe3addcd1',
            false,
            []
        ),
        new Collection(
          'Birthday shirt',
            'Sisters in the birthday mood',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/bdays4.jpg?alt=media&token=8368c9b3-6dc8-4b08-ba70-efc208a4486c',
            false,
            []
        ),
        new Collection(
          'Cap',
            'That special cap just as you want it',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/cap.jpg?alt=media&token=6b8a516d-cfba-42c6-b876-25e7d18e9b23',
            false,
            []
        ),
        new Collection(
          'Cap',
            'That special cap just as you want it',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/caps.jpg?alt=media&token=0fb533fc-36db-49e1-b8d7-b679db941d5a',
            false,
            []
        ),
        new Collection(
          'Cap',
            'Black and Red just rocks for us',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/caps1.jpg?alt=media&token=2dd042f3-4d66-4a81-b31a-cbd248c17c88',
            false,
            []
        ),
        new Collection(
          'Cap',
            'Your logo on it all',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/caps2.jpg?alt=media&token=85d21aec-eeea-4e34-b3a8-f894aee7c6cc',
            false,
            []
        ),
        new Collection(
          'Couples wear',
            'Step out in style with your lover',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/couple.jpg?alt=media&token=fd62a85c-9295-4f7a-bc4e-e45a0c0cffae',
            false,
            []
        ),
        new Collection(
          'Couples wear',
            'We design that love wear for you',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/couple2.jpg?alt=media&token=2a573d08-d92d-43b0-85f5-d4563e61fd65',
            false,
            []
        ),
        new Collection(
          'Couples wear',
            'We design that love wear for you',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/couple3.jpg?alt=media&token=05125a41-2636-499f-a3cc-81ee08d68073',
            false,
            []
        ),
        new Collection(
          'Hood',
            'conditioning your outfit to that weather',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/hoodie.jpg?alt=media&token=d9e99abc-2cd3-4948-9f94-38dc34b6cc96',
            false,
            []
        ),
        new Collection(
          'Hood',
            'Simple blue coloured hoodie',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/hoodie2.jpg?alt=media&token=a26e9538-d438-4b58-b980-f4b0e6ef0cc3',
            false,
            []
        ),
        new Collection(
          'Hood',
            'Two color hood',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/hoodie4.jpg?alt=media&token=803a23e3-1e76-4b38-894c-2fa692436388',
            false,
            []
        ),
        new Collection(
          'Hood',
            'Two color hood',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/sweatshirt3.jpg?alt=media&token=60773e29-bdf0-4a88-aae5-7e6f7e682621',
            false,
            []
        ),
        new Collection(
          'Love Tshirt',
            'Show what you love',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/love.jpg?alt=media&token=351f7eca-b1dc-4eff-95ef-ab4c8e10f0a8',
            false,
            []
        ),
        new Collection(
          'Love Tshirt',
            'When your tshirt speaks for itself',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/love2.jpg?alt=media&token=4fb70526-2d19-44e2-a606-883ff277f39e',
            false,
            []
        ),
        new Collection(
          'Love Tshirt',
            'All about valentine ',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/love3.jpg?alt=media&token=c0e76867-08a2-476f-a2f7-35e82a60eeff',
            false,
            []
        ),
        new Collection(
          'Love Tshirt',
            'Valentine request made easy',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/love4.jpg?alt=media&token=7bcecf40-da05-4479-867a-f5f8366a3a59',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo1.jpg?alt=media&token=4aa8399e-25b3-4792-9edb-37974ddf20cb',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo2.jpg?alt=media&token=e7a87ae9-bee1-47d2-83e9-da335dd2de2e',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo10.jpg?alt=media&token=2270a5d0-3561-4f40-a610-c6f0c176fc55',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo4.jpg?alt=media&token=6c3c0297-880e-40eb-a170-3be0a0221524',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo5.jpg?alt=media&token=4cedd341-cc5f-4168-9c1a-42cb686ba136',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo6.jpg?alt=media&token=e9dbecab-3caf-4d08-ada7-02be838c9752',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo7.jpg?alt=media&token=71b25ab7-b8c2-4018-9e3a-d1c12540796f',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo8.jpg?alt=media&token=7ae1a913-1ebe-47f1-b110-4a02507f6982',
            false,
            []
        ),
        new Collection(
          'Polo',
            'Simple pattern Polo',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/polo9.jpg?alt=media&token=fb5f139e-1fa4-44ef-b10c-f6b5cdb8cb76',
            false,
            []
        ),
        new Collection(
          'Shirt',
            'Our simple shirt design',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/shirt.jpg?alt=media&token=52156e5e-983e-4fad-912d-b15187aaad6d',
            false,
            []
        ),
        new Collection(
          'Shirt',
            'Our simple shirt design',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/shirts.jpg?alt=media&token=13586aad-182a-4490-90a8-13aa3e8f789c',
            false,
            []
        ),
        new Collection(
          'Sport',
            'Our sport wear rocks',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/sport1.jpg?alt=media&token=09591108-9515-47a8-afaf-539a5b81b207',
            false,
            []
        ),
        new Collection(
          'Sport',
            'Our sport wear rocks',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/sport12.jpg?alt=media&token=43b85ae0-4904-4377-832a-433ce90bda5f',
            false,
            []
        ),
        new Collection(
          'Sweatshirt',
            'Simple coloured sweatshirt',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/sweatshirt.jpg?alt=media&token=f4393b1c-c773-4aba-ab07-35f254361c77',
            false,
            []
        ),
        new Collection(
          'Sweatshirt',
            'Cute just like that for your kids',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/sweatshirt2.jpg?alt=media&token=31e11917-f4ae-465c-adef-860ba59587c3',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Your design on it just as you want it',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/plain17.jpg?alt=media&token=3d822aa4-18f3-4291-927c-1bc4f329fc8f',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Your design on it just as you want it',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/plain21.jpg?alt=media&token=d1319343-c24c-46c3-9d60-8c3e79b384fa',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Your design on it just as you want it',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/plain22.jpg?alt=media&token=b4d6ce5f-1e9b-4e98-a70d-0399188decf9',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Rcoking the wear just as she loves it',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/plain7.jpg?alt=media&token=c107d875-69f4-49d3-ad34-8482492ebec7',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Make your kids look awesome',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/tshirt.jpg?alt=media&token=436287d5-9ac0-4046-a5ae-155eacadbe93',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Make your own your own way',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/tshirt2.jpg?alt=media&token=16afe864-a4ac-4f02-b946-0c36df76c2fa',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Make your own your own way',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/tshirt3.jpg?alt=media&token=626eea8d-3783-42a7-be65-e2724d190929',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Something for that child you love',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/tshirt4.jpg?alt=media&token=e797a60d-0859-48d5-a9ec-142039caf8c5',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Display your hero !',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/tshirt5.jpg?alt=media&token=b990c955-4340-423f-a81b-e3687a1fff1c',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Display in collections',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/tshirts.jpg?alt=media&token=4895a84e-bd5a-458c-bb7a-76c2ffdfb6d6',
            false,
            []
        ),
        new Collection(
          'Tshirt',
            'Display in collections',
            'https://firebasestorage.googleapis.com/v0/b/shoppinglist-fe6ae.appspot.com/o/tshirtss.jpg?alt=media&token=317b81ea-79b7-4784-9946-72248826a810',
            false,
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
