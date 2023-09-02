declare module "firebase" {
  interface User {
    uid: string;
    email: string;
    password: string;
    displayName: string;
    currentuser: null;
    // Add other user properties here
  }
}

// firebase.d.ts

declare module '../utils/firebase' {
  import { FirebaseApp } from 'firebase/app';
  import { Firestore } from 'firebase/firestore';
  import { Auth } from 'firebase/auth';

  // Type declaration for the Firebase module
  export interface FirebaseModule {
    app: FirebaseApp;
    db: Firestore;
    auth: Auth;
  }

  // Export the FirebaseModule type
  const firebaseModule: FirebaseModule;
  export default firebaseModule;
}
