import stores from "../model/stores.js";

export default async function CronJob() {
  try {
    const updatePlan = await store.updateMany(
      { $and: [{ "plan.type": { $eq: "Free" } }, { "plan.days": { $gt: 0 } }] },
      { $inc: { "plan.days": -1 } }
    );
    console.log(updatePlan);
  } catch (err) {
    console.log(err)
  }
}

