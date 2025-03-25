import { get } from "firebase/database";
import { plansRef, benefitsRef } from "./connection";

// returns data of plans from db
export async function getPlans() {
    return get(plansRef)
        .then((snapshot) => {
            return snapshot.val();
        }).catch((error) => {
            console.error(error);
        });
}

// returns data of benefits from db
export async function getBenefits() {
    return get(benefitsRef)
        .then((snapshot) => {
            return snapshot.val();
        }).catch((error) => {
            console.error(error);
        });
}