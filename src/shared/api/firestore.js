import { addDoc, serverTimestamp } from 'firebase/firestore';
import { colRef } from './firebaseApi';

// Дані, які ви хочете додати
const userData = {
    name: 'Ім\'я користувача',
    email: 'user@example.com',
    timestamp: serverTimestamp() // це додасть поточний час на сервері Firestore
};

// Додавання документу до колекції
addDoc(colRef, userData)
    .then((docRef) => {
        console.log('Документ успішно доданий з ID:', docRef.id);
    })
    .catch((error) => {
        console.error('Помилка при додаванні документу:', error);
    });


// Отримання документів з колекції
getDocs(colRef)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log('ID документу:', doc.id);
            console.log('Дані документу:', doc.data());
        });
    })
    .catch((error) => {
        console.error('Помилка при отриманні документів:', error);
    });


const docIdToDelete = 'ID_документу_для_видалення';

// Видалення документу з колекції за ID
deleteDoc(doc(colRef, docIdToDelete))
    .then(() => {
        console.log('Документ успішно видалений.');
    })
    .catch((error) => {
        console.error('Помилка при видаленні документу:', error);
    });
