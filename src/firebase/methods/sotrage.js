import {
  getDownloadURL,
  getStorage,
  ref,
  deleteObject,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../index";
export let imgUrl = "";
export let urls = [];
export const uploadToStorage = (filePlace, file) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${filePlace}/${Date.now() + file.name}`);
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (err) => reject(error),
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          resolve(url);
        });
      }
    );
  });
};

export const uploadMultiToStorage = (filePlace, files) => {
  return new Promise((resolve, reject) => {
    files.map((file) => {
      const storageRef = ref(storage, `${filePlace}/${Date.now() + file.name}`);
      const uploadImage = uploadBytesResumable(storageRef, file);
      uploadImage.on(
        "state_changed",
        (snapshot) => {},
        (err) => reject(error),
        () => {
          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            urls.push(url);
            resolve(urls);
          });
        }
      );
    });
    urls = [];
  });
};

export const DeleteImgFromStorage = (photo) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, photo);
    deleteObject(storageRef)
      .then(() => {
        console.log("File deleted successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};
