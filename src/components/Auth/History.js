import React, { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";

import { getDatabase, ref, onValue } from "firebase/database";

export default function History() {
  const [FirebaseData, setFirebaseData] = useState();
  const { currentUser } = useAuth();
  const [totalamaount, setTotalAmount] = useState(0);

  function UserId(usermail) {
    const { currentUser } = useAuth();
    usermail = currentUser.email;
    return usermail.split(".")[0];
  }

  const db = getDatabase();
  var amount = 0;
  //
  const orders = ref(db, "order2/" + UserId(currentUser.email) + "/items");
  useEffect(() => {
    onValue(orders, (snapshot) => {
      const todos = snapshot.val();
      const todosList = [];
      for (let id in todos) {
        todosList.push(todos[id]);
        console.log(todos[id].price);
        amount += todos[id].price * todos[id].amount;
        setTotalAmount(amount.toFixed(2));
      }
      setFirebaseData(todosList);
    });
  }, []);

  return (
    <div>
      <h1>most recent purchase</h1>
      <ul>
        <div>
          {FirebaseData
            ? FirebaseData.map((item) => (
                <>
                  <li>
                    you purchesed {item.amount} meal of {item.name} for $
                    {item.price}{" "}
                  </li>
                </>
              ))
            : "nothing found"}
        </div>
        {totalamaount !== 0 ? (
          <h2 className="mt-1">for a total of: ${totalamaount}</h2>
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
}
