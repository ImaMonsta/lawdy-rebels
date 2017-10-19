import rebase from 're-base';
import firebase from 'firebase';

const base = rebase.createClass(firebase.database());

export default base;