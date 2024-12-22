import { Request, Response } from "express";
import { PricingFormData } from "../types";
import { calculateTotalFees } from "../utils/feeCalculators";

export const handlePricingCalculation = async (req: Request, res: Response) => {
  try {
    const product = req.body as PricingFormData;

    const calculatedFees = calculateTotalFees(product);
    console.log("calculatedFees", calculatedFees);

    res.status(200).send({ ...calculatedFees });
  } catch (error) {
    console.error("Error occurred while calculating fees", error);
    res.status(500).json({ error: (error as any).message });
  }
};

module.exports = { handlePricingCalculation };
