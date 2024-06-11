import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  if (snapshot.empty) {
    return [];
  } else {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  }
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, `${collectionName}/${id}`));
  const data: any = snapshot.data();
  data.id = snapshot.id;
  return data;
}

export async function retrieveDataByField(
  collectionName: string,
  field: string,
  value: string
) {
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function addData(
  collectionName: string,
  data: any,
  callback: Function
) {
  await addDoc(collection(firestore, collectionName), data).then((res) => {
    callback(true, res.path.split("/")[1]);
  });
}

export async function updateData(
  collectionName: string,
  data: any,
  callback: Function
) {
  await updateDoc(doc(firestore, collectionName), data).then((res) => {
    callback(true);
  });
}

export async function addClass(
  collectionName: string,
  data: any,
  callback: Function
) {
  try {
    const res = await addDoc(collection(firestore, collectionName), data);
    const classId = res.path.split("/")[1];
    callback(true, classId);
  } catch (error) {
    console.error("Error adding class:", error);
    throw error;
  }
}

export async function getClass(userID: string) {
  try {
    let myClass: any = [];
    const userData: any = await retrieveDataByID("usersmafwork", userID);

    if (!userData.classJoined && !userData.classesOwned) {
      console.log("Class is not joined");
      return [];
    }

    if (userData.classJoined && userData.classesOwned) {
      myClass = new Set([...userData.classJoined, ...userData.classesOwned]);
    } else if (userData.classJoined) {
      myClass = userData.classJoined;
    } else if (userData.classesOwned) {
      myClass = userData.classesOwned;
    } else {
      return [];
    }

    const allClass: any = Array.from(myClass);

    const classPromises = allClass.map(async (docClass: string) => {
      const snapshot = await getDoc(doc(firestore, `classes/${docClass}`));
      const ownerClass = await retrieveDataByID(
        "usersmafwork",
        snapshot.data()?.owner
      );
      const allAssignment = await getAllDataByTypeByID(docClass, "assignments");
      const allLessons = await getAllDataByTypeByID(docClass, "lessons");
      const allPost = await getAllDataByTypeByID(docClass, "posts");

      return {
        teacher: ownerClass?.fullname,
        id: docClass,
        assignments: allAssignment,
        lessons: allLessons,
        posts: allPost,
        ...snapshot.data(),
      };
    });

    const resolvedClasses = await Promise.all(classPromises);
    return resolvedClasses;
  } catch (error) {
    console.error("Error getting classes:", error);
    throw error;
  }
}

export async function getClassByID(collectionName: string, classID: string) {
  const snapshot = await getDoc(doc(firestore, `${collectionName}/${classID}`));
  const data: any = snapshot.data();
  data.id = snapshot.id;
  const allAssignment = await getAllDataByTypeByID(classID, "assignments");
  const allLessons = await getAllDataByTypeByID(classID, "lessons");
  const allPost = await getAllDataByTypeByID(classID, "posts");
  return {
    assignments: allAssignment,
    lessons: allLessons,
    posts: allPost,
    ...data,
  };
}

export async function getAllDataByType(userID: string, dataType: string) {
  try {
    const getUser = await retrieveDataByID("usersmafwork", userID);

    if (!getUser.classJoined || getUser.classJoined.length === 0) {
      console.log("Class is not joined");
      return [];
    }

    const dataPromises = getUser.classJoined.map(async (docClass: string) => {
      const snapshotClass = await retrieveDataByID("classes", docClass);
      const ownerClass = await retrieveDataByID(
        "usersmafwork",
        snapshotClass.owner ?? ""
      );

      const snapshotData = await retrieveData(
        `classes/${docClass}/${dataType}`
      );

      return snapshotData.map((doc: any) => ({
        teacher: ownerClass?.fullname,
        classname: snapshotClass.name,
        id: doc.id,
        ...doc,
      }));
    });

    const resolvedData = await Promise.all(dataPromises);
    return resolvedData.flat();
  } catch (error) {
    console.error(`Error getting ${dataType}: `, error);
    throw error;
  }
}

export async function getAllDataByTypeByID(
  classType: string,
  dataType: string
) {
  try {
    const snapshotClass = await retrieveDataByID("classes", classType);
    const ownerClass = await retrieveDataByID(
      "usersmafwork",
      snapshotClass.owner ?? ""
    );

    const snapshotData = await retrieveData(`classes/${classType}/${dataType}`);

    if (snapshotData.length === 0) {
      return [];
    }

    const allData = snapshotData.map((doc: any) => ({
      teacher: ownerClass?.fullname,
      classname: snapshotClass.name,
      id: doc.id,
      ...doc,
    }));

    return allData;
  } catch (error) {
    console.error(`Error getting ${dataType}: `, error);
    throw error;
  }
}

export async function getAssignment(
  userID: string,
  classID: string,
  assignmentID: string
) {
  try {
    const assignments = await getAllDataByType(userID, "assignments");
    const assignment = assignments.find(
      (assign: any) => assign.id === assignmentID
    );

    if (!assignment) {
      throw new Error("Assignment not found");
    }

    return assignment;
  } catch (error) {
    console.error("Error getting assignment:", error);
    throw error;
  }
}
