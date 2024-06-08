import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
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

      return {
        teacher: ownerClass?.fullname,
        id: docClass,
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

export async function getAllAssignment(userID: string) {
  try {
    const getUser = await retrieveDataByID("usersmafwork", userID);

    if (!getUser.classJoined || getUser.classJoined.length === 0) {
      console.log("Class is not joined");
      return [];
    }

    const assignmentPromises = getUser.classJoined.map(
      async (docClass: string) => {
        const snapshotClass = await retrieveDataByID("classes", docClass);
        const ownerClass = await retrieveDataByID(
          "usersmafwork",
          snapshotClass.owner ?? ""
        );
        const snapshotAssignment = await retrieveData(
          `classes/${docClass}/assignment`
        );

        return snapshotAssignment.map((doc: any) => ({
          teacher: ownerClass?.fullname,
          classname: snapshotClass.name,
          id: doc.id,
          ...doc,
        }));
      }
    );

    const resolvedAssignments = await Promise.all(assignmentPromises);
    return resolvedAssignments.flat();
  } catch (error) {
    console.error("Error getting assignments:", error);
    throw error;
  }
}

export async function getAssignment(
  userID: string,
  classID: string,
  assignmentID: string
) {
  try {
    const assignments = await getAllAssignment(userID);
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
